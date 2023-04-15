import React, { useState } from 'react'
import "../../components/formInput/FormInput.css"
import "../../components/formInput/auth_style.css"
import FormInput from "../../components/formInput/FormInput"
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthState } from '../../context'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth, database } from '../../components/firebase'
import { Button, Col, Row } from 'reactstrap'
import { doc, setDoc } from 'firebase/firestore'

export const RegisterScreen = () => {
    
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {setTimeActive} = useAuthState()
  
    const initialValues = {
      fullName: "",
      email: "",
      fonction: "",
      password: "",
      confirmPassword: "",
    }
    const [values, setValues] = useState(initialValues);
  
    const inputs = [
      {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Nom et Prenoms",
        errorMessage:
          "Le nom et prenom devraient être de minimum 3 caractères et ne devrait pas inclure de caractère spécial!",
        label: "Nom et Prenoms",
        pattern: "^[A-Z a-z0-9]{3,160}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Il devrait être une adresse e-mail valide!",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "fonction",
        type: "text",
        placeholder: "Fonction",
        errorMessage:
          "La fonction devrait être de minimum 3 caractères et ne devrait pas inclure de caractère spécial!",
        label: "Fonction",
        pattern: "^[A-Z a-z0-9]{3,100}$",
        required: true,
      },
      {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Mot de passe",
        errorMessage:
          "Le mot de passe doit compter de 8 à 20 caractères et comprendre au moins 1 lettre, 1 chiffre et 1 caractère spécial!",
        label: "Mot de passe",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirmer mot de passe",
        errorMessage: "Les mots de passe ne correspondent pas !",
        label: "Confirmer mot de passe",
        pattern: values.password,
        required: true,
      },
    ];
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      const data = new FormData(e.target);
  
      try {
        await createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            // Email verification sent!
            setTimeActive(true)
            navigate('/emailVerified')
            alert("Email de verification envoyé");
  
          }).catch((err) => alert(err.message))
  
          setDoc(doc(database, "users", auth.currentUser.uid), {
            displayName : data.get('fullName'),
            email: data.get('email'),
            fonction: data.get('fonction'),
            file : ""
          }).then(() => {
            // Data saved successfully!
          }).catch(err => setError(err.message))
  
        }).catch(err => setError(err.message));
  
      } catch (error) {
        setError(error.message);
      }
    }
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };


  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      <h1>Création de compte</h1>
      {inputs.map((input) => (
        <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange} 
        />
      ))}
      <div className="text-center">
        <button>
          Créer mon compte
        </button>
      </div>
      <p className="loginhere">
        Vous avez un compte ? <NavLink to="/login" className="loginhere-link">Connectez-Vous</NavLink>
      </p>
    </form>
    </div>
  )
}
