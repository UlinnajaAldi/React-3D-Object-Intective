import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./toner.css";

const Toner = (props) => {
  const spline = useRef();

  const [isActive, setIsActive] = useState(false);
  const [mateActive, setMateActive] = useState(false);
  const [showHolo, setShowHolo] = useState(false);

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  function toggleUV() {
    setIsActive(!isActive);
    if (isActive) {
      spline.current.emitEvent("mouseUp", "bodymetal");
      console.log("mouseUp-UV");
    } else {
      spline.current.emitEventReverse("mouseUp", "bodymetal");
      console.log("mouseDown-UV");
    }
  }

  function toggleMate() {
    setMateActive(!mateActive);
    if (mateActive) {
      spline.current.emitEvent("mouseUp", "mate");
      console.log("mouseUp-Mate");
    } else {
      spline.current.emitEventReverse("mouseUp", "mate");
      console.log("mouseDown-Mate");
    }
  }

  function toggleShowHolo() {
    setShowHolo(!showHolo);
    if (showHolo) {
      spline.current.emitEvent("mouseUp", "toggle");
      console.log("mouseUp-Holo");
    } else {
      spline.current.emitEventReverse("mouseUp", "toggle");
      console.log("mouseDown-Holo");
    }
  }

  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/3C6PJHy/stiker.jpg",
      alt: "sample",
      desc: "Hologram sticker sheet before being applied to the object",
    },
    {
      id: 2,
      src: "https://i.ibb.co/gZjL2Vh/stikerremove.jpg",
      alt: "stikerwrapper",
      desc: "Remove the plastic sticker so it can stick to the object",
    },
    {
      id: 3,
      src: "https://i.ibb.co/xYzGv4m/stikerwrapper.jpg",
      alt: "stikerremove",
      desc: "Illustration of using a hologram seal before heating",
    },
    {
      id: 4,
      src: "https://i.ibb.co/wcX6BZQ/sample.jpg",
      alt: "stiker",
      desc: "The finished result when it is applied",
    },
  ];

  return (
    <div>
      <div className="flex items-center flex-col z-0">
        <Spline
          scene="https://prod.spline.design/TlMNbJASejulNWuR/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      <div className="absolute z-10 top-[162px] right-[123px]">
        <div className="flex items-center flex-col gap-4">
          <button
            type="button"
            className=" bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full h-20 w-20 text-white font-bold text-center"
            onClick={toggleUV}
          >
            UV
          </button>
          <button
            type="button"
            className=" bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 rounded-full h-20 w-20 text-white font-bold text-center"
            onClick={toggleMate}
          >
            Mate
          </button>
          <button
            type="button"
            className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 rounded-full h-20 w-20 text-white font-bold text-center"
            onClick={toggleShowHolo}
          >
            Seal
          </button>
          <label
            htmlFor="my-modal-4"
            className="bg-gradient-to-tr from-orange-500 to-yellow-300 rounded-full h-20 w-20 text-white font-bold flex items-center justify-center text-center cursor-pointer"
          >
            Holo Step
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box  w-11/12 max-w-5xl" htmlFor="">
              <h3 className="text-xl font-bold">Hologram Seal Step ✦</h3>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="flex flex-col text-left">
                      <p className="text-lg">{image.desc}</p>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toner;
