import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <div className="p-8 md:p-10 pt-2 md:pt-2 text-gray-700">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center text-3xl text-gray-700 font-bold font-sans m-5 md:m-10">
        <h1>Services We Provided</h1>
      </div>
      <div className="grid grid-cols-2 gap-2 p-5 md:grid-cols-3 gap-5 p-24">
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 p-6 md:hover:scale-105 md:hover:bg-slate-200">
          <div className="flex justify-center">
            <img src="/images/pack1.jpg" alt="" />
          </div>
          <div className="flex justify-center font-bold text-red-500 mx-auto align-middle m-3 font-bold">
            <h1>Full-Service Wedding Planning</h1>
          </div>
          <p className="text-gray-700">
            From concept to execution, I manage every aspect of your wedding,
            ensuring a seamless and unforgettable experience.
          </p>
          <button className=" bg-lime-400 text-black font-semibold rounded-xl p-4 mt-4">
            Subscribe
          </button>
        </div>
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 p-6  md:hover:scale-105 md:hover:bg-slate-200">
          <div className="flex justify-center">
            <img src="/images/pack2.jpeg" alt="" />
          </div>
          <div className="flex justify-center font-bold text-red-500 mx-auto align-middle m-3 font-bold">
            <h1>Full-Service Wedding Planning</h1>
          </div>
          <p className="text-gray-700">
            From concept to execution, I manage every aspect of your wedding,
            ensuring a seamless and unforgettable experience.
          </p>
          <button className=" bg-lime-400 text-black font-semibold rounded-xl p-4 mt-4">
            Subscribe
          </button>
        </div>
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 p-6  md:hover:scale-105 md:hover:bg-slate-200">
          <div className="flex justify-center">
            <img src="/images/pack3.jpg" alt="" />
          </div>
          <div className="flex justify-center font-bold text-red-500 mx-auto align-middle m-3 font-bold">
            <h1>Full-Service Wedding Planning</h1>
          </div>
          <p className="text-gray-700">
            From concept to execution, I manage every aspect of your wedding,
            ensuring a seamless and unforgettable experience.
          </p>
          <button className=" bg-lime-400 text-black font-semibold rounded-xl p-4 mt-4">
            Subscribe
          </button>
        </div>
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 p-6  md:hover:scale-105 md:hover:bg-slate-200">
          <div className="flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f4d8bd7105d20465ff557b5/1631688419190-PP3DA1NCRAXLW4GI0H4V/wedding+venues+oklahoma_outdoor+wedding+venue_Plantation+at+coal+creek.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center font-bold text-red-500 mx-auto align-middle m-3 font-bold">
            <h1>Full-Service Wedding Planning</h1>
          </div>
          <p className="text-gray-700">
            From concept to execution, I manage every aspect of your wedding,
            ensuring a seamless and unforgettable experience.
          </p>
          <button className=" bg-lime-400 text-black font-semibold rounded-xl p-4 mt-4">
            Subscribe
          </button>
        </div>
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 p-6  md:hover:scale-105 md:hover:bg-slate-200">
          <div className="flex justify-center">
            <img
              src="https://www.simplybrilliantevent.com/wp-content/uploads/2023/07/Shinola-Hotel-1024x683.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center font-bold text-red-500 mx-auto align-middle m-3 font-bold">
            <h1>Full-Service Wedding Planning</h1>
          </div>
          <p className="text-gray-700">
            From concept to execution, I manage every aspect of your wedding,
            ensuring a seamless and unforgettable experience.
          </p>
          <button className=" bg-lime-400 text-black font-semibold rounded-xl p-4 mt-4">
            Subscribe
          </button>
        </div>
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 p-6  md:hover:scale-105 md:hover:bg-slate-200">
          <div className="flex justify-center">
            <img
              src="https://lullephoto.com/wp-content/uploads/2023/03/Minnesota-wedding-venue-legacy-hill-1024x683.webp"
              alt=""
            />
          </div>
          <div className="flex justify-center font-bold text-red-500 mx-auto align-middle m-3 font-bold">
            <h1>Full-Service Wedding Planning</h1>
          </div>
          <p className="text-gray-700">
            From concept to execution, I manage every aspect of your wedding,
            ensuring a seamless and unforgettable experience.
          </p>
          <button className=" bg-lime-400 text-black font-semibold rounded-xl p-4 mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
