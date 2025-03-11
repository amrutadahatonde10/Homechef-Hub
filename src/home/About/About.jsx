import React from 'react';
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

const About = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="pt-[18vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-4">

          {/* Section 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Section 1</h2>
            <p>
              This is the content for the first section. Add your description,
              images, or other elements here.
              This is the content for the first section. Add your description,
              images, or other elements here.
              This is the content for the first section. Add your description,
              images, or other elements here.
              This is the content for the first section. Add your description,
              images, or other elements here.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Section 2</h2>
            <p>
              This is the content for the second section. Customize it with
              whatever content you'd like.
            </p>
          </div>
          

        </div>
      </div>
    </>
  );
};

export default About;












// import React from "react";
// import Navbar1 from "../Navbar/Navbar1";
// import Navbar2 from "../Navbar/Navbar2";

// const About = () => {
//   const team = [
//     {
//       name: "Person 1",
//       role: "Role 1",
//       description: "Short description about Person 1.",
//       image: "https://imgs.search.brave.com/4f2o7WbqsTjwMAY7KVdtXzIW9ry7o6HeR_bAAq6hSOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/aXJsLXdpdGgtYmlr/ZV8xMTU3LTc3MDAu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
//     },
//     {
//       name: "Person 2",
//       role: "Role 2",
//       description: "Short description about Person 2.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Person 3",
//       role: "Role 3",
//       description: "Short description about Person 3.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Person 4",
//       role: "Role 4",
//       description: "Short description about Person 4.",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <>
//       <Navbar1 />
//       <Navbar2 />
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <section className="mb-12 text-center">
//           <h1 className="text-4xl font-bold mb-4">About Us</h1>
//           <p className="text-lg text-gray-700">
//             Welcome to our platform! We are passionate about creating something great together.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-2xl p-4 text-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="rounded-t-2xl w-full h-48 object-cover mb-4"
//                 />
//                 <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                 <p className="text-gray-600 mb-2">{member.role}</p>
//                 <p className="text-gray-500 text-sm">{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;
