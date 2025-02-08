import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example project cards */}
                <div className="card">
                    <h2 className="text-2xl font-semibold">Project Title 1</h2>
                    <p className="text-gray-600">Brief description of the project.</p>
                </div>
                <div className="card">
                    <h2 className="text-2xl font-semibold">Project Title 2</h2>
                    <p className="text-gray-600">Brief description of the project.</p>
                </div>
                <div className="card">
                    <h2 className="text-2xl font-semibold">Project Title 3</h2>
                    <p className="text-gray-600">Brief description of the project.</p>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </div>
    );
};

export default Portfolio;