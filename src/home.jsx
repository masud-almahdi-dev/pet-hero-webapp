import { useLayoutEffect, useRef, useState, useTransition } from "react";
import { gsap } from "gsap";
import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Landing = () => {
    const [isoffset, setisoffset] = useState(false)
    const [showanim, setshowanim] = useState(false)
    const hello = useRef();
    const [isPending, startTransition] = useTransition()
    // useLayoutEffect(() => {
    // });
    const animatehello = () => {
        if (isoffset) {
            setisoffset(false);
            startTransition(() => {
                gsap.to(hello.current, { y: 0, duration: 3, ease: "Power4.out" })
            });
        } else {
            setisoffset(true);
            startTransition(() => {
                gsap.to(hello.current, { y: 100, duration: 3, ease: "Power4.out" })
            });
        }
    }
    const animationloaded = () => {
        console.log("loaded")
        setshowanim(true)
    }
    const scrolled = () => {
        console.log("scrolled")
    }
    return (
        <div onWheel={scrolled}>
            <div className='bg-red-300 mx-auto w-max' ref={hello} onClick={animatehello}>
                {isoffset ? "true" : "false"}
            </div>
            <Suspense fallback={<div className='bg-white text-black mx-auto w-max'>Loading...</div>}>
                {!showanim && <div className='bg-white text-black mx-auto w-max'>Preparing...</div>}
                <Spline scene="https://prod.spline.design/epDQzJSEH5j6HGwt/scene.splinecode" onLoad={animationloaded} />
            </Suspense>
        </div>
    );
}

export default Landing;