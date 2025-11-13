import React, { useEffect, useState, useRef } from "react";
import build1 from "../../../assets/n_cube.jpg";
import build2 from "../../../assets/residential.jpg";
import build3 from "../../../assets/Deep-Villa.jpg";
import ClientReport from "../Home/ClientReport";
import ContactUs from "../Home/ContactUs";
import logo from "../../../assets/logo.png";
import Archi from "../../../assets/Architectural.webp";
import SocialMedai from "../Home/SocialMedai";

function ArchitecturalConstruction() {
  const images = [build1, build2, build3];
  const [currentIdx, setCurrentIdx] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => prev + 1);
    }, 3000); // slide every 3s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (currentIdx > images.length) {
      // Immediately reset to first slide
      slider.style.transition = "none";
      setCurrentIdx(1); // first real slide after duplicate
      slider.style.transform = `translateX(-100%)`;
      // Re-enable transition
      setTimeout(() => {
        slider.style.transition = "transform 1s ease-in-out";
      }, 50);
    } else {
      slider.style.transform = `translateX(-${currentIdx * 100}%)`;
    }
  }, [currentIdx, images.length]);

  return (
    <>
      <div className="relative w-full h-[740px] overflow-hidden  ">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-1000 ease-in-out mt-15"
        >
          {/* Duplicate first and last slides for smooth infinite loop */}
          {[images[images.length - 1], ...images, images[0]].map((src, idx) => (
            <div key={idx} className="relative w-full h-[720px] flex-shrink-0">
              {/* Main Image */}
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover"
              />

              {/* Logo + Text Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                <h1 className="text-black  mt-4 text-xl font-bold drop-shadow-lg">
                  JK Property's and Buildings
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ClientReport />

      <div className="mt-10">
        <div className="flex justify-center">
          <h2 className="md:text-4xl text-xl font-bold">
            Architectural Design Process
          </h2>
        </div>

        <div className=" flex mb-10 justify-center ">
          <img src={Archi} alt="Architeture image" className="mt-10" />
        </div>
      </div>
      <section
        style={{
          padding: "3rem 2rem",
          lineHeight: "1.8",
          fontFamily: "Arial, sans-serif",
          color: "#555",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#000",
            fontWeight: "700",
          }}
        >
          About <span style={{ color: "#000" }}>JK Construction</span>
        </h2>

        <p style={{ marginBottom: "1.5rem" }}>
          We are one of the best{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            architects in Trichy
          </span>
          specializing in both residential and commercial projects. We have
          in-house{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            architects, engineers, supervisors, structural engineers, planners
          </span>
          , etc. Our{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>work ethics</span>{" "}
          and clients’ trust have made us one of the best architect firms in
          Trichy.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          We are a{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>young team</span>{" "}
          of architects, designers, planners, and engineers. There are many
          architects in Trichy, but our clients work with us because of the{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>transparency</span>{" "}
          and <span style={{ color: "#000", fontWeight: "600" }}>quality</span>{" "}
          we bring into the construction industry. Designing is an iterative
          process, and we love the challenge of solving{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            unique constraints
          </span>{" "}
          on each project we work with.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          We create{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            everlasting structures
          </span>{" "}
          through an{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            innovative, high-quality, and sustainable
          </span>{" "}
          approach toward every project. Being one of the best{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            architects in Trichy
          </span>
          , we strive to deliver the best quality for our clients. For each
          project, we blend a unique collaboration of{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            techniques and innovative ideas
          </span>{" "}
          to build architectural wonders.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          <strong style={{ color: "#000" }}>JK Construction</strong> provides
          architectural designs such as{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            2D floor plans, 3D elevations, and 3D interior designing
          </span>{" "}
          for clients outside Trichy as well. We, at{" "}
          <strong style={{ color: "#000" }}>JK Construction</strong>, have
          designed a wide range of{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            residential buildings – villas, individual residences, row houses,
            flats, apartments
          </span>{" "}
          and many{" "}
          <span style={{ color: "#000", fontWeight: "600" }}>
            commercial buildings
          </span>
          .
        </p>
        <SocialMedai />
      </section>

      <ContactUs />
    </>
  );
}

export default ArchitecturalConstruction;
