'use client';
import { motion } from "motion/react"
import TypingText from "./ui/shadcn-io/typing-text";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import NoSsr from '@mui/material/NoSsr';
import LinkIcon from '@mui/icons-material/Link';
import { purple } from "@mui/material/colors";
import FolderIcon from '@mui/icons-material/Folder';
import InfoIcon from '@mui/icons-material/Info';
import { FloatingWindow } from "./FloatingWindow";
import { useState } from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';


type WindowData = {
  id: string;
};

export default function HomeContainer() {

const [windows, setWindows] = useState<WindowData[]>([]);
  const [zIndexes, setZIndexes] = useState<Record<string, number>>({});
  const [maxZ, setMaxZ] = useState(10);

const openWindow = (id: string) => {
    // Évite d'ouvrir 2 fois la même fenêtre
    if (!windows.find((w) => w.id === id)) {
      setWindows((prev) => [...prev, { id}]);
      setZIndexes((prev) => ({ ...prev, [id]: maxZ + 1 }));
      setMaxZ((z) => z + 1);
    }
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setMaxZ((z) => z + 1);
    setZIndexes((prev) => ({ ...prev, [id]: maxZ + 1 }));
  };



  
    return (

  
<>
<NoSsr>    
  
      <Grid container spacing={2} className="w-full h-screen bg-darkbg" suppressHydrationWarning>
        <Grid size={12}>
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 1, delay: 1}}>
        <CircularProgress color="secondary" />
        </motion.div>
  <div className="w-full h-screen flex relative md:px-10 px-4">

      <motion.p className="text-3xl md:text-6xl block text-purple absolute top-1/5 md:top-1/3 font-extrabold" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1.5}}>Nacruw</motion.p>
    <motion.div className="flex md:items-center md:static absolute top-1/4 md:gap-4 " initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 2}}>
      
      <TypingText
        text={["Web Developer", "Game Developer", "Swordsoul Best Deck", "My body is a machine", "That turns full combo", "Into S:P pass"]}
        typingSpeed={75}
        initialDelay={200}
        pauseDuration={1500}
        showCursor={false}
        cursorCharacter="|"
        className="text-xl font-bold md:text-9xl"
        textColors={['var(--purple)', 'var(--purple)', 'var(--purple)']}
        variableSpeed={{ min: 80, max: 120 }}
        as={'div'}
      />

      <motion.div
        className="bg-purple md:h-3 md:w-10 rounded-full md:top-12 relative h-1 w-3 top-5"
        initial={{opacity: 1}}
        animate={{
            opacity: [1, 0, 1],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 2, ease: 'linear'}}
      />
    </motion.div>

    <motion.div className="absolute md:bottom-1/3 bottom-4/7 md:ml-2 text-purple" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 2.5}}>
      <p className="md:text-2xl">Hi, I'm Nacruw (or Ryuko), a cool indie web, game developer and beginner artist.</p>
      <br/>
      <p className="md:text-2xl">Nice to meet y'all ! :D</p>
    </motion.div>

        <motion.div className="absolute md:bottom-40 md:left-10 left-0 bottom-1/3 text-purple" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 3}}>
        <div className="md:flex-row md:flex md:gap-10 grid grid-cols-3 gap-4">
          
           <button
          onClick={() => openWindow("about")}
          className="px-4 py-2 rounded-lg"
        >
            <div className="button flex flex-col justify-center items-center border-purple border-b-2 md:pb-1 pb-5">
              <InfoIcon sx={{color: purple, fontSize: 70}} />
              <p className="md:text-2xl text-lg text-purple font-bold">About me</p>
            </div>    
          </button>

          <button
          onClick={() => openWindow("works")}
          className="px-4 py-2 rounded-lg"
        >
            <div className="button flex flex-col justify-center items-center border-purple border-b-2 md:pb-1 pb-5">
              <FolderIcon sx={{color: purple, fontSize: 70}} />
              <p className="md:text-2xl text-lg text-purple font-bold">Works</p>
            </div> 
          </button>

          <button
          onClick={() => openWindow("links")}
          className="px-4 py-2 rounded-lg"
        >
            <div className="button flex flex-col justify-center items-center border-purple border-b-2 md:pb-1 pb-5">
              <LinkIcon sx={{color: purple, fontSize: 70}} />
              <p className="md:text-2xl text-lg text-purple font-bold">Links</p>
            </div>  
          </button>  
        </div>
    </motion.div>
    {windows.map((w) => (
        <FloatingWindow
          key={w.id}
          id={w.id}
          zIndex={zIndexes[w.id] || 1}
          onClose={() => closeWindow(w.id)}
          onFocus={focusWindow}
        >
        </FloatingWindow>
      ))}
  </div>
  </Grid>
  </Grid>
  <motion.div className="absolute bottom-1 w-full h-auto text-purple flex justify-center items-center">
    <motion.p> <CopyrightIcon fontSize="small"/> 2025 Nacruw</motion.p>
  </motion.div>
</NoSsr>
</>
    );
}