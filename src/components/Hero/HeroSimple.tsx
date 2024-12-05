"use client";
import { MoveUpRight } from "lucide-react";
import MyButton from "../ui/mybutton";
import "../ui/pattern.css";
import { useRouter } from "next/navigation";

export default function Hero() {
  const navigate = useRouter();
    return ( 
      <div style={{backgroundImage: "url('/bg.png')"}} 
      className=" bg-no-repeat h-fit md:py-10 bg-contain  bg-center bg-myblack flex justify-center" >
        <div className="my-14 pt-20 ">
          <h2 className="text-mypink text-xl md:text-2xl pb-4 text-center">
          We manage your sales and marketing so you can focus on what you do best. 
          </h2>
          <h1 className="text-black text-center w-[90%] pb-2 md:w-[70%] text-4xl md:text-[3.5rem] font-extrabold mx-auto">
          Master Your Craft,  
          </h1>              
          <div className="flex justify-center">
          <h1 className="text-5xl  md:text-6xl font-extrabold w-fit items-center text-center flex justify-center gap-x-2"> <span className=" hidden md:block  p-4 md:p-4 rounded-full bg-background   hover:shadow-lg  hover:rotate-45 transition-all cursor-mypointer  justify-center gap-2 items-center mx-auto shadow-xl text-md font-bold bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-white border-2 before:absolute before:w-full before:transition-all before:bg-mynew before:duration-700 before:hover:w-full  before:-left-full before:hover:left-0 before:rounded-full  hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-2 overflow-hidden "><MoveUpRight size={32}/> </span> We’ll Master Your Market</h1>
          </div>
  
          <h2 className="font-normal text-xs md:text-base	 text-center border-[1px] py-1 border-gray-600 rounded-full text-gray-600  md:block my-4  w-[90%] px-1 md:w-[55%] mx-auto leading-snug">
          Empowering Your Business Growth with Flexible Models
          </h2>
          <div className="flex justify-center  mt-6">
            <MyButton onClick={() => navigate.push('/contact') }>Get Started!</MyButton>
          </div>
        </div>

        {/* <div className="main flex  ">
          <div className="text">
          <div className="my-14 pt-20 ">
          <h2 className="text-mypink text-xl md:text-xl myfontD  text-start">
          We manage your sales and marketing so you can focus on what you do best. 
          </h2>
          <h1 className="text-black text-start w-[90%] md:w-[60%] text-4xl md:text-5xl font-extrabold ">
          Master Your Craft,  
          </h1>              
          
          <h1 className="text-5xl  md:text-6xl font-extrabold w-fit items-center text-start  gap-x-2"> We’ll Master </h1>
      
  
          <h2 className="font-light text-md text-start text-gray-400 hidden md:block my-4  w-[90%] md:w-[60%] leading-snug">
          Empowering Your Business Growth with Flexible Models
          </h2>
          <div className=" mt-6">
            <MyButton className="justify-start" onClick={() => navigate.push('/contact') }>Get Started!</MyButton>
          </div>
        </div> 
          </div>
          <div className="img p-10 flex justify-center">
             
          </div>
        </div> */}
      </div>
     
    );
  }
  