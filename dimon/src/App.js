import './App.css';
import Main from './component/Main'
import Login from './component/Login';
import Registration from './component/Registration';
import Chat from './component/Chat'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Chat' element={<Chat />} />
      </Routes>
    </Router>
  )
}
export default App;