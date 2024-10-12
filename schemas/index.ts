import * as z from "zod";

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
     name: z.string({ required_error: "Name is required" }).min(1),
     platenumber: z
          .string({
               required_error: "Enter your plate number.",
          })
          .min(5, {
               message: "Plate numbers have at least five(5) characters.",
          }),
     nin: z.string({ required_error: "NIN is required" }).length(11),
     driversname: z.string({ required_error: "Name is required" }).min(1),
     phonenumber: z
          .string({
               required_error: "Enter owner phone number.",
          })
          .regex(
               /^(0|\+?234)?[789][01]\d{8}$/,
               "Phone format (+2348012345678/08012345678)",
          ),
     category: z.string({
          required_error: "Please enter a valid Category.",
     }),
     fee: z.string(),
     detachable: z.optional(z.boolean()),

     // vehicle_type: z
     //      .string({
     //           required_error: "Please enter a valid vehicle type.",
     //      })
     //      .refine(
     //           (value) => ["8", "12", "14", "16", "18", "24"].includes(value),
     //           {
     //                message: "Invalid means of identification.",
     //           },
     //      ),
     // price_by_tyre: z
     //      .string({
     //           required_error: "Please enter a valid vehicle type.",
     //      })
     //      .refine(
     //           (value) =>
     //                [
     //                     "8000",
     //                     "12,000",
     //                     "14,000",
     //                     "16,000",
     //                     "18,000",
     //                     "24,000",
     //                ].includes(value),
     //           {
     //                message: "Invalid means of identification.",
     //           },
     //      ),

     // image: z
     //      .string({
     //           required_error: "Please add image.",
     //      })
     //      .min(5, { message: "Must be a valid Image link" }),
     // owners_name: z
     //      .string({
     //           required_error: "Enter owner phone number.",
     //      })
     //      .min(5, {
     //           message: "Enter full name",
     //      }),
     // nin: z.string(),
});
