function Header (props) {
    // console.warn('home',props.data)
    return ( 
        <div>
            <div className="add-to-cart">
                <img src='https://image3.mouthshut.com/images/imagesp/926084979s.png' alt='cart' />
            </div>
            
            <span className="cart-count">{props.data.length}</span>
        </div>
     );
}
 
export default Header;