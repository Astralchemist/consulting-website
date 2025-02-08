// src/components/common/Newsletter.tsx

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Add subscription logic here
        setSuccess(true);
        setEmail('');
    };

    return (
        <div className="newsletter">
            <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded-md flex-grow"
                    required
                />
                <button type="submit" className="mt-2 md:mt-0 md:ml-2 p-2 bg-blue-500 text-white rounded-md">
                    Subscribe
                </button>
            </form>
            {success && <p className="mt-2 text-green-500">Thank you for subscribing!</p>}
        </div>
    );
};

export default Newsletter;