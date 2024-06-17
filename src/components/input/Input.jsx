const Input = () => {
  return (
    <div className="">
      <label className=" input-bordered flex items-center gap-2 bg-gray-300 m-5 p-3 rounded-lg text-black">
        Name
        <input type="text" className=" bg-gray-300" placeholder="" />
      </label>
      <label className=" input-bordered flex items-center gap-2 bg-gray-300 m-5 p-3 rounded-lg text-black">
        Email
        <input type="text" className="bg-gray-300" placeholder="" />
      </label>
      <label className=" input-bordered flex items-center gap-2 bg-gray-300 m-5 p-3 rounded-lg text-black">
        Message
        <input type="text" className="bg-gray-300" placeholder="" />
      </label>
    </div>
  );
};

export default Input;
