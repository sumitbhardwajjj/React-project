import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data:[]
}

const Productslice = createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchproducts(state,action){
            state.data = action.payload
        }
      
    }
})

export const {fetchproducts} = Productslice.actions
export default Productslice.reducer

export function getproducts(){
    return async function getproductThunk(dispatch){
        const data =await fetch('https://fakestoreapi.com/products')
        const result = await data.json()
        dispatch(fetchproducts(result))
        
    }
}