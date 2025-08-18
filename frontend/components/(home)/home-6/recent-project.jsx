import RecentProjectCard from "@/components/ui/cards/recent-project-card";
import { recentProjects1 } from "@/data/data";
import Link from "next/link";

export default function RecentProject() {
    const lastIndex = recentProjects1.length - 1;

    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Explore our recent projects</h2>
                    </div>
                    <div className="row">
                        {/* recent project card start */}
                        {recentProjects1?.slice(0, 5).map((item, i) => (
                            <div
                                key={i}
                                className={
                                    lastIndex === i
                                        ? "col-xl-8"
                                        : "col-xl-4 col-md-6"
                                }
                                data-aos="fade-up"
                                data-aos-duration={
                                    i % 3 === 0 ? 500 : i % 3 === 1 ? 700 : 900
                                }
                            >
                                <RecentProjectCard data={item} />
                            </div>
                        ))}
                        {/* recent project card end */}
                        <div className="optech-center-btn">
                            <Link
                                className="optech-default-btn"
                                href="/portfolio-01"
                                data-text="View Our All Works"
                            >
                                <span className="btn-wraper">
                                    View Our All Works
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
