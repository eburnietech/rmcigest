import React, { useEffect, useState } from 'react'
import "../css/drivers_style.css"
import * as IoIcons from "react-icons/io5";
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../../components/firebase';
import { Link, useParams } from 'react-router-dom';

export const DriverProfile = () => {

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [lieuNaissance, setLieuNaissance] = useState("");
    const [phone, setPhone] = useState("");
    const [daterecrutement, setDateRecrutement] = useState("");
    const [numcni, setNumCNI] = useState("");
    const [datecni, setDateCNI] = useState("");
    const [numpermis, setNumPermis] = useState("");
    const [categoriepermis, setCategoriePermis] = useState("");
    const [datedelipermis, setDateDeliPermis] = useState("");
    const [dateexpermis, setDateExpPermis] = useState("");
    const [personneurgence, setPersonneUrgence] = useState("");
    const [contactperso, setContactPerso] = useState("");
    const [typecarte, setTypeCarte] = useState("");
    const [lieuHabitation, setLieuHabitation] = useState("");
    const [selectedImage, setSelectedImage] = useState();
  
    const params = useParams();
    const userID = params.userId;
    
   
      // This function will be triggered when the file field change
      const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
  
    //console.log(userID)
  
  
    useEffect(() => {
      getUserInfos();
    });
  
    const getUserInfos = async () => {
      const docRef = doc(database, "conducteurs", userID);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setName(docSnap.data()["noms"]);
        setGenre(docSnap.data()["genre"]);
        setDateNaissance(docSnap.data()["dateNaissance"]);
        setLieuNaissance(docSnap.data()["lieuNaissance"]);
        setPhone(docSnap.data()["phoneConducteur"]);
        setDateRecrutement(docSnap.data()["dateNaissance"]);
        setNumCNI(docSnap.data()["numCNI"]);
        setDateCNI(docSnap.data()["dateCNI"]);
        setNumPermis(docSnap.data()["numPermis"]);
        setCategoriePermis(docSnap.data()["categoriePermis"]);
        setDateDeliPermis(docSnap.data()["dateDelivrancePermis"]);
        setDateExpPermis(docSnap.data()["dateExpirationPermis"]);
        setPersonneUrgence(docSnap.data()["personneUrgence"]);
        setContactPerso(docSnap.data()["phonePersonneUrgence"]);
        setTypeCarte(docSnap.data()["typeCarte"]);
        setLieuHabitation(docSnap.data()["lieuHabitation"]);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

  return (
    <div className="main-wrapper">
        <div className="page-wrapper"></div>
    </div>
  )
}
