import image1 from "../Assets/images/Image1.jpg";
import IMG2 from "../Assets/images/IMG2.jpg";
import img3 from "../Assets/images/IMG3.jpg";
import img4 from "../Assets/images/IM3.jpg";
import img5 from "../Assets/images/IMG4.jpg";
import ourmission from "../Assets/images/ourmission.jpg";
import instagram from "../Assets/instagram (1).png";
const Home = () => {
  return (
    <div>
      <img src={image1} className="w-full brightness-50" />
      <div></div>
      <h1 className="absolute top-[550px] left-[460px] z-10 text-[60px] font-[800] text-gray-100">
        Bringing smile through education <br /> & empowerment
      </h1>
      <div className="px-[200px] py-36 font-serif">
        <h1 className="text-[40px] font-[500] py-10 ">About Us</h1>
        <p className="text-[30px] text-slate-500">
          Established in 2022, Hasmukh Foundation is an Indian development
          organization, impacting the lives of over 15 lakh children and their
          families every year. We have more than 400 projects on education,
          healthcare, livelihood, and women empowerment in over 2,000 remote
          villages and urban slums across 25 states of India. Hasmukh Foundation
          works as a catalyst in the cycle of change, complementing and
          supplementing government efforts (view details) to achieve the
          Sustainable Development Goals. We sensitize and partner with
          like-minded institutions and individuals to implement high-impact
          programmes that enable access, enhance quality and help bring long
          term behavioural change at the grassroots.
        </p>
      </div>
      <div className="px-[200px] py-24 bg-slate-300">
        <h1 className="text-white text-[40px] text-center font-serif font-bold py-20">
          Our Impact
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="text-center">
            <h2 className="text-[40px] font-bold ">12+</h2>
            <span className="text-[30px] font-semibold">Lac</span>
            <p className="text-[25px] font-medium">
              Children and <br />
              their families are impacted
              <br /> everywhere
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[40px] font-bold">500+</h2>
            <span className="text-[30px] font-semibold">Villages</span>
            <p className="text-[25px] font-medium">
              and slums are
              <br />
              reached out to across
              <br /> the country
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[40px] font-bold">200+</h2>
            <span className="text-[30px] font-semibold">Projects</span>
            <p className="text-[25px] font-medium">
              focused on education,
              <br /> healthcare, and women
              <br />
              empowerment
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[40px] font-bold">20+</h2>
            <span className="text-[30px] font-semibold">States</span>
            <p className="text-[25px] font-medium">
              are reached including
              <br />
              the remotest areas
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f6f4ed]">
        <img src={ourmission} className="w-[1000px] " />
      </div>
      <div>
        <h1 className=" text-center text-[50px] font-bold pt-[28px] text-black">
          Stories in Motion
        </h1>
        <div className="flex flex-wrap gap-5 justify-center py-11 ">
          <img src={IMG2} className="w-[300px] rounded-md" />
          <img src={img3} className="w-[300px] rounded-md" />
          <img src={img4} className="w-[300px] rounded-md" />
          <img src={img5} className="w-[300px] rounded-md" />
        </div>
        <footer className="py-[100px] bg-slate-600 px-[540px]">
          <p className="text-[white] text-[25px]">Hasmukh Foundation</p>
          <p className="text-[white] text-[25px]">Contact:</p>
          <a
            target="_blank"
            className="p-[40px] cursor-pointer"
            href="https://instagram.com/hasmookhwelfare?igshid=NTc4MTIwNjQ2YQ==">
            <img src={instagram} className="h-[55px]" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
