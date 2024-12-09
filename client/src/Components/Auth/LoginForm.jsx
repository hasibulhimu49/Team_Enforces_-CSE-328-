import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import FirstImage from '../Utilities/ImageColumn/FirstImage';
import { image1, image2 } from '../Utilities/ImageColumn/Image';
import GlassCard from '../Utilities/GlassCard/GlassCard';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'sonner';

const LoginForm = ({ onSwitchToSignup, onClose }) => {
  const auth = getAuth();
  const { signIn } = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const googleProvider = new GoogleAuthProvider(); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        toast.success('Login Successfully');
        console.log(user);
        onClose();  // Close the modal and redirect
        navigate('/'); // Redirect to the home page
      })
      .catch((error) => {
        toast.error('Login failed');
        console.error(error.message);
      });
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-In successful:', result.user);
      toast.success('Google Sign-In successful!');
      onClose();  // Close the modal and redirect
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      toast.error('Google Sign-In failed: ' + error.message);
    }
  };

  // Show password toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <FirstImage 
        imageUrl={image1}  
        customClass="absolute opacity-90 bottom-0 left-0 lg:w-[250px] md:w-[250px] w-[200px] lg:h-[400px] md:h-[400px] h-[400px]"
      />
      <FirstImage 
        imageUrl={image2}  
        customClass="absolute opacity-90 top-0 right-0 lg:w-[200px] md:w-[200px] w-[200px] lg:h-[200px] md:h-[200px] h-[200px]"
      />

      {/* Left Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 z-0">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-md shadow-lg z-10 bg-white/30 backdrop-blur-sm border border-white/70">
          <h2 className="text-center text-black text-2xl font-black mb-2">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-4 sm:mb-6">
            Enter your Credentials to access your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 border border-green-300 focus:ring-green-500"
                {...register('password', { required: 'Password is required' })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="pr-4 text-lg focus:outline-none ms-64 absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-blue-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-black">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-green-700">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-700 font-black text-white py-2 rounded-md"
            >
              Sign In
            </button>
          </form>

          {/* Social Logins */}
          <div className="flex items-center justify-between my-4">
            <span className="border-t w-1/4"></span>
            <span className="text-xs text-black">or</span>
            <span className="border-t w-1/4"></span>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleGoogleSignIn}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-green-100 rounded-md hover:bg-gray-100"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center border-2 bg-green-100 px-4 py-2 rounded-md hover:bg-gray-100">
              <FaApple className="mr-2" />  Apple
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-4 text-center text-sm">
            Have an account?{' '}
            <button type="button" className="text-green-600 font-black underline" onClick={onSwitchToSignup}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
