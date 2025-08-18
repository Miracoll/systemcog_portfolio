"use client";
import Image from "next/image";
import CountUp from "react-countup";

export default function AchievementCard2({ data, index }) {
    return (
        <>
            <div
                className="optech-counter-data3"
                data-aos="fade-up"
                data-aos-duration={400 + index * 200}
            >
                <div className="optech-counter-icon3">
                    <Image
                        height={36}
                        width={36}
                        priority
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="optech-counter-right">
                    <div className="optech-counter-number3">
                        <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            end={data.number}
                        />
                        {data.symbol}
                    </div>
                    <p>{data.title}</p>
                </div>
            </div>
        </>
    );
}
