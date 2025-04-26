import React from 'react'
import Pass from '../assets/Variant3.png'
import img from "../assets/toopers.png";
import img1 from "../assets/Rank I - Phulambrikar Parth Arunkumar.jpg";
import img2 from "../assets/Rank II - Dandime Prasad Chandraprakash.jpg";
import img3 from "../assets/Rank III - Janhavi Gavale Pankaj.jpg";
import img4 from "../assets/Rank III - Patil Samruddhi Santosh.jpg";
import img5 from "../assets/Rank IV - Dutonde Anushka Vijay.jpg";
import img6 from "../assets/Rank V - Dahibhate Tanvi Kiran.jpg";
import img7 from "../assets/Rank V - Sarkate Ayushka Chandrakant.jpg";
import img8 from "../assets/Rank VI - Mahashabde Shreya Shripad.jpg";
import AboutHero from './AboutHero';


function Ssc() {
  const AlltoppersData = [
    {
      year: "2023-24",
      ranks: [
        { rank: "I", name: "Parth Phulambrikar", percentage: "97.60%" },
        { rank: "II", name: "Prasad Dandime", percentage: "97.40%" },
        { rank: "III", names: ["Samruddhi Patil", "Janhavi Gavhale"], percentage: "97.20%" }
      ]
    },
    {
      year: "2022-23",
      ranks: [
        { rank: "I", name: "Somde Jayraj", percentage: "98.40%" },
        { rank: "II", names: ["Dheple Anushka", "Yashaswi Kulkarni"], percentage: "97.40%" },
        { rank: "III", names: ["Sarvadnya Khadke", "Vaidehi Patil"], percentage: "97.20%" }
      ]
    },
    {
      year: "2021-22",
      ranks: [
        { rank: "I", name: "Sanjana Patel", percentage: "100%" },
        { rank: "II", name: "Mihika Jinturkar", percentage: "98.60%" },
        { rank: "III", name: "Varad Gadekar", percentage: "97.60%" }
      ]
    },
    {
      year: "2020-21",
      ranks: [
        { rank: "I", name: "Dharmadhikari Tanishka Shrikrishna", percentage: "100%" },
        { rank: "II", name: "Baheti Gauri Gopal", percentage: "99.40%" },
        { rank: "III", name: "Deshmukh Pradyumna Prashant", percentage: "99.00%" }
      ]
    },
    {
      year: "2019-20",
      ranks: [
        { rank: "I", name: "Arnavee Gite", percentage: "98.60%" },
        { rank: "II", name: "ARPAN SHITRE", percentage: "98.20%" },
        { rank: "III", names: ["Kush Mahajan", "Anushka Guthe"], percentage: "98%" }
      ]
    },
    {
      year: "2018-19",
      ranks: [
        { rank: "I", name: "Dhanashree Bedwal", percentage: "99.20%" },
        { rank: "II", name: "Sudhanva Borde", percentage: "97.60%" },
        { rank: "III", name: "Ritesh Patil", percentage: "97.20%" }
      ]
    },
    {
      year: "2017-18",
      ranks: [
        { rank: "I", name: "Prajyot Jadhav", percentage: "98.60%" },
        { rank: "II", names: ["Akshay Kala", "Sneha Nandedkar", "Shravani Dawale"], percentage: "98.00%" },
        { rank: "III", names: ["Janhavi Ghuge", "Siddhi Rangdal", "Madhura Radikar"], percentage: "97.80%" }
      ]
    },
    {
      year: "2016-17",
      ranks: [
        { rank: "I", name: "Sahil Patil", percentage: "100%" },
        { rank: "II", name: "Dhanshree Lavekar", percentage: "99.80%" },
        { rank: "III", names: ["Siddhant Bedmutha", "Shrirang Pathak", "Isha Bakshi", "Atharva Takalkar"], percentage: "98.60%" }
      ]
    },
    {
      year: "2015-16",
      ranks: [
        { rank: "I", name: "Anuja Bidve", percentage: "97.80%" },
        { rank: "II", name: "Rajeshwari Chillarge", percentage: "97.60%" },
        { rank: "III", names: ["Shweta Kulkarni", "Onkar Sabnis"], percentage: "97.00%" }
      ]
    },
    {
      year: "2014-15",
      ranks: [
        { rank: "I", names: ["Janhavi Kulkarni", "Nikita Pande"], percentage: "98.20%" },
        { rank: "II", name: "Sakshi Bhalchandra", percentage: "97.60%" },
        { rank: "III", names: ["Medha Patki", "Ruchita Pande", "Kaushik Somani", "Tanmay Kulkarni"], percentage: "97.40%" }
      ]
    },
    {
      year: "2013-14",
      ranks: [
        { rank: "I", name: "Puneet Nemade", percentage: "98.00%" },
        { rank: "II", names: ["Namrata Laddha", "Utkarsha Mayee"], percentage: "97.60%" },
        { rank: "III", name: "Aditya Chede Patil", percentage: "97.40%" }
      ]
    },
    {
      year: "2012-13",
      ranks: [
        { rank: "I", name: "Mitali Bante", percentage: "98.55%" },
        { rank: "II", name: "Prajkta Kale", percentage: "97.45%" },
        { rank: "III", name: "Divya Choudhary", percentage: "97.27%" }
      ]
    },
    {
      year: "2011-12",
      ranks: [
        { rank: "I", names: ["Kajal Patil", "Devyani Sarode"], percentage: "97.27%" },
        { rank: "II", name: "Vishwajit Sangle", percentage: "97.09%" },
        { rank: "III", name: "Sakshi Patil", percentage: "96.55%" }
      ]
    },
    {
      year: "2010-11",
      ranks: [
        { rank: "I", name: "Mitali Sharma", percentage: "98.36%" },
        { rank: "II", names: ["Ayushi Thapar", "Pratik Shahne"], percentage: "97.45%" },
        { rank: "III", name: "Sujay Kacheshwar", percentage: "97.27%" }
      ]
    },
    {
      year: "2009-10",
      ranks: [
        { rank: "I", name: "Sharayu Kachole", percentage: "97.09%" },
        { rank: "II", name: "Sharvari Kangarkar", percentage: "96.36%" },
        { rank: "III", name: "Akash Jadhav", percentage: "96.00%" }
      ]
    },
    {
      year: "2008-09",
      ranks: [
        { rank: "I", name: "Rutuja Nyayashish", percentage: "95.69%" },
        { rank: "II", name: "Sanhita Bidarkar", percentage: "95.23%" },
        { rank: "III", name: "Surabhi Pradhan", percentage: "95.07%" }
      ]
    },
    {
      year: "2007-08",
      ranks: [
        { rank: "I", name: "Shweta Keley", percentage: "94.61%" },
        { rank: "II", name: "Neha Kulkarni", percentage: "94.30%" },
        { rank: "III", name: "Madhura Aradhye", percentage: "93.84%" }
      ]
    },
    {
      year: "2006-07",
      ranks: [
        { rank: "I", name: "Ankita Patil", percentage: "92.46%" },
        { rank: "II", name: "Himaja Kendregula", percentage: "91.38%" },
        { rank: "III", name: "Bhakti Patare", percentage: "91.23%" }
      ]
    },
    {
      year: "2005-06",
      ranks: [
        { rank: "I", name: "Aditi Kolte", percentage: "93.46%" },
        { rank: "II", name: "Sindhu Bhargav", percentage: "92.80%" },
        { rank: "III", name: "Prajkata Kolhe", percentage: "92.13%" }
      ]
    },
    {
      year: "2004-05",
      ranks: [
        { rank: "I", name: "Neha Suryavanshi", percentage: "91.46%" },
        { rank: "II", name: "Rushikesh Tandale", percentage: "88.80%" },
        { rank: "III", name: "Amey Purandare", percentage: "88.40%" }
      ]
    },
    {
      year: "2003-04",
      ranks: [
        { rank: "I", name: "Aniket Paratkar", percentage: "89.89%" },
        { rank: "II", name: "Varsha Chungde", percentage: "89.87%" },
        { rank: "III", name: "Varsha Chungde", percentage: "89.73%" }
      ]
    },
    {
      year: "2002-03",
      ranks: [
        { rank: "I", name: "Shweta Pathak", percentage: "91.46%" },
        { rank: "II", name: "Suyash Kabra", percentage: "90.26%" },
        { rank: "III", name: "Sheetal Patil", percentage: "90.13%" }
      ]
    },
    {
      year: "2001-02",
      ranks: [
        { rank: "I", name: "Aditya Hastak", percentage: "85.87%" },
        { rank: "II", name: "Gaurav Joshi", percentage: "78.66%" },
        { rank: "III", name: "Deepika Dhande", percentage: "77.60%" }
      ]
    }
  ];

  const toppersData = [
    {
      year: "2023-24",
      ranks: [
        { 
          rank: "I", 
          name: "PHULAMBRIKAR PARTH ARUNKUMAR", 
          percentage: "97.60%", 
          image: img1
        },
        { 
          rank: "II", 
          name: "DANDIME PRASAD CHANDRAPRAKASH", 
          percentage: "97.40%", 
          image: img2
        },
        {
          rank: "III",
          name: "GAVHALE JANHAVI PANKAJ",
          percentage: "97.20%",
          image: img3
        },
        {
          rank: "IV",
          name: "PATIL SAMRUDDHI SANTOSH",
          percentage: "97.20%",
          image: img4
        },
        {
          rank: "V",
          name: "DOTONDE ANUSHKA VIJAY",
          percentage: "97.00%",
          image: img5
        },
        {
          rank: "VI",
          name: "SARKATE AYUSHKA CHANDRAKANT",
          percentage: "96.80%",
          image: img6
        },
        {
          rank: "VII",
          name: "DAHIBHATE TANVI KIRAN",
          percentage: "96.80%",
          image: img7
        },
        {
          rank: "VIII",
          name: "MAHASHABDE SHREYA SHRIPAD",
          percentage: "96.40%",
          image: img8
        }
      ]
    },
  ];
  
  




  return (
    <>
          {/* <AboutHero/> */}
      <div
        // className="relative h-screen w-full bg-cover bg-center bg-[url(`/NCCBGSmallScreen.png`)] md:url-[url('/NCCBG.png')]"
        // style={{ backgroundImage: `url(/NCCBG.png)` }}
        style={{ backgroundImage: `url(${img})` }} className="relative h-screen w-full bg-cover bg-center "
      >
        <p className="text-4xl font-playfair text-center text-white items-center justify-center flex md:hidden">
          ACADEMIC MOMENTS
        </p>

      </div>

      <div className='font-playfair py-9 tracking-[5%] bg-[#E0F5FD] rounded-lg m-4'>
                <div>
                    <h1 className='text-[#003151] mb-3 font-playfair font-bold text-[39px] pl-24'>OUR SSC TOPPERS</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 sm:px-16 md:px-24'>
  {toppersData.map((yearData) =>
    yearData.ranks.map((topper, index) => (
      <div
        key={`${yearData.year}-${topper.rank}-${index}`}
        className='bg-white rounded-lg shadow-md text-center'
      >
        <div className='bg-[#003151] py-2'>
          <img
            className='mx-auto w-32 h-48 object-contain'
            src={topper.image}
            alt={`Topper ${topper.rank}`}
          />
        </div>

        <h2 className='text-lg font-semibold'>
          {topper.name}
        </h2>

        <p className='text-lg text-[#FFCC33] font-semibold'>
          Rank {topper.rank} - {topper.percentage}
        </p>
      </div>
    ))
  )}
</div>



            

            </div>


      <div className="grid font-playfair grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {AlltoppersData.map((yearData, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${Pass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-52 text-white shadow-lg rounded-xl overflow-hidden"
          >
            <div className="w-full h-full p-3 flex flex-col items-center justify-between">
              <h1 className="text-lg font-bold text-[#003151]">{yearData.year}</h1>
              <div className="space-y-1 text-xs my-2">
                {yearData.ranks.map((rankData, idx) => (
                  <p key={idx}>
                    <span className="font-semibold text-sm text-[#FFD139]">Rank {rankData.rank} :</span>{" "}
                    <span className='text-lg'>Arnavee Gite {rankData.percentage}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}

export default Ssc;