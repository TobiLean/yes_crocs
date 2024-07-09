export default function SaveCard ({text}) {
    return (
        <div className="save-card-div">
            <input className="save-card-input" type="checkbox" name="save-card-checkbox" id="save-card-id" />
            <label htmlFor="save-card-id">{text}</label>
        </div>
    )
}