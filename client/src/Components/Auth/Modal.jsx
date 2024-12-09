import React from 'react';
import FirstImage from '../Utilities/ImageColumn/FirstImage';
import { image1 } from '../Utilities/ImageColumn/Image';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const navigate = useNavigate(); 

  if (!isOpen) return null;

  const handleCloseAndRedirect = () => {
    onClose(); 
    navigate('/');
  };
  
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ">
      
      
      <div className="bg-white   relative shadow-lg w-full max-w-md">

      <div className='sm:hidden hidden lg:block md:hidden'>
      <FirstImage
       imageUrl={image1}  
                customClass="absolute   opacity-100  -top-20  
                lg:left-[440px] -z-10 
                lg:w-[250px] w-[0px] 
                lg:h-[400px] h-[0px]"
      />
       <FirstImage
       imageUrl={image1}  
                customClass="absolute  opacity-100  top-60  
                right-[440px] -z-10   rotate-180
                lg:w-[250px]  w-[0px] 
                lg:h-[400px]  h-[0px]"
      />
      </div>

        {/* Close Button */}
        <button
          className="absolute z-20 top-10 right-10 text-3xl text-black hover:text-gray-900"
          // onClick={handleCloseAndRedirect}
          onClick={onClose}
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
