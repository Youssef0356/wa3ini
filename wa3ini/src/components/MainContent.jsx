
function Card() {
    return (
      <div className="bg-pink-500 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"></div>
    )
  }

export default function MainContent() {
    return <>
      <div className=" bg-blue-500 sm:ml-64">
        <div className="h-64 bg-yellow-500"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div className="bg-pink-500 h-48"><button>autism</button></div>
          <div className="bg-pink-500 h-48"><button>no hear</button></div>
          <div className="bg-pink-500 h-48"></div>
          <div className="bg-pink-500 h-48"></div>
          <div className="bg-pink-500 h-48"></div>
          <div className="bg-pink-500 h-48"></div>
          <div className="bg-pink-500 h-48"></div>
          <div className="bg-pink-500 h-48"></div>
          <div className="bg-pink-500 h-48"></div>
        </div>
      </div>
    </>
  }