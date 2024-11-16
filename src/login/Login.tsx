import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import smileCircle from '../assets/smileCircle.png';
import smileFace from '../assets/smileFace.png';


function Login() {
  const { name, setName, setShowName } = useContext(LoginContext);

  const handleChance = (e) => {
    const value = e.target.value;
    setName(value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();  // Forhindrer sideopdatering
    if (name) {
      setShowName(true); // Sætter showName til true, hvis setName har en værdi
    }
  }

  return (
    <>
      <div className='logo'>
        <img src={smileCircle} alt="Smile" className='smileCircle' /> 
        <img src={smileFace} alt="Smile" className='smileFace' />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Navn' onChange={handleChance} />
        <button type='submit' className={`${!name ? "disabled" : ""}`}>Login</button>

        {/* {`buttonBottom ${!selectedCharacter ? "disabled" : ""}`}  */}
      </form> 
    </>
  )
}

export default Login;