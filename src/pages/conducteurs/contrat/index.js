import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { database, storage } from '../../../components/firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

export const VoirContrat = () => {

    const [modal, setModal]=useState(false);
    const [resume, setResume]=useState(null);
    const [contrat, setContrat] = useState("");
    const params = useParams();
    const userID = params.userId;

    useEffect(() => {
        getUserInfos();

        getDownloadURL(ref(storage, `conducteurs/${userID}/contrats/${contrat}`)).then((url) => {
            setResume(url);
        })
    });

    const getUserInfos = async () => {
        const docRef = doc(database, "conducteurs", userID);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            setContrat(docSnap.data()["conducteurURL"]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }

  return (
    <div>
    </div>
  )
}
