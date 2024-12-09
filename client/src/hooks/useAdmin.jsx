import { useState, useEffect } from "react";
import useAuth from "./useAuth";

// const useAdmin = () => {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Static check for admin, you can change this to true or false based on the test user
//         const userRole = "admin"; // Can be "admin" or "user"
        
//         if (userRole === "admin") {
//             setIsAdmin(true);
//         } else {
//             setIsAdmin(false);
//         }

//         setLoading(false);
//     }, []);

//     return [isAdmin, loading];
// };

// export default useAdmin;

const useAdmin = () => {
    const {user} = useAuth();
    console.log(user?.email);
    const userEmail= user?.email;

    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the admin Gmail email
        const adminEmail = "sajidxoxo60@gmail.com"; // Change this to your admin Gmail

        // Check if the logged-in user's email matches the admin's email
        if (userEmail === adminEmail) {
            setIsAdmin(true); // This user is an admin
        } else {
            setIsAdmin(false); // All other users are regular users
        }

        setLoading(false); // End loading state
    }, [userEmail]); // Re-run the effect when the user's email changes

    return [isAdmin, loading];
};

export default useAdmin;