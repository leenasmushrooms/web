// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import EnrollSchema from "./EnrollSchema";

// const EnrollForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(EnrollSchema),
//     mode: "onBlur",
//   });

//   const handleFormSubmit = async (data) => {
//     try {
//       const response = await fetch("/.netlify/functions/sendMail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert("Enrollment submitted successfully!");
//       } else {
//         alert("Failed to submit. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while submitting the form.");
//     }
//   };

//   return (
//     <form className="enroll-form" onSubmit={handleSubmit(handleFormSubmit)}>
//       {/* Full Name */}
//       <div className="form-input-group">
//         <label htmlFor="fullName">Full Name:</label>
//         <input id="fullName" type="text" {...register("fullName")} />
//         {errors.fullName && <p className="error">{errors.fullName.message}</p>}
//       </div>

//       {/* Phone */}
//       <div className="form-input-group">
//         <label htmlFor="phone">Phone:</label>
//         <input id="phone" type="tel" {...register("phone")} />
//         {errors.phone && <p className="error">{errors.phone.message}</p>}
//       </div>

//       {/* Email */}
//       <div className="form-input-group">
//         <label htmlFor="email">Email (Optional):</label>
//         <input id="email" type="email" {...register("email")} />
//         {errors.email && <p className="error">{errors.email.message}</p>}
//       </div>

//       {/* Transaction ID */}
//       <div className="form-input-group">
//         <label htmlFor="transactionId">Transaction ID:</label>
//         <input id="transactionId" type="text" {...register("transactionId")} />
//         {errors.transactionId && (
//           <p className="error">{errors.transactionId.message}</p>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="submit-button button is-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default EnrollForm;
