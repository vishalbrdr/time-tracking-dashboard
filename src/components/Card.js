
import threeDots from "../images/icon-ellipsis.svg"

function Card({ eachData, index, time }) {

    return (
        <div className={`card card-${index + 1}`} key="i">
            <div className="card-data">
                <div className="card-header">
                    <h2 className="title">{eachData.title}</h2>
                    <img src={threeDots} alt="ellipses" />
                </div>
                <div className="hours">
                    <div className="current-hrs"> {eachData.timeframes[time].current}hrs </div>
                    <div className="previous-hrs">
                        {time==="daily"?"Yesterday":time==="weekly"?"Last Week":"Last Month"} - {eachData.timeframes[time].previous}hrs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
