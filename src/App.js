import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404/Page404';
import { dataFeature } from './data/dataFeature';
import { Feature } from './pages/Feature/Feature';

function App() {
  console.log(dataFeature);

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
