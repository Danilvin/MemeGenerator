import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Homepage from "./pages/Home";
import EditPage from "./pages/Edit";

function App() {
  return (
    <BrowserRouter basename="/MemeGenerator/">
    <div className='App'>
      <h1 style={{marginLeft:"50px"}}>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/edit" element={<EditPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;