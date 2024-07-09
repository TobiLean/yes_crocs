import SaveCard from "./SaveCard";


export default function DeliveryOption ({itemNumber, title, text, colour}) {
    return (
        <div className="delivery-container">
            <div className="delivery-option-left">
                <div className="delivery-desc">
                    <span className="deliver-to">{itemNumber}. {title}</span>
                </div>
                <div className={"delivery-type-"+colour}>{text}</div>
            </div>
            <div className="delivery-option-right">
                <div className="delivery-check">
                    <SaveCard />
                </div>
            </div>
        </div>
    );
}