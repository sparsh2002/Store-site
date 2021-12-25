import Header from '../component/Header'
import {connect} from 'react-redux'

const mapStateToProps = state =>({
    data:state.cartItems
})

const mapDispatchToProps = dispatch =>({
    
})

export default connect(mapStateToProps , mapDispatchToProps)(Header)

// export default Home;