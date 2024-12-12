import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchData } from './api/apiSlice'
import '../external/datalist.css'
const DataListComp = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.api.data);
    const status=useSelector((state)=>state.api.status);
    const error=useSelector((state)=>state.api.error);

    useEffect (()=>{
        dispatch(fetchData());
    },[])


    let content;

    if(status==="loading"){
        content=<div><span className='spinner-border'></span>loading...</div>
    }else if(status==="success"){
        content=<table className='table table-bordered'>
            <thead className='text'>
                <tr>
                    <th>
                        s.no
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Company
                    </th>
                    <th>
                        Quantity
                    </th>
                </tr>
            </thead>
            <tbody className='text'>
                {
                    data.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                {val.pname}
                            </td>
                            <td>
                                {val.pprice}
                            </td>
                            <td>
                                {val.company}
                            </td>
                            <td>
                                {val.pquantity}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    }
    return (
        <div>
            <h2>this is DataListComp</h2>
            {content}
        </div>
    )
}

export default DataListComp
