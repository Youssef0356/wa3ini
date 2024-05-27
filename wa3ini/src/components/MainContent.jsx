import Header from "./Header.jsx";
import CardView from "./CardView.jsx";
function Card() {
    return (
      <div className="bg-pink-500 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"></div>
    )
  }

export default function MainContent() {
    return <>
      <div className=" bg-blue-500 sm:ml-64">
        <div className="h-64"> <Header /></div>
        <CardView />
      </div>
    </>
  }