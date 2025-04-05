import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
// import { img } from "framer-motion/client";
import img from "/src/assets/m.png";


const AdminAdCard = () => {
  const [ads, setAds] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    image: "",
    name: "",
    description: "",
    link: ""
  });

  
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch("https://67b0179fdffcd88a678852bf.mockapi.io/api/ad");
        if (!response.ok) throw new Error("Failed to fetch ads");
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };


    fetchAds();
  }, []);

  const handleEdit = (ad) => {
    setEditingId(ad.id);
    setEditData(ad);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://67b0179fdffcd88a678852bf.mockapi.io/api/ad/${editingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );

      if (!response.ok) throw new Error("Failed to update ad");

      setAds((prevAds) =>
        prevAds.map((ad) => (ad.id === editingId ? editData : ad))
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating ad:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `https://67b0179fdffcd88a678852bf.mockapi.io/api/ad/${id}`,
  //       { method: "DELETE" }
  //     );
  //     if (!response.ok) throw new Error("Failed to delete ad");
  //     setAds(ads.filter((ad) => ad.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting ad:", error);
  //   }
  // };

  return (
    <>
      <div className="fixed top-0 w-full z-50">
          <div className="h-[8vh] w-full flex bg-gray-200 shadow-md py-[1px]">
            <div className="h-full w-[22%] flex bg-purple-200">
              <img src={img} alt="homecheflogo" className="w-10vh h-full bg-purple-200" />
              <h1 className="mt-4 italic ">
                <b>
                  Home<span className="text-gray-600">Chef</span>Hub
                </b>
              </h1>
            </div>
    
            <div className="h-full w-full bg-purple-200">
              <b>
                <div className="bg-black-200 mt-4 ml-[30%]">
                  Simple recipes made for
                  <span className="text-purple-600 italic"> real, actual, everyday life.</span>
                </div>
              </b>
            </div>
            </div>
            </div>
    <div className='bg-purple-300 w-full h-12'></div>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Manage Advertisements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-purple-100 p-4 rounded-lg shadow-md">
            {editingId === ad.id ? (
              <>
                <input type="text" name="name" value={editData.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Ad Name" />
                <textarea name="description" value={editData.description} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Ad Description"></textarea>
                <input type="text" name="link" value={editData.link} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Ad Link" />
                <input type="text" name="image" value={editData.image} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Image URL" />
                <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 mt-2 rounded">Save</button>
              </>
            ) : (
              <>
                <img src={ad.image} alt={ad.name} className="w-full h-52 object-cover rounded-lg" />
                <h3 className="text-xl font-semibold">{ad.name}</h3>
                <p className="text-gray-600">{ad.description}</p>
                <a href={ad.link} className="text-blue-500 hover:underline block mt-2">Visit Ad</a>
                <button onClick={() => handleEdit(ad)} className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">Edit</button>
                <button onClick={() => handleDelete(ad.id)} className="bg-red-500 text-white px-3 py-1 mt-2 ml-2 rounded">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdminAdCard;
