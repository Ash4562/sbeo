import React, { useState } from "react";
import L from "/src/assets/SBOA_logo2.png";
import GM from "/src/assets/goldMedal.png";
import N1 from "/src/assets/ncc1.png";
import N2 from "/src/assets/ncc2.png";
import N3 from "/src/assets/ncc003.jpg";
import N4 from "/src/assets/ncc004.jpg";
import N5 from "/src/assets/ncc005.jpg";
import N6 from "/src/assets/ncc006.jpg";
import N7 from "/src/assets/ncc007.jpg";
import AboutHero from "./AboutHero";

// const yearData = {
//   "2019-20": {
//     text: `NCC cadets of our school received scholarship as Best cadets of Maharashtra from 50BN NCC Aurangabad. Both the cadets were felicitated by commanding officer Col. ManojSirohi in the presence of ADM. Officer Lt.Col. AbhijeetBarve. Both of them appreciated the hard work of our cadets during camps. Both the Cadets attended 7 camps each of 10 days. Scholarship announced as follows:`,
//     cadets: [
//       {
//         name: "CDT. Manali Joshi",
//         prize: "Best Cadet. 1st cash prize, Rs 4500/-",
//         img: N2,
//       },
//       {
//         name: "CDT. SrushtiPatil",
//         prize: " Best Cadet. 2nd cash prize, Rs. 3500/-",
//         img: N1,
//       },
//     ],
//     medalImg: GM,
//   },
//   "2018-19": {
//     text: `NCC Cadets RutujaGutte & SayaliWarudkar are felicitated by S.B.O.A. Public School for their achievements at N.C.C Camps at Dehli.

// `,
//     cadets: [
//       //   { name: "CDT. Priya R.", prize: "Rs. 4500/-", img: N1 },
//       //   { name: "CDT. Suraj Singh", prize: "Rs. 3500/-", img: N2 },
//     ],
//     medalImg: GM,
//   },
//   "2017-18": {
//     text: `Cadet SayaliWarudkar and RutujaGutte represented SBOA at Dehli.
// Both were for Republic Day Camp for 4 months at Aurangabad Cantonment. Interbatallion competition were held. After the Interbatallian Competitions SayaliWarudkar was selected as Best Cadet. Both of them arrived at Delhi on 29th Dec. They participated in many competitions. Sayli participated in Central Cultural programme, which was performed at PM’s House and Rutuja participated in Cultural programme, which was presented before VIP. They visited RashtrapatiBhavan and PM’s House and interacted with PM of India. They even met Vice president, CM of Delhi, Defence Minister and the three Chiefs of the Defence Forces. For the year 2016-17,SakshiRathod from std IX was selected in marching contingent of Junior Wing & Junior Division and also selected for “ Central Cultural” at President’s house at Delhi on 27th January 2017. She was the one from among the 12 cadets from India to perform Bharatnatyam , . She was the only cadet from ‘Junior Wing’ in NIAP National Integration Awareness presentation)
// `,
//     cadets: [
//       //   { name: "CDT. Priya R.", prize: "Rs. 4500/-", img: N1 },
//       //   { name: "CDT. Suraj Singh", prize: "Rs. 3500/-", img: N2 },
//     ],
//     medalImg: GM,
//   },
//   "2016-17": {
//     text: `NCC cadets participated in a cleanliness drive under Swachh Bharat Mission.`,
//     cadets: [
//       { name: "CDT. Tanya Bhatt", prize: "Rs. 4000/-", img: N1 },
//       { name: "CDT. Vishal Joshi", prize: "Rs. 3200/-", img: N2 },
//     ],
//     medalImg: GM,
//   },
//   "2014-15": {
//     text: `CDTs completed mountaineering camp and first aid training at regional HQ.`,
//     cadets: [
//       { name: "CDT. Shruti N.", prize: "Rs. 3700/-", img: N1 },
//       { name: "CDT. Kunal Patel", prize: "Rs. 3000/-", img: N2 },
//     ],
//     medalImg: GM,
//   },
//   "2013-14": {
//     text: `Cadets from this year proudly represented the school in inter-school NCC quiz and drill competitions.`,
//     cadets: [
//       { name: "CDT. Ria Mehra", prize: "Rs. 3400/-", img: N1 },
//       { name: "CDT. Aman Yadav", prize: "Rs. 2900/-", img: N2 },
//     ],
//     medalImg: GM,
//   },
//   "2012-13": {
//     text: `Introduction of adventure camps and weekly drill competitions raised cadet enthusiasm.`,
//     cadets: [
//       { name: "CDT. Anjali T.", prize: "Rs. 3300/-", img: N1 },
//       { name: "CDT. Rohit K.", prize: "Rs. 2800/-", img: N2 },
//     ],
//     medalImg: GM,
//   },
// };

const yearData = {
  "2019-20": {
    text: `NCC cadets of our school received scholarship as Best cadets of Maharashtra from 50BN NCC Aurangabad. Both the cadets were felicitated by commanding officer Col. ManojSirohi in the presence of ADM. Officer Lt.Col. AbhijeetBarve. Both of them appreciated the hard work of our cadets during camps. Both the Cadets attended 7 camps each of 10 days. Scholarship announced as follows:`,
    cadets: [
      {
        name: "CDT. Manali Joshi",
        prize: "Best Cadet. 1st cash prize, Rs. 4500/-",
        img: N2,
      },
      {
        name: "CDT. SrushtiPatil",
        prize: "Best Cadet. 2nd cash prize, Rs. 3500/-",
        img: N1,
      },
    ],
    medalImg: GM,
  },
  "2018-19": {
    text: `NCC Cadets RutujaGutte & SayaliWarudkar are felicitated by S.B.O.A. Public School for their achievements at N.C.C Camps at Dehli.`,
    cadets: [
      // Add details for cadets if available
    ],
    medalImg: GM,
  },
  "2017-18": {
    text: `Cadet SayaliWarudkar and RutujaGutte represented SBOA at Delhi. Both participated in the Republic Day Camp at Aurangabad Cantonment for 4 months. After the Interbattalion competition, SayaliWarudkar was selected as Best Cadet. Both cadets attended various cultural programs, including a central cultural program performed at PM’s House. They interacted with key political and military figures, including the Prime Minister and Defence Minister of India.`,
    cadets: [
      { name: "CDT. SayaliWarudkar", prize: "", img: N3 },
      { name: "CDT. RutujaGutte", prize: "", img: N4 },
    ],
    medalImg: GM,
  },
  "2014-15": {
    text: `Srushti Loyawas selected as marching contingent in Republic day Parade at New Delhi. She participated in cultural fest and won Bronze Medal for Maharashtra ( Group dance ). .She was the only cadet from junior wing to represent Maharashtra in cultural events.`,
    cadets: [
      //   { name: "CDT. Srushti Loyawas", prize: "", img: N5 },
      //   { name: "CDT. Kunal Patel", prize: "Rs. 3000/-", img: N2 },
    ],
    medalImg: GM,
  },
  "2013-14": {
    text: `Miss VinayaKulkarni selected as All India Best Cadet –Rank –III and Miss SamruddhiDharankar selected in Maharashtra Directed Marching contingent.



`,
    cadets: [
      //   { name: "CDT. Pooja Yadav", prize: "", img: N6 },
      //   { name: "CDT. Aman Yadav", prize: "Rs. 2900/-", img: N2 },
    ],
    medalImg: GM,
  },
  "2011-12": {
    text: `Gayatri Zalwara brilliant and versatile NCC Cadet and the student of Standard X brought laurels to the school by her noteworthy performance at New Delhi on 26th January 2013. She has been awarded as the Best Cadet of Maharashtra (Junior Wing). She was selected for RDC from among 2 Lakhs cadets of Maharashtra. She represented the state at Prime Ministers Rally on 28th January 2013. Andwas also selected for Tray Drill for Ministers and Chief of Army and the Air force.

`,
    cadets: [
      { name: "CDT. Pooja Yadav", prize: "", img: N5 },
      //   { name: "CDT. Aman Yadav", prize: "Rs. 2900/-", img: N2 },
    ],
    medalImg: GM,
  },
  "2012-13": {
    text: `Gayatri Zalwara brilliant and versatile NCC Cadet and the student of Standard X brought laurels to the school by her noteworthy performance at New Delhi on 26th January 2013. She has been awarded as the Best Cadet of Maharashtra (Junior Wing). She was selected for RDC from among 2 Lakhs cadets of Maharashtra. She represented the state at Prime Ministers Rally on 28th January 2013. Andwas also selected for Tray Drill for Ministers and Chief of Army and the Air force.

`,
    cadets: [
      { name: "CDT. Pooja Yadav", prize: "", img: N5 },
      //   { name: "CDT. Aman Yadav", prize: "Rs. 2900/-", img: N2 },
    ],
    medalImg: GM,
  },
  "2010-11": {
    text: `Awanti Deshmukh and Ruchita Sakhare laid the foundation by attending Pre- RD camp & “ THE GOLDEN GIRL” MISS DEVIKA TADWALKARreached the pinnacle . DevikaTadwalkarwas awarded as The Best Cadet of INDIA on Republic Day by Hon’ble Prime Minister Shri. Manmohan Singh.
Best Briefer at Flag Area.
Received Prestigious Prime Minister Baton Award.
Interviewed by DD Sahyadri.
`,
    cadets: [{ name: "CDT. Devika ", prize: "", img: N7 }],
    medalImg: GM,
  },
};

function Ncc() {
  const [selectedYear, setSelectedYear] = useState("2019-20");
  const content = yearData[selectedYear];

  const years = Object.keys(yearData);

  return (
    <div>
            <AboutHero/>
      <div
        // className="relative h-screen w-full bg-cover bg-center bg-[url(`/NCCBGSmallScreen.png`)] md:url-[url('/NCCBG.png')]"
        // style={{ backgroundImage: `url(/NCCBG.png)` }}
        className="relative h-screen w-full bg-cover bg-center bg-[url('/NCCBGSmallScreen.png')] md:bg-[url('/NCCBG.png')]"
      >
        <p className="text-4xl font-playfair text-center text-white items-center justify-center flex md:hidden">
          CO - CURRICULAR
        </p>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 font-playfair"></div>
      </div>

      <div className="font-poppins mx-4 sm:mx-10 my-5">
        <div className="bg-[#E0F5FD6B] text-center px-3 py-3">
          <img className="mx-auto w-28 sm:w-40 lg:w-48" src={L} alt="" />
          <h1 className="font-playfair text-xl sm:text-2xl lg:text-3xl py-2">
            NCC
          </h1>
          <p className="pb-3 text-sm sm:text-base">
            NCC was introduced from 2002-03 academic year for Girls students for
            Std. 8th to 10th.
          </p>
        </div>

        {/* Tabs */}
        <nav className="">
          <ul className="flex flex-wrap justify-center gap-3 font-playfair text-[#003151] pt-5 items-center">
            {years.map((year) => (
              <li
                key={year}
                className={`cursor-pointer text-lg lg:text-2xl border px-2 lg:px-3 py-1 rounded-t-2xl ${
                  selectedYear === year ? "bg-[#003151] text-white" : ""
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </li>
            ))}
          </ul>
          <div className="border-b-2 border-[#00315145] mt-2"></div>
        </nav>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-center">
          <div className="bg-[#E0F5FD6B] px-4 sm:px-6 py-6 sm:py-12 text-[#00000096] h-auto">
            <p className="text-[14px] tracking-wide leading-7">
              {content.text}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="h-52 sm:h-64 md:h-72 sm:pt-8 lg:h-80"
              src={content.medalImg}
              alt=""
            />
          </div>
        </div>

        {/* Cadets */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-10 lg:px-48 tracking-wide mb-10 text-[15px]">
          {content.cadets.map((cadet, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* <img className="h-60 sm:h-64 md:h-72" src={cadet.img} alt="" /> */}
              <img className="w-full" src={cadet.img} alt="" />
              <p className="text-center text-[#003151] mt-2">
                {cadet.name} <br />
                {cadet.prize}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ncc;