import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';





const ProductEditComp = () => {
    const {id}=useParams();
    const nav=useNavigate();
    
    const [product,setProduct]=useState({
        id:"",
        pname:"",
        pprice:"",
        company:"",
        pquantity:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{});
    },[]);
    


    const inputChangeHandler=(event)=>{
        const {type,name,value}=event.target;
        setProduct({...product,[name]:value});
    }

    const addProduct=(event)=>{
        event.preventDefault();

        axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
            window.alert("Product added successsfuly");
            nav('/mainDashBoard/productdash');
        }).catch((error)=>{})
    }

    return (
        <div>
            <h2>Product edit Component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form className='form' onSubmit={()=>addProduct()}>
                        <label for="name">Enter Product Name: </label>
                        <input type="text" className='form-control m-3' onChange={inputChangeHandler} value={product.pname} name="pname" ></input>
                        <label for="price">Enter Product Price: </label>
                        <input className='form-control m-3' name="pprice" onChange={inputChangeHandler} value={product.pprice}></input>
                        <label for="company">Enter Company Name: </label>
                        <input className='form-control m-3' name="company" value={product.company} onChange={inputChangeHandler}></input>
                        <label for="quantity">Enter Product Quantity: </label>
                        <input className='form-control m-3' name="pquantity" value={product.pquantity}onChange={inputChangeHandler}></input>
                        <button type="submit" className='btn btn-info m-3' onClick={addProduct}>Add Product</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>

    )
}

export default ProductEditComp;
