import * as z from "zod";

const plateNumberRegex = /^[A-Z]{2,3}[0-9]{2,3}[A-Z]{2,3}$/i;

// export const SettingsSchema = z
// 	.object({
// 		name: z.optional(z.string().min(3, { message: 'Enter valid name!' })),
// 		accountName: z.optional(
// 			z.string().min(6, { message: 'Enter valid account name!' })
// 		),
// 		accountNumber: z.optional(
// 			z.string().length(10, { message: 'Enter valid account number!' })
// 		),
// 		bankName: z.optional(
// 			z.string().min(6, { message: 'Enter valid bank name!' })
// 		),
// 		isTwoFactorEnabled: z.optional(z.boolean()),
// 		email: z.optional(z.string().email()),
// 		phone: z.optional(z.string().min(10).max(15)),
// 		password: z.optional(z.string().min(6)),
// 		newPassword: z.optional(z.string().min(6)),
// 	})
// 	.refine(
// 		(data) => {
// 			if (data.password && !data.newPassword) {
// 				return false;
// 			}

// 			return true;
// 		},
// 		{
// 			message: 'New password required',
// 			path: ['newPassword'],
// 		}
// 	)
// 	.refine(
// 		(data) => {
// 			if (data.newPassword && !data.password) {
// 				return false;
// 			}

// 			return true;
// 		},
// 		{
// 			message: 'Password is required',
// 			path: ['password'],
// 		}
// 	);
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
     code: z.string().length(6, {
          message: "Code must be 6 (six) characters",
     }),
});
export const AgentRegisterSchema = z.object({
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
