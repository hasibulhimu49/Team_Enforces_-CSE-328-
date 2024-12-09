import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch user data from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/user.json'); // Replace with your API URL
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    // Handle role change
    const handleRoleChange = (userId, newRole) => {
        console.log(`User ID: ${userId}, New Role: ${newRole}`);
        // Implement role change API call here
    };

    // Handle user delete
    const handleDelete = async (userId) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (!confirmed) return;

        try {
            // Assuming DELETE request to the server
            await fetch(`https://api.example.com/users/${userId}`, { method: 'DELETE' }); // Replace with your API URL
            setUsers(users.filter(user => user.id !== userId)); // Update the state to remove the deleted user
            console.log(`User ID: ${userId} has been deleted`);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="  min-h-screen ">
            <div className=" rounded-lg overflow-hidden">
                <h2 className="text-3xl uppercase font-black  py-6 ">
                     Users </h2>
                
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="flex justify-center py-6">
                            <div className="loader">Loading...</div> {/* Add a spinner for loading state */}
                        </div>
                    ) : (
                        <table className="min-w-full bg-white ">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
                                    <th className="py-3 px-6 text-left">Image</th>
                                    <th className="py-3 px-6 text-left">Full Name</th>
                                    <th className="py-3 px-6 text-left">Email</th>
                                    <th className="py-3 px-6 text-left">Mobile</th>
                                    <th className="py-3 px-6 text-center">Role</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src={user.image}
                                                    alt=""
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-green-300 "
                                                />
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left font-semibold text-black uppercase">{user.fullname}</td>
                                        <td className="py-3 px-6 text-left font-semibold text-black">{user.email}</td>
                                        <td className="py-3 px-6 text-left font-semibold text-black">{user.mobile}</td>
                                        <td className="py-3 px-6 text-center">
                                            <span
                                                className={`py-1 px-3 rounded-full text-xs ${
                                                    user.role === 'admin'
                                                        ? 'bg-green-200  text-green-800 font-black'
                                                        : user.role === 'moderator'
                                                        ? 'bg-yellow-200 text-yellow-800 font-black'
                                                        : 'bg-blue-200 font-black text-blue-800'
                                                }`}
                                            >
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 text-center  flex justify-around space-x-4 ">
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                className="bg-gray-100 border border-gray-300 rounded-xl px-2 py-1 focus:outline-none text-black"
                                            >
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                                <option value="moderator">Moderator</option>
                                            </select>

                                            {/* Delete button */}
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="hover:text-red-200  bg-green-300 px-2 py-2 text-black rounded-lg bg-red-450 focus:outline-none"
                                                title="Delete User"
                                            >
                                               <RiDeleteBin5Line className='text-xl' /> 
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Users;
