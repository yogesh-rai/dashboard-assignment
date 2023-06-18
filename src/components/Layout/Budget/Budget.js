import "./Budget.css";
import { useState } from "react";
import {Row, Col, Form, InputGroup, FormControl} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Switch from "react-switch";
import Rangeslider from "./Rangeslider";
 
const Budget = () => {


    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }

    const [checkedOne, setCheckedOne] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    }

    return(
        <div className="campaign_name">
            <Row>
                <Col md={1}>
                 <TimeLineBar number={5} height={45} />
                </Col>
                <Col>
                    <h4>Budget</h4>
                    <CardHeader className="card">
                        <Row>
                            <Col md={5}>
                             <Form.Label className="labels">Automatic Budget Optimization</Form.Label>
                             <Form.Text className="text-muted">Let Solera automatically allocate budget to adgroups that are performing</Form.Text>
                             
                            </Col>
                            <Col md={4}>
                                <Switch
                                    onChange={handleChange}
                                    checked={checked}
                                    className="switch_button"    
                                />
                            </Col>
                        </Row>

                        <Row style={{marginTop : "2rem"}}>
                            <Col md={4}>
                                <Form.Label className="labels">Overall Budget Cap</Form.Label>
                                <InputGroup className="mb-3" size="sm">
                                <FormControl
                                    placeholder="Not Set"
                                    aria-label="Overall Budget Cap"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
                                </InputGroup>
                            </Col>

                            <Col md={4}>
                                <Form.Label className="labels">Daily Budget Cap</Form.Label>
                                <InputGroup className="mb-3" size="sm">
                                    <FormControl
                                    placeholder="Not Set"
                                    aria-label="Daily Budget Cap"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
                                </InputGroup>
                                <Form.Check 
                                    type="checkbox"
                                    id="default-checkbox"
                                    label="Don't apply daily budget cap to ad groups."
                                    className="checkBox"
                                />
                            </Col>

                            <Col md={3}>
                                <Form.Label className="labels">Budget Type</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                        <option value="1">Daily</option>
                                        <option value="2">Weekly</option>
                                        <option value="3">Monthly</option>
                                        <option value="4">Annually</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row style={{marginTop : "2rem", borderBottom: "2px solid rgb(213, 212, 212)", paddingBottom: "3rem"}}>
                            <Rangeslider/>
                        </Row>

                        <Row style={{marginTop: "2rem"}}>
                            <Col md={5}>
                             <Form.Label className="labels">Apply Bidding Strategy to All Ad Groups</Form.Label>
                             <Form.Text className="text-muted">
                                All ad groups created will inherit and adopt this bidding strategy. Each ad group will not be able to use its
                                individual bidding strategy.
                            </Form.Text>
                             
                            </Col>
                            <Col md={4}>
                                <Switch
                                    onChange={handleChangeOne}
                                    checked={checkedOne}
                                    className="switch_button"    
                                />
                            </Col>
                        </Row>

                        <Row style={{marginTop : "2rem", marginBottom: "2rem"}}>
                            <Col md={4}>
                                <Form.Label className="labels">Bidding Strategy</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                        <option value="1">Lowsest Cost</option>
                                        <option value="2">Highest Cost</option>
                                </Form.Select>
                            </Col>

                            <Col md={4}>
                                <Form.Label className="labels">Optimize For</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                        <option value="1">Maximize Clicks</option>
                                        <option value="2">Maximize site visits</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </CardHeader>
                </Col>
            </Row>
        </div>
    )
}

export default Budget;