import * as z from "zod";

export const NewPasswordSchema = z.object({
     password: z.string().min(6, {
          message: "Minimum six(6) characters required",
     }),
});
export const ResetSchema = z.object({
     email: z.string().email({
          message: "Email is required",
     }),
});
export const LoginSchema = z.object({
     email: z.string().email({
          message: "Email is required",
     }),
     password: z.string().min(1, {
          message: "Password is required",
     }),
     code: z.optional(z.string()),
});
export const RegisterSchema = z.object({
     email: z.string().email({
          message: "Email is required",
     }),
     password: z.string().min(6, {
          message: "Minimum six(6) characters required",
     }),
     name: z.string().min(1, {
          message: "Name is required",
     }),
     role: z.string().min(1, {
          message: "Role is required",
     }),
});
export const AdminRegisterSchema = z.object({
     firstName: z.string().min(1, {
          message: "First name is required",
     }),
     lastName: z.string().min(1, {
          message: "Last name is required",
     }),
     email: z.string().email({
          message: "Email is required",
     }),
     phonenumber: z
          .string({
               required_error: "Enter admin phone number.",
          })
          .regex(
               /^(0|\+?234)?[789][01]\d{8}$/,
               "Phone format (+2348012345678/08012345678)",
          ),
     password: z.string().min(6, {
          message: "Minimum six(6) characters required",
     }),
     confirmpassword: z.string().min(6, {
          message: "Minimum six(6) characters required",
     }),
     lga: z.string().min(1, {
          message: "LGA is required",
     }),
     nin: z.string().length(11, {
          message: "NIN must be 11 (eleven) characters",
     }),
     adminCode: z.string().length(6, {
          message: "Code must be 6 (six) characters",
     }),
});
export const AgentRegisterSchema = z.object({
     firstName: z.string().min(1, {
          message: "First name is required",
     }),
     lastName: z.string().min(1, {
          message: "Last name is required",
     }),
     email: z.string().email({
          message: "Email is required",
     }),
     phonenumber: z
          .string({
               required_error: "Enter agent phone number.",
          })
          .regex(
               /^(0|\+?234)?[789][01]\d{8}$/,
               "Phone format (+2348012345678/08012345678)",
          ),
     password: z.string().min(6, {
          message: "Minimum six(6) characters required",
     }),
     confirmpassword: z.string().min(6, {
          message: "Minimum six(6) characters required",
     }),
     lga: z.string().min(1, {
          message: "LGA is required",
     }),
     nin: z.string().length(11, {
          message: "NIN must be 11 (eleven) characters",
     }),
     location: z.string(),
});
export const updateAdminFormSchema = z.object({
     fullname: z.string().min(1, {
          message: "Name is required",
     }),
     email: z.string().email({
          message: "Email is required",
     }),
     phonenumber: z
          .string({
               required_error: "Enter admin phone number.",
          })
          .regex(
               /^(0|\+?234)?[789][01]\d{8}$/,
               "Phone format (+2348012345678/08012345678)",
          ),
     lga: z.string().min(1, {
          message: "LGA is required",
     }),
     nin: z.string().length(11, {
          message: "NIN must be 11 (eleven) characters",
     }),
});
export const createVehicleFormSchema = z.object({
     vendorId: z.string().optional(),
     make: z.string().min(1, "Make is required"),
     modelName: z.string().min(1, "Model name is required"),
     isDetachable: z.boolean(),
     firstName: z.string().min(1, "First name is required"),
     lastName: z.string().min(1, "Last name is required"),
     customerMobile: z.string().min(1, "Phone number is required"),
     number_of_tyres: z.string().min(1, "Number of tyres is required"),
     plateNumber: z
          .string()
          .regex(
               /[A-Z]{2,3}[0-9]{2,3}[A-Z]{2,3}/,
               "Invalid plate number format",
          ),
});

export const updateVehicleFormSchema = z.object({
     vendorId: z.string().optional(),
     make: z.string().optional(),
     modelName: z.string().optional(),
     isDetachable: z.boolean().optional(),
     firstName: z.string().optional(),
     lastName: z.string().optional(),
     customerMobile: z.string().optional(),
     number_of_tyres: z.string().optional(),
     plateNumber: z.string().optional(),
});
