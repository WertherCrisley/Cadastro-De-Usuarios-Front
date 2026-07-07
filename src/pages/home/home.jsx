import api from '../../service/api'
import { useEffect, useRef, useState } from 'react'
import './home.css'
import { Toast, ToastContainer } from 'react-bootstrap'

function Home() {
    const [users, setUsers] = useState([])
    const [toast, setToast] = useState({ show: false, mensagem: '', tipo: '' })

    function mostrarToast(mensagem, tipo) {
        setToast({ show: true, mensagem, tipo })
        setTimeout(() => {
            setToast({ show: false, mensagem: '', tipo: '' })
        }, 3500)
    }

    async function getUsers() {
        const UsersfromApi = await api.get('/users')
        setUsers(UsersfromApi.data)

    }

    useEffect(() => {
        getUsers()
    }, [])

    const inputNome = useRef()
    const inputIdade = useRef()
    const inputEmail = useRef()

    async function postUsers() {

        try {
            await api.post('/users', {
                email: inputEmail.current.value,
                name: inputNome.current.value,
                age: Number(inputIdade.current.value)
            })
            inputNome.current.value = ''
            inputIdade.current.value = ''
            inputEmail.current.value = ''
            mostrarToast('Usuário criado com sucesso!', 'success')
            getUsers()
        } catch (error) {
            mostrarToast('Este email já está cadastrado.', 'danger')
        }

    }


    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)
        mostrarToast('Usuário deletado com sucesso!', 'warning')
        getUsers()

    }



    return (
        <div id='body' className=" p-3 bg-primary-subtle text-primary-emphasis d-flex flex-column align-items-center">
            <div className="w-100 mx-auto p-4 text-center" style={{ maxWidth: '480px' }}>

                <h1 className="mb-4">Cadastro de Usuários</h1>

                <div className="d-flex flex-column gap-2 align-items-center">
                    <input className="form-control w-100" type="text" placeholder="Nome" name="nome" ref={inputNome}
                    />
                    <input className="form-control w-100" type="number" placeholder="Idade" name="idade" ref={inputIdade} />
                    <input className="form-control w-100" type="email" placeholder="Email" name="email" ref={inputEmail} />
                    <button className="btn btn-primary w-50 mt-2" type="button" onClick={postUsers} >
                        Cadastrar</button>
                </div>


            </div>

            <div className='containerLista'>
                {users.map((user) => {
                    const initials = user.name
                        ? user.name
                            .trim()
                            .split(' ')
                            .filter(n => n.length > 0)
                            .slice(0, 2)
                            .map(n => n[0].toUpperCase())
                            .join('')
                        : '?'



                    return (
                        <div key={user.id} className="card-user">
                            <div className="avatar">{initials}</div>
                            <div className="user-info">
                                <p className="user-name">{user.name}</p>
                                <p className="user-detail">
                                    <i className="ti ti-mail"></i> {user.email}
                                </p>
                            </div>
                            <span className="badge-age">{user.age} anos</span>
                            <button className="btn-del" onClick={() => deleteUsers(user.id)}>
                                <i className="ti ti-trash"></i><span>Deletar</span>
                            </button>

                        </div>

                    )
                })}
            </div>

            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
                <Toast show={toast.show} bg={toast.tipo}>
                    <Toast.Body className="text-white text-center fw-semibold">
                        {toast.mensagem}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <p>Criado por Werther Crisley</p>
        </div >
    )
}
export default Home