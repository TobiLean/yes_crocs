export default function ButtonComponent ({text, route})  {
    return (
        <a href={route} className="button-component">
            <span>{text}</span>
        </a>
    );
}