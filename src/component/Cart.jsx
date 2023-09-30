import React from 'react'
import Navbar from './Navbar'
import { Card,Button } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { remove } from './CartSlice'


const Cart = () => {
    const productscart = useSelector(state=>state.Cart)
    const dispatch = useDispatch()

    const removeCart = (id)=>{
      dispatch(remove(id))
    }
    

    const cards = productscart.map(product=>(
        <div className='col-md-3'>
           <Card style={{height:'300px', margin:"5px",width:"300px", textAlign:"center" }}>
            <div className='text center' style={{display:"flex", justifyContent:"center" }}>
            <Card.Img src={product.image} style={{width:'200px', height:'150px'}}></Card.Img>
            </div>
            <Card.Title>{product.title}</Card.Title>
            <footer>
            <Button onClick={()=>removeCart(product.id)}>Remove</Button>
           </footer>
           </Card>
             </div>
    ))
  return (
    <div>
      <Navbar/>
      <h1>Cart Page</h1>
      <div className='row'>{cards}</div>
    </div>
  )
}

export default Cart
