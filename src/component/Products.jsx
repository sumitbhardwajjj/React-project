import React, { useEffect } from 'react'
import { Card,Button } from 'react-bootstrap'
import Navbar from './Navbar'
import {useDispatch} from 'react-redux'
import { add } from './CartSlice'
import { getproducts } from './ProductSlice'
import {useSelector} from 'react-redux'

const Products = () => {

  const {data:products} = useSelector(state=>state.Products)
    
    const dispatch = useDispatch()
    useEffect(()=>{

      dispatch(getproducts())
        //  fetch('https://fakestoreapi.com/products')
        //    .then(data => data.json())
        //    .then(result=>getproduct(result))
    })
const addtocart =(product)=>{
  dispatch(add(product))
}
    const cards = products.map(product=>(
      <div className='col-md-3'>
         <Card style={{height:'300px', margin:"5px",width:"300px", textAlign:"center" }}>
          <div className='text center' style={{display:"flex", justifyContent:"center" }}>
          <Card.Img src={product.image} style={{width:'200px', height:'150px'}}></Card.Img>
          </div>
          <Card.Title>{product.title}</Card.Title>
          <footer>
          <Button onClick={()=>addtocart(product)}>Add To Cart</Button>
         </footer>
         </Card>
           </div>
  ))
  return (
    <div>
      <Navbar/>
      <h1>Product Page</h1>
     <div className='row'>
     {cards}
     </div>
    </div>
  )
}

export default Products
