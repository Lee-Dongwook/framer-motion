"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FramerMotion: React.FC = () => {
  const phones = [
    {
      id: 1,
      src: "/img/Phone1.png",
      alt: "Phone 1",
      direction: "left",
    },
    { id: 2, src: "/img/Phone2.png", alt: "Phone 2", direction: "left" },
    { id: 3, src: "/img/Phone3.png", alt: "Phone 3", direction: "right" },
    { id: 4, src: "/img/Phone4.png", alt: "Phone 4", direction: "right" },
  ];

  return (
    <div className="flex justify-center items-center bg-blue-600 w-screen h-screen">
      {phones.map((phone) => (
        <motion.div
          key={phone.id}
          initial={{
            x: phone.direction === "left" ? "-100vw" : "100vw",
            opacity: 0,
          }}
          animate={{ x: 20, opacity: 1 }}
          transition={{ duration: 20, type: "spring" }}
          className={`m-4 ${phone.id % 2 === 0 ? "mt-48" : ""}`}
        >
          <Image src={phone.src} alt={phone.alt} width={300} height={400} />
        </motion.div>
      ))}
    </div>
  );
};
export default FramerMotion;
