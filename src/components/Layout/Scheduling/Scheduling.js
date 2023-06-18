import {Row, Col, Form} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import {useState} from "react";
import TimezoneSelect from 'react-timezone-select'
import "./Scheduling.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 

const Scheduling = () => {


    const [selectedTimezone, setSelectedTimezone] = useState({});

    const [startDate, SetStartDate] = useState(null);

    const [endDate, SetEndDate] = useState(null);


    return(
        <div className="campaign_name">
            <Row>
                <Col md={1}>
                 <TimeLineBar number={4} height= {11.7} />
                </Col>
                <Col>
                    <h4>Scheduling</h4>
                    <CardHeader className="card">
                        <Row>
                            <Col md={4}>
                                <Form.Label className="labels">Timezone</Form.Label>
                                <TimezoneSelect
                                value={selectedTimezone}
                                onChange={setSelectedTimezone}
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Label className="labels">Start Date</Form.Label>
                                <DatePicker 
                                selected={startDate}
                                onChange={date => SetStartDate(date)}
                                className="date"
                                />
                            </Col>

                            <Col md={3} style={{marginLeft: "-1rem"}}>
                            <Form.Label className="labels">End Date</Form.Label>
                                <DatePicker 
                                selected={endDate}
                                onChange={date => SetEndDate(date)}
                                className="date"
                                />
                            </Col>
                        </Row>
                    </CardHeader>
                </Col>
            </Row>
        </div>
    )
}

export default Scheduling;