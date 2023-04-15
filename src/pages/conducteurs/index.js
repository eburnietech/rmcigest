import React, { useEffect, useState } from 'react'
import "./css/drivers_style.css"
import * as IoIcons from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore';
import {getDownloadURL, ref} from 'firebase/storage'
import { database, storage } from '../../components/firebase'
import { v4 } from "uuid";

export const ConducteurList = () => {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);
  const [pdfUrl, setPdfUrl]=useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [file, setFile] = useState("")

  useEffect(() => {

    const unsub = onSnapshot(collection(database, "conducteurs"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    },
    (error) => {
      console.log(error);
    });

    return () => {
      unsub();
    };

  }, []);

  const handleClick = event => {
    // 👇️ refers to the image element
    setFile(event.target.files[0]);
    console.log(file)
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
    console.log(file)
}


  return (
    <div className="page-wrapper">
    <div className="driverCardHeader">
      <h2>Liste des conducteurs</h2>
      <Link to="/conducteurs/create" className="btn">Ajouter Conducteur <ion-icon><IoIcons.IoAddCircle/></ion-icon></Link>
    </div>

    <div className="row doctor-grid">
      {Object.keys(data).map((id, index) => {
        return (
          <div className="driverProfileCard">
            <div className="driverProfileImg">
                <img alt="" onClick={handleClick} src={require("../../assets/imgs/doctor-03.jpg")} width="100%" title="Modifier la Photo" />
                <input type="file" onChange={handleChange} name="fileUp" class="hidden" accept="image/*"></input>
            </div>

            <div className="cnt">
              <div className="driverProfileCnt">
                <div className="driverProfileName">{data[id].noms}</div>
                <div className="driverProfileTxt">{data[id].phoneConducteur}</div>
                <i className="fas fa-thumbtack"><IoIcons.IoLocation /></i>
                <strong>{data[id].lieuHabitation}</strong>

                <div className="driverProfileCard-inf">
                  <div className="driverProfileItem">
                    <div className="driverProfileTitle">0</div>
                    <div className="driverProfileTxt">Voyage(s)</div>
                  </div>
                  
                  <div className="driverProfileItem">
                    <div className="driverProfileTitle">0/2</div>
                    <div className="driverProfileTxt">Manquement(s)</div>
                  </div>

                  <div className="driverProfileCard-social">
                    <Link to={`/conducteurs/contrat/${data[id].numPermis}`} title="Voir le contrat" className="facebook">
                     <i className="fab fa-facebook-f"><IoIcons.IoDocumentTextOutline /></i>
                    </Link>
                    
                    <Link to="" title="Voir le profile" className="twitter">
                     <i className="fab fa-twitter"><IoIcons.IoEyeOutline /></i>
                    </Link>
                    
                    <Link to="" title="Rapport de voyages" className="github">
                     <i className="fab fa-facebook-f"><IoIcons.IoListOutline /></i>
                    </Link>
                    
                    <Link to="" title="Supprimer le conducteur" className="instagram">
                     <i className="fab fa-facebook-f"><IoIcons.IoTrashOutline /></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  )
}
