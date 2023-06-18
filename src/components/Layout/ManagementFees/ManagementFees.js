import {Row, Col, Form} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./ManagementFees.css";

const ManagementFees = () => {

    return(
        <div className="campaign_name">
            <Row>
                <Col md={1}>
                 <TimeLineBar number={8} height= {11.5} />
                </Col>
                <Col>
                    <h4>Management Fees</h4>
                    <CardHeader className="card">
                        <Row>
                            <Col>
                               <div style={{marginTop: ".5rem", marginBottom: "1rem", fontWeight: 500, fontSize: "14px"}}>
                                    <Form.Check
                                            label="No management fees."
                                            name="group1"
                                            type="radio"
                                            id="inline-radio-1"
                                        />
                                    <Form.Check
                                        label="Add additional management fees to this campaign."
                                        name="group1"
                                        type="radio"
                                        id="inline-radio-1"
                                    />
                                  </div>
                                  <Form.Text className="text-muted-management">To include management fees based on any additional services provided.</Form.Text>
                            </Col>
                        </Row>
                    </CardHeader>
                </Col>
            </Row>
        </div>
    )
}


export default ManagementFees;