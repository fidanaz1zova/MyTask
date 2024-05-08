import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "../context/productsContext";

const Home = () => {

  // const [title, setTitle] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [rate, setRate] = useState([]);
  // const [count, setCount] = useState([]);

  const { data, setData, sortdata, setSortData } = useContext(ProductsContext);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      console.log(res.data);

      setData(res.data);
      setSortData(res.data);
    });
  }, []);

  return (
    <div className="tabledata">
      <div>
        <input className="searchinp" type="text" placeholder="Search.." />
        {/* <button className="srcbtn">Search</button> */}
        <div className="sorters">
          <div className="sorter-1">
            <button
              className="azsorter"
              // onClick
              // {() => {
              //   let newArr = [...data].sort((a, b) =>
              //     a.title[0].localeCompare(b.title[0])
              //   );
              //   console.log(newArr);
              //   setSortData(newArr);
              // }} 
            >
              A-Z
            </button>
            <button
              className="zasorter"
              // onClick {() => {
              //   let newArr = [...data].sort((a, b) =>
              //     b.title[0].localeCompare(a.title[0]));
              //   console.log(newArr);
              //   setSortData(newArr);
              // }}
            >
              Z-A
            </button>
          </div>
          <div className="sorter-1">
            <button
              className="sorter"
              // onClick {() => {
              //     let newArr = [...data].sort((a, b) =>
              //       a.price-b.price);

              //     console.log(newArr);
              //     setSortData(newArr);
              //   }}
            >
              Price-Sorter (max-min)
            </button>
            <button className="sorter">Price-Sorter (min-max)</button>
          </div>
          <div className="sorter-1">
            <button className="sorter">Raiting-Sorter (max-min)</button>
            <button className="sorter">Raiting-Sorter (min-max)</button>
          </div>
          <div className="sorter-1">
            <button className="sorter">Count-Sorter (max-min)</button>
            <button className="sorter">Count-Sorter (min-max)</button>
          </div>
        </div>
      </div>

      <table className="table" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            {/* <th>Image</th> */}
            <th>Rate</th>
            <th>Count</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.price}</td>
                <td>{val.category}</td>
                {/* <td>{val.image}</td> */}
                <td>{val?.rating?.rate}</td>
                <td>{val?.rating?.count}</td>
                <td>
                  <button
                    className="delbtn"
                    onClick={() => {
                      let arr = data.filter((item) => item.id != val.id);
                      axios.delete(
                        "http://localhost:3000/products" + "/" + val.id
                      );
                      setData(arr);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="editbtn"
                    onClick={() => {
                      let newName = prompt("${val.title} modified", val.name);
                      axios.put(`http://localhost:3000/products/${val.id}`, {
                        name: newName,
                      });
                      let newArr = data.map((elem) => {
                        if (elem.id == val.id) {
                          elem.name = newName;
                        }
                        return elem;
                      });
                      setData(newArr);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
