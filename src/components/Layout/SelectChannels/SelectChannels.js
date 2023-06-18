import "./SelectChannels.css";
import {Row,Col,Form} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CheckBoxes from "./CheckBoxes";
import {TbWorld} from "react-icons/tb";
import {RiFacebookFill} from "react-icons/ri"
import {SiGoogleads} from "react-icons/si";
import {RiLinkedinFill} from "react-icons/ri";

const SelectChannels = () => {

    const boxOptions = [
        {
            img : <TbWorld/>,
            bg : "#f28005",
            color : "white",
            value: "programmatic"
        },

        {
            img : <RiFacebookFill/>,
            bg : "#4267B2",
            color : "white",
            value: "facebook"
        },

        {
            img : <SiGoogleads/>,
            bg : "#DB4437",
            color : "white",
            value: "search"
        },

        {
            img : <RiLinkedinFill/>,
            bg : "#0077b5",
            color : "white",
            value: "linkedin"
        },

    ]


    return(
        <div className="Channels">
        <Row>
            <Col md={1}>
             <TimeLineBar number={2} height={11} />
            </Col>
            <Col>
                <h4>Select One or More Channels</h4>
                <div className="checkbox_options">
                    {boxOptions.length > 0 && 
                        boxOptions.map((item, idx) => (
                            <CheckBoxes 
                            img={item.img} 
                            bg={item.bg} 
                            color={item.color} 
                            value={item.value} 
                            key={idx}
                            />
                        ))
                    }
                </div>
                <Form.Text className="text-muted-channels">* Programmatic channels include Connected TVs, OTT, Video, Audio, Display, Native and Email.</Form.Text>
            </Col>
        </Row>
    </div>
    )
}

export default SelectChannels;