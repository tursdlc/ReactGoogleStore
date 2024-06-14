
import Nav from "./components/Nav.jsx";
import "./App.css"
import Main from "./components/main-container.jsx";
import Description from "./components/Description.jsx";
import "./components/Nav.css"
import "./components/main-container.css"
import "./components/Description.css"


const App = () =>{
  return (
    <>
  <div className="Nav">
   <Nav></Nav>
   </div>
   <div className="Body">
    <Main></Main>
    <Description></Description>
   
   </div>
   <div className="Footer">

   </div>
    </>
  )

}

export default App;