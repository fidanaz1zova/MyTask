import { useEffect, useState } from "react"
import "./App.css"
import axios from 'axios';

const Table = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);

     useEffect (() => {
        axios("https://northwind.vercel.app/api/products").then((res) => {
        console.log(res.data);

        setData(res.data);
    });
}, [])


    return (
        <div className="tabledata">
          <h1 className="title" >TableData</h1>
          <div>
          <input className="inp1" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
          <input className="inp2" type="text" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
          <button className="addbtn" onClick={() => {
            const newData = { name: name, unitPrice: price}
            axios.post("https://northwind.vercel.app/api/products", newData).then((res) => {
              console.log(res.data);
          })
          }}>Add</button>
          </div>
          <div>
          <input className="searchinp" type="text" placeholder="Search.." />
          </div>
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UnitPrice</th>
                        <th>Delete</th>
                        <th>Edit</th>
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
                                    <button className="delbtn" onClick={() => {
                                      let arr = data.filter((item => item.id != val.id))
                                      axios.delete("https://northwind.vercel.app/api/products" + "/" + val.id)
                                      setData (arr)
                                    }}>Delete</button>
                                </td>
                                <td>
                                    <button className="editbtn" onClick={() => {
                                      let newName = prompt('${val.name} modified', val.name)
                                      axios.put(`https://northwind.vercel.app/api/products/${val.id}` , {name: newName})
                                      let newArr = data.map ((elem) => {
                                        if (elem.id == val.id) {
                                            elem.name = newName
                                        }
                                        return elem
                                      })
                                      setData (newArr)
                                    }}>Edit</button>
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
