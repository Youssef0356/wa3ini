import Header from "./MainPageHeader.jsx";
import CardView from "./CardView.jsx";
import App from "./Autism.jsx";

function Card() {
    return (
      <div className="bg-pink-500 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"></div>
    )
  }

export default function MainContent() {
    return <>
      <div className=" sm:ml-64">
        <App />
      </div>
    </>
  }