import "./LoadingIndicator.scss";

export default function LoadingIndicator() {
    return (
        <div className="loading-indicator__wrap">
            <div className="loading-indicator"></div>
            <div className="title mt_40">Loading...</div>
        </div>
    )
}