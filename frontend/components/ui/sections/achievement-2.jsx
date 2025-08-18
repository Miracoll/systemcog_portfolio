import { achievement2 } from "@/data/data";
import AchievementCard2 from "../cards/achievement-card-2";

export default function Achievement2() {
    return (
        <>
            <div className="optech-counter-section3">
                <div className="container">
                    <div className="optech-counter-wrap3">
                        {/* achievement card start */}
                        {achievement2?.map((item, i) => (
                            <AchievementCard2 key={i} data={item} index={i} />
                        ))}
                        {/* achievement card end */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="optech-divider" />
            </div>
        </>
    );
}
