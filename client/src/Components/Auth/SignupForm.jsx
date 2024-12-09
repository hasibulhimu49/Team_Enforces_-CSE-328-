import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import FirstImage from '../Utilities/ImageColumn/FirstImage';
import { image1, image2 } from '../Utilities/ImageColumn/Image';
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onSwitchToLogin, onClose }) => {
  //const [success, setSuccess] = useState('');
  const { createUser  } = useAuth();
  const navigate =useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   // Handle form submission
//   const onSubmit = async(data) => {
//     createUser(data.email, data.password)

//     // const role = data.email === 'est.ahmed111@gmail.com' ? 'admin' : 'user'; 
//     // await setDoc(doc(db, 'users', user.uid), {
//     //   fullName: data.fullName,
//     //   email: data.email,
//     //   role: role, 
//     // })


//     .then(result => {
      

//         const loggedUser = result.user;
//         console.log(loggedUser);
//         toast.success('SignUp successful!');
//         onclose();
//         navigate('/')
        
// })
//   };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      console.log('Sign-Up Successful:', result.user);
      toast.success('Sign-Up Successful!');

      onClose(); // Close the modal
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Sign-Up Failed:', error.message);
      toast.error('Sign-Up Failed: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col ">
       <FirstImage
       imageUrl={image1}  
                customClass="absolute  opacity-90  bottom-0  left-0   
                lg:w-[250px] md:w-[250px] w-[200px] 
                lg:h-[400px] md:h-[400px] h-[400px]"
      />
      <FirstImage 
       imageUrl={image2}  
                customClass="absolute  opacity-90 top-0  right-0   
                lg:w-[200px] md:w-[200px] w-[200px] 
                lg:h-[200px] md:h-[200px] h-[200px]"
      />
      <div className="flex-1 flex items-center justify-center  p-4 sm:p-8  z-0" >
        <div className="w-full max-w-md p-6 sm:p-8 rounded-md shadow-lg z-10 bg-white/30 backdrop-blur-sm border border-white/70"
        >
          <h2 className="text-center text-black text-2xl font-black mb-2">Create Your Account</h2>
          <p className="text-center text-gray-600 mb-4 sm:mb-6">
            Sign up with your details
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 border-green-300 focus:ring-green-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 border-green-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

               {/* Image Upload Field */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                {...register('image', { required: 'Profile image is required' })}
                className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer focus:outline-none 
                
                file-input file-input-bordered  max-w-xs file-input-sm"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>
            
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 border-green-300"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) =>
                    value === document.getElementById('password').value ||
                    'Passwords do not match',
                })}
                placeholder="Confirm Password"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 border-green-300"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

           

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-black py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <button
              type="button"
              className="text-green-700 font-black underline"
              onClick={onSwitchToLogin}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
