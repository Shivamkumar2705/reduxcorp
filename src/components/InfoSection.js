"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const InfoSection = () => {
  const cards = [
    {
      id: 1,
      col: "md:col-span-3 row-span-2",
      content: (
        <>
          <img
            src="/images/laptop-earth.png"
            alt="Earth Project"
            className="w-full rounded-xl"
          />
          <p className="mt-4 text-lg font-semibold">
            We prioritize client collaboration, fostering open communication.
          </p>
        </>
      ),
    },
    {
      id: 2,
      col: "md:col-span-3",
      content: (
        <div className="text-center">
          <h3 className="text-xl font-semibold">
            We are flexible with time zone communications.
          </h3>
          <img
            src="/images/globe.svg"
            alt="Timezones"
            className="w-24 mx-auto mt-6"
          />
        </div>
      ),
    },
    {
      id: 3,
      col: "md:col-span-2",
      content: (
        <>
          <h4 className="text-sm uppercase text-white/60">We work in</h4>
          <h3 className="text-xl font-bold mt-2">Providing the Best</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Designing", "Applications", "Websites", "Dashboards", "Softwares"].map((item, i) => (
              <span
                key={i}
                className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 4,
      col: "md:col-span-2",
      content: (
        <h3 className="text-lg font-semibold">
          Team of tech enthusiast with a passion for building.
        </h3>
      ),
    },
    {
      id: 5,
      col: "md:col-span-2",
      special: true,
      content: (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Do you want to work with us?
          </h3>
          <button className="bg-black/60 hover:bg-black/80 transition text-white px-4 py-2 rounded-md">
            📋 Copy my email address
          </button>
        </div>
      ),
    },
    {
      id: 6,
      col: "md:col-span-4",
      content: (
        <>
          <h4 className="uppercase text-sm text-white/60">The Inside Scoop</h4>
          <h3 className="text-2xl font-bold mt-2">
            Currently developing Accommodation Management Software
          </h3>
          <div className="mt-4 text-xs text-gray-400">
            <code>
              import moduleName from 'modulePath';
              <br />
              import {'{ module1, module2 }'} from 'modulePath';
            </code>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className="px-4 py-10 md:py-20 text-white bg-[#0e0e23]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 relative">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`rounded-2xl p-6 ${card.col} relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group ${
              card.special
                ? "bg-gradient-to-br from-indigo-500/30 to-pink-500/30 shadow-[0_0_60px_10px_rgba(255,0,255,0.1)]"
                : ""
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{
              scale: 1.04,
              rotateX: -2,
              rotateY: 2,
              boxShadow: "0px 8px 30px rgba(0, 255, 255, 0.15)",
            }}
            whileTap={{
              scale: 0.98,
              rotateX: 0,
              rotateY: 0,
            }}
          >
            {card.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
