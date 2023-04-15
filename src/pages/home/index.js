import React, { useEffect, useState } from 'react'
import "../../assets/css/home_style.css";
import { NavbarData } from './data/NavbarData';
import { Link, NavLink, Outlet } from 'react-router-dom';
import * as IoIcons from "react-icons/io5";
import { auth, database } from '../../components/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const LayoutScreen = ({children}) => {
  const [document , setDocument] = useState();
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [fonction , setFonction] = useState();
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  useEffect(() => {
    getUsersDocument();
    
  }, []);

  

  const getUsersDocument = async () => {
    setDocument([]);
    const docRef = doc(database, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setName(docSnap.data()["displayName"]);
      setEmail(docSnap.data()["email"]);
      setFonction(docSnap.data()["fonction"]);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div className="homeContainer">
      {/*<!-- =============== Navigation ================ -->*/}
      <div className={sidebar ? "homeNavigation active" : "homeNavigation"}>
        <ul className={sidebar ? "homeNavigation hover" : "homeNavigation"}>
          {NavbarData.map((item) => {
            return (
              <li key={item.id}
               onClick={() => setActive(item)}
               className={`${active === item && "hovered"}`}
              >
                <NavLink to={item.path}>
                  <span className="icon">
                    <ion-icon>{item.icon}</ion-icon>
                  </span>
                  <span className="titles">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      
      {/*<!-- =============== Main ================ -->*/}
      <div className={sidebar ? "homeMain active" : "homeMain"}>
        <div className="homeTopbar">
          <div className="homeToggle" onClick={() => setSidebar(!sidebar)}>
            <ion-icon><IoIcons.IoMenuOutline onClick={toggle} /></ion-icon>
          </div>

          <div className="search-wrapp">
            <label>
              <input type="search" placeholder="rechercher..." />
            </label>
          </div>
          
          <div id="dropdown-wrapp" className="user-wrapp">
          <img src={require("../../assets/imgs/customer01.jpg")} width="55px" height="55px" alt="" />
          <div>
            <h4>{name}</h4>
            <small>{fonction}</small>
          </div>
          <div className="dropdown-wrapp-content">
            <p>Profil</p>
            <p>Deconnexion</p>
          </div>
          </div>
        </div>

        <div className="cardBox-wrapp">
          <div className="card-wrapp">
            <div>
              <div className="numbers">0</div>
              <div className="cardName">Versements (F.CFA)</div>
            </div>

            <div className="iconBx">
              <IoIcons.IoCashOutline className="ion-icon" />
            </div>
          </div>
          
          <div className="card-wrapp">
            <div>
              <div className="numbers">0</div>
              <div className="cardName">Dépenses (F.CFA)</div>
            </div>

            <div className="iconBx">
              <IoIcons.IoCashOutline className="ion-icon" />
            </div>
          </div>
          
          <div className="card-wrapp">
            <div>
              <div className="numbers">0 taxi(s)</div>
              <div className="cardName">En Maintenance</div>
            </div>

            <div className="iconBx">
              <IoIcons.IoCarSportOutline className="ion-icon" />
            </div>
          </div>
          
          <div className="card-wrapp">
            <div>
              <div className="numbers">0</div>
              <div className="cardName">Notification(s)</div>
            </div>

            <div className="iconBx">
              <IoIcons.IoNotificationsOutline className="ion-icon" />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
