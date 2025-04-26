import personImg from '../assets/27.png'; // use your image path here
import img2 from '../assets/trusty1.jpg'; // use your image path here
import img3 from '../assets/trusty2.jpg'; // use your image path here
import img1 from '../assets/trusty3.jpg'; // use your image path here

const teamMembers = [
    { name: "SHRI MOHAN SHAMJI GOHIL", role: "CHAIRMAN", location: "CHUMBA" },
    { name: "SHRI BHUSHAN TRIMBAKRAO MAHAJAN", role: "SECRETARY", location: "S.N. KELYA" },
    { name: "SHRI SATISH MANIKRAO TAKE", role: "ASSOCIATE SECRETARY", location: "CHUMBA" },

];

const memberImages = [
    img1,
    img2,
    img3,
];

const teacherNames = [
    // { name: "Baban Ramchandra Shinde" },
    { name: "Kirtee Sandeep Bhosale" },
    { name: "Sarang Omprakash Sangwai" },
    { name: "Rakesh Uttam Kamble" },
    { name: "Sachin Dinesh Gangurde" },
    { name: "Dinesh Chhotelal Meshram" },
    { name: "Sudhir Subhash Patil" },
    { name: "Chaitanya Moro Pawagi" },
    { name: "Rajendra M. Kulkarni" },
    { name: "Geeta Santosh Kalse" },
    { name: "Rohit Harishchandra Koli" },
    { name: "Parag Keshaorao Deshmukh" },
    { name: "Niraj Anilrao Kalaskar" },
    { name: "Atul Arvind Saoji" },
    { name: "Dhananjay Keshav Honmane" },
    { name: "Rajendra Sadashiv Sapkale" },
    { name: "Akash Kadao" },
    { name: "Rahulkumar I. Gajbhiye" },
    { name: "Umesh Sureshrao Adgaonkar" },
    { name: "Kirankumar G. Jinturkar" },
    { name: "Vinod Sahebrao Marathe" },
    { name: "Suresh Dattatray Borhade" },
    { name: "Sangita Sunil Azgaonkar" },
    { name: "Nitin Govind Thakur" },
    { name: "Ravi Shankar Gawari" },
    { name: "Neelesh S Choudhary" },
    { name: "Vaibhav Sudhakar Kadam" },
    { name: "Vitthal Bapu Kshirsagar" },
    { name: "Padmakar S. Talvadekar" },
    { name: "Prashant Namdev Bane" },
    { name: "Rajashri Subhash Nakhate" },
    { name: "Manjunath K. Bandekar" },
    { name: "Prashant Madhavrao Dalal" },
    { name: "Mangesh Anil Gaware" },
    { name: "Jitendra Vinayak More" },
    { name: "Harish Ghugare" },
    { name: "Bhavikkumar J. Patel" },
    { name: "Ashok Chatla" },
    { name: "Dinkar Ramu Kanekar" },
    { name: "Madhura Tanmay Thakoor" },
    { name: "Vaibhav Sakharam Dubale" },
    { name: "Sandeep Sawant" },
    { name: "Pravin Pandit Raorane" },
    { name: "Mahendra Mangesh Vichare" },
    { name: "Shailesh Digamber Tendulkar" },
    { name: "Kailash Sakharam Jaybhaye" }
];

const cards = Array.from({ length: 47 }, (_, i) => {
    const teacher = teacherNames[i % teacherNames.length];

    // Each row has 4 items => row index = Math.floor(i / 4)
    const isOddRow = Math.floor(i / 4) % 2 !== 0;

    return (
        <div
            key={i}
            className={`border border-gray-300 p-3 text-center text-sm font-medium text-gray-700 ${isOddRow ? "bg-gray-100" : ""
                }`}
        >
            <p className="font-semibold">{teacher.name}</p>
            <p className="text-orange-500 text-xs">{teacher.role}</p>
        </div>
    );
});


export default function TeamGrid() {
    return (
        <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-1 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:px-28 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative bg-black w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={memberImages[index]}
                                alt={member.name}
                                className="w-full h-96 object-fit object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                                <h2 className="text-white text-sm font-medium uppercase text-center">
                                    {member.name}
                                </h2>
                                <p className="text-yellow-400 text-xs font-semibold text-center">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 bg-blue-100 sm:px-20 flex items-center justify-center p-4">
                <div className="bg-white p-4 rounded-lg shadow-md w-full ">
                    <div className="sm:grid grid-cols-4 gap-px border border-blue-300">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
}
