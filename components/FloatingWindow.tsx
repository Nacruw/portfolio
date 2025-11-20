"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useMediaQuery from '@mui/material/useMediaQuery';

type WindowProps = {
  id: string;
  onClose: () => void;
  onFocus: (id: string) => void;
  zIndex: number;
};


export function FloatingWindow({
  id,
  onClose,
  onFocus,
  zIndex,
}: WindowProps) {
   const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "up" | "down") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: direction === "up" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  const isMobile = useMediaQuery('(max-width:768px)');
  
  if (!isMobile){ 
    if (id === "about") {
     return ( <motion.div
      drag
      dragMomentum={false}
      onMouseDown={() => onFocus(id)}
      style={{ zIndex }}
      className="absolute top-20 left-20 bg-darkbg border border-purple border-b-6 border-r-6 shadow-xl rounded-xl w-180 cursor-move"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >

      <div className="flex justify-between items-center border-b border-purple pb-1">
        <h3 className="text-purple font-bold m-4">About</h3>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-500"
        >
          <motion.div className="w-10 h-15 top-0 right-0 absolute flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            [✕]
          </motion.div>
          
        </button>
      </div>


      <motion.div>
        <motion.div className="flex flex-row items-center border-b border-gray-700">
          <Image src={"/assets/img/pfp.png"} alt={"Profile"} width={100} height={100} className="m-4 rounded-full border-2 border-purple"/>
          <div className="text-sm text-white m-4 flex flex-col gap-2">
            <p className="text-2xl text-purple font-bold">Nacruw</p>
            <p className="text-xl text-purple-200 font-bold">Indie front-end & game dev</p>
         </div>
        </motion.div>
        
        <motion.div ref={scrollRef} className="text-sm text-purple m-4 my-8 overflow-y-auto h-50 flex flex-col gap-4">

        <button
        onClick={() => scroll("up")}
        className="absolute top-49 right-0 text-purple font-extrabold hover:text-darkpurple p-2"
      >
        <ArrowDropUpIcon />
      </button>
      <button
        onClick={() => scroll("down")}
        className="absolute bottom-0 right-0 text-purple font-extrabold hover:text-darkpurple p-2"
      >
        <ArrowDropDownIcon />
      </button>
          <motion.div className="m-8">
            <p>Hi ! I'm Nacruw (also known as Ryuko), a front-end and game developper. I can...</p>
            <ul className="list-disc list-inside mt-2 font-extrabold">
              <li className="mt-3">Work on various web projects, mainly on the front side</li>
              <li className="mt-2">Create 2D games with Unity, Godot or GameMaker</li>
            </ul>
            <p className="mt-6">I'm also a beginner artist, I practice pixel art and digital art in my free time.</p>
            <p className="mt-3">I'm open to new opportunities and collaborations, feel free to reach out to me !</p>
          </motion.div>
          <motion.div>
            <h2 className="text-2xl font-extrabold">Skills</h2>
            <ul className="list-disc list-inside mt-2 font-extrabold text-lg">
              <li className="mt-3">Front-end (React (Next.js), HTML/CSS, JavaScript, Vue.js)</li>
              <li className="mt-2">Back-end (PHP, MongoDB, SQL)</li>
              <li className="mt-2">UI/UX (Figma, Framer)</li>
              <li className="mt-2">Drawing (Aseprite, Clip Studio Paint)</li>
              <li className="mt-2">Game dev (Unity, Godot Engine, Game Maker)</li>
            </ul>
          </motion.div>
          <motion.div>
            <h2 className="text-2xl font-extrabold">Interests</h2>
            <ul className="list-disc list-inside mt-2 font-extrabold text-lg">
              <li className="mt-3">Video Games</li>
              <li className="mt-2">Mangas</li>
              <li className="mt-2">Pokemon</li>
              <li className="mt-2">Bocchi the Rock!</li>
              <li className="mt-2">Hollow Knight</li>
            </ul>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div> 
    );
    }
    else if (id === "works") {
       return ( <motion.div
      drag
      dragMomentum={false}
      onMouseDown={() => onFocus(id)}
      style={{ zIndex }}
      className="absolute top-50 right-30 bg-darkbg border border-purple border-b-6 border-r-6 shadow-xl rounded-xl w-150 cursor-move"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >

      <div className="flex justify-between items-center border-b border-purple pb-1">
        <h3 className="text-purple font-bold m-4">Projects</h3>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-500"
        >
          <motion.div className="w-10 h-15 top-0 right-0 absolute flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            [✕]
          </motion.div>
        </button>
      </div>


      <div className="text-sm text-purple m-2 mt-4 ml-4">Here are my projects</div>
      <ul className="list-disc list-inside mt-2 font-extrabold text-purple p-4">
              <li className="mt-3">My portfolio :D</li>
              <p className="text-xs p-2">(WIP) I still need to add some decorative stuff</p>
              <a className="underline hover:text-blue-200 transition transition-200 ease-in-out" href="https://shiny-bingo.vercel.app/" target="blank"><li className="mt-3">A pokemon bingo game</li></a>
                <p className="text-xs p-2">(WIP) Multiplayer Pokemon bingo lockout game. You can play with your own rules, like catching or shiny hunt them</p>
                <img src="/assets/img/bingoproject_screenshot.png" alt="Pokemon Bingo room example" className="w-1/2 p-2"/>
              
            </ul>
            <motion.div className="text-purple flex justify-center p-4">More projects coming soon ! </motion.div>
    </motion.div> 
    );
    }
    else if (id === "links") {
       return ( <motion.div
      drag
      dragMomentum={false}
      onMouseDown={() => onFocus(id)}
      style={{ zIndex }}
      className="absolute top-150 right-100 bg-darkbg border border-purple border-b-6 border-r-6 shadow-xl rounded-xl w-150 cursor-move"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >

      <div className="flex justify-between items-center border-b border-purple pb-1">
        <h3 className="text-purple font-bold m-4">Links</h3>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-500"
        >
          <motion.div className="w-10 h-15 top-0 right-0 absolute flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            [✕]
          </motion.div>
        </button>
      </div>


      <div className="text-sm text-white m-4 mt-8 grid grid-cols-4">
        
        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://github.com/Nacruw"} target="_blank" className="flex flex-col justify-center items-center">
            <Image src={"/assets/img/github-white.png"} alt={"Github"} width={80} height={80}/>
            <p>Github</p>
          </Link>
        </motion.div>

        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://x.com/Nacruw"} target="_blank" className="flex flex-col justify-center items-center">
            <Image src={"/assets/img/twitter-white.png"} alt={"Twitter"} width={80} height={80}/>
            <p>Twitter</p>
          </Link>
        </motion.div>
        
        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://www.instagram.com/nacruw/"} target="_blank" className="flex flex-col justify-center items-center">
            <Image src={"/assets/img/instagram-white.png"} alt={"Instagram"} width={80} height={80}/>
            <p>Instagram</p>
          </Link>
        </motion.div>

        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://www.linkedin.com/in/marwanebirrou/"} target="_blank" className="flex flex-col justify-center items-center">
            <Image src={"/assets/img/linkedin-white.png"} alt={"LinkedIn"} width={80} height={80}/>
            <p>LinkedIn</p>
          </Link>
        </motion.div>

      </div>
      <motion.div className="text-xs text-white m-4 mt-10 flex justify-center items-center border border-white p-2 rounded-md justify-self-center w-fit" whileHover={{scale: 1.05}}>
        Clicking any of the links will open it in a new tab !
      </motion.div>
    </motion.div> 
    );
    }
    
  }
  else if (isMobile){
    if (id === "about") {
     return ( <motion.div
      style={{ zIndex }}
      className="absolute bottom-0 left-0 bg-darkbg border border-purple rounded-t-xl w-screen h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="flex justify-between items-center border-b border-purple pb-1">
        <h3 className="text-purple font-bold m-4">About</h3>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-500"
        >
          <motion.div className="w-10 h-15 top-0 right-0 absolute flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            [✕]
          </motion.div>
          
        </button>
      </div>


      <motion.div>
        <motion.div className="flex flex-row items-center border-b border-gray-700">
          <Image src={"/assets/img/pfp.png"} alt={"Profile"} width={100} height={100} className="m-4 rounded-full border-2 border-purple"/>
          <div className="text-sm text-white m-4 flex flex-col gap-2">
            <p className="text-2xl text-purple font-bold">Nacruw :D</p>
            <p className="text-xl text-purple-200 font-bold">Indie front-end & game dev</p>
         </div>
        </motion.div>
        
        <motion.div ref={scrollRef} className="text-sm text-purple m-4 my-8 overflow-y-auto max-h-140 flex flex-col gap-4">

        <button
        onClick={() => scroll("up")}
        className="absolute top-49 right-0 text-purple font-extrabold hover:text-darkpurple p-2"
      >
        <ArrowDropUpIcon />
      </button>
      <button
        onClick={() => scroll("down")}
        className="absolute bottom-5 right-0 text-purple font-extrabold hover:text-darkpurple p-2"
      >
        <ArrowDropDownIcon />
      </button>
          <motion.div className="m-8">
            <p>Hi ! I'm Nacruw (also known as Ryuko), a front-end and game developper. I can...</p>
            <ul className="list-disc list-inside mt-2 font-extrabold">
              <li className="mt-3">Work on various web projects, mainly on the front side</li>
              <li className="mt-2">Create 2D games with Unity, Godot or GameMaker</li>
            </ul>
            <p className="mt-6">I'm also a beginner artist, I practice pixel art and digital art in my free time.</p>
            <p className="mt-3">I'm open to new opportunities and collaborations, feel free to reach out to me !</p>
          </motion.div>
          <motion.div>
            <h2 className="text-2xl font-extrabold">Skills</h2>
            <ul className="list-disc list-inside mt-2 font-extrabold text-lg">
              <li className="mt-3">Front-end (React (Next.js), HTML/CSS, JavaScript, Vue.js)</li>
              <li className="mt-2">Back-end (PHP, MongoDB, SQL)</li>
              <li className="mt-2">UI/UX (Figma, Framer)</li>
              <li className="mt-2">Drawing (Aseprite, Clip Studio Paint)</li>
              <li className="mt-2">Game dev (Unity, Godot Engine, Game Maker)</li>
            </ul>
          </motion.div>
          <motion.div>
            <h2 className="text-2xl font-extrabold">Interests</h2>
            <ul className="list-disc list-inside mt-2 font-extrabold text-lg">
              <li className="mt-3">Video Games</li>
              <li className="mt-2">Mangas</li>
              <li className="mt-2">Pokemon</li>
              <li className="mt-2">Bocchi the Rock!</li>
              <li className="mt-2">Hollow Knight</li>
            </ul>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div> 
    );
    }
     else if (id === "works") {
       return ( <motion.div
      style={{ zIndex }}
      className="absolute bottom-0 left-0 bg-darkbg border border-purple rounded-t-xl w-screen h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="flex justify-between items-center border-b border-purple pb-1">
        <h3 className="text-purple font-bold m-4">Projects</h3>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-500"
        >
          <motion.div className="w-10 h-15 top-0 right-0 absolute flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            [✕]
          </motion.div>
        </button>
      </div>


      <div className="text-sm text-purple m-4">Here's my projects</div>
      <ul className="list-disc list-inside mt-2 font-extrabold text-purple p-4">
              <li className="mt-3">My portfolio :D</li>
              <p className="text-xs p-2">(WIP) I still need to add some decorative stuff</p>
              <a className="underline hover:text-blue-200 transition transition-200 ease-in-out" href="https://shiny-bingo.vercel.app/" target="blank"><li className="mt-3">A pokemon bingo game</li></a>
              <p className="text-xs p-2">(WIP) Multiplayer Pokemon bingo lockout game. You can play with your own rules, like catching or shiny hunt them</p>
                <img src="/assets/img/bingoproject_screenshot.png" alt="Pokemon Bingo room example" className="p-2"/>
            </ul>
            <motion.div className="text-purple flex justify-center p-4">More projects coming soon ! </motion.div>
    </motion.div> 
    );
    }
    else if (id === "links") {
       return ( <motion.div
style={{ zIndex }}
      className="absolute bottom-0 left-0 bg-darkbg border border-purple rounded-t-xl w-screen h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="flex justify-between items-center border-b border-purple pb-1">
        <h3 className="text-purple font-bold m-4">Links</h3>
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-500"
        >
          <motion.div className="w-10 h-15 top-0 right-0 absolute flex justify-center items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            [✕]
          </motion.div>
        </button>
      </div>

     
      <div className="text-sm text-white m-4 mt-8 grid grid-cols-1 gap-10">
        
        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://github.com/Nacruw"} target="_blank" className="flex flex-col justify-center items-center gap-2">
            <Image src={"/assets/img/github-white.png"} alt={"Github"} width={80} height={80}/>
            <p>Github</p>
          </Link>
        </motion.div>

        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://x.com/Nacruw"} target="_blank" className="flex flex-col justify-center items-center gap-2">
            <Image src={"/assets/img/twitter-white.png"} alt={"Twitter"} width={80} height={80}/>
            <p>Twitter</p>
          </Link>
        </motion.div>
        
        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://www.instagram.com/nacruw/"} target="_blank" className="flex flex-col justify-center items-center gap-2">
            <Image src={"/assets/img/instagram-white.png"} alt={"Instagram"} width={80} height={80}/>
            <p>Instagram</p>
          </Link>
        </motion.div>

        <motion.div className="flex justify-center items-center flex-col w-auto h-auto" whileHover={{scale: 1.1}}>
          <Link href={"https://www.linkedin.com/in/marwanebirrou/"} target="_blank" className="flex flex-col justify-center items-center gap-2">
            <Image src={"/assets/img/linkedin-white.png"} alt={"LinkedIn"} width={80} height={80}/>
            <p>LinkedIn</p>
          </Link>
        </motion.div>

      </div>
      <motion.div className="text-xs text-white m-2 mt-10 flex justify-center items-center border border-white p-2 rounded-md justify-self-center w-fit" whileHover={{scale: 1.05}}>
        Clicking any of the link will open it in a new tab !
      </motion.div>
    </motion.div> 
    );
    }
  }
  }
