import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 
import notGetTree from "/Assets/dashboard/notgetTree.png"
// To capture route parameters

const CategoryPage = () => {
    const { category, subcategory } = useParams(); // Get category and subcategory from the URL
    const [products, setProducts] = useState([]); // All products fetched from API
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products based on the category/subcategory
    const [sortOption, setSortOption] = useState("default");

    // Filter state for the sidebar
    const [filters, setFilters] = useState({
        status: "",
        level: "",
        minPrice: 0,
        maxPrice: 5000,
        minQuantity: 1,
        maxQuantity: 100,
    });

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/v1/products");
                const result = await response.json();
                if (Array.isArray(result.data)) {
                    setProducts(result.data); // Set products to state
                } else {
                    console.error("Data is not an array");
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Filter products when category, subcategory, or filters change
    useEffect(() => {
        let filtered = products;

        // Filter by category
        if (category) {
            filtered = filtered.filter(
                (product) => product.category.toLowerCase() === category.toLowerCase()
            );
        }

        // Filter by subcategory
        if (subcategory) {
            filtered = filtered.filter(
                (product) => product.subcategory.toLowerCase() === subcategory.toLowerCase()
            );
        }

        // Filter by status
        if (filters.status) {
            filtered = filtered.filter(
                (product) => product.status.toLowerCase() === filters.status.toLowerCase()
            );
        }

        // Filter by level
        if (filters.level) {
            filtered = filtered.filter(
                (product) => product.level.toLowerCase() === filters.level.toLowerCase()
            );
        }

        // Filter by price range
        filtered = filtered.filter(
            (product) =>
                product.price >= filters.minPrice && product.price <= filters.maxPrice
        );

        // Filter by quantity range
        filtered = filtered.filter(
            (product) =>
                product.quantity >= filters.minQuantity &&
                product.quantity <= filters.maxQuantity
        );

        // Apply sorting
        if (sortOption === "lowToHigh") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "highToLow") {
            filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered); // Set filtered products to state
    }, [category, subcategory, filters, products, sortOption]);

    // Handle filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Handle sorting option change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className="container z-30  relative mx-auto  max-w-7xl p-4 flex">
            {/* Filter Sidebar */}
            <div className="w-1/4 p-6 border-r bg-green-50 rounded-xl border-gray-200">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Filter Products</h2>

                {/* Status Filter */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                    </label>
                    <div className="">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="status"
                                value=""
                                checked={filters.status === ""}
                                onChange={handleFilterChange}
                                className="form-radio radio radio-sm radio-success text-green-600 "
                            />
                            <span className="ml-2">All</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="status"
                                value="active"
                                checked={filters.status === "active"}
                                onChange={handleFilterChange}
                                className="form-radio text-green-600 radio radio-sm radio-success"
                                defaultChecked
                            />
                            <span className="ml-2">Active</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="status"
                                value="inactive"
                                checked={filters.status === "inactive"}
                                onChange={handleFilterChange}
                                className="form-radio text-green-600 radio radio-sm radio-success"

                            />
                            <span className="ml-2">Inactive</span>
                        </label>
                    </div>
                </div>

                {/* Level Filter */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                    <div>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="level"
                                value=""
                                checked={filters.level === ""}
                                onChange={handleFilterChange}
                                className="form-radio text-green-600 radio radio-sm radio-success"
                            />
                            <span className="ml-2">All</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="level"
                                value="premium"
                                checked={filters.level === "premium"}
                                onChange={handleFilterChange}
                                className="form-radio text-green-600 radio radio-sm radio-success"
                            />
                            <span className="ml-2">Premium</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="level"
                                value="standard"
                                checked={filters.level === "standard"}
                                onChange={handleFilterChange}
                                className="form-radio text-green-600 radio radio-sm radio-success"
                            />
                            <span className="ml-2">Standard</span>
                        </label>
                    </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                            Min: {filters.minPrice}
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                            Max: {filters.maxPrice}
                        </span>
                    </div>
                    <input
                        type="range"
                        name="minPrice"
                        min="0"
                        max="5000"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        className="range range-success range-xs"
                    />
                    <input
                        type="range"
                        name="maxPrice"
                        min="0"
                        max="5000"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        className="range range-success range-xs mt-2"
                    />
                </div>

                {/* Quantity Range Filter */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Range</label>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                            Min: {filters.minQuantity}
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                            Max: {filters.maxQuantity}
                        </span>
                    </div>
                    <input
                        type="range"
                        name="minQuantity"
                        min="1"
                        max="100"
                        value={filters.minQuantity}
                        onChange={handleFilterChange}
                        className="range range-success range-xs"
                    />
                    <input
                        type="range"
                        name="maxQuantity"
                        min="1"
                        max="100"
                        value={filters.maxQuantity}
                        onChange={handleFilterChange}
                        className="range range-success mt-2 range-xs"
                    />
                </div>
            </div>

            {/* Product Cards */}
            <div className="w-3/4 px-4">
                <div className="flex justify-between">
                    <div className="">
                        {/* Category Header */}
                        <h1 className="text-3xl font-bold  text-gray-800">
                            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Categories'}
                        </h1>
                        {subcategory && (
                            <h2 className="text-lg font-semibold  mb-6 text-gray-700">
                                {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                            </h2>
                        )}
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="sortBy" className="text-sm font-medium text-gray-700 mr-2">
                            Sort By:
                        </label>
                        <select
                            id="sortBy"
                            name="sortBy"
                            value={sortOption}
                            onChange={handleSortChange}
                            className="border border-gray-300 text-gray-800 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        >
                            <option value="default">Default</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 border-slate-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div
                                    key={product._id}
                                    className="relative bg-white p-2 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                                >
                                    {/* Dynamic Level Badge */}
                                    <span
                                        className={`absolute z-10 top-1 left-1 text-xs font-bold uppercase px-1  rounded shadow-sm ${product.level === "premium"
                                            ? "bg-yellow-500 text-white"
                                            : product.level === "standard"
                                                ? "bg-blue-500 text-white"
                                                : product.level === "basic"
                                                    ? "bg-gray-400 text-white"
                                                    : "bg-gray-300 text-gray-800"
                                            }`}
                                    >
                                        {product.level.charAt(0).toUpperCase() + product.level.slice(1)}
                                    </span>

                                    {/* Product Image */}
                                    <Link to={`/product/${product._id}`} className="block overflow-hidden rounded-lg">
                                        <img
                                            src={product.images?.[0] || "https://via.placeholder.com/150"}
                                            alt={product.name || "Product"}
                                            className="w-full h-40 object-cover rounded-lg hover:scale-105 transform transition duration-300"
                                        />
                                    </Link>

                                    {/* Product Name */}
                                    <h3 className="font-black text-lg mt-3 truncate text-gray-800">
                                        {product.name}
                                    </h3>

                                    {/* Price Section */}
                                    <div className="flex gap-2 items-center">
                                        <p className=" text-sm mt-1
                                           py- inline-block rounded">
                                            Price:
                                        </p>
                                        <p className=" font-black text-2xl text-green-600">${product.price}</p>

                                    </div>
                                    

                                    {/* Quantity */}
                                    <p className="text-sm text-gray-700 mt-2">
                                        Quantity: <span className="font-bold text-gray-800">{product.quantity}</span>
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mt-4">
                                        {/* Buy Now Button */}
                                        <button
                                            className="flex-1 text-white rounded-lg btn-sm bg-gradient-to-r from-green-500 to-green-700 font-semibold hover:bg-green-600 hover:scale-105 transform transition"
                                        >
                                            Buy Now
                                        </button>

                                        {/* Add to Cart Button */}
                                        <button
                                            className="flex-1 border border-green-500 text-green-500 btn-sm rounded-lg font-semibold hover:bg-green-100 hover:scale-105 transform transition"
                                        >
                                            Add Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full mt-24 flex-col flex items-center justify-center text-center ">
                                <h1 className="text-3xl uppercase font-black">No items found</h1>
                                <img className="w-96 h-96" src={notGetTree} alt="" />
                            </div>
                        )}
                    </div>
                </div>






            </div>
        </div>
    );
};

export default CategoryPage;
