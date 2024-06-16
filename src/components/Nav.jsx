function Nav(){
    return (
        <>
        <div className="NavMenu">
        <div className="NavText">
        <img className="ImgGoogle" src="./public/images/google-logo.png"/>  
        <ul className="List">
        <li>Phones</li>
        <li>Earbuds</li>
        <li class="NavWatches">Watches</li>
        <li>Smart Home</li>
        <li>Accesories</li>
        </ul>  
        </div>
        
        <div className="NavIcon">
        
            <img className="Img" src="./public/images/icons/Search.svg"/> 
            <img className="Img" src="./public/images/icons/Help.svg"/>  
            <img className="Img" src="./public/images/icons/Cart.svg"/>
            <img className="Img" src="./public/images/icons/Avatar.svg"/>
        </div>
        </div>
        </>
    )
}



export default Nav