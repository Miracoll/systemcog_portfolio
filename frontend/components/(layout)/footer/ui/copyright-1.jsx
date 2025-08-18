export default function Copyright1() {
    const date = new Date().getFullYear();

    return (
        <>
            <div className="optech-footer-bottom center one">
                <div className="optech-copywright dark-color">
                    <p> Copyright © {date} Qubohub. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}
