import "./loader.css";

export function Loader() {
    return (
        <div className="loader">
            <div className="lds-ring lds-white">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}