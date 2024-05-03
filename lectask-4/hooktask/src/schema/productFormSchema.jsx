import * as yup from "yup";

export const productFormSchema = yup.object().shape({
  username: yup.string().trim().required("Name is required").min(3, 'name must be at least 4 characters long').max(7, 'name must exceed 6 characters'),
  password: yup
  .string()
  .required("Password is required")
  .matches(/^(?=.*[0-9])/, "It must contain at least one number character")


  // unitPrice: yup.number().positive().required(),
  // unitsOnOrder: yup.number().positive().required(),
  // supplierId: yup.string().required(),
});