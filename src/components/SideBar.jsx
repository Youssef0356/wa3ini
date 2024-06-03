import React from 'react';
import sidebar from "../assets/sidebar.jpg";
function ListItem({ itemName,link }) {

  const gradientbutton = {
    background: 'linear-gradient(to top, rgba(47, 56, 69, 1), rgba(72, 80, 92, 1))',
  };

  return <>
    <li>
      <a href={link} target="_blank" className="pointer flex items-center m-1 p-1 mx-auto my-2 rounded-lg group text-white bg-gray-700 hover:bg-gradient-to-b from-gray-500 to-gray-700">
        <span className="m-auto text-sm">
          {itemName}</span>
      </a>
    </li>
  </>
}


export default function Sidebar() {

  const gradientStyle = {
    background: 'linear-gradient(to bottom, rgba(31, 41, 55, 0.3), rgba(31, 41, 55, 1))',
  };

  return (
    <>
      <div className=" fixed top-0 w-screen bg-white">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 m-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800"
        aria-label="Sidebar"
      >
        <div className='h-40 flex justify-center items-center overflow-hidden w-full'>
          <img src={sidebar} alt="sidebar image" className='reltive w-full object-cover' />
          <div style={gradientStyle} className="z-5 absolute h-40 w-full"></div>
          <div className='z-10 text-white flex items-center flex-col absolute gap-3 mb-5 shadow-2xl'>
            <h1 className='text-3xl'>وعيني</h1>
            <h1 className='text-sm'>مع بعضنا نصنعوا الأمل</h1></div>
        </div>

        <hr className='h-px bg-gray-400 border-0 mx-5' />

        <div className="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-col justify-between h-full">
            <ul className="space-y-2 font-medium">
              <div className='mb-5'>
                <ListItem itemName="طيف التوحد" />
                <ListItem itemName="المشاكل السمعية" />
                <ListItem itemName="المشاكل البصرية" />
                <ListItem itemName="المشاكل النفسية" />
                <ListItem itemName="الامراض المزمنة" />
                <ListItem itemName="حسن التعامل في العائلة" />
              </div>
              <hr className='h-px bg-gray-400 border-0  mx-2' />
              <div className='py-1'>
                <ListItem itemName="طلب إضافة مقطع" link="https://forms.gle/d7mMqs4oGTnfZFLE8"/>
                <ListItem itemName="الجمعيات الخيرية"/>
                <ListItem itemName="تواصل معنا"  link="https://forms.gle/LfwErE7RPFXockPU9"/>
                <ListItem itemName="من نحن؟" />
              </div>
            </ul>



            <div className="absolute bottom-0 py-4 flex self-center">
              <p className="text-sm font-medium truncate text-gray-400">made with ❤️ from Tunisia</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
