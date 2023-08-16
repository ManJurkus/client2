import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404/Page404';
import { useEffect, useState } from 'react';
import { Feature } from './pages/Feature/Feature';

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
    
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={ <Home />} />
      ({dataFeature.map(dataObj => <Route key={dataObj.id} path={dataObj.pathName} element= {<Feature data={dataObj}/>} />) })
      {/* <Route path="/register" element={ <Register />} />
      <Route path="/login" element={ <Login /> } />
      <Route path="/content" element={ <Content /> } /> */}
      <Route path="*" element= { <Page404 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
