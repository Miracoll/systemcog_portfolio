import { chooseUs1 } from "@/data/data";
import ChooseUsCard from "./ui/choose-us-card";

export default function ChooseUs() {
    return (
        <>
            <div className="section optech-section-padding2 bg-light1">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Why you should choose us?</h2>
                    </div>
                    <div className="row">
                        {/* choose us card start */}
                        {chooseUs1?.slice(0, 3).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={600 + i * 200}
                            >
                                <ChooseUsCard data={item} />
                            </div>
                        ))}
                        {/* choose us card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
