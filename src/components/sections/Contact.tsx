import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-300">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-8">We'd love to hear from you! Please fill out the form below to get in touch.</p>
            <form className="w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows={4}
                        placeholder="Your Message"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;