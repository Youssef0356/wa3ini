import wa3inipicture from "../assets/wa3inipicture.png";
import Ahmed from "../assets/Ahmed.jpg";
import Aziz from "../assets/Aziz.jpg";
import Youssef from "../assets/Youssef.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";
function Linking({ link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="list-none color-white"
    >
      <img src={image} className="w-10 h-10 object-cover" alt="Link Icon" />
    </a>
  );
}

function Header() {
  return (
    <>
      <div className="flex items-center justify-center h-40">
        <img
          className="w-full h-full object-cover "
          src={wa3inipicture}
          alt="image description"
        />
        <div className="absolute inset-0  bg-gradient-to-t from-gray-900 to-transparent h-40 mt-12 sm:mt-0"></div>
        <div className="absolute flex items-center justify-center pb-2 text-white font-semibold">
          <h1 className="p-1 text-1xl sm:text-3xl">👋"وعيني"</h1>
          <h1 className="p-1 text-1xl sm:text-3xl">مرحبا بيك في</h1>
        </div>
      </div>
    </>
  );
}
function Content() {
  return (
    <>
      <section className="container mx-auto w-full px-8 py-8 lg:py-10 ">
        <h2 className="block antialiased  tracking-normal font-sans text-4xl font-semibold  text-blue-gray-900 !leading-snug lg:!text-4xl text-right">
          تعرف علينا
        </h2>
        <p className="block antialiased font-sans text-xl  leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500  text-right">
          نحن فخورون بمشاركة إنجازاتنا معكم. نسعى جاهدين لتقديم الأفضل دائمًا
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md hover:scale-105 transition-all duration-300  min-h-[30rem] items-center overflow-hidden ">
            <img
              src={Youssef}
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60 "></div>
            <div className="p-5 relative flex flex-col justify-center items-center text-center">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Youssef Neji
              </h4>
              <p className="block antialiased font-sans  font-normal leading-relaxed text-white my-2 ">
                Task : Website Development
              </p>
            </div>
            <div className="p-6 mt-60 relative flex flex-col justify-center items-center">
              <p className="block antialiased font-sans  font-normal leading-relaxed text-white my-2 ">
                Social Media :
              </p>
              <div className="gap-5 flex ">
                <Linking
                  link="https://www.facebook.com/youssef.dragonboll/"
                  image={Facebook}
                />

                <Linking
                  link="https://www.instagram.com/youssef_neji0356/"
                  image={Instagram}
                />

                <Linking
                  link="https://www.linkedin.com/in/youssef-neji-a13604279/"
                  image={Linkedin}
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl hover:scale-105 transition-all duration-300 bg-transparent text-gray-700 shadow-md   min-h-[30rem] overflow-hidden ">
            <img
              src={Ahmed}
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="p-5 relative flex flex-col justify-end text-center">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Ahmed Masmoudi
              </h4>
              <p className="block antialiased font-sans  font-normal leading-relaxed text-white my-2 ">
                Task : Website Development
              </p>
            </div>
            <div className="p-6 mt-60 relative flex flex-col justify-center items-center">
              <p className="block antialiased font-sans  font-normal leading-relaxed text-white my-2 ">
                Social Media :
              </p>
              <div className="gap-5 flex ">
                <Linking
                  link="https://www.facebook.com/profile.php?id=100089111227252"
                  image={Facebook}
                />

                <Linking
                  link="https://www.instagram.com/ahmed.masmoudi.ofc"
                  image={Instagram}
                />

                <Linking
                  link="https://www.linkedin.com/in/ahmed-masmoudi/"
                  image={Linkedin}
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md hover:scale-105 transition-all duration-300  min-h-[30rem] items-center overflow-hidden ">
            <img
              src={Aziz}
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="p-5 relative flex flex-col justify-center items-center text-center">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Aziz Mesfar
              </h4>
              <p className="block antialiased font-sans  font-normal leading-relaxed text-white my-2 ">
                Task : Ressource Collection
              </p>
            </div>
            <div className="p-6 mt-60 relative flex flex-col justify-center items-center">
              <p className="block antialiased font-sans  font-normal leading-relaxed text-white my-2 ">
                Social Media :
              </p>
              <div className="gap-5 flex ">
                <Linking
                  link="https://www.facebook.com/medaziz.mesfar"
                  image={Facebook}
                />

                <Linking
                  link="https://www.instagram.com/med_aziz_mesfar/"
                  image={Instagram}
                />

                <Linking
                  link="https://www.linkedin.com/in/med-aziz-mesfar-a16b092a0/"
                  image={Linkedin}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default function App() {
  return (
    <>
      <div className="sm:ml-64  mt-12 sm:mt-0 bg-gradient-radial from-white to-gray-800">
        <Header />
        <Content />
      </div>{" "}
    </>
  );
}
