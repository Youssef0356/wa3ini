import autism from "../assets/autism.jpg";
import deaf from "../assets/deaf.jpg";
import blind from "../assets/blind.jpg";
import mind from "../assets/mind.jpg";
import chronic from "../assets/chronic.jpg";
import family from "../assets/family.png";
export default function CardView() {
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        <div className="text-center font-bold  text-gray-700 ">
          <div className="flex items-center justify-center">
            <h1 className="p-2 text-1xl sm:text-2xl">👋"وعيني"</h1>
            <h1 className="p-2 text-1xl sm:text-2xl">مرحبا بيك في</h1>
          </div>
          <hr />
          
        </div>

        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img
              className="h-56 lg:h-60 w-full object-cover"
              src={autism}
              alt=""
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5">
                طيف التوحد
              </h3>
              <p className="paragraph-normal text-gray-600 text-right">
              التوحد يُعتبر حالة عصبية تنموية معقدة، تتسم بتحديات في التفاعل الاجتماعي، والتواصل، ونمط السلوك
              </p>
              <a
                className="mt-12 block text-blue-400 hover:underline text-center text-lg"
                href="#"
              >
                المزيد
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img
              className="h-56 lg:h-60 w-full object-cover"
              src={deaf}
              alt=""
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5 ">
             المشاكل السمعية
              </h3>
              <p className="paragraph-normal text-gray-600 text-right ">
              الصمم فقدان القدرة على السمع، مما يجعل من الصعب سماع الأصوات والتواصل بشكل طبيعي
              </p>
              <a
                className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0"
                href="#"
              >
                المزيد
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img
              className="h-56 lg:h-60 w-full object-cover"
              src={blind}
              alt=""
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5">
              المشاكل البصرية
              </h3>
              <p className="paragraph-normal text-gray-600 text-right ">
              العمى هو حالة طبية تتميز بفقدان كبير للرؤية، مما يؤدي إلى عدم القدرة على رؤية أو إدراك المعلومات البصرية              </p>
              <a
                className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0"
                href="#"
              >
                المزيد
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img
              className="h-56 lg:h-60 w-full object-cover"
              src={mind}
              alt=""
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5">
                المشاكل الذهنية
              </h3>
              <p className="paragraph-normal text-gray-600 text-right">
              الاعاقه  الذهنية هي الاعاقة العقلية الناتجة عن خلل في الوظائف العليا للدماغ كالتركيز والعد والذاكرة والاتصال مع الآخرين وغيرها              </p>
              <a
                className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0"
                href="#"
              >
                المزيد
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img
              className="h-56 lg:h-60 w-full object-cover"
              src={chronic}
              alt=""
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5">
              الامراض المزمنة
              </h3>
              <p className="paragraph-normal text-gray-600 text-right">
              المرض المزمن هو حالة صحية تتسم بطول مدتها واستمرارها لفترة طويلة، وقد تستمر لعدة سنوات أو حتى مدى الحياة              </p>
              <a
                className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0 "
                href="#"
              >
                المزيد
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
            <img
              className="h-56 lg:h-60 w-full object-cover"
              src={family}
              alt=""
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2 text-center pb-5">
                حسن التعامل في العائلة
              </h3>
              <p className="paragraph-normal text-gray-600 text-right">
              يعتبر حسن التعامل في العائلة أساسيًا لصحة الأفراد، حيث يساهم في تعزيز و تحقيق التوازن النفسي والاجتماعي لكل فرد في الأسرة
              </p>
              <a
                className="mt-12 block text-blue-400 hover:underline text-center text-lg bottom-0"
                href="#"
              >
                المزيد
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
