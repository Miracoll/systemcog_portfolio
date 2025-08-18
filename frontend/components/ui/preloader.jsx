"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [showPreloader, setShowPreloader] = useState(true);
    const path = usePathname();

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setShowPreloader(false);
            }, 1000);
        };

        const showLoaderOnPathChange = () => {
            setShowPreloader(true);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("load", handleLoad);

            showLoaderOnPathChange();

            if (window.document.readyState === "complete") {
                handleLoad();
            }

            return () => {
                window.removeEventListener("load", handleLoad);
            };
        }
    }, [path]);

    return (
        <>
            {showPreloader && (
                <div className="optech-preloader-wrap">
                    <div className="optech-preloader">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            )}
        </>
    );
}
