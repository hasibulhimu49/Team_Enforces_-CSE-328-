
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="../../../public/not404.png" alt="" />
           
            <p className="text-2xl mb-4">Sorry, an unexpected error has occurred.</p>
            {error && <p className="text-gray-600">{error.statusText || error.message}</p>}
            <a href="/" className="px-4 py-2 bg-green-600 text-white rounded-lg mt-4">
                Go back to Home
            </a>
        </div>
    );
};

export default ErrorPage;
