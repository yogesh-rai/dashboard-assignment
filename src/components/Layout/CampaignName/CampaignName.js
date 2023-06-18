import "./CampaignName.css";
import {Row, Col, Form} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
 
const CampaignName = () => {
    return(
        <div className="campaign_name">
            <Row>
                <Col md={1}>
                 <TimeLineBar number={1} height={5} />
                </Col>
                <Col>
                    <h4>Campaign Name</h4>
                    <Form style={{width: "35vw"}}>
                        <Form.Group className="mb-3">
                            <Form.Control type="campaignName" placeholder="Campaign Name" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default CampaignName;