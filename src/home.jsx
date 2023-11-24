import { useLayoutEffect, useRef, useState, useTransition } from "react";
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline';

const Landing = () => {
    const [isoffset, setisoffset] = useState(false)
    const hello = useRef();
    const [isPending, startTransition] = useTransition()
    // useLayoutEffect(() => {
    // });
    const animatehello = () => {
        console.log(hello)
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
    return (
        <div>
            <div className='bg-red-300 mx-auto w-max' ref={hello} onClick={animatehello}>
                {isoffset ? "true" : "false"}
            </div>
            <Spline scene="https://prod.spline.design/epDQzJSEH5j6HGwt/scene.splinecode" />
        </div>
    );
}

export default Landing;