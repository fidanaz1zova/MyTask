import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productFormSchema } from "./schema/productFormSchema";
import "./App.css";

const Register = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios("http://localhost:3000/users");
    setUsers(res?.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(productFormSchema),
  });

  const createItem = async (values) => {
    await axios.post("http://localhost:3000/users", values);
  };

  return (
    <div className="validation">
      <h1 className="reg">Register</h1>
      <form onSubmit={handleSubmit(createItem)}>
        <input type="text" {...register("username")} placeholder="username" />
        {errors.username?.message && (
          <p style={{ color: "red" }}>{errors.username?.message}</p>
        )}

        <input type="text" {...register("password")} placeholder="password" />
        {errors.password?.message && (
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        )}

        <button className="subbtn" onClick={console.log("lol")} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
