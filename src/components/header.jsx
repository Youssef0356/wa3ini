import wa3inipicture from "../assets/coverv2.jpg";
export default function Header({ title }) {
    return (
      <>
        <div className="flex items-center justify-center h-40 mt-12 sm:mt-0">
          <img
            className="w-full h-full object-cover "
            src={wa3inipicture}
            alt="image description"
          />
                  <div className="absolute inset-0  bg-gradient-to-t to-gray-900 from-transparent h-40 mt-12 sm:mt-0"></div>

          <div className="absolute inset-0  bg-gradient-to-t from-gray-900 to-transparent h-40 mt-12 sm:mt-0"></div>
          <div className="absolute flex items-center justify-center pb-2 text-white font-semibold">
              <h1 className="p-1 text-1xl sm:text-3xl">{title}</h1>
            </div>
        </div>
      </>
    );
  }