import coverv2 from "../assets/coverv2.jpg";
import Ahmed from "../assets/Ahmed.png";
import Aziz from "../assets/Aziz.jpg";
import Youssef from "../assets/Youssefv1.png";
import "./gradient.css";
function Linking({ link, icon }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="list-none text-white text-xl"
      >
        <i class={icon}></i>
      </a>
    </div>
  );
}
function Picture({
  image,
  name,
  email,
  number,
  linkfb,
  linkin,
  linkgh,
  task,
  index,
}) {
  return (
    <div
      className="relative overflow-hidden rounded-xl "
      id="left"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img src={image} className=" w-80 h-96  object-cover "></img>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent  "></div>
      <div className="absolute flex flex-col items-center w-full justify-center bottom-0 mb-8 gap-1">
        <h2 className=" font-semibold text-lg  text-white  leading-tight tracking-wider">
          {name}
        </h2>
        <h2 className="text-sm  text-gray-400 ">{task}</h2>
        <h2 className="  text-sm  text-gray-400  ">{email}</h2>
        <h2 className="  text-sm  text-gray-400  mb-2">{number}</h2>
      </div>
      <div className="absolute flex items-center w-full justify-center bottom-0 mb-2 gap-6">
        <Linking link={linkfb} icon="fa-brands fa-facebook" />
        <Linking link={linkin} icon="fa-brands fa-linkedin" />
        <Linking link={linkgh} icon="fa-brands fa-github" />
      </div>
    </div>
  );
}
function Header() {
  return (
    <>
      <div className="flex items-center justify-center h-40">
        <img
          className="w-full h-full object-cover "
          src={coverv2}
          alt="image description"
        />
        <div className="absolute inset-0  bg-gradient-to-t to-gray-900 from-transparent h-40 mt-12 sm:mt-0"></div>

        <div className="absolute inset-0  bg-gradient-to-t from-gray-900 to-transparent h-40 mt-12 sm:mt-0"></div>
        <div className="absolute flex items-center justify-center pb-2 text-white font-semibold text-2xl">
          <h1 className="p-1 text-1xl sm:text-3xl">👋"وَعّينِي"</h1>
          <h1 className="p-1 text-1xl sm:text-3xl">مرحبا بيك في</h1>
        </div>
      </div>
    </>
  );
}
function Content() {
  return (
    <>
      <section className="container mx-auto w-full px-8 py-8 lg:py-10  ">
        <h2 className="block antialiased  tracking-normal font-sans text-4xl font-semibold  text-blue-gray-900 !leading-snug lg:!text-4xl text-center">
          تَعرَّف عَلينَا
        </h2>
        <p className="block antialiased font-sans text-xl  leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500  text-center">
          نَحنُ سعداء بِمُشاركةِ إنجازاتِنا مَعَكُم.نامل ان يكون الموقع قد نال
          اعجابكم
        </p>
        <div className="flex items-center justify-center  gap-20  mt-16 flex-col  lg:flex-row">
          <div>
            <Picture
              image={Youssef}
              name="Youssef Neji"
              email="nejiyoussef081@gmail.com"
              number=" +216 94730853"
              linkfb="https://www.facebook.com/youssef.dragonboll/"
              linkin="https://www.linkedin.com/in/youssef-neji-a13604279/"
              linkgh="https://github.com/Youssef0356"
              task="(developper)"
              index="1"
            />
          </div>
          <div>
            <Picture
              image={Ahmed}
              name="Ahmed Masmoudi"
              linkfb="https://www.facebook.com/profile.php?id=100089111227252"
              linkin="https://www.linkedin.com/in/ahmed-masmoudi/"
              linkgh="https://github.com/AhmedMasmoudi2003"
              email="ahmed.masmoudi.dev@gmail.com"
              number=" +216 54323705"
              task="(developper)"
              index="2"
            />
          </div>
          <div>
            <Picture
              image={Aziz}
              name="Aziz Mesfar"
              linkfb="https://www.facebook.com/medaziz.mesfar"
              linkin="https://www.linkedin.com/in/med-aziz-mesfar-a16b092a0/"
              linkgh="https://github.com/medazizmesfar"
              email="Med.aziz.mesfar@gmail.com"
              number=" +216 97895790"
              task="(ressource manager)"
              index="3"
            />
          </div>
          <br />
        </div>
      </section>
    </>
  );
}
export default function App() {
  return (
    <>
      <div className="sm:ml-64  mt-12 min-h-screen sm:mt-0 bg-gradient-radial from-white to-gray-800">
        <Header />
        <Content />
      </div>
    </>
  );
}
