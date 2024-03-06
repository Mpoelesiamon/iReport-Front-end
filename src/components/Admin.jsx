import React, { useState, useEffect } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const AdminPage = () => {
  const [pendingReports, setPendingReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [adminReply, setAdminReply] = useState('');

  // Function to fetch pending reports from the backend
  const fetchPendingReports = () => {
    const dummyReports = [
      {
        id: 1,
        user: {
          name: 'John Doe',
          email: 'john@example.com',

        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        location: 'New York',
        media: 'data:image/jpeg;base64,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',
        status: 'Pending',
      },
      // Add more dummy reports as needed
    ];
    setPendingReports(dummyReports);
  };

  // Function to handle admin actions on a report
  const handleAdminAction = (action) => {
    // Implement logic to update report status in the backend
    // For simplicity, I'm just updating the status locally
    const updatedReports = pendingReports.map(report => {
      if (report.id === selectedReport.id) {
        return { ...report, status: action };
      }
      return report;
    });
    setPendingReports(updatedReports);
  };

  // Function to handle admin reply submission
  const handleAdminReplySubmit = () => {
    // Implement logic to submit admin reply to the backend
    // For simplicity, I'm just updating the selected report locally
    const updatedReport = { ...selectedReport, adminReply };
    setSelectedReport(updatedReport);
    setAdminReply('');
  };

  // Fetch pending reports when component mounts
  useEffect(() => {
    fetchPendingReports();
  }, []);

  return (
    <div className='flex justify-center my-10 mt-[200px] w-auto'>
      <div className='flex justify-center flex-col items-center w-auto h-[500px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
        <div className='text-center my-5'>
          <h1 className='font-semibold'>Admin Dashboard</h1>
        </div>
        <div>
          <h2>Pending Reports</h2>
          <ul>
            {pendingReports.map(report => (
              <li key={report.id} onClick={() => setSelectedReport(report)}>
                {report.user.name} - {report.description}
              </li>
            ))}
          </ul>
        </div>
        {selectedReport && (
          <div>
            <h2>Report Details</h2>
            <div>
              <img src={selectedReport.media} alt='User Media' />
              <p>User: {selectedReport.user.name}</p>
              <p>Email: {selectedReport.user.email}</p>
              <p>Description: {selectedReport.description}</p>
              <p>Location: {selectedReport.location}</p>
              <p>Status: {selectedReport.status}</p>
            </div>
            <div>
              <h3>Admin Actions</h3>
              <button onClick={() => handleAdminAction('Under Investigation')}>Under Investigation</button>
              <button onClick={() => handleAdminAction('Report Rejected')}>Reject Report</button>
              <button onClick={() => handleAdminAction('Report Resolved')}>Mark as Resolved</button>
            </div>
            <div>
              <h3>Admin Reply</h3>
              <textarea value={adminReply} onChange={(e) => setAdminReply(e.target.value)} />
              <button onClick={handleAdminReplySubmit}>Submit Reply</button>
            </div>
          </div>
        )}
        <div>
          <h3>or login with:</h3>
          <div className='flex justify-between'>
            <FaGoogle className='cursor-pointer' />
            <FaApple className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
