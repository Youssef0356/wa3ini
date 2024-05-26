import wa3inipicture from "../assets/wa3inipicture.png";
function Header() {
  return (
    <>
      <div className="  flex items-center  justify-center h-full ">
        <img
          className="w-full h-full object-cover "
          src={wa3inipicture}
          alt="image description"
        />
        <div class="absolute px-4 text-center text-lg text-white ">
          <h1 className="text-8xl p-5">
            وعيني
          </h1>
          <h4>طريقنا نحو التوعية</h4>
        </div>
      </div>
    </>
  );
}
export default Header;
