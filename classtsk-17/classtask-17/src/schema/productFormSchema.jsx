import * as yup from "yup";

export const productFormSchema = yup.object().shape({
  companyName: yup
    .string()
    .trim()
    .required("This field is required")
    .min(3, "name must be at least 4 characters long")
    .max(10, "name must exceed 6 characters"),
  contactName: yup
    .string()
    .trim()
    .required("This field is required")
    .matches(/^(?=.*[a-z])/, "It must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "It must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "It must contain at least one number character")
    .matches(/^(?=.*[!@#$%])/, "It must contain at least one special character")
    .min(3, "name must be at least 4 characters long")
    .max(10, "name must exceed 6 characters"),
  city: yup
    .string()
    .trim()
    .required("This field is required")
    .min(3, "name must be at least 4 characters long")
    .max(10, "name must exceed 6 characters"),
  region: yup
    .string()
    .required("This field is required")
    .min(3, "name must be at least 4 characters long")
    .max(10, "name must exceed 6 characters"),
});
