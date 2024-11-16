import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const RegisterPage = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUser(data.email, data.password);
      const user = userCredential.user;

      await updateUserProfile({ displayName: data.displayName, photoURL: data.photoURL });
      
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Welcome aboard! Your account has been created successfully.',
        confirmButtonText: 'OK',
      });

      console.log("User registered and profile updated:", user);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message,
        confirmButtonText: 'OK',
      });
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create an Account</h1>
          <p className="py-6">
            Join us for exclusive access and benefits. Complete your registration to get started today!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("displayName", { required: "This field is required" })}
                placeholder="Full Name"
                className="input input-bordered"
              />
              {errors.displayName && <span className="text-red-500">{errors.displayName.message}</span>}
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="Profile Photo URL"
                className="input input-bordered"
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "This field is required" })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" },
                  maxLength: { value: 15, message: "Password cannot exceed 15 characters" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
                    message: "Password must contain uppercase, lowercase, number, and special character"
                  }
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            {/* Confirm Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value =>
                    value === getValues("password") || "Passwords do not match"
                })}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">Register</button>
            </div>

            {/* Login Link */}
            <div className="form-control mt-4 text-center">
              <p className="text-sm">
                Already have an account? 
                <Link to="/login" className="link link-primary"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
