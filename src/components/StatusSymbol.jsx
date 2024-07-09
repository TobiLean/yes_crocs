export default function StatusSymbol ({bool}) {

    const errorRed = "#550C0C";

    if (bool) {
        return (
            <div className="product-status">
                <span>Instock</span>
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor: errorRed}} className="product-status">
                <span style={{color: "white"}} >Out of stock</span>
            </div>
        )
    }
} 