import {useState} from "react";
//import {TbWorld} from "react-icons/tb";
import "./CheckBoxes.css"

const CheckBoxes = ({img, bg, color, value}) => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
       <div>
           <div className="Box"
            style={{backgroundColor : isChecked ? "rgb(213, 231, 237)" : "rgba(238, 236, 236, 0.958)", border: isChecked ? "2px solid rgb(92, 92, 143)" : "2px solid rgb(213, 212, 212)"}}
            >
                <input
                type="checkbox"
                value= {value}
                checked={isChecked}
                onChange={handleOnChange}
                style={{width:"20px", height: "20px"}}
                />
                <div className="icon" style={{backgroundColor : `${bg}`, color: `${color}`}}>
                    {img}
                </div>
                <span>{value}</span>
            </div>
            
       </div>
    );
}

//rgb(92, 92, 143)
export default CheckBoxes;