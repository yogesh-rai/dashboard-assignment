import "./slider.css";
import { useState } from "react";
import {Row, Col, Form, InputGroup, FormControl} from "react-bootstrap";

const Rangeslider = () => {
  const [leftVal, SetLeftVal] = useState(10);

  const [midVal, SetmidVal] = useState(30);

  const [rightVal, SetRightVal] = useState(70);

  const [fbaVal, SetFbVal] = useState(midVal-leftVal);

  const [searchaVal, SetSearchVal] = useState(rightVal-midVal);

  const setLeftValue = (e) => {
    SetLeftVal(e.target.value);
    let left = parseInt(leftVal);
    let mid = parseInt(midVal);
    SetFbVal(mid-left);
    //console.log(leftVal);
  };

  const setMidValue = (e) => {
    SetmidVal(e.target.value);
    //let input = parseInt(e.target.value);
    let left = parseInt(leftVal);
    let mid = parseInt(midVal);
    let right = parseInt(rightVal);
    SetFbVal(mid-left);
    SetSearchVal(right-mid);
  };

  const setRightValue = (e) => {
    SetRightVal(e.target.value);
    //console.log(leftVal);
    let mid = parseInt(midVal);
    let right = parseInt(rightVal);
    SetSearchVal(right-mid);
  };

  const proValHandler = (e) => {
    SetLeftVal(e.target.value);
  }

  const fbValHandler = (e) => {
    SetFbVal(e.target.value);
    let input = parseInt(e.target.value);
    let left = parseInt(leftVal);
    let val = input+left;
    SetmidVal(val);
  }

  const searchValHandler = (e) => {
    SetSearchVal(e.target.value);
    let input = parseInt(e.target.value);
    let mid = parseInt(midVal);
    let val = input+mid;
    SetRightVal(val);
  }


  return (

      <div>
        <Row>
        <Col md={2}>
            <Form.Label className="labels title programmatic">Programmatic</Form.Label>
            <InputGroup className="mb-3" size="sm">
            <FormControl
                aria-label="Programmatic"
                aria-describedby="basic-addon2"
                value={leftVal}
                onChange={proValHandler}
                />
                <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup>
        </Col>

        <Col md={2}>
            <Form.Label className="labels title facebook">Facebook</Form.Label>
            <InputGroup className="mb-3" size="sm">
                <FormControl
                aria-label="Facebook"
                aria-describedby="basic-addon2"
                value={fbaVal}
                onChange={fbValHandler}
                />
                <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup>
        </Col>

        <Col md={2}>
            <Form.Label className="labels title search">Search</Form.Label>
            <InputGroup className="mb-3" size="sm">
                <FormControl
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchaVal}
                onChange={searchValHandler}
                />
                <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup>
        </Col>
        </Row>
  
    <div className="multi-range-slider">
      <input
        type="range"
        max="100"
        value={leftVal}
        onChange={setLeftValue}
        className="ranger programmatic"
      />
      <input
        type="range"
        value={midVal}
        max="100"
        onChange={setMidValue}
        className="ranger facebook"
      />
      <input
        type="range"
        value={rightVal}
        max="100"
        onChange={setRightValue}
        className="ranger search"
      />

      <div className="slider">
        <div className="track"></div>
        <div
          className="range-left"
          style={{ right: `${100 - leftVal}%` }}
        ></div>
        <div
          className="range-middle"
          style={{ right: `${100 - midVal}%`, left: `${leftVal}%` }}
        ></div>
        <div
          className="range-right"
          style={{ right: `${100 - rightVal}%`, left: `${midVal}%` }}
        ></div>
        <div
          className="thumb left"
          style={{ right: `${100 - leftVal}%` }}
        ></div>
        <div
          className="thumb middle"
          style={{ right: `${100 - midVal}%` }}
        ></div>
        <div
          className="thumb right"
          style={{ right: `${100 - rightVal}%`}}
        ></div>
      </div>
    </div>
  </div>
  );
};

export default Rangeslider;
