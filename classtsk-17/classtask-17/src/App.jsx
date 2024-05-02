import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { productFormSchema } from "./schema/productFormSchema";

const Table = () => {
  const [data, setData] = useState([]);
  const [companyName, setCompanyName] = useState([]);
  const [contactName, setContactName] = useState([]);
  const [city, setCity] = useState([]);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      console.log(res.data);

      setData(res.data);
    });
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(productFormSchema),
  });

  return (
    <>
      <div className="inp">
        <form onSubmit={handleSubmit()}>
          <input
            type="text"
            placeholder="companyName"
            {...register("companyName")}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          {errors.companyName?.message && (
            <p style={{ color: "red" }}>{errors.companyName?.message}</p>
          )}

          <input
            type="text"
            placeholder="contactName"
            {...register("contactName")}
            onChange={(e) => setContactName(e.target.value)}
          />
          {errors.contactName?.message && (
            <p style={{ color: "red" }}>{errors.contactName?.message}</p>
          )}

          <input
            type="text"
            placeholder="city"
            {...register("city")}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city?.message && (
            <p style={{ color: "red" }}>{errors.city?.message}</p>
          )}

          <input
            type="text"
            placeholder="region"
            {...register("region")}
            onChange={(e) => setRegion(e.target.value)}
          />
          {errors.region?.message && (
            <p style={{ color: "red" }}>{errors.region?.message}</p>
          )}
          <button
            type="submit"
            className="submitbtn"
            onClick={() => {
              // console.log("fidan")
              const newData = {
                companyName: companyName,
                contactName: contactName,
                address: { city: city, region: region },
              };
              axios
                .post("https://northwind.vercel.app/api/suppliers", newData)
                .then((res) => {
                  console.log(res.data);
                });
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="tabledata">
        <table className="table" border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>CompanyName</th>
              <th>ContactName</th>
              <th>City</th>
              <th>Region</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.companyName}</td>
                  <td>{val.contactName}</td>
                  <td>{val?.address?.city}</td>
                  <td>{val?.address?.region}</td>
                  <td>
                    <button
                      className="delbtn"
                      onClick={() => {
                        let arr = data.filter((item) => item.id != val.id);
                        axios.delete(
                          "https://northwind.vercel.app/api/suppliers" +
                            "/" +
                            val.id
                        );
                        setData(arr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
