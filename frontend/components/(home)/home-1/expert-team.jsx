import { teamExpert1 } from "@/data/data";
import ExpertTeamCard from "./ui/expert-team-card";

export default function ExpertTeam() {
    return (
        <>
            <div className="section optech-section-padding2 dark-bg">
                <div className="container">
                    <div className="optech-section-title light-color center">
                        <h2>Our expert team is always ready to help you</h2>
                    </div>
                    <div className="row">
                        {/* team card start */}
                        {teamExpert1?.slice(0, 4).map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration={400 + i * 200}
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
