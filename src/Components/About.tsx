import React from "react";
import img1 from "../Assets/images/Ankesh Kumar.jpg";
import img2 from "../Assets/images/Piyush Kr. Sinha.jpg";
import img3 from "../Assets/images/Ritik Raj.jpg";
import img4 from "../Assets/images/Shubham Banerjee.jpg";
import img5 from "../Assets/images/Soumyendra Sinha.jpg";

const About = () => {
  return (
    <div>
      <div className="px-[150px] pt-11">
        <h1 className="text-[40px] text-black font-serif ">About Us</h1>
        <p className="py-[30px] text-[20px]  ">
          Hasmukh Foundation was initiated in 2022 when a group of friends came
          together with the intention of giving back to the society. They were
          inspired by the thought and philosophy of Peter Senge, the founder of
          the Society for Organizational Learning who has propagated that
          “sustainability, social equality and the environment are now business
          problems…” and corporate leaders can’t expect governments to solve
          them alone. What triggered these thoughts was the liberalisation of
          the Indian economy in the 1990’s which brought with it immense
          opportunities. Business revived, and India became not just a market,
          but also an investment prospect for the developed world. Disposable
          incomes and early settlements became a living reality for the working
          middle-class. For the first time in India, professionals could think
          beyond making a living, and contribute towards the society.
        </p>
      </div>
      <div className="pt-[100px] pb-[100px] bg-orange-600 ">
        <h1 className="text-[50px] font-serif px-72">Our Teams</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap pt-10 px-[60px]">
          <div>
            <img src={img2} className="w-[400px] h-[400px]" />
            <p className="text-xl font-bold px-[120px] py-4">
              Piyush Kumar Sinha
            </p>
            <p className="px-[120px] text-lg ">Program Director</p>
          </div>
          <div>
            <img src={img4} className="w-[400px] h-[400px]" />
            <p className="text-xl font-bold px-[120px] py-4">Shubam Banerjee</p>
            <p className="px-[120px] text-lg ">Director</p>
          </div>
          <div>
            <img src={img5} className="w-[400px] h-[400px]" />
            <p className="text-xl font-bold px-[120px] py-4">
              Soumyendra Sinha
            </p>
            <p className="px-[120px] text-lg ">Program Manager</p>
          </div>
          <div>
            <img src={img1} className="w-[400px] h-[400px]" />
            <p className="text-lg font-bold px-[150px] py-4">Ankesh Kumar</p>
            <p className="px-[120px] text-lg ">Member of Hasmukh Foundation</p>
          </div>
          <div>
            <img src={img3} className="w-[400px] h-[400px]" />
            <p className="text-lg font-bold px-[150px] py-4">Ritik Raj</p>
            <p className="px-[120px] text-lg ">Member of Hasmukh Foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
