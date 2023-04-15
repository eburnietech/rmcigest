import React, { useState } from 'react'
import "../../components/formInput/FormInput.css"
import "../../components/formInput/auth_style.css"
import FormInput from "../../components/formInput/FormInput"
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthState } from '../../context'
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../components/firebase'
import { Col, Row } from 'reactstrap'

export const LoginScreen = () => {
  
  //const {setTimeActive} = useAuthValue()

  const initialValues = {
    email: "",
    password: "",
  }


  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate()
  const {setTimeActive} = useAuthState()

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Il devrait être une adresse e-mail valide!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      errorMessage:
        "Le mot de passe doit compter de 8 à 20 caractères et comprendre au moins 1 lettre, 1 chiffre et 1 caractère spécial!",
      label: "Mot de passe",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    console.log(data.get('email')); // Reference by form input's `name` tag

    try {
      await signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user.emailVerified) {
          sendEmailVerification(user.email)
          .then(() => {
            setTimeActive(true)
            navigate('/verify_email')
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
      
            alert(errorMessage);
          })
        } else {
          alert("Connecté avec succès");
          navigate("/");
        }
      });
    } catch (error) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
        alert('Votre email ou votre mot de passe était incorrect');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('Un compte avec cet email existe déjà');
      } else {
        alert('Il y a eu un problème avec votre demande');
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      <h1>Connexion à mon compte</h1>
      {inputs.map((input) => (
        <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange} 
        />
      ))}
      <Row className="my-4">
        <Col xs="12">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <p className="forgot-password text-right">
              <NavLink to="#">Mot de passe oublié ?</NavLink>
            </p>
          </div>
        </Col>
      </Row>
      <button>Se Connecter</button>
      <p className="loginhere">
        Vous n'avez pas de compte ? <NavLink to="/register" className="loginhere-link">Inscrivez-Vous</NavLink>
      </p>
    </form>
    </div>
  )
}
