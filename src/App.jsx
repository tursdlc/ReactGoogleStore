
import Nav from "./components/Nav.jsx";
import "./App.css"
import Main from "./components/main-container.jsx";
import "./components/Nav.css"
import "./components/main-container.css"



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

   </div>
    </>
  )

}

export default App;