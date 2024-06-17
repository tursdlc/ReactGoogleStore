function Addtocart(){
    return (
        <>
        <div className="Addtocart">

            <div className="cartPrice">
            <p> 99,95€</p>  
            <hr class="line2"></hr>
            </div>

            <div className="Button">
                <select name="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                <button>Add To Cart</button>
            </div>
            <div class="truck">
                <img className ="truckIcon" src="./public/images/icons/Delivery.svg" />
                <p class="truckText">Delivers 29 Apr to <span class="postcode">08023</span></p>
            </div>
        </div>
        </>
    )
}



export default Addtocart
