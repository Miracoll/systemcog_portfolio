import Image from "next/image";

export default function WorkingProcessCard({ data, index }) {
    const number = index < 9 ? "0" + ++index : index;

    return (
        <>
            <div className="optech-numberbox-wrap">
                <div className="optech-numberbox-icon">
                    <Image
                        height={220}
                        width={228}
                        src={data.imgUrl}
                        priority
                        alt="icon"
                    />
                </div>
                <div className="optech-numberbox-data">
                    <span>{number}</span>
                    <h4 dangerouslySetInnerHTML={{ __html: data.title }}></h4>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    );
}
