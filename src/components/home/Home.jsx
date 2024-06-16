import Gallary from "../../carosel/Gallary";
import "boxicons";
import Faq from "../accordion/Faq";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src="../../../public/images/cover5.png"
          className="w-full"
          alt=""
        />

        {/* Just a heading section */}
        <div className=" p-10">
          <h1 className=" font-serif font-bold text-center text-3xl text-blue-700">
            Plan anywhere, anytime with our wedding planning tools
          </h1>
          <h3 className=" text-zinc-950 font-bold text-center p-5">
            Create your free WeddingWire account to start planning.
          </h3>
        </div>

        {/* first section */}
        <div className="card border pl-6 m-4 shadow-lg overflow-hidden md:m-14 grid grid-cols-2 gap-4 p-10">
          <div>
            <h2 className=" text-1xl font-bold text-black pt-4 pb-4">
              Checklist
            </h2>
            <p className="  pr-4 text-gray-600">
              Get the ultimate Wedding Checklist to make sure everything gets
              done
            </p>
            <a href="#" className=" text-blue-500">
              Discover More
            </a>
            <h3 className=" text-black pt-4 pb-4">Personalize your tasks</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <h3 className=" text-black pt-4 pb-4">Personalize your tasks</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <h3 className=" text-black pt-4 pb-4">Personalize your tasks</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1 border p-5 m-5">
            <div>
              <img
                src="https://smp-is.stylemepretty.com/submissions/uploads/341702/5f21f492cbf03$!1200x.jpg"
                alt=""
                className=" w-full"
              />
            </div>
            <div className=" pb-2 pl-3">
              <h1 className="font-bold text-red-700">
                Announcement of your Wedding
              </h1>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                tenetur alias corrupti delectus quaerat in dolor,
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="avatar w-10 m-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <p className="font-bold text-black">Emma Watson</p>
              <p>
                I love it. I deleted the items that apply to my plan and I add
                notes to items that have been started. I reference it ALL the
                time.
              </p>
            </div>
          </div>
        </div>

        {/* another section */}
        <div className="card border pl-6 m-4 shadow-lg overflow-hidden md:grid grid-cols-2 gap-3 m-14 p-10">
          <div>
            <h2 className=" text-3xl font-bold text-black pt-4 pb-4">
              Vendor manager
            </h2>
            <p className="  pr-4 text-gray-600">
              Get the ultimate Wedding Checklist to make sure everything gets
              done
            </p>
            <a href="#" className=" text-blue-500">
              Discover More
            </a>
            <h3 className=" text-black pt-4 pb-4">Contact professionals</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <h3 className=" text-black pt-4 pb-4">Dont rely on memory</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <h3 className=" text-black pt-4 pb-4">Save your favorites</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <button className=" bg-blue-600 font-bold font-thin text-white p-5 mt-4 border-red-500 font-semibold rounded-lg text-1xl">
              Find your vendor
            </button>
          </div>
          <div>
            <div className="card border m-2 p-5 md:m-5 p-3">
              <p className=" font-bold text-black pl-4">Venue</p>
              <div className=" w-full p-4">
                <Gallary></Gallary>
              </div>
              <p className=" font-bold text-black pl-4">Photography</p>
              <div className=" w-full p-4">
                <Gallary></Gallary>
              </div>
            </div>

            <div className="flex">
              <div className="avatar w-10 h-10 m-5">
                <div className=" w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="">
                <p className="text-bold text-black">Emma Watson</p>
                <p className="md:pr-5 pb-10">
                  I love it. I deleted the items that apply to my plan and I add
                  notes to items that have been started. I reference it ALL the
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="card border pl-6 m-4 shadow-lg overflow-hidden md:grid grid-cols-2 gap-3 m-14 p-10">
          <div>
            <h2 className=" text-3xl font-bold text-black pt-4 pb-4">
              Your wedding website
            </h2>
            <p className="  pr-4 text-gray-600">
              Get the ultimate Wedding Checklist to make sure everything gets
              done
            </p>
            <a href="#" className=" text-blue-500">
              Discover More
            </a>
            <h3 className=" text-black pt-4 pb-4">Create in minutes</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <h3 className=" text-black pt-4 pb-4">Add your registry</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <h3 className=" text-black pt-4 pb-4">Collect RSVPs</h3>
            <p className="pr-4 text-gray-500">
              Add, edit or delete tasks anytime to easily customize your
              WeddingWire Checklist
            </p>
            <button className=" bg-blue-600 font-bold font-thin text-white p-5 mt-4 border-red-500 font-semibold rounded-lg text-1xl">
              Create your website
            </button>
          </div>
          <div>
            <div className="card border m-2 p-5 md:m-5 p-3">
              <p className=" font-bold text-black pl-4">Venue</p>
              <div className=" w-full p-4">
                <Gallary></Gallary>
              </div>
              <p className=" font-bold text-black pl-4">Photography</p>
              <div className=" w-full p-4">
                <Gallary></Gallary>
              </div>
            </div>

            <div className="flex">
              <div className="avatar w-10 h-10 m-5">
                <div className=" w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="">
                <p className="text-bold text-black">Shayn</p>
                <p className="md:pr-5 pb-10">
                  I love it. I deleted the items that apply to my plan and I add
                  notes to items that have been started. I reference it ALL the
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* this one is not section but it is heading */}

        <div className=" p-10 md:m-10">
          <h1 className=" font-serif font-bold text-center text-3xl text-blue-700">
            Create your free WeddingWire account to start planning
          </h1>
          <h3 className=" text-zinc-950 font-bold text-center p-5">
            While you’re working on your wedding website, you should also start
            thinking about the guest list.
          </h3>
        </div>

        {/* this is a card view options */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 gap-5 m-5">
          <div className="card border shadow-lg overflow-hidden p-5 md:hover:scale-105 hover:shadow-xl cursor-pointer hover:bg-slate-100">
            <img
              className=" w-10 mx-auto mb-2"
              src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg"
              alt=""
            />
            <p className=" text-center font-bold text-black">Budget</p>
            <p className="text-center">
              Let us run the numbers and keep your spending on track.
            </p>
            <a
              href="#"
              className=" text-center text-cyan-600 hover:text-cyan-300"
            >
              Review wedding budget
            </a>
          </div>
          <div className="card border shadow-lg overflow-hidden p-5 md:hover:scale-105 hover:shadow-xl cursor-pointer hover:bg-slate-100">
            <img
              className=" w-10 mx-auto mb-2"
              src="https://cdn1.weddingwire.com/assets/svg/original/illustration/table_number.svg"
              alt=""
            />
            <p className="text-center font-bold text-black">Seating Chart</p>
            <p className="text-center">
              Let us run the numbers and keep your spending on track.
            </p>
            <a
              href="#"
              className=" text-center text-cyan-600 hover:text-cyan-300"
            >
              Review wedding budget
            </a>
          </div>
          <div className="card border shadow-lg overflow-hidden p-5 md:hover:scale-105 hover:shadow-xl cursor-pointer hover:bg-slate-100">
            <img
              className=" w-10 mx-auto mb-2"
              src="https://cdn1.weddingwire.com/assets/svg/original/illustration/add_guest.svg"
              alt=""
            />
            <p className="text-center font-bold text-black">Guest List</p>
            <p className="text-center">
              Let us run the numbers and keep your spending on track.
            </p>
            <a
              href="#"
              className=" text-center text-cyan-600 hover:text-cyan-300"
            >
              Review wedding budget
            </a>
          </div>
        </div>

        {/* description about our work */}
        <div className="w-full bg-gray-100 mt-10 mb-10 p-8 md:grid grid-cols-2 gap-6 p-20">
          <div className=" mb-3">
            <h2 className=" font-semibold text-2xl mb-2">Get started</h2>
            <p className="md:mb-5">
              One of the first steps in the wedding planning process is building
              a free Wedding Website on WeddingWire. We make it easy to include
              all your wedding information, and our designs are also
              customizable.
            </p>
            <h2 className="font-semibold mt-3 text-2xl mb-2">
              Design your website
            </h2>
            <p>
              You can build a Wedding Website that reflects your personality.
              Choose options based on color palette, style and invitation
              design, and create a custom backdrop with an engagement photo,
              personal artwork or photos and more. These personal touches will
              bring your Wedding Website to life.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl mb-2">
              Lets us handle RSVPs
            </h2>
            <p className="md:mb-5">
              One of the best features of our free Wedding Website is that
              guests can RSVP directly on your website. No need to send out mail
              in cards or record your RSVPs by hand- we keep track of who will
              be at the big event for you.
            </p>
            <h2 className="font-semibold mt-3 text-2xl mb-2">
              Create your own URL
            </h2>
            <p>
              What is in a name? Everything! We want your Wedding Website URL to
              be personal-match it your wedding hashtag or just stick to your
              first names. Either way, you get to decide and personalize.
            </p>
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-4 p-20">
          <div>
            <h1 className="font-bold pl-5 text-2xl">
              Plan on the go with the WeddingWire app
            </h1>
            <p className="pl-5 pb-5 pt-2">
              From venue tours to cake testing, take the WeddingWire app with
              you wherever you go.
            </p>
            <div className="flex p-5 bg-slate-100 rounded-md">
              <div className="avatar w-10 h-10 m-5">
                <div className=" w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="">
                <h2 className="font-bold">Juliana</h2>
                <p>
                  I have used WeddingWire for just about everything for our
                  wedding. I made our website have start working on the seating
                  plan, used the to do list, found vendors, and a lot more!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="flex justify-center">
                <img
                  className=" w-40 pt-10"
                  src="https://www.weddingwire.com/assets/img/footer/appstore@2x.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="w-40 pt-10"
                  src="https://www.weddingwire.com/assets/img/footer/googleplay@2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-cyan-500 to-cyan-50">
            <div className="w-64 h-80 overflow-hidden pl-16 ">
              <img
                src="https://www.weddingwire.com/assets/img/en_US/landing-tools/apps/phone@2x.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* frequently asked question */}
        <div className="p-10">
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
          <h1 className="font-bold text-2xl pb-5 pt-3 md:pb-8 pt-3">
            Questions about our planning tools? Look no further!
          </h1>
          <Faq></Faq>
          <p className="pt-5 pb-5 md:pt-8 pb-8">
            <span className="font-bold">Special Thanks:</span>Tanvir Ahmed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
