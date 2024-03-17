// import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
 

const ProductList = () => {
    const [product, setProducts]=useState([]);

    useEffect(()=>{
        getProducts();
    }, [])

    const getProducts=async()=>{
        let result=await fetch('http://localhost:5000/products');
        result=await result.json();
        setProducts(result);
    }


    const deleteProduct=async(id)=>{
        let result=await fetch(`http://localhost:5000/product/${id}` ,{
            method: "Delete"
        })

        result=await result.json()
        if(result){
            getProducts();
            alert("record is deleted")
        }
    }


    const searchHandle= async (event) =>{
        let key= event.target.value;
        if(key){
            let result=await fetch(`http://localhost:5000/search/${key}`);
            result=await result.json();
            if(result){
                setProducts(result)
            }
            }
            else
            {
                getProducts();
            }
            
        }
    

  return (
    <div className='product-list'>
        <h3>Product list</h3>
        <input type='text' className='search-product-box' 
        onChange={searchHandle} placeholder='Search Product'/>
        <ul>
            <li>S. No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Operation</li>
        </ul>

        {
          product.length>0 ?  product.map((item, index)=>
        <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button  onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}>Update</Link>
            </li>
        </ul>
            )
            : <h1>No Result Found</h1>
        }
    </div>
  )
}

export default ProductList