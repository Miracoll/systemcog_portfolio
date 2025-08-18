"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ProgressBar2({ name, percentage, duration = 8 }) {
    const [number, setNumber] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "-50px",
    });

    useEffect(() => {
        if (!inView) return;
        const interval = setInterval(() => {
            if (number < percentage) {
                setNumber(number + 1);
            }
        }, duration);
        return () => clearInterval(interval);
    }, [number, percentage, inView, duration]);

    return (
        <>
            <div ref={ref} className="progress-bar">
                <div className="progress-title-holder">
                    <div className="progress-title bg-gray">{name}</div>
                    <div className="progress-number-wrapper">
                        <div
                            className="progress-number-mark"
                            style={{
                                left: `${number}%`,
                            }}
                        >
                            <div className="percentage">{number}%</div>
                        </div>
                    </div>
                </div>
                <div className="progress-content-outter">
                    <div
                        className="progress-content"
                        style={{
                            width: `${number}%`,
                        }}
                    />
                </div>
            </div>
        </>
    );
}
