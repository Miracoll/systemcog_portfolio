import Image from "next/image";

export default function FeatureCard({ data }) {
    return (
        <>
            <div className="optech-iconbox-wrap2">
                <div className="optech-iconbox-icon2">
                    <Image
                        height={49}
                        width={49}
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="optech-iconbox-data2">
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    );
}
