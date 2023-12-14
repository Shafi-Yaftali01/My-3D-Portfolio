import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { awards } from "../constants/constants";
import { trophy } from "../assets";

const AwardCard = ({ index, award, name, company, image, height, date }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[450px] w-full"
    >
      <img
        src={trophy}
        alt="trophy"
        className="w-10 h-10 rounded-full object-cover mb-5"
      />

      <div className="mt-1">
        <img
          src={award}
          alt={name}
          className={`w-full h-${height} object-cover rounded-2xl`}
        />

        {/* Bottom section */}
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">&gt;</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              Issued by {company}
            </p>
            <p className="mt-1 text-secondary text-[12px]">{date}</p>
          </div>

          <img
            src={image}
            alt={company}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Awards = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What did I accomplish</p>
          <h2 className={`${styles.sectionHeadText}`}>Awards.</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {awards.map((award, index) => (
          <AwardCard key={index} index={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Awards, "");
