import {useState} from "react";


const DayBoxes = () => {

    const [selected, SetSelected] = useState(true);

    const clickHandler = () => {
        SetSelected(!selected);
    }

    return(
        <div 
        style={{backgroundColor: selected ? "#0DE8C6" : "rgba(196, 193, 193, 0.958)" , border: "1px solid #F7F7F7"}}
        onClick={clickHandler}
        >

        </div>
    )
}

export default DayBoxes;

