// import React, { useState, useEffect } from 'react';

// const Image = () => {
//   const images = [
//     "https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg",
//     // "https://images.pexels.com/photos/1093837/pexels-photo-1093837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000); 
//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <div className="h-screen flex justify-center items-start"> 
//       <div className="relative w-full h-full overflow-hidden"> 
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform translate-y-[-20%]" 
//         />
//       </div>
//     </div>
//   );
// };

// export default Image;
