import autism from "../assets/autism.jpg";
import deaf from "../assets/deaf.jpg";
import blind from "../assets/blind.jpg";
import mind from "../assets/mind.jpg";
import chronic from "../assets/chronic.jpg";
import paralysis from "../assets/paralysis.jpg";
import { Link } from "react-router-dom";
import { DiscussionEmbed } from 'disqus-react';
import wa3inipicture from "../assets/coverv2.jpg";
import './gradient.css';
function Header() {
  return (
    <>
      <div className="flex items-center justify-center h-40  ">
        <img
          className="w-full h-full object-cover"
          src={wa3inipicture}
          alt="image description"
        />
        <div className="absolute inset-0  bg-gradient-to-t to-gray-900 from-transparent h-40 mt-12 sm:mt-0"></div>

        <div className="absolute inset-0   bg-gradient-to-t from-gray-900 to-transparent h-40 mt-12 sm:mt-0"></div>
        {/* <div className="absolute px-4 text-center text-md text-white mb-4">
          <h1 className="text-4xl p-2">
            وعيني
          </h1>
          <h4>طريقنا نحو التوعية</h4>
        </div> */}
        <div className="absolute flex items-center justify-center pb-2   text-white font-semibold">
            <h1 className="p-1 text-lg sm:text-3xl">👋"وعيني"</h1>
            <h1 className="p-1 text-lg sm:text-3xl">مرحبا بيك في</h1>
          </div>
      </div>
    </>
  );
}

function Introduction() {
  return (
    <>
      <h2 className=" border-solid rounded-sm p-5  font-semibold text-center  mx-2 sm:mx-10">
        عندك شخص عزيز عليك تحب تواسيه ولا تعاونو اما متجمش 🤝? موش مشكل الحل موجود عنا
        نعلموك كل شيء متعلق بذوي الاحتياجات الخاصة . مجموعة من الفيديوهات
        لنشر الوعي وفهم الاخر
      </h2>
      <hr></hr>
    </>
  );
}

function GridCard({ title, description, imageLink, to }) {
  // return <><div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
  //   <Link to={to}>
  //     <img
  //       className="h-56 lg:h-60 w-full object-cover"
  //       src={imageLink}
  //     />
  //     <div className="p-3">
  //       <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5 ">
  //         {title}
  //       </h3>
  //       <p className="paragraph-normal text-gray-600 text-right ">
  //         {description}
  //       </p>
  //       <a
  //         className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0"
  //         href="#"
  //       >
  //         المزيد
  //       </a>
  //     </div>
  //   </Link>
  // </div></>;
  
  return (
    <Link to={to}>
    <div className="h-48 relative rounded-2xl overflow-hidden hover:scale-105 transition-all ">
      <img src={imageLink} alt="image" className="absolute object-cover rounded-2xl w-full h-48"/>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent h-full"></div> 
      <div className="absolute inset-0 text-white text-center flex flex-col justify-end p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-1 text-xs line-clamp-2 text-gray-200">{description}</p>
        {/* <p className="mt-1 text-sm font-bold">..<span className="underline">المزيد</span></p> */}
      </div>
    </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="sm:ml-64 mt-12 sm:mt-0">
      <Header />
      <section className="w-full bg-gradient-radial from-white to-gray-800 p-8">
        <div className="text-center font-bold  text-gray-700 ">
          
          <hr />
          <Introduction />
        </div>

        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          <GridCard title="طيف التوحد" to="/autism" imageLink={autism} description="التوحد يُعتبر حالة عصبية تنموية معقدة، تتسم بتحديات في التفاعل الاجتماعي، والتواصل، ونمط السلوك" />
          <GridCard title="المشاكل السمعية" to="/Deafness" imageLink={deaf} description="الصمم فقدان القدرة على السمع، مما يجعل من الصعب سماع الأصوات والتواصل بشكل طبيعي" />
          <GridCard title="المشاكل البصرية" to="/Blindness" imageLink={blind} description="العمى هو حالة طبية تتميز بفقدان كبير للرؤية، مما يؤدي إلى عدم القدرة على رؤية أو إدراك المعلومات البصرية " />
          <GridCard title="المشاكل العقلية" to="/Mindproblems" imageLink={mind} description="الاعاقه  الذهنية هي الاعاقة العقلية الناتجة عن خلل في الوظائف العليا للدماغ كالتركيز والعد والذاكرة والاتصال مع الآخرين وغيرها" />
          <GridCard title="الامراض المزمنة" to="/Chronic" imageLink={chronic} description="المرض المزمن هو حالة صحية تتسم بطول مدتها واستمرارها لفترة طويلة، وقد تستمر لعدة سنوات أو حتى مدى الحياة" />
          <GridCard title="المشاكل الحركية والشلل" to="/Paralysis" imageLink={paralysis} description="الشلل هو فقدان القدرة على الحركة (وأحياناً الإحساس) في جزء أو معظم الجسم، وعادةً ما يكون نتيجة لتلف في الجهاز العصبي" />
        </div>
      </section>
      <section className="flex w-full bg-gradient-radial from-white to-gray-800 p-8">
       <div id="disqus_thread" className="w-screen"></div>
       <DiscussionEmbed
        shortname='Wa3ini'
        width="500px"
  
  
      />
       </section>
    </div>
  );
}
