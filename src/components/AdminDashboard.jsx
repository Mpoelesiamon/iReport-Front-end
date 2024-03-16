import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Admin = () => {
    const [reports] = useState([
        { id: 1, title: 'Report 1', description: 'Description of Report 1' },
        { id: 2, title: 'Report 2', description: 'Description of Report 2' },
        { id: 3, title: 'Report 3', description: 'Description of Report 3' },

    ]);

    const handleAdminReply = (reply) => {
        console.log('Admin replied:', reply);
    };

    const navigate = useNavigate();

    const handleButtonClick = () =>{
        navigate('/viewReport')
    }

    return (
        <div>
            <NavBar />
            <div className='text-white'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6 text-black'>PAST REPORTED CLAIMS/REPORTS</h1>
                    {reports.map((report) => (
                        <div key={report.id} className="my-2 p-2 border border-gray-300 rounded-lg">
                            <h2 className="text-xl font-bold">{report.title}</h2>
                            <p className="text-gray-600">{report.description}</p>
                            <Link to={`/report/${report.id}`}>
                                <button onClick={handleButtonClick} className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500'>View Report</button>
                            </Link>
                            <div className="mt-2">
                                <button className="mr-2 bg-green-500 text-white py-2 px-4 rounded-md" onClick={() => handleAdminReply('Report under investigation')}>
                                    Report under investigation
                                </button>
                                <button className="mr-2 bg-red-500 text-white py-2 px-4 rounded-md" onClick={() => handleAdminReply('Report Rejected')}>
                                    Report Rejected
                                </button>
                                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md" onClick={() => handleAdminReply('Report Resolved')}>
                                    Report Resolved
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
