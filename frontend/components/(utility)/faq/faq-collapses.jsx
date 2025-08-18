"use client";
import FaqCollapse from "@/components/ui/cards/faq-collapse";
import { faq1 } from "@/data/data";
import { useState } from "react";

export default function FaqCollapses() {
    const [isCollapse, setIsCollapse] = useState(0);

    // collapse handler
    const handler = (index) => {
        if (isCollapse === index) {
            return setIsCollapse(null);
        }
        setIsCollapse(index);
    };

    return (
        <>
            <div className="section accordion-page">
                <div className="container">
                    <div className="optech-accordion-column">
                        <div className="optech-accordion-wrap mt-0 init-wrap">
                            {/* faq start */}
                            {faq1?.slice(0, 6).map((item, i) => (
                                <FaqCollapse
                                    key={i}
                                    data={item}
                                    index={i}
                                    isCollapse={isCollapse}
                                    handler={handler}
                                />
                            ))}
                            {/* faq end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
