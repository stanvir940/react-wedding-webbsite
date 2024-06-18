import Gallary from "../../carosel/Gallary";
import "boxicons";
import Faq from "../accordion/Faq";

const venueImage = [
  "https://images.squarespace-cdn.com/content/v1/5f4d8bd7105d20465ff557b5/1631688419190-PP3DA1NCRAXLW4GI0H4V/wedding+venues+oklahoma_outdoor+wedding+venue_Plantation+at+coal+creek.jpg",
  "https://howefarmstn.com/wp-content/uploads/2022/09/outdoor-ceremony_1-1024x819-1-1024x675.jpg",
  "https://media-api.xogrp.com/images/2c80fca0-cd62-4404-8bab-7152674314c1~rs_768.h",
  "https://media-api.xogrp.com/images/a5ab8a8f-071d-49b8-a9d0-46e22c1a9ab3~rs_768.h",
  "https://imageio.forbes.com/specials-images/imageserve/63e24ac96b3f4501b0986926/A-fully-decorated-table-with-lights-at-Laguna-Beach-/960x0.jpg?format=jpg&width=960",
  "https://www.simplybrilliantevent.com/wp-content/uploads/2023/07/Shinola-Hotel-1024x683.jpg",
];

const photographerImage = [
  "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/08/wedding-photographers-instagram.jpg",
  "/images/photographer2.jpg",
  "/images/photographer3.jpg",
  "data:image/jpeg;base64,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",
  "https://www.brides.com/thmb/-6s7WKAjaF-k6VX74VWLfrX5jgg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wedding-photography-prices-recirc-getty-images-d5a2f63e4e134e26a70aa86f78bb134c.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXUWOXt9Jmc2vi440DNAPAtcR1Q3y3Cymeg&s",
];

const weddingWebsite = [
  "https://www.paperlesspost.com/blog/wp-content/uploads/051723_Blog_Wedding_BestWeddingWebsites_09.png",
  "https://images.surferseo.art/6e30d8cd-b0bc-4d1e-b80d-e2a2c8a914d2.png",
  "https://withjoy.com/assets/public/marcom-prod/wedding-website/hero/ww-mobile-hero-2.jpg?m_resize=w600&opt=default&resize=w600&ver=2",
];

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <img src="/images/tan.png" className="w-full" alt="" />

        {/* Just a heading section */}
        <div className="p-2 md:p-10">
          <h1 className=" font-serif font-bold text-center text-3xl text-blue-700">
            Plan anywhere, anytime with our wedding planning tools
          </h1>
          <h3 className=" text-zinc-950 font-bold text-center p-5">
            Create your free WeddingWire account to start planning.
          </h3>
        </div>

        {/* first section */}
        <div className="card border pl-3 m-4 shadow-lg overflow-hidden md:m-14 md:grid md:grid-cols-2 md:gap-4 md:p-20">
          <div>
            <h2 className=" text-3xl font-bold text-black pt-4 pb-4">
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

          <div className="grid grid-cols-2 gap-1 border md:p-5 md:m-5 m-3 p-1">
            <div>
              <img
                src="https://smp-is.stylemepretty.com/submissions/uploads/341702/5f21f492cbf03$!1200x.jpg"
                alt=""
                className="md:w-full"
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
          <div className="flex p-2 md:p-6">
            <div className="avatar w-10 h-12 md:h-fit m-5 ">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className="w-24 h-24"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
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
        <div className="card border pl-2 mt-8 m-4 shadow-lg overflow-hidden md:m-14 md:grid grid-cols-2 gap-3 md:p-20 md:pl-14">
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
            <button className=" bg-blue-600 font-bold font-thin text-white p-5 mt-4 border-red-500 rounded-lg text-1xl hover:bg-blue-800">
              Find your vendor
            </button>
          </div>
          <div>
            <div className="card border m-2 p-5 md:m-5 p-3">
              <p className=" font-bold text-black pl-4">Venue</p>
              <div className=" w-full p-4">
                <Gallary image={venueImage}></Gallary>
              </div>
              <p className=" font-bold text-black pl-4">Photography</p>
              <div className=" w-full p-4">
                <Gallary image={photographerImage}></Gallary>
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
        <div className="card border pl-4 pr-2 pt-4 mt-8 m-4 shadow-lg overflow-hidden md:m-14 md:grid md:grid-cols-2 md:gap-3 md:p-10">
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
            <button className=" bg-blue-600 font-bold font-thin text-white p-5 mt-4 border-red-500 font-semibold rounded-lg text-1xl hover:bg-blue-800">
              Create your website
            </button>
          </div>
          <div>
            <div className="card border m-2 mt-4 md:p-5 md:m-5 p-3">
              <p className=" font-bold text-black pl-4">Wedding Website</p>
              <div className=" w-full p-4">
                <Gallary image={weddingWebsite}></Gallary>
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
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 m-5">
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
        <div className="w-full bg-gray-100 mt-10 mb-10 p-8 text-black md:p-28 md:grid grid-cols-2 gap-6">
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

        <div className="md:grid grid-cols-2 gap-4 p-6 md:p-20 text-black">
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
                  className=" w-40 pt-10 pb-10 cursor-pointer"
                  src="https://www.weddingwire.com/assets/img/footer/appstore@2x.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center cursor-pointer">
                <img
                  className="w-40 pt-10 pb-10 cursor-pointer"
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
        <div className="p-10 md:p-28">
          <h3 className=" text-gray-700">FREQUENTLY ASKED QUESTIONS</h3>
          <h1 className="font-bold text-2xl pb-5 pt-3 text-gray-700 md:pb-8 pt-3 ">
            Questions about our planning tools? Look no further!
          </h1>
          <Faq></Faq>
          <p className="pt-5 pb-5 text-gray-700 md:pt-8 pb-8">
            <span className="font-bold">Special Thanks:</span>Tanvir Ahmed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
