import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const ProductDashComp = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8888/products").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((error) => { })
    }, []);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios.get("http://localhost:8888/products").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((error) => { })
    }

    const deleteProduct = (id) => {
        const result = window.confirm("Are you sure you want to proceed?");
        if (result) {
            axios.delete(`http://localhost:8888/products/${id}`).then(() => {
                window.alert("Data deleted successfully");
                fetchData();
            }).catch((error) => { });
        } else {
            window.alert("User clicked Cancel");
        }

        

    }

    return (
        <div>
            <h2> Kiruku punda deva company</h2>
            <Link to="/mainDashBoard/productadd"><button className='btn btn-danger btn-sm'>Product Add</button></Link>
            
            <table class="table table-info mt-3">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Company</th>
                        <th scope="col">Product Quantity</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {product.length > 0 && product.map((val, index) => {
                        return <tr>
                            <th scope="row">{index+1}</th>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.company}</td>
                            <td>{val.pquantity}</td>
                            <td><Link to={`/mainDashBoard/productedit/${val.id}`}><i class="bi bi-pencil-square text-primary" ></i></Link></td>
                            <td><i class="bi bi-trash-fill text-danger" onClick={() => { deleteProduct(val.id) }}></i></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ProductDashComp;
