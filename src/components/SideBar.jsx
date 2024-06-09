import { Link } from "react-router-dom";
import sidebarImage from "../assets/sidebar.jpg";
import { useEffect } from "react";

function ListItem({ itemName, link, external }) {
  if (external) {
    return (
      <li>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center p-2 m-1 mx-auto my-2 rounded-lg bg-gray-700 text-white hover:bg-gradient-to-b from-gray-500 to-gray-700"
        >
          <span className="text-sm">{itemName}</span>
        </a>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          to={link}
          className="flex justify-center p-2 m-1 mx-auto my-2 rounded-lg bg-gray-700 text-white hover:bg-gradient-to-b from-gray-500 to-gray-700"
        >
          <span className="text-sm">{itemName}</span>
        </Link>
      </li>
    );
  }
}

export default function Sidebar() {
  const gradientStyle = {
    background: "linear-gradient(to bottom, rgba(31, 41, 55, 0.3), rgba(31, 41, 55, 1))",
  };

  const handleDrawerToggle = (event) => {
    event.stopPropagation();
    const sidebar = document.getElementById("sidebar-multi-level-sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };

  const handleOutsideClick = (event) => {
    const sidebar = document.getElementById("sidebar-multi-level-sidebar");
    if (sidebar && !sidebar.contains(event.target)) {
      sidebar.classList.add("-translate-x-full");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="sm:hidden fixed top-0 w-full bg-white z-50">
        <button
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 m-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleDrawerToggle}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800"
        aria-label="Sidebar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-40 flex justify-center items-center overflow-hidden w-full bg-gray-800">
          <img
            src={sidebarImage}
            alt="sidebar"
            className="relative w-full object-cover"
          />
          <div style={gradientStyle} className="z-5 absolute h-40 w-full"></div>
          <div className="z-10 text-white flex items-center flex-col absolute gap-3 mb-5 shadow-2xl">
            <h1 className="text-3xl">وَعّينِي</h1>
            <h1 className="text-sm">مع بعضنا نصنعوا الأمل</h1>
          </div>
        </div>

        <hr className="h-px bg-gray-400 border-0 mx-5" />

        <div className="h-full px-3 py-3 overflow-y-auto bg-gray-800">
          <div className="flex flex-col justify-between h-full">
            <ul className="space-y-2 font-medium">
              <div className="mb-5">
                <ListItem itemName="الصفحة الرئيسية" link="/" />
                <ListItem itemName="طيف التوحد" link="/Autism" />
                <ListItem itemName="المشاكل السمعية" link="/Deafness" />
                <ListItem itemName="المشاكل البصرية" link="/Blindness" />
                <ListItem itemName="المشاكل العقلية" link="/Mindproblems" />
                <ListItem itemName="الامراض المزمنة" link="/Chronic" />
                <ListItem itemName="المشاكل الحركية" link="/Paralysis" />
              </div>
              <hr className="h-px bg-gray-400 border-0 mx-2" />
              <div className="py-1">
                <ListItem
                  itemName="طلب إضافة مقطع"
                  link="https://forms.gle/d7mMqs4oGTnfZFLE8" external="true"
                />
                <ListItem
                  itemName="تواصل معنا"
                  link="https://forms.gle/LfwErE7RPFXockPU9" external="true"
                />
                <ListItem itemName="من نحن؟" link="/AboutUS" />
              </div>
            </ul>
          </div>
          <div className="absolute bottom-0 py-4 flex justify-center items-center w-full pr-6">
            <p className="text-sm font-medium truncate text-center text-gray-400">
              made with ❤️ from Tunisia
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
