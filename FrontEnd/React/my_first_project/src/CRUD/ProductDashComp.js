import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Modal,Button} from 'react-bootstrap'

const ProductDashComp = () => {
    const [product, setProduct] = useState([]);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    setShow(true);
    setShow(val);
    
  };
    
  

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
            <h2> company</h2>
            <Link to="/mainDashBoard/productadd"><button className='btn btn-danger btn-sm'>Product Add</button></Link>
            
            <table class="table table-info mt-3">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Company</th>
                        <th scope="col">Product Quantity</th>
                        <th scope="col">Info</th>
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
                            <td>
                                <button type='button' onClick={()=>handleShow(val)}>
                            <VisibilityIcon></VisibilityIcon>
                                </button></td>
                            <td><Link to={`/mainDashBoard/productedit/${val.id}`}><i class="bi bi-pencil-square text-primary" ></i></Link></td>
                            <td><i class="bi bi-trash-fill text-danger" onClick={() => { deleteProduct(val.id) }}></i></td>
                        </tr>
                    })}

                </tbody>
            </table>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{show.pprice}</p>
          <p>{show.pquantity}</p>
          <p>{show.company}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ProductDashComp;
