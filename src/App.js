// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import InfoPage from './components/InfoPage/InfoPage';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/infoPage" element={<InfoPage/>}/>
        </Routes>
  );
}

export default App;
