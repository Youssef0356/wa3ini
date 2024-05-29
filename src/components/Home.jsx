import autism from "../assets/autism.jpg";
import deaf from "../assets/deaf.jpg";
import blind from "../assets/blind.jpg";
import mind from "../assets/mind.jpg";
import chronic from "../assets/chronic.jpg";
import family from "../assets/family.png";
import wa3inipicture from "../assets/wa3inipicture.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex items-center  justify-center   h-64">
        <img
          className="w-full h-full object-cover "
          src={wa3inipicture}
          alt="image description"
        />
        <div className="absolute px-4 text-center text-lg text-white ">
          <h1 className="text-8xl p-5">
            وعيني
          </h1>
          <h4>طريقنا نحو التوعية</h4>
        </div>
      </div>
    </>
  );
}

function Introduction() {
  return <>
    <h2 className="text-center border-solid rounded-sm p-5 mx-10 font-semibold">
      عندك شخص عزيز عليك تحب تواسيه ولا تعاونو اما متجمش ? 👥تحب تتواصل معاه اما احوالو العقلية او الجسدية متسمحلكش 🤝? موش مشكل الحل موجود عنا نعلموك كل شيء متعلق بذوي الاحتياجات الخاصة . مجموعة من الفيديوهات المتعلقة بالامراض الخاصة
    </h2>
    <hr></hr>
  </>
}

function GridCard({ title, description, imageLink, to }) {
  return <><div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
    <Link to={to}>
      <img
        className="h-56 lg:h-60 w-full object-cover"
        src={imageLink}
      />
      <div className="p-3">
        <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5 ">
          {title}
        </h3>
        <p className="paragraph-normal text-gray-600 text-right ">
          {description}
        </p>
        <a
          className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0"
          href="#"
        >
          المزيد
        </a>
      </div>
    </Link>
  </div></>;
}

export default function Home() {
  return (
    <div className="sm:ml-64">
      <Header />
      <section className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        <div className="text-center font-bold  text-gray-700 ">
          <div className="flex items-center justify-center pb-5">
            <h1 className="p-2 text-1xl sm:text-2xl">👋"وعيني"</h1>
            <h1 className="p-2 text-1xl sm:text-2xl">مرحبا بيك في</h1>
          </div>
          <hr />
          <Introduction />
        </div>

        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          <GridCard title="طيف التوحد" to="/autism" imageLink={autism} description="التوحد يُعتبر حالة عصبية تنموية معقدة، تتسم بتحديات في التفاعل الاجتماعي، والتواصل، ونمط السلوك" />
          <GridCard title="المشاكل السمعية" to="/" imageLink={deaf} description="الصمم فقدان القدرة على السمع، مما يجعل من الصعب سماع الأصوات والتواصل بشكل طبيعي" />
          <GridCard title="المشاكل البصرية" to="/" imageLink={blind} description="العمى هو حالة طبية تتميز بفقدان كبير للرؤية، مما يؤدي إلى عدم القدرة على رؤية أو إدراك المعلومات البصرية " />
          <GridCard title="المشاكل الذهنية" to="/" imageLink={mind} description="الاعاقه  الذهنية هي الاعاقة العقلية الناتجة عن خلل في الوظائف العليا للدماغ كالتركيز والعد والذاكرة والاتصال مع الآخرين وغيرها" />
          <GridCard title="الامراض المزمنة" to="/" imageLink={chronic} description="المرض المزمن هو حالة صحية تتسم بطول مدتها واستمرارها لفترة طويلة، وقد تستمر لعدة سنوات أو حتى مدى الحياة" />
          <GridCard title="حسن التعامل في العائلة" to="/" imageLink={family} description="يعتبر حسن التعامل في العائلة أساسيًا لصحة الأفراد، حيث يساهم في تعزيز و تحقيق التوازن النفسي والاجتماعي لكل فرد في الأسرة" />
        </div>
      </section>
    </div>
  );
}
