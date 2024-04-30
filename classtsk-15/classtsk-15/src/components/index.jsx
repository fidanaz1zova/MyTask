import { useEffect, useState } from "react"
import "./App.css"
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

const Table = () => {
    const [data, setData] = useState([]);
    function del(e) {
        console.log(e.target)
    }

     useEffect (() => {
        axios("https://northwind.vercel.app/api/products").then(res) => {
            console.log(res.data);
            setData(res.data);
     }
    }
  []);
    

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>unitPrice</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.unitPrice}</td>
                                <td>
                                    <button onClick={del}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
 }
    export default Table;