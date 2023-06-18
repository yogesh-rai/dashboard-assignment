import "./TimeLineBar.css";

const TimeLineBar = ({number, height}) => {
    return(
        <div className="numbers">
            {number}
            <div className="bar" style={{height: `${height}rem`}}>
                <span>{''}</span>
            </div>
        </div>
    )
}

export default TimeLineBar;