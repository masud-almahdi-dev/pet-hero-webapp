import { useLayoutEffect, useRef, useState, useTransition } from "react";
import { gsap } from "gsap";
import React, { Suspense } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import createSwitchableAni from "./cpt/switchableAni";
//const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Landing = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    });
    return (
        <div>
            Layout
        </div>
    );
}

export default Landing;