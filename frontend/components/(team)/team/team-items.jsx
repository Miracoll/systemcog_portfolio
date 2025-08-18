import ExpertTeamCard from "@/components/ui/cards/expert-team-card";
import { teamExpert1 } from "@/data/data";

export default function TeamItems() {
    return (
        <>
            <div className="section optech-section-padding2">
                <div className="container">
                    <div className="row">
                        {/* team card start */}
                        {teamExpert1?.slice(0, 8).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 4 === 0
                                        ? 400
                                        : i % 4 === 1
                                        ? 600
                                        : i % 4 === 2
                                        ? 800
                                        : 1000
                                }
                            >
                                <ExpertTeamCard data={item} />
                            </div>
                        ))}
                        {/* team card end */}
                    </div>
                </div>
            </div>
        </>
    );
}
