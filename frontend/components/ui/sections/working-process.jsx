import Image from "next/image";
import { workingProcess1 } from "@/data/data";
import WorkingProcessCard from "@/components/ui/cards/working-process-card";

export default function WorkingProcess() {
    return (
        <>
            <div className="section optech-section-padding5">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>
                            Our working process on how to grow your business
                        </h2>
                    </div>
                    <div className="row z-index">
                        {/* working process start */}
                        {workingProcess1?.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                                }
                            >
                                <WorkingProcessCard data={item} index={i} />
                            </div>
                        ))}
                        {/* working process end */}

                        <div className="optech-line">
                            <Image
                                height="0"
                                width="0"
                                sizes="100vw"
                                src="/assets/images/v2/line.png"
                                alt="line"
                                className="h-auto w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
