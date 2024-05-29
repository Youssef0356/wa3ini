import Header from "./MainPageHeader.jsx";
import CardView from "./CardView.jsx";
import Autism from "./Autism.jsx";

export default function MainContent() {
    return <>
      <div className=" sm:ml-64">
        <Header />
        <CardView />
      </div>
    </>
  }