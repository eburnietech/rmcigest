import React, { useEffect, useState } from 'react'
import "../../components/formInput/FormInput.css"
import "./style.css"
import { useAuthState } from '../../context';
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../components/firebase';

export const VerificationEmail = () => {

    const {currentUser} = useAuthState();
    const [time, setTime] = useState(60)
    const {timeActive, setTimeActive} = useAuthState()
    const navigate = useNavigate()
  
   useEffect(() => {
      const interval = setInterval(() => {
        currentUser.reload().then(() => {
          if (currentUser.emailVerified) {
            clearInterval(interval)
            navigate("/")
          }
        })
        .catch((err) => {
          alert(err.message)
        })
      }, 1000)
    }, [navigate, currentUser])
  
    useEffect(() => {
      let interval = null
      if (timeActive && time !== 0) {
        interval = setInterval(() => {
          setTime((time) => time - 1)
        }, 1000);
      } else if(time === 0) {
        setTimeActive(false)
        setTime(60)
        clearInterval(interval)
      }
      return () => clearInterval(interval);
    }, [timeActive, time, setTimeActive])
  
    const resendEmailVerification = () => {
      sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true)
      }).catch((err) => {
        alert(err.message)
      })
    }

  return (
    <div className="containerVerifyEmail">
    <div className='verifyEmail'>
      <h1>Vérifier votre adresse Email</h1>
      <p>
        <strong>Un lien de vérification a été envoyé </strong><br/>
        <span>{currentUser?.email}</span>
      </p>
      <p>Veuillez cliquer sur ce lien pour activer votre compte.</p>       
      <button 
        onClick={resendEmailVerification}
        disabled={timeActive}
      >Renvoyer l'e-mail {timeActive && time}</button>
    </div>
    </div>
  )
}
