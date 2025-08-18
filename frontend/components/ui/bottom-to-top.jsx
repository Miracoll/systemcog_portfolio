"use client";

import useSticky from "@/hooks/useSticky";
import { useEffect, useRef, useState } from "react";

export default function BottomToTop() {
    const progressPathRef = useRef(null);

    const isSticky = useSticky(100);

    // bottom to top handler
    const bottomTopHandler = () => {
        if (window !== undefined) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // progress path
    useEffect(() => {
        if (window !== undefined) {
            const progressPath = progressPathRef.current;
            const pathLength = progressPath.getTotalLength();

            progressPath.style.strokeDasharray = pathLength;
            progressPath.style.strokeDashoffset = pathLength;

            const updateProgress = () => {
                const scroll = window.scrollY;
                const height =
                    document.documentElement.scrollHeight - window.innerHeight;
                const progress = pathLength * (1 - scroll / height);
                progressPath.style.strokeDashoffset = progress;
            };

            window.addEventListener("scroll", updateProgress);

            return () => {
                window.removeEventListener("scroll", updateProgress);
            };
        }
    }, []);

    return (
        <>
            <div className="paginacontainer" onClick={bottomTopHandler}>
                <div
                    className={`progress-wrap ${
                        isSticky ? "active-progress" : ""
                    }`}
                >
                    <svg
                        className="progress-circle svg-content"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                    >
                        <path
                            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                            ref={progressPathRef}
                        />
                    </svg>
                    <div className="top-arrow">
                        <i className="ri-arrow-up-s-line" />
                    </div>
                </div>
            </div>
        </>
    );
}
