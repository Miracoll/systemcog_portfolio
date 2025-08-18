"use client";
/**
 * import bootstrap
 */
if (typeof window !== "undefined") {
    require("bootstrap");
}
import { useEffect } from "react";
import BottomToTop from "@/components/ui/bottom-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "@/components/ui/preloader";

export default function Providers({ children }) {
    /**
     * AOS init
     */
    useEffect(() => {
        AOS.init({
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            {/* preloader start */}
            <Preloader />
            {/* preloader end */}
            {children}
            {/* bottom to top start */}
            <BottomToTop />
            {/* bottom to top ennd */}
            <ToastContainer position="bottom-right" />
        </>
    );
}
