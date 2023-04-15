import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { database, storage } from '../../../components/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import "../css/drivers_style.css"

export const AddConducteur = () => {

    const [formData, setFormData] = useState({
      name: "", genre: "", dateNaissance: "", lieuNaissance: "", phone: "", daterecrutement: "", numcni: "", datecni: "", numpermis: "", categoriepermis: "", datedelipermis: "", dateexpermis: "", personneurgence: "", contactperso: "", typecarte: "", lieuHabitation: ""
    });
    const [formError, setFormError] = useState({});
    const [photoUrl, setPhotoUrl] = useState(null);
    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState("");
    
    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
  
    const onChangeHandler = (event) => {
  
      console.log(event);
      
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      
    }
  
    const validateForm = () => {
      let err = {}
      let regex = /^[0-9]{10}$/
  
      if (formData.name === '') {
        alert("Veuillez entrer un nom et prenom")
      } else if (formData.name.length <= 3) {
        alert("Le nom doit comporter au moins 3 lettres")
      }
      
      if (formData.genre === '') {
        alert("Veuillez choisir un genre!");
      }
  
      if (formData.dateNaissance === '') {
        alert("Veuillez entrer une date de naissance!");
      } 
  
      if (formData.lieuNaissance === '') {
        alert("Veuillez entrer un lieu de naissance");
      } else if (formData.lieuNaissance.length <= 5) {
        alert("Le lieu de naissance doit comporter au moins 5 lettres");
      }
  
      if (formData.phone === '') {
        alert("Veuillez entre un numéro de téléphone!")
      } else if (!regex.test(formData.phone)) {
        alert("La numérotation est de dix chiffres")
      }
  
      if (formData.daterecrutement === '') {
        alert("Veuillez entrer une date de recrutement!")
      }
  
      if (formData.typecarte === '') {
        alert("Veuillez selectionner le type de carte!")
      }
  
      if (formData.numcni === '') {
        alert("Veuillez entrer un numéro de carte!");
      }
  
      if (formData.datecni === '') {
        alert("Veuillez entrer la date d'expiration!");
      }
  
      if (formData.numpermis === '') {
        alert("Veuillez entrer un numéro de carte!");
      }
      
      if (formData.categoriepermis === '') {
        alert("Veuillez choisir une catégorie!")
      }
  
      if (formData.datedelipermis === '') {
        alert("Veuillez entrer la date de délivrance du permis!");
      }
  
      if (formData.dateexpermis === '') {
        alert("Veuillez entrer la date d'expiration du permis!");
      }
  
      if (formData.lieuHabitation === '') {
        alert("Veuillez entrer un lieu d'habitation du conducteur");
      } else if (formData.lieuHabitation.length <= 3) {
        alert("Le lieu d'habitation doit comporter au moins 3 lettres");
      }
  
      if (formData.personneurgence === '') {
        alert("Veuillez entrer un nom et prenom du contact en urgence");
      } else if (formData.personneurgence.length <= 3) {
        alert("Le nom doit comporter au moins 3 lettres");
      }
  
      if (formData.contactperso === '') {
        alert("Veuillez entre un numéro de téléphone!");
      } else if (!regex.test(formData.contactperso)) {
        alert("La numérotation est de dix chiffres");
      }
  
      setFormError({ ...err })
  
      console.log(Object.keys(err).length < 1);
  
      return Object.keys(err).length < 1;
    }
   
    
  
      const navigate= useNavigate();
  
      
  
      const handlesubmit = async (e)=>{
        e.preventDefault()
        //const file = e.target[0]?.files[0]
  
        console.log("Form Data:", formData)
        let isValid = validateForm();
  
        if (!file) {
          alert("Veuillez télécharger le contrat du consucteur");
        }
  
  
  
        if (isValid) {
            const docRef = doc(database, "conducteurs", formData.numpermis);
            const docSnap = await getDoc(docRef);
  
  
            const pdfRef = ref(storage, `conducteurs/${formData.numpermis}/contrats/${file.name}`);  
            const uploadTask = uploadBytesResumable(pdfRef, file)
  
            if (docSnap.exists()) {
              alert("Le conducteur détenteur de ce permis est déjà enregistré");
            } else {
              // doc.data() will be undefined in this case
              uploadTask.on("state_changed",
              (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred /snapshot.totalBytes) * 100);
                setPercent(percent);
              }, 
              (error) => {
                alert(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                  console.log(url)
                  await setDoc(doc(database, "conducteurs", formData.numpermis), {
                    noms : formData.name,
                    genre: formData.genre,
                    dateNaissance: formData.dateNaissance,
                    lieuNaissance : formData.lieuNaissance,
                    phoneConducteur: formData.phone,
                    dateRecrutement: formData.daterecrutement,
                    typeCarte : formData.typecarte,
                    numCNI: formData.numcni,
                    dateCNI: formData.datecni,
                    numPermis : formData.numpermis,
                    categoriePermis: formData.categoriepermis,
                    dateDelivrancePermis: formData.datedelipermis,
                    dateExpirationPermis : formData.dateexpermis,
                    lieuHabitation : formData.lieuHabitation,
                    personneUrgence: formData.personneurgence,
                    phonePersonneUrgence: formData.contactperso,
                    conducteurURL: `${file.name}`,
                  }).catch((err) => {
                    alert(err);
                  });
                });
                navigate("/conducteurs");
              }
              );
            }
          
        } else {
          alert('Veuillez remplir tous les champs')
        }
        console.log(isValid)
      }

  return (
    <div className="page-wrapper">
        <div className="driverCardHeader">
           <h2>Ajouter un conducteur</h2>
        </div>
        <form>
            <div className="form-style">
                <div className="type-1">
                    <input className="" />
                    <input className="" />
                </div>
            </div>
        </form>
    </div>
  )
}
