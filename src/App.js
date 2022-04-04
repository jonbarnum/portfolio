import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './stylesheet.css'

function App(){
    return(
        <div className="appDiv">
            <Header />
            <Main />
            <Footer/>
        </div>
    )
}

export default App