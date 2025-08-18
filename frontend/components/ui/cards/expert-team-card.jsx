import Image from "next/image";
import Link from "next/link";

export default function ExpertTeamCard({ data }) {
    return (
        <>
            <div className="optech-team-wrap border_all">
                <div className="optech-team-thumb">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        priority
                        src={data.imgUrl}
                        alt="team"
                    />
                    <div className="optech-social-icon-box style-three position">
                        <ul>
                            {data?.social?.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.link} target="_blank">
                                        <i className={item.icon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="optech-team-data">
                    <Link href="/team-details">
                        <h5>{data.name}</h5>
                    </Link>
                    <p>{data.position}</p>
                </div>
            </div>
        </>
    );
}
