import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
    cartData :[]
}

export default function cartItems(state=[] , action){
    switch (action.type) {
        case ADD_TO_CART:
            return[ 
                ...state,
                {cartData:action.data}
            ]

        case REMOVE_FROM_CART:
            state.pop();
            return[ 
                ...state,
            ]
    
        default:
            return state
            
    }
}