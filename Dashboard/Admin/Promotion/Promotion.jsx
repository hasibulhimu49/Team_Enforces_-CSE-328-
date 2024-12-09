import React, { useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

const Promotion = () => {
    const [promotions, setPromotions] = useState([
        { id: 1, title: "Spring Sale", discount: "20%", description: "Get 20% off on all products!" },
        { id: 2, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 3, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 4, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 5, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 6, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 7, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 8, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 9, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
        { id: 10, title: "Holiday Special", discount: "30%", description: "Enjoy 30% off during the holiday season!" },
    ]);

    const [newPromotion, setNewPromotion] = useState({
        title: '',
        discount: '',
        description: ''
    });

    const handleAddPromotion = () => {
        if (newPromotion.title && newPromotion.discount && newPromotion.description) {
            setPromotions([...promotions, { id: Date.now(), ...newPromotion }]);
            setNewPromotion({ title: '', discount: '', description: '' });
        }
    };

    const handleDelete = (id) => {
        setPromotions(promotions.filter(promo => promo.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPromotion({ ...newPromotion, [name]: value });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-black uppercase mb-8  text-gray-800">Promotions</h2>
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Add New Promotion</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Promotion Title"
                        value={newPromotion.title}
                        onChange={handleInputChange}
                        className="p-2 border rounded-2xl"
                    />
                    <input
                        type="text"
                        name="discount"
                        placeholder="Discount (e.g., 20%)"
                        value={newPromotion.discount}
                        onChange={handleInputChange}
                        className="p-2 border rounded-2xl"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newPromotion.description}
                        onChange={handleInputChange}
                        className="p-2 border rounded-2xl"
                    />
                </div>
                <button
                    onClick={handleAddPromotion}
                    className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600   hover:scale-105 transform transition text-white font-bold rounded hover:bg-green-600"
                >
                    Add Promotion
                </button>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4 text-gray-700">Existing Promotions</h3>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {promotions.map((promo) => (
                        <div key={promo.id} className="p-4 card-body border rounded-lg shadow-md bg-gradient-to-r from-green-100 to-blue-50">
                            <h4 className=" text-lg font-bold text-gray-800">{promo.title}</h4>
                            <p className="text-sm text-gray-600">{promo.description}</p>
                            <p className="text-5xl  font-black text-green-600">{promo.discount}</p>
                            <div className="card-actions  flex justify-end space-x-2">
                                <button
                                    className="flex items-center rounded "
                                    onClick={() => console.log(`Edit promotion ${promo.id}`)}
                                >
                                    <MdEdit  className='text-2xl text-green-700'/>
                                </button>
                                <button
                                    className="  rounded  "
                                    onClick={() => handleDelete(promo.id)}
                                >
                                    <MdDelete  className='text-2xl text-red-400 hover:text-black'/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Promotion;
