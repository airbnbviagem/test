"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';

export const Gerando = () => {

    const [progress, setProgress] = useState(0);
  const radius = 60; 
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    
    const totalTime = 8000;
  
    const increment = (100 / totalTime) * (1000 / 60);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 1000 / 60); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const strokeDashoffset = ((100 - progress) / 100) * circumference;


    return(
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <Image src={'/logo-bnb.png'} alt="Logo" width={160} height={0}/>
            <div className="flex justify-center items-center my-5">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="10"
        />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#FF5A5F"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 75 75)"
        />
        <text
          x="75"
          y="75"
          fill="#333"
          fontSize="24"
          dy=".3em"
          textAnchor="middle"
          fontWeight="bold"
        >
          {`${Math.round(progress)}%`}
        </text>
      </svg>
    </div>
    <p className="font-semibold uppercase text-lg">estamos Gerando seu cupom</p>
    <p className="uppercase text-sm mt-3 text-gray-500 relative overflow-hidden">
  <span className="animate-glow block absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
  leva aproximadamente 1 minuto
</p>
        </div>
    );
}