// filepath: /consulting-website/consulting-website/src/components/sections/Portfolio.tsx
import React from 'react';

const Portfolio: React.FC = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: '#'
        },
        // Add more projects as needed
    ];

    return (
        <section className="portfolio-section py-20 bg-black text-gray-300">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Our Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="mt-2">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;