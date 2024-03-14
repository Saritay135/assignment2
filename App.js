import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

const AppLayout = () => {
    return(
      <div className="bgImage">
      
      <Header />
      <Footer />
      
      </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);