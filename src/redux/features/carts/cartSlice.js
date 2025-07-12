import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        // Action to add a product to the cart
        addToCart: (state, action) => {
            // console.log(action.payload);
            const existingProduct = state.find((product) => product.productId === action.payload.id);
            if(existingProduct) {
                alert('Product already in cart');
            } else {
                state.push({
                    ...action.payload,
                    id: Date.now(),
                    quantity: 1, // Initialize quantity to 1 when adding a new product
                    productId: action.payload.id // Store the product ID for reference
                })
            }
        },
        // increase quantity
        increaseQuantity: (state, action) => {
            const product = state.find((product) => product.id === action.payload );
            if(product) {
                product.quantity ++;
            }
        },
        // decrease quantity
        decreaseQuantity: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            if(product && product.quantity > 1) {
                product.quantity --;
            }
        },
        // remove from cart
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;