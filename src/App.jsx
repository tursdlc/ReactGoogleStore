
import Nav from "./components/Nav.jsx";
import "./App.css"
import Main from "./components/main-container.jsx";
import Footer from "./components/Footer.jsx";
import "./components/Nav.css"
import "./components/main-container.css"
import "./components/Footer1.css"


const App = () =>{
  return (
    <>
  <div className="Nav">
   <Nav></Nav>
   </div>
   <div className="body">
   <Main></Main>
   </div>
   <div className="Footer">
   <Footer></Footer>
  </div>
    </>
  )

}

export default App;