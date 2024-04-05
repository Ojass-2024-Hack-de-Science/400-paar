import React,{useState} from "react"
import { Link } from "react-router-dom"
import './login.css'
// import google from '../../../public/google.png'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login=()=>{
    const Navigate=useNavigate();
    const [activeOption, setActiveOption] = useState('login');
    const handleOptionToggle = (option) => {
      setActiveOption(option);
    };

    const [userInfo,setUserInfo]=useState({
      Email:"",
       Password:"",
    })
    const handleInputChange = (field, value) => {
      setUserInfo({
        ...userInfo,
        [field]: value,
      });
    };
    const handleSubmit =(e)=>{
      e.preventDefault();
      axios.post('http://localhost:8000/login', {
        Email: userInfo.Email,
        Password: userInfo.Password,
          
      })
      .then(result => {
        localStorage.setItem('token',result.data.token);
        Navigate('/app')
        window.location.reload();
        console.log('The data is:', result.data);
        console.log('login successful...')
      })
      .catch(err => {
        console.error(err);
      });
    
    }

    const loginwithgoogle=()=>{
       window.open("http://localhost:8000/auth/google/callback","_self")
    }


    return ( <div className='login_box'>
    <div className="login_container">
    <form onSubmit={handleSubmit}>
  <h1 className="main-head font-roboto">Login</h1>

  <span>Email:</span><input type="email" placeholder="enter email"  value={userInfo.Email} onChange={(e) => handleInputChange('Email', e.target.value)} /> 
   <span>Password:</span><input type="password" placeholder="enter password"  value={userInfo.Password} onChange={(e) => handleInputChange('Password', e.target.value)}/> 
   <button className="btn" type='submit'>Login</button>
   <div className='google_login' onClick={loginwithgoogle}>
    <img className="g-img" src="./google.png" alt='google'></img>
    <span className='g-text'>Login with Google</span>
   </div>
   <div className='login_footer'>Don't have an account?<strong > <Link to="/Registration"> <li
          className={activeOption === 'register' ? 'active' : ''}
          onClick={() => setActiveOption('register')}
        >
          Register
        </li></Link></strong></div>
   </form>
</div>
</div>
    )
}

export default Login