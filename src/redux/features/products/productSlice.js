import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'Casual White T-Shirt',
        price: 100,
        category: 'T-Shirts',
        image: 'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-10-01',
        description: 'A comfortable and stylish white t-shirt for everyday wear.',
    },
    {
        id: 2,
        name: 'Blue Denim Jacket',
        price: 150,
        category: 'Jackets',
        image: 'https://images.unsplash.com/photo-1636923611438-8fd1e53ed06c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-10-02',
        description: 'A classic blue denim jacket that adds a touch of style to any outfit.',
    },
    {
        id: 3,
        name: 'Black Leather Boots',
        price: 200,
        category: 'Footwear',
        image: 'https://images.unsplash.com/flagged/photo-1584862442072-9368b0d37e97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-10-03',
        description: 'Stylish black leather boots perfect for any occasion.',
    }
];

const productSlice = createSlice ( {
    name: 'products',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            console.log(action)
            state.push({
                id: state.length > 0 ? state[state.length - 1].id : 1,
                ...action.payload
            })
        }
    }
})

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;