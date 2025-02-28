



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css"; // Import phone input styles
// import "/Style.css";

// const SignUp = () => {
//   const [showEmailForm, setShowEmailForm] = useState(false);
//   const [name, setName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [error, setError] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let newErrors = {};

//     if (!name.trim()) newErrors.name = "Name is required";
//     if (!userName.trim()) newErrors.userName = "Username is required";
//     if (!email.trim()) newErrors.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(email))
//       newErrors.email = "Invalid email format";

//     if (!phoneNumber.trim() || phoneNumber.length < 10)
//       newErrors.phoneNumber = "Valid phone number is required";

//     if (!password.trim()) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters long";

//     if (!agreeTerms)
//       newErrors.agreeTerms = "You must agree to the terms & conditions";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e, field) => {
//     const { value } = e.target;

//     if (field === "name") setName(value);
//     if (field === "userName") setUserName(value);
//     if (field === "email") setEmail(value);
//     if (field === "password") setPassword(value);
//     if (field === "agreeTerms") setAgreeTerms(e.target.checked);

//     setErrors((prevErrors) => {
//       const newErrors = { ...prevErrors };
//       if (value.trim() !== "" || (field === "agreeTerms" && e.target.checked)) {
//         delete newErrors[field];
//       }
//       return newErrors;
//     });
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     if (!validateForm()) return;

//     try {
//       const response = await axios.post("http://localhost:3001/users/signUp", {
//         name,
//         userName,
//         email,
//         phoneNumber,
//         password,
//       });

//       console.log("Signup successful:", response);

//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       toast.success("Signup Successful!");

//       setTimeout(() => {
//         navigate("/");
//       }, 1500);
//     } catch (error) {
//       setError(
//         error.response?.data?.message || "Signup failed. Please try again."
//       );
//       toast.error("Sign Up Failed!");
//     }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex">
//       <ToastContainer />
//       <div className="d-none d-md-flex col-md-4 bg-dark text-white align-items-center justify-content-center position-relative">
//         <h1
//           className="position-absolute top-0 start-0 m-3 fst-italic"
//           style={{ fontFamily: "cursive", cursor: "pointer" }}
//           onClick={() => (window.location.href = "/")}
//         >
//           Dribbble
//         </h1>
//         <img
//           src="img17.gif"
//           alt="Background"
//           className="img-fluid vh-100 w-100"
//           style={{ objectFit: "cover" }}
//         />
//       </div>

//       <div className="col-md-7 d-flex align-items-center justify-content-center">
//         <div className="form-container p-4">
//           <h2 className="mb-4 text-center">Sign up to Dribbble</h2>

//           {!showEmailForm ? (
//             <>
//               <button className="btn btn-dark w-100 mb-2 custom-input">
//                 <i className="fab fa-google me-2"></i> Sign up with Google
//               </button>

//               <p className="text-center text-muted">or</p>
//               <hr />

//               <button
//                 className="btn btn-light w-100 mb-2 border custom-input"
//                 onClick={() => setShowEmailForm(true)}
//               >
//                 Continue with email
//               </button>

//               <label className="form-check-label small text-muted">
//                 By creating an account, you agree to our{" "}
//                 <Link to="/terms">
//                   <u>Terms of Service</u>
//                 </Link>
//                 ,{" "}
//                 <Link to="/privacy">
//                   <u>Privacy Policy</u>
//                 </Link>
//                 , and{" "}
//                 <Link to="/settings">
//                   <u>Notification Settings</u>
//                 </Link>
//                 .
//               </label>
//               <p className="mt-3 text-center">
//                 Already have an account?{" "}
//                 <Link to="/Login">
//                   <u>Login</u>
//                 </Link>
//               </p>
//             </>
//           ) : (
//             <>
//               <button
//                 className="btn btn-link text-dark mb-3"
//                 onClick={() => setShowEmailForm(false)}
//                 style={{ textDecoration: "none", fontSize: "1.2rem" }}
//               >
//                 <i className="fas fa-arrow-left"></i>
//               </button>

//               {error && <p className="text-danger text-center">{error}</p>}

//               <form onSubmit={handleSignUp}>
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input
//                     type="text"
//                     className="form-control custom-input"
//                     value={name}
//                     onChange={(e) => handleInputChange(e, "name")}
//                   />
//                   {submitted && errors.name && (
//                     <p className="text-danger small">{errors.name}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Username</label>
//                   <input
//                     type="text"
//                     className="form-control custom-input"
//                     value={userName}
//                     onChange={(e) => handleInputChange(e, "userName")}
//                   />
//                   {submitted && errors.userName && (
//                     <p className="text-danger small">{errors.userName}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control custom-input"
//                     value={email}
//                     onChange={(e) => handleInputChange(e, "email")}
//                   />
//                   {submitted && errors.email && (
//                     <p className="text-danger small">{errors.email}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Phone Number</label>
//                   <PhoneInput
//                     country={"us"}
//                     value={phoneNumber}
//                     onChange={setPhoneNumber}
//                     inputClass="form-control custom-input"
//                   />
//                   {submitted && errors.phoneNumber && (
//                     <p className="text-danger small">{errors.phoneNumber}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control custom-input"
//                     value={password}
//                     onChange={(e) => handleInputChange(e, "password")}
//                   />
//                   {submitted && errors.password && (
//                     <p className="text-danger small">{errors.password}</p>
//                   )}
//                 </div>

//                 <div className="mb-3 form-check">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="termsCheck"
//                     checked={agreeTerms}
//                     onChange={(e) => handleInputChange(e, "agreeTerms")}
//                   />
//                   <label className="form-check-label small text-muted">
//                     I agree to Dribbble’s{" "}
//                     <Link to="/terms">
//                       <u>Terms of Service</u>
//                     </Link>
//                     ,{" "}
//                     <Link to="/privacy">
//                       <u>Privacy Policy</u>
//                     </Link>
//                     , and{" "}
//                     <Link to="/settings">
//                       <u>Notification Settings</u>
//                     </Link>
//                     .
//                   </label>
//                   {submitted && errors.agreeTerms && (
//                     <p className="text-danger small">{errors.agreeTerms}</p>
//                   )}
//                 </div>



//                 <button
//                   type="submit"
//                   className="btn btn-dark w-100 mb-2 custom-input"
//                 >
//                   Create Account
//                 </button>
//                 <otpVerify/>

//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import PhoneInput from "react-phone-input-2";
// import "/Style.css";

// const SignUp = () => {
//   const [showEmailForm, setShowEmailForm] = useState(false);
//   const [name, setName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [error, setError] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let newErrors = {};

//     if (!name.trim()) newErrors.name = "Name is required";
//     if (!userName.trim()) newErrors.userName = "Username is required";
//     if (!email.trim()) newErrors.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(email))
//       newErrors.email = "Invalid email format";

//     if (!phoneNumber.trim() || phoneNumber.length < 10)
//       newErrors.phoneNumber = "Valid phone number is required";

//     if (!password.trim()) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters long";

//     if (!agreeTerms)
//       newErrors.agreeTerms = "You must agree to the terms & conditions";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e, field) => {
//     const { value } = e.target;

//     if (field === "name") setName(value);
//     if (field === "userName") setUserName(value);
//     if (field === "email") setEmail(value);
//     if (field === "password") setPassword(value);
//     if (field === "agreeTerms") setAgreeTerms(e.target.checked);

//     setErrors((prevErrors) => {
//       const newErrors = { ...prevErrors };
//       if (value.trim() !== "" || (field === "agreeTerms" && e.target.checked)) {
//         delete newErrors[field];
//       }
//       return newErrors;
//     });
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     if (!validateForm()) return;

//     try {
//       const response = await axios.post("http://localhost:3001/users/signUp", {
//         name,
//         userName,
//         email,
//         phoneNumber,
//         password,
//       });

//       console.log("Signup successful:", response);

//       localStorage.setItem("phoneNumber", JSON.stringify(response.data.user.phoneNumber));
//       toast.success("OTP Successful!");
//       setTimeout(() => {
//         navigate("/otpVerify"); 
//       }, 1500);
//     } catch (error) {
//       setError(
//         error.response?.data?.message || "Signup failed. Please try again."
//       );
//       toast.error("Sign Up Failed!");
//     }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex">
//       <ToastContainer />
//       <div className="d-none d-md-flex col-md-4 bg-dark text-white align-items-center justify-content-center position-relative">
//         <h1
//           className="position-absolute top-0 start-0 m-3 fst-italic"
//           style={{ fontFamily: "cursive", cursor: "pointer" }}
//           onClick={() => (window.location.href = "/")}
//         >
//           Dribbble
//         </h1>
//         <img
//           src="img17.gif"
//           alt="Background"
//           className="img-fluid vh-100 w-100"
//           style={{ objectFit: "cover" }}
//         />
//       </div>

//       <div className="col-md-7 d-flex align-items-center justify-content-center">
//         <div className="form-container p-4">
//           <h2 className="mb-4 text-center">Sign up to Dribbble</h2>

//           {!showEmailForm ? (
//             <>
//               <button className="btn btn-dark w-100 mb-2 custom-input">
//                 <i className="fab fa-google me-2"></i> Sign up with Google
//               </button>

//               <p className="text-center text-muted">or</p>
//               <hr />

//               <button
//                 className="btn btn-light w-100 mb-2 border custom-input"
//                 onClick={() => setShowEmailForm(true)}
//               >
//                 Continue with email
//               </button>

//               <label className="form-check-label small text-muted">
//                 By creating an account, you agree to our{" "}
//                 <Link to="/terms">
//                   <u>Terms of Service</u>
//                 </Link>
//                 ,{" "}
//                 <Link to="/privacy">
//                   <u>Privacy Policy</u>
//                 </Link>
//                 , and{" "}
//                 <Link to="/settings">
//                   <u>Notification Settings</u>
//                 </Link>
//                 .
//               </label>
//               <p className="mt-3 text-center">
//                 Already have an account?{" "}
//                 <Link to="/Login">
//                   <u>Login</u>
//                 </Link>
//               </p>
//             </>
//           ) : (
//             <>
//               <button
//                 className="btn btn-link text-dark mb-3"
//                 onClick={() => setShowEmailForm(false)}
//                 style={{ textDecoration: "none", fontSize: "1.2rem" }}
//               >
//                 <i className="fas fa-arrow-left"></i>
//               </button>

//               {error && <p className="text-danger text-center">{error}</p>}

//               <form onSubmit={handleSignUp}>
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input
//                     type="text"
//                     className="form-control custom-input"
//                     value={name}
//                     onChange={(e) => handleInputChange(e, "name")}
//                   />
//                   {submitted && errors.name && (
//                     <p className="text-danger small">{errors.name}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Username</label>
//                   <input
//                     type="text"
//                     className="form-control custom-input"
//                     value={userName}
//                     onChange={(e) => handleInputChange(e, "userName")}
//                   />
//                   {submitted && errors.userName && (
//                     <p className="text-danger small">{errors.userName}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     className="form-control custom-input"
//                     value={email}
//                     onChange={(e) => handleInputChange(e, "email")}
//                   />
//                   {submitted && errors.email && (
//                     <p className="text-danger small">{errors.email}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Phone Number</label>
//                   <PhoneInput
//                     country={"us"}
//                     value={phoneNumber}
//                     onChange={setPhoneNumber}
//                     inputClass="form-control custom-input"
//                   />
//                   {submitted && errors.phoneNumber && (
//                     <p className="text-danger small">{errors.phoneNumber}</p>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control custom-input"
//                     value={password}
//                     onChange={(e) => handleInputChange(e, "password")}
//                   />
//                   {submitted && errors.password && (
//                     <p className="text-danger small">{errors.password}</p>
//                   )}
//                 </div>

//                 <div className="mb-3 form-check">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="termsCheck"
//                     checked={agreeTerms}
//                     onChange={(e) => handleInputChange(e, "agreeTerms")}
//                   />
//                   <label className="form-check-label small text-muted">
//                     I agree to Dribbble’s{" "}
//                     <Link to="/terms">
//                       <u>Terms of Service</u>
//                     </Link>
//                     ,{" "}
//                     <Link to="/privacy">
//                       <u>Privacy Policy</u>
//                     </Link>
//                     , and{" "}
//                     <Link to="/settings">
//                       <u>Notification Settings</u>
//                     </Link>
//                     .
//                   </label>
//                   {submitted && errors.agreeTerms && (
//                     <p className="text-danger small">{errors.agreeTerms}</p>
//                   )}
//                 </div>



//                 <button
//                   type="submit"
//                   className="btn btn-dark w-100 mb-2 custom-input"
//                 >
//                   Create Account
//                 </button>
//                 <otpVerify/>

//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import phone input styles
import "/Style.css";

const SignUp = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!userName.trim()) newErrors.userName = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!phoneNumber.trim() || phoneNumber.length < 10)
      newErrors.phoneNumber = "Valid phone number is required";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    if (!agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;

    if (field === "name") setName(value);
    if (field === "userName") setUserName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "agreeTerms") setAgreeTerms(e.target.checked);

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value.trim() !== "" || (field === "agreeTerms" && e.target.checked)) {
        delete newErrors[field];
      }
      return newErrors;
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:3001/users/signUp", {
        name,
        userName,
        email,
        phoneNumber,
        password,
      });

      console.log("Signup successful:", response);

      localStorage.setItem("phoneNumber", JSON.stringify(response.data.user.phoneNumber));
      toast.success("OTP Successful!");
      setTimeout(() => {
        navigate("/otpVerify"); 
      }, 1500);
    } catch (error) {
      setError(
        error.response?.data?.message || "Signup failed. Please try again."
      );
      toast.error("Sign Up Failed!");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <ToastContainer />
      <div className="d-none d-md-flex col-md-4 bg-dark text-white align-items-center justify-content-center position-relative">
        <h1
          className="position-absolute top-0 start-0 m-3 fst-italic"
          style={{ fontFamily: "cursive", cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        >
          Dribbble
        </h1>
        <img
          src="img17.gif"
          alt="Background"
          className="img-fluid vh-100 w-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-md-7 d-flex align-items-center justify-content-center">
        <div className="form-container p-4">
          <h2 className="mb-4 text-center">Sign up to Dribbble</h2>

          {!showEmailForm ? (
            <>
              <button className="btn btn-dark w-100 mb-2 custom-input">
                <i className="fab fa-google me-2"></i> Sign up with Google
              </button>

              <p className="text-center text-muted">or</p>
              <hr />

              <button
                className="btn btn-light w-100 mb-2 border custom-input"
                onClick={() => setShowEmailForm(true)}
              >
                Continue with email
              </button>

              <label className="form-check-label small text-muted">
                By creating an account, you agree to our{" "}
                <Link to="/terms">
                  <u>Terms of Service</u>
                </Link>
                ,{" "}
                <Link to="/privacy">
                  <u>Privacy Policy</u>
                </Link>
                , and{" "}
                <Link to="/settings">
                  <u>Notification Settings</u>
                </Link>
                .
              </label>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link to="/Login">
                  <u>Login</u>
                </Link>
              </p>
            </>
          ) : (
            <>
              <button
                className="btn btn-link text-dark mb-3"
                onClick={() => setShowEmailForm(false)}
                style={{ textDecoration: "none", fontSize: "1.2rem" }}
              >
                <i className="fas fa-arrow-left"></i>
              </button>

              {error && <p className="text-danger text-center">{error}</p>}

              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                  {submitted && errors.name && (
                    <p className="text-danger small">{errors.name}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    value={userName}
                    onChange={(e) => handleInputChange(e, "userName")}
                  />
                  {submitted && errors.userName && (
                    <p className="text-danger small">{errors.userName}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    value={email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                  {submitted && errors.email && (
                    <p className="text-danger small">{errors.email}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <PhoneInput
                    country={"us"}
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    inputClass="form-control custom-input"
                  />
                  {submitted && errors.phoneNumber && (
                    <p className="text-danger small">{errors.phoneNumber}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    value={password}
                    onChange={(e) => handleInputChange(e, "password")}
                  />
                  {submitted && errors.password && (
                    <p className="text-danger small">{errors.password}</p>
                  )}
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                    checked={agreeTerms}
                    onChange={(e) => handleInputChange(e, "agreeTerms")}
                  />
                  <label className="form-check-label small text-muted">
                    I agree to Dribbble’s{" "}
                    <Link to="/terms">
                      <u>Terms of Service</u>
                    </Link>
                    ,{" "}
                    <Link to="/privacy">
                      <u>Privacy Policy</u>
                    </Link>
                    , and{" "}
                    <Link to="/settings">
                      <u>Notification Settings</u>
                    </Link>
                    .
                  </label>
                  {submitted && errors.agreeTerms && (
                    <p className="text-danger small">{errors.agreeTerms}</p>
                  )}
                </div>



                <button
                  type="submit"
                  className="btn btn-dark w-100 mb-2 custom-input"
                >
                  Create Account
                </button>
                <otpVerify/>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
