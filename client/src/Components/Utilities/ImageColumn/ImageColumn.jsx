import React from 'react';

const ImageColumn = ({ customClass = '' }) => {
  // Sample images
  const images = [
    {
      id: 1,
      src: '/Assets/backgroundStyle-removebg-preview.png',
      alt: 'Image 1'
    },
    // {
    //   id: 2,
    //   src: '/Assets/backgroundStyle.webp',
    //   alt: 'Image 2'
    // },
  ];

  return (
    <div  className={`flex flex-col items-center relative ${customClass}`}>
      {images.map((image) => (
        <div key={image.id} className="w-full">
          <figure className="w-full ">
            <img
              src={image.src}
              alt={image.alt}
              className=" w-full opacity-80 blur-md absolute object-contain"
            />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default ImageColumn;
