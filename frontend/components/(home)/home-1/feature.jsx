import { features1 } from "@/data/data";
import FeatureCard from "./ui/feature-card";

export default function Feature() {
    return (
        <>
            <div className="section extra-padding-tb">
                <div className="container">
                    <div className="row">
                        {/* features card start */}
                        {features1?.map((item, i) => (
                            <div key={i} className="col-xl-4 col-md-6">
                                <FeatureCard data={item} />
                            </div>
                        ))}
                        {/* features card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
