import React from "react";

const secondaryClassData = [
  {
    title: "CLASS – X",
    total: 303,
    divisions: [
      { name: "APEX", count: 45 },
      { name: "CREST", count: 42 },
      { name: "PINACLE", count: 44 },
      { name: "VERTEX", count: 43 },
      { name: "ZENITH", count: 41 },
      { name: "ACME", count: 44 },
      { name: "SUMMIT", count: 44 },
    ],
  },
  {
    title: "CLASS – IX",
    total: 330,
    divisions: [
      { name: "CORAL", count: 43 },
      { name: "DIAMOND", count: 40 },
      { name: "EMERALD", count: 41 },
      { name: "RUBY", count: 42 },
      { name: "SAPPHIRE", count: 40 },
      { name: "TOPAZ", count: 39 },
      { name: "OPAL", count: 41 },
      { name: "PEARL", count: 44 },
    ],
  },
  {
    title: "CLASS – VIII",
    total: 328,
    divisions: [
      { name: "ASTER", count: 43 },
      { name: "CARNATION", count: 43 },
      { name: "DAFFODILS", count: 44 },
      { name: "DAISY", count: 44 },
      { name: "MARIGOLD", count: 43 },
      { name: "TULIP", count: 39 },
      { name: "LILY", count: 37 },
      { name: "LOTUS", count: 35 },
    ],
  },
  {
    title: "CLASS – VII",
    total: 336,
    divisions: [
      { name: "APRICOT", count: 42 },
      { name: "CHERRY", count: 42 },
      { name: "JAFFA", count: 42 },
      { name: "KIWI", count: 42 },
      { name: "OLIVE", count: 42 },
      { name: "PEACH", count: 43 },
      { name: "PLUM", count: 41 },
      { name: "PASSION", count: 42 },
    ],
  },
  {
    title: "CLASS – VI",
    total: 341,
    divisions: [
      { name: "BALLAD", count: 43 },
      { name: "EPIC", count: 42 },
      { name: "HAIKU", count: 43 },
      { name: "LIMERICK", count: 42 },
      { name: "LYRIC", count: 42 },
      { name: "OPERA", count: 42 },
      { name: "GSAGA", count: 44 },
      { name: "SONNET", count: 43 },
    ],
  },
  {
    title: "CLASS – V",
    total: 327,
    divisions: [
      { name: "FLUTE", count: 47 },
      { name: "GUITAR", count: 47 },
      { name: "PIANO", count: 47 },
      { name: "SANTOOR", count: 47 },
      { name: "SARANGI", count: 46 },
      { name: "SITAR", count: 46 },
      { name: "VEENA", count: 47 },
    ],
  },
];

const SecondarySection = () => {
  return (
    <div className="w-full py-8 text-center">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-20 border-t-2 border-blue-500" />
        <h2 className="text-xl md:text-2xl font-semibold font-playfair text-gray-800 uppercase">
          Students Strength | Secondary Section
        </h2>
        <div className="w-20 border-t-2 border-blue-500" />
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 gap-8">
        {secondaryClassData.map((cls, idx) => (
          <div
            key={idx}
            className="w-full h-full min-h-[300px] rounded-lg shadow-md overflow-hidden bg-[#002F5F]"
          >
            {/* Card Header */}
            <div className="bg-[#00AEEF] text-white text-lg font-semibold py-3">
              {cls.title}
            </div>

            {/* Card Body */}
            <div className="bg-[#003151] text-white py-4 px-5 h-full">
              <h4 className="text-yellow-400 text-xl text-base font-semibold mb-4">
                Total : {cls.total} Students
              </h4>
              <ul className="space-y-1 text-sm">
                {cls.divisions.map((division, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-gray-300 border-[#003F6D] py-2"
                  >
                    <span className="text-[#D9D9D969]/40 text-xl">
                      Division {String.fromCharCode(65 + i)} – {division.name}
                    </span>
                    <span className="text-[#00AFEF] text-xl">{division.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondarySection;