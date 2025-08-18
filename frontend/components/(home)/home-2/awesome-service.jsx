import { awesomeServices1 } from "@/data/data";
import AwesomeServiceCard from "./ui/awesome-service-card";

export default function AwesomeService() {
    return (
        <>
            <div className="section bg-light1 optech-section-padding2">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>
                            Our awesome&nbsp;services&nbsp;to give you success
                        </h2>
                    </div>
                    <div className="row">
                        {/* awesome service start */}
                        {awesomeServices1?.slice(0, 6).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={i % 2 === 0 ? 600 : 800}
                            >
                                <AwesomeServiceCard data={item} />
                            </div>
                        ))}
                        {/* awesome service end */}
                    </div>
                </div>
            </div>
        </>
    );
}
