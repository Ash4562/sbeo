import React from 'react';
import backgroundImage from '../assets/studentconcil.png'; // Make sure this path is correct

const councilData = [
  {
    year: '2024-25',
    captain: ['Parth Khoche'],
    viceCaptain: ['Avani Kale'],
    asstCaptain: [],
    asstViceCaptain: ['Madhura Mahajan'],
  },
  {
    year: '2019-20',
    captain: ['Sanika Deshpande', 'Aaviraj Nikumbh'],
    viceCaptain: ['Pratiksha Rathi', 'Ashmit Malani'],
    asstCaptain: ['Sakshi Shinde', 'Venkatesh Kshirsagar'],
    asstViceCaptain: ['Siddhi Totla', 'Shreyas Mundhe'],
  },
  {
    year: '2018-19',
    captain: ['Bhakti Patil', 'Parth Jamkhedkar'],
    viceCaptain: ['Krishna Deshpande', 'Soham Kulkarni'],
    asstCaptain: ['Anushka Bawdekar', 'Pranav Kalwaghe'],
    asstViceCaptain: ['Palak Upadhye', 'Aditya Ambilwade'],
  },
  {
    year: '2017-18',
    captain: ['Arya Kulkarni', 'Aditya Beedkar'],
    viceCaptain: ['Falguni Chavan', 'Arjun Dasalkar'],
    asstCaptain: ['Sai Bhilegaonkar', 'Anshul Kabra'],
    asstViceCaptain: ['Sanika Deshmukh', 'Prutha Pathak', 'Ketan Gawande'],
  },
  {
    year: '2016-17',
    captain: ['Shravani Dawale', 'Pushkar Kulkarni'],
    viceCaptain: ['Pranjal Wadekar', 'Anurag Pande'],
    asstCaptain: ['Rutuja Shastri', 'Prasad Jore'],
    asstViceCaptain: ['Ishwari Joshi', 'Jayraj Pawar'],
  },
  {
    year: '2014-15',
    captain: ['Akanksha Kharkar', 'Shantanu Rai'],
    viceCaptain: ['Gauri Manoj Kela', 'Kedar Manoj Kelkar'],
    asstCaptain: ['Sanjana Kotecha', 'Sharvari Nandedkar', 'Atharva Adhikari', 'Nishant Ingole'],
    asstViceCaptain: ['Bhagyashree Kathavi', 'Shreya Lohiya', 'Mihir Malani', 'Raj Bali'],
  },
];

const StudentCouncil = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Background */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        

        </div>
      </div>

      {/* Council Cards Section */}
      <div className="bg-[#f9fafb] py-12 px-4 md:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilData.map((yearData, index) => (
            <div
              key={index}
              className="bg-[#002b49] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-400 text-[#002b49] font-bold text-xl rounded-full w-24 h-24 flex items-center justify-center">
                  {yearData.year}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Student Council</h2>
              {yearData.captain.length > 0 ? (
                <div className="space-y-4 text-center text-sm">
                  <div>
                    <p className="text-yellow-400 font-semibold">🏆 Captain</p>
                    <p>{yearData.captain.join(' | ')}</p>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-semibold">⭐ Vice - Captain</p>
                    <p>{yearData.viceCaptain.join(' | ')}</p>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-semibold">🏅 Asst - Captain</p>
                    <p>{yearData.asstCaptain.join(' | ') || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-yellow-300 font-semibold">🥇 Asst Vice - Captain</p>
                    <p>{yearData.asstViceCaptain.join(' | ')}</p>
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-300">No Data Available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCouncil;
