"use client";

import React, { useState, useEffect } from "react";

interface DecodeTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function DecodeText({ text, delay = 0, className = "" }: DecodeTextProps) {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$&*+-%?";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let iteration = 0;
    
    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (index < Math.floor(iteration)) {
                return text[index];
              }
              if (char === " ") return " ";
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        });
        
        if (iteration >= text.length) {
          clearInterval(timer);
        }
        iteration += 0.5; // Controls scramble velocity
      }, 25);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(timer);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}
