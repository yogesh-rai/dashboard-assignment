import {Row, Col, Form} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Attribution = () => {

    return(
        <div className="campaign_name">
            <Row>
                <Col md={1}>
                 <TimeLineBar number={7} height= {22.2} />
                </Col>
                <Col>
                    <h4>Attribution</h4>
                    <CardHeader className="card">
                        <Row>
                            <Col>
                                <Form.Label className="labels">Footfall Attribution</Form.Label>
                                <div style={{marginTop: ".5rem", marginBottom: "1rem", fontWeight: 500, fontSize: "14px"}}>
                                <Form.Check
                                    inline
                                    label="No"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                />
                                <Form.Check
                                    inline
                                    label="Yes (USD 1.00 CPM fees applies)"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                />
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardHeader className="card">
                        <Row>
                            <Col md={5}>
                               <Form.Label className="labels">Conversion Goals</Form.Label>
                               <Form.Select aria-label="Default select example" size="sm">
                                    <option>Select...</option>
                                    <option value="1">Identifix</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </CardHeader>
                </Col>
            </Row>
        </div>
    )
}

export default Attribution;