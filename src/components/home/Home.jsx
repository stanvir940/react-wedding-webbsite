import Gallary from "../../carosel/Gallary";
import "boxicons";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src="../../../public/images/cover5.png"
          className="w-full"
          alt=""
        />
        <div className=" p-10">
          <h1 className=" font-serif font-bold text-center text-3xl text-blue-700">
            Plan anywhere, anytime with our wedding planning tools
          </h1>
          <h3 className=" text-zinc-950 font-bold text-center p-5">
            Create your free WeddingWire account to start planning.
          </h3>
        </div>
        {/* first section */}
        <div className="card border pl-6 m-4 shadow-lg overflow-hidden">
          <h2 className=" text-1xl font-bold text-black pt-4 pb-4">
            Checklist
          </h2>
          <p className="  pr-4 text-gray-600">
            Get the ultimate Wedding Checklist to make sure everything gets done
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
              <p className="text-bold text-black">Emma Watson</p>
              <p>
                I love it. I deleted the items that apply to my plan and I add
                notes to items that have been started. I reference it ALL the
                time.
              </p>
            </div>
          </div>
        </div>

        {/* another section */}
        <div className="card border pl-6 m-4 shadow-lg overflow-hidden md:grid grid-cols-2 gap-3 mt-10 p-10">
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
        <div className="card border pl-6 m-4 shadow-lg overflow-hidden md:grid grid-cols-2 gap-3 mt-10 p-10">
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

        <div className=" p-10">
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
      </div>
    </div>
  );
};

export default Home;
