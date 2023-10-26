import './App.css';
import Main from './component/Main'
import Login from './component/Login';
import Registration from './component/Registration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </Router>
  )
}
export default App;