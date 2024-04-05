import React,{useState} from "react";
import { Link } from "react-router-dom";
import './registration.css'
import axios from "axios";

const Registration=()=>{
    const [activeOption, setActiveOption] = useState('login');
    const handleOptionToggle = (option) => {
      setActiveOption(option);
    };
    const [userInfo, setUserInfo] = useState({
      Name: "",
      Email: "",
      Password: "",
      Confirm_Password: ""
    });

    const handleInputChange = (field, value) => {
      setUserInfo({
        ...userInfo,
        [field]: value,
      });
    };


    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      console.log(userInfo); // Log form data
    
      // Send POST request to server
      axios.post('http://localhost:8000/registration', {
        Name: userInfo.Name,
        Email: userInfo.Email,
        Password: userInfo.Password,
        Confirm_Password: userInfo.Confirm_Password,
      })
      .then(result => { // Handle success response
        console.log('The data is:', result.data);
         window.location.reload();
        setRegistrationSuccess(true); // Set registration success state
        
      })
      .catch(err => { // Handle error response
        console.error(err); // Log error to console
        // Optionally, handle error state or display error message to user
      });
    };

    return ( <div className='register_box'>
    <div className="register_container">
    <form onSubmit={handleSubmit}>
  <h1 className="main-head">Register</h1>
  <span>Name:</span><input type="text" placeholder="enter name" value={userInfo.Name} onChange={(e) => handleInputChange('Name', e.target.value)} /> 
  <span>Email:</span><input type="email" placeholder="enter email" value={userInfo.Email} onChange={(e) => handleInputChange('Email', e.target.value)}  /> 
   <span>Password:</span><input type="password" placeholder="enter password"  value={userInfo.Password} onChange={(e) => handleInputChange('Password', e.target.value)}/> 
   <span>Confirm Password:</span><input type="password" placeholder="enter password" value={userInfo.Confirm_Passsword} onChange={(e) => handleInputChange('Confirm_Password', e.target.value)}/> 
   <button className="btn" type='submit'>Register</button>
   
   <div className='login_footer'>Already have an account?<strong > <Link to="/Login"> <li
          className={activeOption === 'register' ? 'active' : ''}
          onClick={() => setActiveOption('register')}
        >
          login
        </li></Link></strong></div>
        {registrationSuccess && (
            <p className='success_mesg'>Registration successful. Please login now!</p>
          )}
   </form>
</div>
</div>
    )
}

export default Registration