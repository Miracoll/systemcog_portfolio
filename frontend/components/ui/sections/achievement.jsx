import { achievement } from "@/data/data";
import AchievementCard from "../cards/achievement-card";

export default function Achievement() {
    return (
        <>
            <div className="section optech-section-padding-bottom">
                <div className="container">
                    <div
                        className="optech-counter-wrap"
                        style={{
                            backgroundImage:
                                'url("/assets/images/v2/counter-bg.png")',
                        }}
                    >
                        {/* achievment start */}
                        {achievement?.map((item, i) => (
                            <AchievementCard key={i} data={item} index={i} />
                        ))}
                        {/* achievment end */}
                    </div>
                </div>
            </div>
        </>
    );
}
