import autism from "../assets/autism.jpg";
import React, { useState } from "react";
import "./gridviewVideos.css";
import JsonFile from "../assets/Deafness.json";

function Gridview({ index }) {
  let SubCategory = JsonFile[index].data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center items-center gap-1">
      {SubCategory.map((items, index) => (
        <div key={index} className="grid-item">
          <div className="flex flex-col items-center gap-5">
            {items.iframeSrc.includes("youtube.com/watch") ? (
              <iframe
                className="screensizes"
                src={items.iframeSrc.replace("watch?v=", "embed/")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                className="screensizes"
                src={items.iframeSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            <h3 className="text-sm">{items.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

function MainHeader() {
  return (
    <div className="h-64">
      <div className="flex items-center justify-center h-full">
        <div className="w-full h-full bg-gradient-to-r from-red-800 via-black to-blue-700 grayscale"></div>
        <div className="absolute px-4 text-center text-lg text-white">
          <h1 className="text-5xl p-5 sm:text-6xl lg:text-8xl">طيف التوحد</h1>
          <h4>كيف تتعامل مع المصابين بطيف التوحد</h4>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 pl-12 pr-12 pt-10 sm:pl-12 sm:pr-12 sm:pt-10 lg:pl-50 lg:pr-50 lg:pt-10 border-5 rounded border-black"
    >
      {JsonFile.map((SubCategory, index) => (
        <li key={index}>
          <a
            href="#"
            className="flex justify-between items-center gap-x-6 py-5 hover:bg-slate-100 p-5 rounded"
            onClick={(event) => toggleDropdown(event, index)}
          >
            <div className="flex min-w-0 gap-x-4">
              <i
                className={`fa-solid fa-caret-down text-sm leading-6 ${
                  activeDropdown === index ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div className="shrink-0 flex justify-center items-end gap-5">
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-right">
                  {SubCategory.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500 text-right">
                  {SubCategory.data.length + " Videos"}
                </p>
              </div>
              <i className="fa-solid fa-circle-play h-12 w-12 flex rounded-full items-center justify-center bg-red-100"></i>
            </div>
          </a>
          {activeDropdown === index && (
            <div>
              <Gridview index={index} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="sm:ml-64">
      <MainHeader />
      <MainContent />
    </div>
  );
}
