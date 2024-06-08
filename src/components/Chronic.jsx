import React, { useState } from "react";
import "./gridviewVideos.css";
import "./gradient.css";
import JsonFile from "../assets/Chronic.json";
import Header from "./header.jsx";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import { DiscussionEmbed } from 'disqus-react';

function Gridview({ index }) {
  let SubCategory = JsonFile[index].data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mg:grid-cols-2 xl:grid-cols-3 text-center items-center gap-2">
      {SubCategory.map((items, index) => (
        <div key={index} className="grid-item">
          <div className="flex flex-col items-center gap-5">
            {items.iframeSrc.includes("youtube.com/watch") ? (
              <iframe
                className="screensizes w-full"
                src={items.iframeSrc.replace("watch?v=", "embed/")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                className="screensizes w-full"
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

function MainContent() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <Link to="/">
        <button className="bg-gray-800 hover:bg-gray-900 absolute top-56 sm:top-44 ml-10 text-white font-bold py-2 px-6 mx-auto rounded-full">
          <img src={back} width={20} height={20} />
        </button>
      </Link>
      <ul
        role="list"
        className="divide-y divide-gray-100 px-7 pt-12 sm:pl-12 sm:pr-12 sm:pt-10 xl:px-60 xl:pt-10 border-5 border-black bg-gradient-radial"
      >
        <br />
        {JsonFile.map((SubCategory, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex justify-between items-center gap-x-6 py-5 hover:bg-gray-300 p-5"
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
                <i className="fa-solid fa-circle-play h-12 w-12 flex rounded-full items-center justify-center bg-gray-200"></i>
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
      <section className="flex w-full bg-gradient-radial from-white to-gray-800 p-8">
       <div id="disqus_thread" className="w-screen"></div>
       <DiscussionEmbed
        shortname='Wa3ini'
        width="500px"
  />
  </section>
      
    </>
  );
}

export default function App() {
  return (
    <div className="sm:ml-64">
      <Header title="الامراض المزمنة" />
      <MainContent />
    </div>
  );
}
