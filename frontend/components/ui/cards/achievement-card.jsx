"use client";
import Image from "next/image";
import CountUp from "react-countup";

export default function AchievementCard({ data, index }) {
    return (
        <>
            <div
                className="optech-counter-data"
                data-aos="fade-up"
                data-aos-duration={200 + index * 200}
            >
                <div className="optech-counter-icon">
                    <Image
                        height={36}
                        width={36}
                        priority
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="optech-counter-number">
                    <CountUp
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        end={data.number}
                    />
                    {data.symbol}
                </div>
                <p>{data.title}</p>
            </div>
        </>
    );
}
