
import data from "../data/data.json"
import Card from "./Card"
function Data({time}) {
    return (
        <div className="data">
            {data.map((eachData, i) => (
                <Card eachData={eachData} time={time.toLowerCase()} key={i} index={i} />                
            ))}
        </div>
    )
}

export default Data
