import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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
            <h1 className=' mt-5 mb-4 Titulo'>{product.title}</h1>
            <img src={product.img} className='Imagen' alt={product.title}></img>
            <h3 className='Desc mt-5'> {product.desc} </h3>
            <h3 className='mt-5'>Precio ${product.price} </h3>
            <Button as={Link} to="/Menu" className="text-light bg-dark m-5 boton">Volver a menú</Button>
        </div>
    )

}


export default Product


 