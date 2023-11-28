import { useLayoutEffect, useRef, useState, useTransition } from "react";
import { gsap } from "gsap";
import React, { Suspense } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    });
    return (
        <div className="bg-red-700 w-full">
            Home
        </div>
    );
}

export default Landing;