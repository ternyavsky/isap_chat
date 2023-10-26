import Header from '../component/Header';
import About from '../component/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Main() {
    return (
        <div>
            <Header />
            <About />
        </div>
    )
}

export default Main