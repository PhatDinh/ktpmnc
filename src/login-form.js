
import { useState } from 'react'
import loginImg from './images/login.png'
import "./login-form.css"



const LoginForm = () => {


    const [formData,setformData] = useState({username:'',password:''});;



    //url de fetch
    const apiLogin='';
    const apiFetch='';


    //username : formData.username
    //passwrod : formData.password



    async function handleLogin() {

       //login
       let token= fetch(apiLogin,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'

        },
       }).then(data => data.json()).then(data => data);
       


       //fetch list actor
       fetch(apiFetch,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'

        },
       }).then(data => data.json()).then(data => console.log(data));

    }

    function handleChange(event){
       setformData((prev)=>{
        return {
            ...prev,
            [event.target.name] : [event.target.value]
        }
       }
       );
    }

    return (
        <div className="login-page">
            <img src={loginImg} width="300" alt='login-page' />
            <div className="login-container">
                <h1>LOGIN</h1>
                <div className='input-container'>
                    <i className="fa fa-user icon"></i>
                    <input type="text" placeholder="username" name='username' onChange={handleChange} />
                </div>

                <div className='input-container'>
                    <i className="fa fa-key icon"></i>
                    <input type="password" placeholder="password" name='password' onChange={handleChange} />
                </div>
                <button onClick={handleLogin} className="login-btn" >LOGIN</button>
            </div>
        </div>
       
    )
}

export default LoginForm;