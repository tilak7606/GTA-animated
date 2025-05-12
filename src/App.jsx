import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const App = () => {

  const[showContent,setShowContent] = useState(false); // for instance 

   useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main",{
      scale : 1,
      rotate: 0,
      duration : 3,
      delay : "-1",
      ease : "Expo.easeInOut",
    })
    gsap.to(".sky",{
      scale : 1,
      rotate: 0,
      duration : 3,
      delay : "-0.8",
      ease : "Expo.easeInOut",
    })
    gsap.to(".bg",{
      scale : 1.4,
      rotate: 0,
      duration : 3,
      delay : "-0.7",
      ease : "Expo.easeInOut",
    })
    gsap.to(".text",{
      scale : 1,
      rotate: 0,
      duration : 3,
      delay : "-0.7",
      ease : "Expo.easeInOut",
    })
    gsap.to(".character",{
      scale : 0.5,
      x: "-50%",
      bottom:"-85%",
      rotate: 0,
      duration : 2,
      delay : "-0.7",
      ease : "Expo.easeInOut",
    })
    
    const main = document.querySelector('.main');
    
    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) *40;
      gsap.to(".main .text", {
        x : `${xMove *0.4}%`
      })
      gsap.to(".sky", {
        x : `${xMove *0.4}%`
      })
      gsap.to(".bg", {
        x : `${xMove *  0.6}%`
      })
    });

  },[showContent]);

  return (
    <>

      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

     {/* step 2 */}
      {showContent && (
        <div className='main overflow-auto hide-scrollbar w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>

          <div className='navbar absolute top-0 left-0 z-[10] w-full py-8 px-10 flex items-center '>
            <div className='logo flex gap-7'>
            <div className='lines flex flex-col gap-[5px] '>
              <div className='line w-15 h-2 bg-white'></div>
              <div className='line w-8 h-2 bg-white'></div>
              <div className='line w-5 h-2 bg-white'></div>
            </div>
            <h3 className='text-2xl -mt-[10px] leading-none text-white  font-extrabold' >Rockstar</h3>
            </div>
          </div>
        

            <div className='imagesdiv relative w-full h-screen overflow-hidden '>
              <img  className='scale-[1.7] -rotate-[20deg] sky absolute top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
              <img  className='scale-[2] -rotate-[15deg] bg absolute top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />

              <div className='text font-extrabold text-white absolute top-0 left-1/2  -translate-x-1/2 flex flex-col gap-3 leading-none'>
                <h1 className='text-8xl -ml-30  leading-none'>grand</h1>
                <h1 className='text-8xl ml-10 leading-none'>theft</h1>
                <h1 className='text-8xl -ml-10 leading-none'>auto</h1>
              </div>  


              <img className=' character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[1.6 ] -rotate-[10deg] '  src="./girlbg.png " 
              alt="" />

          
            </div>

            <div className='btmbar text-white w-full px-10 py-10  absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent '>
              <div className='flex items-center gap-4'>
                <i className=" text-3xl ri-arrow-down-line"></i>
                <h3 
                className=' text-sm font-stretch-condensed '>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 h-[30px] -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />

            </div>

          </div>

          <div className='w-full h-screen  px-10 bg-black flex items-center justify-center '>
            <div className='cntr flex text-white w-full h-[80%] '>
              <div className='limg relative w-1/2 h-full'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  scale-[0.7]' src="./pose.png" alt="" />
              </div>
              <div className='rg w-[30%] py-10'>
                <h1 className='text-xl font-sans font-extrabold'>Still Running,</h1>
                <h1 className='text-xl font-sans font-extrabold'>Not Hunting</h1>
                <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum neque officiis quam porro quis pariatur nobis fugiat cupiditate a inventore mollitia, quibusdam eligendi eaque!</p>
                <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae dolore doloremque esse.</p>
           
                <button className='bg-yellow-500 px-5  py-5 text-2xl text-black font-extrabold mt-7'>Download Now</button>
              </div>
            </div>
           
          </div>

        </div>
      )}
    </>
  )
}

export default App
