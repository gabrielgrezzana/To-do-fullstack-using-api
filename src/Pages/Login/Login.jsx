import '../Login/Login.css'
import axios  from 'axios'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'


export function Login ({setPage}) {
const [login, setLogin] = useState({})
const [modalregister, setModalregister] = useState(false)
const [registro, setRegistro] = useState({
    photo: "uma foto linda",
})
function Register () {
    setModalregister(!modalregister)
}

useEffect(() => {
    if(localStorage.getItem("userToken")){
        setPage(true)
    }
})
    
      
    async function getLogin(event) {
        event.preventDefault()
        localStorage.removeItem("userToken");
        const res = await axios.post('https://repository-management.herokuapp.com/auth/login',login)
        
        if(res.data.token){
            localStorage.setItem("userToken", res.data.token)
            console.log(res.data.token)
            setPage(true)
        }else{
            alert("email ou senha incorretos")
        }
    }
    

    async function postRegister(event) {
        //event.preventDefaul()
        const response = await axios.post('https://repository-management.herokuapp.com/user/create-user', registro)
    }

    return (
        <>
        <div className="BodyLogin">
            <div className='quadradoLogin'>            
                <div className='org'>        
                <form className='formLogin' onSubmit={getLogin}>
                <label>Login</label>
                    <label>Email:</label>
                    <input type="email" onChange={event => setLogin({
                        ...login,email: event.target.value
                    })} name="email" />
                    <label>Senha:</label>
                    <input type="password" name='password' onChange={event => setLogin({
                        ...login, password: event.target.value
                    })}/>
                    
                    <button className='buttonEntrar' type='submit'>Entrar!</button>
                    <button className='buttonEntrar' onClick={Register}>Registrar!</button>
                <Modal
                    className="Modal1"
                    isOpen={modalregister}
                    onRequestClose={Register}
                    >
                    <div>
                        <form className='formLogin' onSubmit={postRegister}>
                            <label>Register:</label>    
                            <label>Nome:</label>
                            <input type="text" onChange={event => setRegistro({
                                ...registro,name: event.target.value
                            })} name='name'></input>
                            <label>Email:</label>
                            <input type="email" onChange={event => setRegistro({
                                ...registro,email: event.target.value
                            })} name="email"></input>
                            <label>Password:</label>
                            <input type="password" onChange={event => setRegistro({
                                ...registro,password: event.target.value
                            })} name='password'></input>
                            <button className='buttonEntrar' type='submit'>Confirmar!</button>
                        </form>        
                    </div>
                </Modal>  
                </form>  
                           
                </div>
            </div>
        </div>
        </>
    )
}




