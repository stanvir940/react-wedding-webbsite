import { Link } from "react-router-dom";

const About = () => {
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
                Documents
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* About us */}
      <div className="p-8 md:grid grid-cols-2 gap-4 md:p-10">
        <div className="">
          <div className="flex justify-center text-2xl font-bold text-green-500 p-5">
            <h1>About Us</h1>
          </div>
          <div className="flex justify-center mx-auto text-gray-700 align-middle">
            <p>
              Welcome to Weddingwire! I am Tanvir Ahmed, the creative force
              behind this wedding planning journey. With a passion for turning
              dreams into reality, I have dedicated my career to creating
              unforgettable wedding experiences.Welcome to Weddingwire! I am
              Tanvir Ahmed, the creative force behind this wedding planning
              journey. With a passion for turning dreams into reality, I have
              dedicated my career to creating unforgettable wedding
              experiences.Welcome to Weddingwire! I am Tanvir Ahmed, the
              creative force behind this wedding planning journey. With a
              passion for turning dreams into reality, I have dedicated my
              career to creating unforgettable wedding experiences.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-2xl font-bold text-green-500 p-5">
            <h1>My Story</h1>
          </div>
          <div className="flex justify-center mx-auto text-gray-700 align-middle">
            <p>
              I fell in love with the world of weddings at a young age,
              mesmerized by the magic of two people celebrating their love
              story. This fascination led me to pursue a career in wedding
              planning, where I could combine my organizational skills, eye for
              detail, and love for romance. With over [X] years of experience in
              the wedding industry, I have had the privilege of planning and
              executing countless weddings, each unique and special in its own
              way. From intimate backyard ceremonies to grand ballroom
              receptions, I believe every wedding should reflect the couple
              personality and style. I fell in love with the world of weddings
              at a young age, mesmerized by the magic of two people celebrating
              their love story. This fascination led me to pursue a career in
              wedding planning, where I could combine my organizational skills,
              eye for detail, and love for romance. With over [X] years of
              experience
            </p>
          </div>
          <div className="md:grid grid-cols-3 gap-2">
            <div className="m-3 md:m-5">
              <img
                src="https://img.freepik.com/free-photo/happy-men-bachelor-party_23-2149275500.jpg"
                alt=""
              />
            </div>
            <div className="m-3 md:m-5">
              <img
                src="https://img.mauritius-images.com/dsf/preview_watermarked/ME-PI-16155793/save_as_name/mauritius%20images%20-%2015063462%20-%20Young%20man%20serving%20food%20to%20friends%20during%20dinner%20party%20in%20back%20yard.jpghttps://img.freepik.com/free-photo/happy-men-bachelor-party_23-2149275500.jpg"
                alt=""
              />
            </div>
            <div className="m-3 md:m-5">
              <img
                src="https://img.freepik.com/free-photo/happy-men-bachelor-party_23-2149275500.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* My story section */}
      <div className="flex justify-center text-3xl text-gray-700 font-bold font-sans m-5 md:m-10">
        <h1>Our success stories</h1>
      </div>

      {/*  */}
      <div className="p-3 m-4 md:grid md:grid-cols-3 md:gap-5 md:p-24 md:m-10">
        <div className="card shadow-lg overflow-hidden mr-4 mt-3 p-4 md:mr-8 md:p-6 hover:scale-105 hover:bg-gray-200">
          <div className="flex justify-center align-middle">
            <img src="/images/story1.jpg" alt="" />
          </div>
          <div className="flex justify-center font-semibold text-gray-700 mx-auto align-middle m-3 font-bold">
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
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 md:p-6 hover:scale-105 hover:bg-gray-200">
          <div className="flex justify-center">
            <img
              src="https://meraj.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/_/6_2.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center font-semibold text-gray-700 mx-auto align-middle m-3 font-bold">
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
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 md:p-6 hover:scale-105 hover:bg-gray-200">
          <div className="flex justify-center">
            <img src="/images/story1.jpg" alt="" />
          </div>
          <div className="flex justify-center font-semibold text-gray-700 mx-auto align-middle m-3 font-bold">
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
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 md:p-6 hover:scale-105 hover:bg-gray-200">
          <div className="flex justify-center">
            <img src="/images/story4.jpg" alt="" />
          </div>
          <div className="flex justify-center font-semibold text-gray-700 mx-auto align-middle m-3 font-bold">
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
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 md:p-6 hover:scale-105 hover:bg-gray-200">
          <div className="flex justify-center">
            <img
              src="https://shaadiwish.com/blog/wp-content/uploads/2021/02/bride-and-groom-in-pastel-outfits.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center font-semibold text-gray-700 mx-auto align-middle m-3 font-bold">
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
        <div className="card shadow-lg overflow-hidden mr-4 p-4 md:mr-8 md:p-6 hover:scale-105 hover:bg-gray-200">
          <div className="flex justify-center">
            <img src="/images/story4.jpg" alt="" />
          </div>
          <div className="flex justify-center font-semibold text-gray-700 mx-auto align-middle m-3 font-bold">
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

      <div className=" bg-white border md:p-28 md:m-10 p-4 ">
        <div className="flex justify-center text-3xl text-gray-800 m-8 font-bold">
          <h1>24 Hour Customer Services</h1>
        </div>
        <div className="border bg-gray-400 md:p-5 rounded-lg p-3">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              What kind of nonsense is this
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">
              Put me on the Council and not make me a Master!??
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">
              That's never been done in the history of the Jedi. It's insulting!
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">
              Calm down, Anakin.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">
              You have been given a great honor.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-warning">
              To be on the Council at your age.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-error">
              It's never happened before.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
