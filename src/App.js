import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthContextProvider } from './context';
import { LoginScreen } from './pages/login';
import { RegisterScreen } from './pages/register';
import { VerificationEmail } from './pages/emailVerified';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';
import { LayoutScreen } from './pages/home';
import { DashboardScreen } from './pages/home/DashboardScreen';
import { ConducteurList } from './pages/conducteurs';
import { AddConducteur } from './pages/conducteurs/create';
import { DriverProfile } from './pages/conducteurs/profile';
import { VoirContrat } from './pages/conducteurs/contrat';
import { PlanningScreen } from './pages/versements';
import PrivateRoute from './pages/routes';
import { VehiculeList } from './pages/vehicules';
import { EntretienPreventifList } from './pages/entretiens/preventifs';
import { EntretienCuratifList } from './pages/entretiens/curatifs';
import { ChargeVariableList } from './pages/charges/variables';
import { ChargeFixeList } from './pages/charges/fixes';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth", user);
      setCurrentUser(user);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  

  return (
    <AuthContextProvider value={{ currentUser, timeActive, setTimeActive }}>
    <Routes>
      <Route exact path="/" element={
        <PrivateRoute>
          <LayoutScreen />
        </PrivateRoute>
      }>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/conducteurs" element={<ConducteurList />} />
        <Route path="/conducteurs/create" element={<AddConducteur />} />
        <Route path="/conducteurs/profile/:userId" element={<DriverProfile />} />
        <Route path="/conducteurs/contrat/:userId" element={<VoirContrat />} />
        <Route path="/versements/" element={<PlanningScreen />} />
        <Route path="/vehicules/" element={<VehiculeList />} />
        <Route path="/entretiens/preventifs/" element={<EntretienPreventifList />} />
        <Route path="/entretiens/curatifs/" element={<EntretienCuratifList />} />
        <Route path="/charges/fixes/" element={<ChargeFixeList />} />
        <Route path="/charges/variables/" element={<ChargeVariableList />} />
       </Route>
        <Route path="/register" element={
          !currentUser?.emailVerified
          ?<RegisterScreen />
          : <Navigate to='/' replace/>
        } />
        <Route path="/login" element={
          !currentUser?.emailVerified
          ?<LoginScreen />
          : <Navigate to='/' replace/>
        } />
        <Route path="/emailVerified" element={<VerificationEmail />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
