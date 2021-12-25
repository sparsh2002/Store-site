function Home (props) {
    // console.warn('home',props.data)
    return ( 
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="imag-wrapper item">
                    <img src="https://image3.mouthshut.com/images/imagesp/926121179s.png" alt='mobile' width={50} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                        onClick={()=>{
                            props.addToCartHandler({
                                price:1000,
                                name:'I phone'
                            })
                        }}
                    >Add To Cart</button>
                    <button  className="remove-cart-btn"
                        onClick={()=>{
                            props.removeFromCartHandler()
                        }}
                    >Remove from Cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;