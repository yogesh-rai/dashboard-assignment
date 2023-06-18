import {Row, Col, Form, Container, Badge, Image, OverlayTrigger, Popover, Button} from "react-bootstrap";
import TimeLineBar from "../TimeLineBar/TimeLineBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import {useState} from "react";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import {IoMdCloseCircle} from "react-icons/io";
import {ImDownload3} from "react-icons/im";
import "./Targeting.css";
import Chart from "./Chart";
import Map from "./Images/Map.png";
import { BiChevronDown } from "react-icons/bi";

const Targeting = ({GeoData, LangOptions}) => {

    const [showLang, SetShowLang] = useState(false);

    const langHandler = () => {
        SetShowLang(!showLang);
    }

    // const [value, setvalue] = useState();

    const [selectedLang, SetSelectedLang] = useState([]);

    const  handleOnchange  =  (e)  => {
       //SetSelectedLang(Array.isArray(e)?e.map(x => x.label):[]);
       //console.log(value);
       const arr = e.split(",");
       SetSelectedLang(arr.length > 0 ? arr.map(x => x) : []);
       console.log(selectedLang);
    }

    const removeAll = () => {
        SetSelectedLang([]);
    }

    const deleteHandler = (i) => {
        SetSelectedLang(selectedLang.filter(y => y !== i));
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Body>
            {
                GeoData.map((opt,idx) => (
                    <div style={{marginBottom: "12px"}} key={idx}>
                        <Form.Label className="labels">{opt.name}</Form.Label>
                        <Form>
                            { opt.options.map((t,idx) => (
                                    <Form.Check
                                        label={t}
                                        name="group1"
                                        type="radio"
                                        id="inline-radio-1"
                                        key={idx}
                                    />
                                ))
                            }
                        </Form>
                    </div>
                ))
            }
          </Popover.Body>
        </Popover>
    );

    return(
            <div className="campaign_name">
            <Row>
                <Col md={1}>
                <TimeLineBar number={6} height= {61} />
                </Col>

                <Col>
                    <h4>Targeting</h4>
                      <Row>
                            <Col md={6}>
                                  <CardHeader className="card targeting-1">
                                        <Row>
                                            <Col>
                                                <Form.Label className="labels">Start Date</Form.Label>
                                                <div className="targeting-lang">
                                                    <span  onClick={langHandler}>+ language</span>
                                                    {showLang && (
                                                       <MultiSelect
                                                        onChange={handleOnchange}
                                                        options={LangOptions}
                                                        disableChip={true}
                                                        clearable={false}
                                                       />
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Container className="lang-list">
                                                <span className="list-name">NAME</span>
                                                <span className="remove-all" onClick={removeAll}>Remove All</span>
                                            </Container>
                                            <div>
                                                { selectedLang.length > 0 ? 
                                                ( selectedLang.map((item,idx) => (
                                                    <span className="List-items" key={idx}>
                                                        {item} 
                                                        <IoMdCloseCircle className="close-icon" onClick={() => deleteHandler(item)}/>
                                                    </span>
                                                )))
                                                :
                                                (
                                                    <div className="no-lang">No language targeting is set</div>
                                                )
                                                }
                                            </div>
                                        </Row>
                                    </CardHeader>
                            </Col>

                            <Col md={6}>
                                <CardHeader className="card targeting-1 geoLoca">
                                    <Row>
                                        <Col style={{display: "flex"}}>
                                         <Form.Label className="labels">Geo Locations</Form.Label>
                                         <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                                <Button variant="secondary"
                                                className="geoList-Dropdown"
                                                >
                                                Location Option
                                                <BiChevronDown style={{fontWeight: 500, marginLeft: "3px", fontSize: "16px"}}/>
                                                </Button>
                                        </OverlayTrigger>
                                        </Col>
                                        <div className="geoList">
                                            <Form.Control 
                                            type="locations" 
                                            placeholder="Please input latitude/longitude, street address, postal code, city or country"
                                            size="sm"
                                            style={{width: "28vw"}} 
                                            />
                                            <button><ImDownload3/>Import Geo List</button>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="img-holder">
                                         <Image fluid={true} src={Map} alt="Map-img" />;
                                        </div>
                                    </Row>
                                </CardHeader>
                           </Col>
                      </Row>

                      <Row>
                         <CardHeader className="card targeting-2">
                                <Row>
                                     <Form.Label className="labels">Day {"&"} Time</Form.Label>
                                </Row>
                                <Row>
                                    <Col className="chips-col">
                                    <Badge pill className="chips">All Days</Badge>
                                    <Badge pill className="chips">Weekend</Badge>
                                    <Badge pill className="chips">Weekdays</Badge>
                                    <Badge pill className="chips">Weekdays {"("}9am - 5pm{")"}</Badge>
                                    <Form.Label className="labels" style={{float: "right", marginRight:"2rem"}}>Clear All</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                  <Container style={{padding: "0  3rem"}}>
                                    <Chart/>
                                  </Container>
                                </Row>
                            </CardHeader>
                      </Row>
                </Col>
           </Row>
       </div>
    )
}

export default Targeting;