import '../Login/Login.css'
import axios  from 'axios'
import { useState, useEffect } from 'react'


export function Login ({setPage}) {
const [login, setLogin] = useState({})

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
            setPage(true)
        }else{
            alert("email ou senha incorretos")
        }
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
                </form>                
                </div>
            </div>
        </div>
        </>
    )
}




