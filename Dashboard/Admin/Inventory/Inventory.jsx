import React, { useState, useEffect } from 'react';
import useAdmin from '../../../hooks/useAdmin';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import EditInventoryModal from './EditInventory';

const Inventory = () => {
    const [isAdmin] = useAdmin()
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);

    //modal system
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const openModal = (productId) => {
        setSelectedProductId(productId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProductId(null);
    };
    //end modal

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/products');
                const data = await response.json();
                console.log(data);

                if (data?.data) {
                    setProducts(data.data);
                    setFilteredProducts(data.data);

                    // Extract unique categories
                    const uniqueCategories = ['All', ...new Set(data.data.map(product => product.category))];
                    setCategories(uniqueCategories);
                } else {
                    console.error('Unexpected data structure:', data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchProducts();
    }, []);

  // Handle product updates (real-time)
  const handleProductUpdate = (updatedProduct) => {
    // Update the products state
    const updatedProducts = products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
    );

    setProducts(updatedProducts);

    // Reapply filters if a category is active
    if (activeCategory === 'All') {
        setFilteredProducts(updatedProducts);
    } else {
        setFilteredProducts(updatedProducts.filter((product) => product.category === activeCategory));
    }

    // Show success toast
    toast.success('Product updated successfully!');
};

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setFilteredProducts(category === 'All' ? products : products.filter(product => product.category === category));
    };


    // Delete a product with SweetAlert2 confirmation and toast
    const handleDelete = async (productId) => {

        console.log('Deleting product with ID:', productId);  // Log the product ID

        if (!productId) {
            console.error('Product ID is undefined');
            return;  // Prevent making the request if the ID is not valid
        }

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            // icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#d33', // Confirm button color (Red)
            cancelButtonColor: '#1C4F38', // Green-800 for the Cancel button
            confirmButtonText: ' Delete it!',

            // Custom styling
            customClass: {
                popup: 'bg-green-50', // Change the background color of the modal
                title: 'text-green-800', // Title color (Green-800)
                content: 'text-green-800', // Content color (Green-800)
                confirmButton: 'bg-green-800 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200', // Green confirm button with hover effect
                cancelButton: 'bg-green-800 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200', // Green cancel button with hover effect
                closeButton: 'text-green-800', // Close button (Green color)

            },
            heightAuto: false,

        });


        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/products/${productId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Remove the product from the local state after deletion
                    setProducts(products.filter(product => product._id !== productId));
                    setFilteredProducts(filteredProducts.filter(product => product._id !== productId));

                    // Show success toast
                    toast.success('Product deleted successfully!');
                } else {
                    // Show error toast
                    toast.error('Error deleting the product');
                }
            } catch (error) {
                console.error("Error deleting data:", error);
                // Show error toast
                toast.error('Error deleting the product');
            }
        }
    };



    return (
        <div className=" mx-auto px-4 py-6">
            <h1 className="text-3xl font-black uppercase mb-8 text-black">Inventory </h1>

            {/* Category Tabs */}
            <div className="flex space-x-4 mb-6 overflow-x-auto">
                {categories?.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-5 py-2 rounded-full font-semibold ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts?.map(product => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex"
                    >
                        {/* Image Section */}
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-2/4 object-cover"
                        />

                        {/* Product Details Section */}
                        <div className="w-2/3 p-4 flex flex-col justify-between">
                            {/* Product Info */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{product.subCategory}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-green-600 text-3xl font-semibold">{product.price}
                                        <span className="text-green-600 text-sm ms-1">Taka</span>
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 mt-2">Available: {product.quantity}</p>
                            </div>

                            {isAdmin ?
                                <div>
                                    {/* Action Buttons */}
                                    <div className="flex justify-end mt-4 space-x-2">
                                        <div>
                                            <button onClick={() => {
                                                openModal(product._id);
                                                // setIsModalOpen(true);
                                            }}
                                                className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:scale-105 transform transition
                    
                    btn btn-sm rounded-l-lg ">
                                                Edit
                                            </button>

                                            {/* Modal */}
                                            {isModalOpen && (
                                                <EditInventoryModal
                                                    productId={selectedProductId}
                                                    isOpen={isModalOpen}
                                                    onClose={closeModal}
                                                    onProductUpdate={handleProductUpdate}
                                                />
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="
                    bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-lg hover:scale-105 transform transition

                    btn btn-sm  rounded-r-lg ">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                : <div>
                                    <h1 className='bg-green-500 text-center text-white font-black rounded-lg'>Happy Shopping</h1>
                                </div>

                            }
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Inventory;