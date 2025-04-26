import React from "react";

const classData = [
  {
    title: "CLASS - I",
    total: 232,
    divisions: [
      { name: "ECLAIRS", count: 38 },
      { name: "PERK", count: 39 },
      { name: "MELODY", count: 38 },
      { name: "POLO", count: 39 },
      { name: "MUNCH", count: 39 },
      { name: "GEMS", count: 39 },
    ],
  },
  {
    title: "CLASS - II",
    total: 287,
    divisions: [
      { name: "PARROT", count: 41 },
      { name: "EAGLE", count: 40 },
      { name: "PIGEON", count: 41 },
      { name: "OSTRICH", count: 41 },
      { name: "DUCK", count: 42 },
      { name: "LARK", count: 41 },
      { name: "PEACOCK", count: 41 },
    ],
  },
  {
    title: "CLASS - III",
    total: 327,
    divisions: [
      { name: "VENUS", count: 39 },
      { name: "SATURN", count: 39 },
      { name: "NEPTUNE", count: 39 },
      { name: "MARS", count: 39 },
      { name: "MERCURY", count: 39 },
      { name: "JUPITOR", count: 39 },
      { name: "URANUS", count: 39 },
      { name: "EARTH", count: 42 },
    ],
  },
  {
    title: "CLASS - IV",
    total: 336,
    divisions: [
      { name: "TORANA", count: 43 },
      { name: "RAJGAD", count: 41 },
      { name: "VIJAYDURG", count: 41 },
      { name: "SHIVNERI", count: 43 },
      { name: "ZANZIRA", count: 42 },
      { name: "SINHAGAD", count: 40 },
      { name: "PRATAPGAD", count: 43 },
      { name: "SINDHUDURG", count: 43 },
    ],
  },
];
const divisions = [
  "CREST",
  "APEX",
  "PINNACLE",
  "VERTEX",
  "ZENITH",
  "ACME",
  "SUMMIT",
];

export default function StudentStrength() {
  return (
    <div className="bg-white min-h-screen p-6">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-20 border-t-2 border-blue-500" />
        <h2 className="text-xl text-center md:text-2xl font-playfair font-semibold text-gray-800 uppercase">
          Students Strength | Pre-Primary Section
        </h2>
        <div className="w-20 border-t-2 border-blue-500" />
      </div>
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {classData.map((classItem, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md bg-[#003151]"
          >
            {/* Card Header */}
            <div className="bg-sky-500 text-white text-center py-2 font-medium text-2xl font-poppins tracking-wide">
              {classItem.title}
            </div>

            {/* Card Body */}
            <div className="bg-[#003151] text-white px-6 py-4">
              <div className="text-yellow-300 font-semibold text-center text-xl mb-3">
                Total : {classItem.total} Students
              </div>

              {/* Divisions */}
              {classItem.divisions.map((division, i) => (
                <div
                  key={i}
                  className="flex justify-between text-sm text-white/90 py-2"
                >
                  <span className="text-[#D9D9D9]/40 text-xl">
                    Division {String.fromCharCode(65 + i)} – {division.name}
                  </span>
                  <span className="text-[#00AFEF] text-xl">{division.count}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}