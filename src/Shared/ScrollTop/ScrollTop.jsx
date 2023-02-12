import React, { useState } from 'react';
import { useEffect } from 'react';
import './ScrollTop.css'

export const scrollUP = () => {
    window['scrollTo']({top: 0, behavior: 'smooth'})
}
const ScrollTop = () => {
    const [isTrue, setIsTrue] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsTrue(true)
            } else {
                setIsTrue(false)
            }
        })
    }, [isTrue])
    return (
        <div>
            {
                isTrue && <button onClick={scrollUP}className="scrollBtn">
                    Button
                    </button>
            }
        </div>
    );
};

export default ScrollTop;