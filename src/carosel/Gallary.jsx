import React from "react";

const Gallary = ({ image }) => {
  if (!image || image.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div>
      <div className="carousel rounded-box w-60 md:w-80">
        {image.map((im, idx) => (
          <div key={idx} className="carousel-item w-1/2 md:w-1/3">
            <img src={im} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
