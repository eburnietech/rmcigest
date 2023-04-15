import React from 'react';
import * as IoIcons from "react-icons/io5";
import { PlanningScreen, VersementsList } from '../../versements';
import { DashboardScreen } from '../DashboardScreen';
import { ConducteurList } from '../../conducteurs';
import { ChargeFixeList } from '../../charges/fixes';
import { ChargeVariableList } from '../../charges/variables';
import { EntretienCuratifList } from '../../entretiens/curatifs';
import { EntretienPreventifList } from '../../entretiens/preventifs';
import { VehiculeList } from '../../vehicules';

export const NavbarData = [
  {
    id: 1,
    icon: "",
    label: "RMCI-GEST",
    path: "",
    content: ""
  },
    {
      id: 2,
      icon: <IoIcons.IoGridOutline className="ion-icon" />,
      label: "Tableau de Bord",
      path: "/",
      content: <DashboardScreen />
    },
    {
      id: 3,
      icon: <IoIcons.IoCashOutline className="ion-icon" />,
      label: "Versements",
      path: "/versements",
      content: <PlanningScreen />
    },
    {
      id: 4,
      icon: <IoIcons.IoCarSportOutline className="ion-icon" />,
      label: "Véhicules",
      path: "/vehicules",
      content: <VehiculeList />,
    },
    {
      id: 5,
      icon: <IoIcons.IoIdCardOutline className="ion-icon" />,
      label: "Conducteurs",
      path: "/conducteurs",
      content: <ConducteurList />,
    },
    {
      id: 6,
      icon: <IoIcons.IoBuildOutline className="ion-icon" />,
      label: "Entretien preventif",
      path: "/entretiens/preventifs",
      content: <EntretienPreventifList />,
    },
    {
      id: 7,
      icon: <IoIcons.IoSettingsOutline className="ion-icon" />,
      label: "Entretien curatif",
      path: "/entretiens/curatifs",
      content: <EntretienCuratifList />,
    },
    {
      id: 8,
      icon: <IoIcons.IoArchiveOutline className="ion-icon" />,
      label: "Charges fixes",
      path: "/charges/fixes",
      content: <ChargeFixeList />,
    },
    {
      id: 9,
      icon: <IoIcons.IoAlbumsOutline className="ion-icon" />,
      label: "Charges variables",
      path: "/charges/variables",
      content: <ChargeVariableList />,
    },
    {
      id: 10,
      icon: <IoIcons.IoNotificationsCircleOutline className="ion-icon" />,
      label: "Alertes",
      path: "/home",
      content: <DashboardScreen />,
    },
  ];