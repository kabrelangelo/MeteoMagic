import React, { useEffect, useState } from 'react';
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const HeroSection = () => {
const [index, setIndex]=useState(0)
const words=["événementiels", "promotionnels", "personnalisés", "interactifs"];

useEffect(()=>{
   const interval=setInterval(()=>{
     setIndex(prev=>(prev+1)% words.length)
   }, 3000) 
   return ()=>clearInterval(interval)
}, [])
    return (
        <div className='flex flex-col items-center justify-center bg-[url("/images/hero.jpeg")] w-full h-screen'>
        <h2 className='lg:text-6xl text-4xl mx-5 font-bold text-black text-center'>Vos QR codes {" "}  
        <span className='text-blue-900  '><motion.div
        style={{display:"inline-block", width: '200px', textAlign: 'center'}}
        key={words[index]}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 1 }}
    >{words[index]}</motion.div> </span> <br/> pour chaque occasion</h2>
        <div className='my-10 mx-auto lg:w-1/2'>
        <p className='text-center lg:text-xl text-lg mx-10 '>Générez des QR codes en fonction de vos besoins : pour vos sites web,
        événements, ou promotions. 
        Personnalisez-les, téléchargez-les, et partagez-les facilement.</p>
        </div>
        <div className='flex lg:flex-row flex-col gap-6 my-10'>
        {/* Base */}

<Link to={''}
  className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  
>
  <span
    className="absolute inset-0  translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span className="relative block border border-current bg-white px-8 py-3"> En Savoir Plus </span>
</Link>

{/* Hover */}

<Link to={''}
  className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  
>
  <span
    className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
  ></span>

  <span className="relative block border border-current bg-white px-8 py-3"> Nous Contacter </span>
</Link>
        </div>
        </div>
    );
};

export default HeroSection;