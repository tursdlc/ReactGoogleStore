
import Nav from "./components/Nav.jsx";
import "./App.css"
import Main from "./components/main-container.jsx";
import Addtocart from "./components/Addtocart.jsx";
import "./components/Nav.css"
import "./components/main-container.css"
import "./components/Addtocart.css"





const App = () =>{
  return (
    <>
  <div className="Nav">
<Nav></Nav>
</div>
<div className="body">
<Main></Main>
<Addtocart></Addtocart>
</div>
<div className="Footer">

</div>
    </>
  )

}

export default App;