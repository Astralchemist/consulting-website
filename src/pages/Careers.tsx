import React from 'react';

const Careers: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Careers</h1>
            <p className="mb-4">Join our team and help us shape the future of consulting. We are looking for talented individuals who are passionate about their work and eager to make an impact.</p>
            <h2 className="text-2xl font-semibold mb-2">Current Openings</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Consultant - Construction Outsourcing</li>
                <li>Portfolio Manager</li>
                <li>Sales Executive - Automobile Sales</li>
                <li>Software Developer - Developer Solutions</li>
                <li>Mergers and Acquisitions Analyst</li>
                <li>Company Consultant</li>
            </ul>
            <p>If you are interested in any of the above positions, please send your resume to <a href="mailto:hr@consultingfirm.com" className="text-blue-500">hr@consultingfirm.com</a>.</p>
        </div>
    );
};

export default Careers;