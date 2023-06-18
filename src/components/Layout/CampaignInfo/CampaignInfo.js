import "./CampaignInfo.css";
import {Row, Col, Form, InputGroup, FormControl,Accordion} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import {useState} from "react";
 
const CampaignInfo = () => {


    const[expand, setExpand] = useState(false);

    const clickHandler = () => {
        setExpand(!expand);
    }

    const contactInfo = ["Contact ID", "Bundle ID", "Facebook ID", "Display ID", "SEM ID", "Billed To"];

    return(
        <div className="CampInfo">
            <Row>
                <Col md={1}>
                 <TimeLineBar number={3} height= { expand ? 73 : 58} />
                </Col>
                <Col>
                    <h4>Campaign Info</h4>
                    <CardHeader className="card">
                        <Row>
                            <Col md={5}>
                                <Form.Label className="labels">Objective</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option value="1">Trafiic</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col md={5}>
                            <Form.Label className="labels">Advertiser</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option value="1">Identifix</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </CardHeader>

                    <CardHeader className="card">
                        <Row>
                            <Col md={5}>
                                <Form.Label className="labels">KPI</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option value="1">CTR</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col md={5}>
                            <Form.Label className="labels">KPI Amount</Form.Label>
                            <InputGroup className="mb-3" size="sm">
                                <FormControl
                                placeholder="Not Set"
                                aria-label="KPI Amount"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                            </InputGroup>
                            </Col>
                        </Row>
                    </CardHeader>

                    <CardHeader className="card">
                        <Row>
                            <Col md={5}>
                                <Form.Label className="labels">Facebook Ad Account</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option value="1">Identifix</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Text className="text-muted" style={{marginTop: "10px"}}>Please select Facebook Ad Account you want to use for this campaign.</Form.Text>
                            </Col>
                            <Col md={5}>
                                <Form.Label className="labels">Google Ad Account</Form.Label>
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option value="1">Identifix</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Text className="text-muted" style={{marginTop: "10px"}}>Please select Google Ad Account you want to use for this campaign.</Form.Text>
                            </Col>
                        </Row>
                    </CardHeader>

                    <CardHeader className="card">
                        <Row>
                            <Col md={5}>
                                <Form.Label className="labels">Campaign Category</Form.Label>
                                <div style={{marginTop: ".5rem", marginBottom: "1rem", fontWeight: 500, fontSize: "14px"}}>
                                <Form.Check
                                    inline
                                    label="General"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                />
                                <Form.Check
                                    inline
                                    label="Special Ad Category"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                />
                                </div>
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option>Select...</option>
                                    <option value="1">Identifix</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </CardHeader>
                    
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={clickHandler}>Dynamic Search Ad Settings</Accordion.Header>
                                    <Accordion.Body>
                                    <Row>
                                        <Col md={5}>
                                            <Form.Label className="labels">Website Domain to Market</Form.Label>
                                            <InputGroup className="mb-3" size="sm">
                                                <FormControl
                                                placeholder="Website Domain"
                                                aria-label="WebsiteDomain"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col md={5}>
                                        <Form.Label className="labels">Language</Form.Label>
                                            <Form.Select aria-label="Default select example" size="sm">
                                                <option value="1">English</option>
                                                <option value="2">Hindi</option>
                                                <option value="3">Bengali</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Label className="labels">Specify Sources for Populating the Dynamic Ad</Form.Label>
                                            <div style={{marginTop: ".5rem", marginBottom: "1rem", fontWeight: 500, fontSize: "14px"}}>
                                                <Form.Check
                                                        label="Use Google's index of my website"
                                                        name="group1"
                                                        type="radio"
                                                        id="inline-radio-1"
                                                    />
                                                    <Form.Check
                                                        label="Use URLs from my page feed only"
                                                        name="group1"
                                                        type="radio"
                                                        id="inline-radio-1"
                                                    />
                                                    <Form.Check
                                                        label="Use URLs from both Google's index of my website and my page feed"
                                                        name="group1"
                                                        type="radio"
                                                        id="inline-radio-1"
                                                    />
                                            </div>
                                        </Col>
                                    </Row>
                                    </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion style={{marginTop: "2rem"}}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Contact Information</Accordion.Header>
                                    <Accordion.Body>
                                    <Row>
                                    {contactInfo.map((item,idx) => (
                                        <Col md={2} key={idx}>
                                            <Form.Label className="labels">{item}</Form.Label>
                                            <InputGroup className="mb-3" size="sm">
                                                <FormControl
                                                placeholder="Type"
                                                aria-label={item}
                                                />
                                            </InputGroup>
                                        </Col>
                                    ))}
                                    </Row>
                                    </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </div>
    )
}

export default CampaignInfo;