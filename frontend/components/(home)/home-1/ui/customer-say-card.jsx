import Image from "next/image";

export default function CustomerSayCard({ data }) {
    return (
        <>
            <div className="optech-t-box">
                <div className="optech-t-quote">
                    <Image
                        height={64}
                        width={64}
                        priority
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="optech-t-data">
                    <p>{data.comment}</p>
                    <div className="optech-t-rating">
                        <ul>
                            {new Array(data.rating).fill(0).map((_, i) => (
                                <li key={i}>
                                    <i className="fas fa-star ui-star"></i>
                                </li>
                            ))}
                            {new Array(5 - Number(data.rating))
                                .fill(0)
                                .map((_, i) => (
                                    <li key={i}>
                                        <i className="fas fa-star ui-star-none"></i>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="optech-t-author">
                        <h5>{data.name}</h5>
                        <span>{data.position}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
