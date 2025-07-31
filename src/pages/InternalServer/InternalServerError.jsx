import React from 'react';
import errorImage from '../../assets/InternalServer.jpg';

const Error500 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <img
                src={errorImage}
                alt="500 Internal Server Error"
                className="max-w-md w-full mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">500 - Internal Server Error</h1>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
                Oops! Something went wrong on our end. Please try again later or go back to the homepage.
            </p>
            <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Back to Home
            </a>
        </div>
    );
};

export default Error500;
