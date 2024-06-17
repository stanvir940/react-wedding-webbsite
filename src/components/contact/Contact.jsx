import { Link } from "react-router-dom";
import Input from "../input/Input";

const Contact = () => {
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
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* this main contact section */}
      <div>
        <div className="hero min-h-screen bg-gray-300 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://smsbroadcast.com.au/wp-content/uploads/2023/01/illustrated-person-holding-up-text-message.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold text-black">
                Contact with us!
              </h1>
              <p className="py-6 text-gray-700">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p className="py-6 text-gray-700">hmtanvir940@gmail.com</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* conditional datashowing */}
        <div className="m-10 md:m-24">
          <Input></Input>
        </div>
      </div>
    </div>
  );
};

export default Contact;
