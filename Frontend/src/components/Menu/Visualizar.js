import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
//import axios from 'axios'
import { url_api } from '../api/Api';
//import Platos from './Platos';
import './Visualizacion.css';




const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([])

    console.log(id)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const result = await fetch(`${url_api}/platos/${id}`);
        const plato = await result.json();
               
        console.log(plato)
        setProduct(plato.plato)
    }

    //  const item = product.filter((element) => element.id == id);

    console.log (product)
    //  const [product, setProduct] = useState([])

    //  let { productId } = useParams()

    // useEffect(() => {
    //     const getProducts = async() => {
    //         const response = await fetch(`${url_api}/platos`)
    //         const data = await response.data

    //         let productSelected = data.find(product => product.id == productId)

    //         setProduct(productSelected)
    //     }

    //     getProducts()
    // }, [])
     
    return (
        <div>
            <h1 className='Titulo'>{product.title}</h1>
            <img src={product.img} className='Imagen' alt={product.title}></img>
            <h3 className='Desc'> {product.desc} </h3>
        
        </div>
    )

}


export default Product


 