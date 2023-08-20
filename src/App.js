import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404/Page404';
import { useEffect, useState } from 'react';
import { Feature } from './pages/Feature/Feature';
import { Register } from './pages/register/Register';
import { Login } from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { UserLayout } from './layout/UserLayout';
import { UserContextProvider } from './context/UserContext';
import { Movies } from './pages/Movies/Movies';
import { AddMovie } from './pages/Movies/AddMovies';
import { UserContextValuesUpdate } from './context/UserContextValuesUpdate';

function App() {
  const [dataFeature, setDataFeature] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/datafeature', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      credentials: 'include',
      }).then(res => res.json())
      .then(fetchedData => {
        setDataFeature(fetchedData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <UserContextProvider>
      <UserContextValuesUpdate>
        
        <BrowserRouter>
          <Routes>
            <Route >
              <Route index path="/" element={ <Home />} />
              ({dataFeature.map(dataObj => <Route key={dataObj.id} path={dataObj.pathName} element= {<Feature data={dataObj}/>} />) })
              <Route path="/register" element={ <Register />} />
              <Route path="/login" element={ <Login /> } />
            </Route>


            <Route Component={UserLayout}>
              <Route path="/dashboard" element={ <Dashboard /> } />
              <Route path="/movies" element={ <Movies /> } />
              <Route path='/movies/add' element={<AddMovie />} />
            </Route>

            <Route >
              <Route path="*" element= { <Page404 />} />
            </Route>

            
          </Routes>
        </BrowserRouter>
    </UserContextValuesUpdate>
  </UserContextProvider>
  );
}

export default App;
