import { useState, useRef, useEffect } from 'react';

export const Loading = ({ setIsLoaded }) => {

    const [text, setText] = useState("Welcome!");
        const fullText = useRef({text});
    
        useEffect(() => {
            // at each interval, display a char from text
            let currIndex = 0; 
            const interval = setInterval(() => {
                setText(fullText.current.text.substring(0, currIndex));
                currIndex++;
                
                // end condition
                if(currIndex > text.length) {
                    clearInterval(interval);
                    // slight delay for last char 
                    const timeout = setTimeout(() => {
                        setIsLoaded(true);
                    }, 800)
                }
            }, 200);
    
            return () => {clearInterval(interval)};
        }, [])

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"> 
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    )
}