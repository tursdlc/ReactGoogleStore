
import Nav from "./components/Nav.jsx";
import "./App.css"
import Main from "./components/main-container.jsx";
import Description from "./components/Description.jsx";
import "./components/Nav.css"
import "./components/main-container.css"
import "./components/Description.css"
import Footer from "./components/Footer.jsx";
import "./components/Nav.css"
import "./components/main-container.css"
import "./components/Description.css"
import "./components/Footer1.css"
import Addtocart from "./components/Addtocart.jsx";
import "./components/Addtocart.css";


const App = () =>{
  return (
    <>
  <div className="Nav">
   <Nav></Nav>
   </div>
   <div className="Body">
    <Main></Main>
    <Description></Description>

   <Addtocart></Addtocart>
   </div>
   <div className="Footer">
   <Footer></Footer>
  </div>
    </>
  )

}

export default App;