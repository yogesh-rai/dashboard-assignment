import { Navbar, Nav, NavDropdown, OverlayTrigger, Popover, Form, Button} from "react-bootstrap";
import "./NavBar.css";
import { VscBellDot } from "react-icons/vsc";
import { AiFillDollarCircle } from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {IoExitOutline} from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";

const NavBar = ({data}) => {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header>
            <h6>SUPER USER</h6>
            <div style={{fontSize: "14px"}} >Identifix</div>
          </Popover.Header>
          <Popover.Body>
          <Form>
                <Form.Check 
                    type="switch"
                    id="Switch Account"
                    label="Switch Account"
                />
                <Form.Check 
                    type="switch"
                    label="Switch Partner"
                    id="disabled-custom-switch"
                />
                <a href="#" className="linkopt">
                    <div className="accountOptions plane">
                     <FaTelegramPlane className="userIcons"/>Submit Help Request
                    </div>
                </a>
                <a href="#" className="linkopt">
                    <div className="accountOptions">
                     <IoExitOutline className="userIcons"/>Logout
                    </div>
                </a>
            </Form>
           
          </Popover.Body>
        </Popover>
    );


    return(
        <>
        <Navbar bg="light" variant="light" collapseOnSelect expand="lg" className="main-nav" sticky="top">
                <Navbar.Brand href="#" className="logo"><span>SOLERA</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" bg="light" variant="light" style={{border:"none"}}>
                    <Nav className="me-auto nav-menu">
                        {
                            data.map((item,idx) => (
                                item.isDropdown ? (
                                    <NavDropdown key={idx} title={<span>{item.name}</span>} id="basic-nav-dropdown" className="nav-options">
                                        {item.options.map((d,i) => (
                                            <NavDropdown.Item key={i} href="#" className="navOptions">{d}</NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                ) : 
                                (
                                    <Nav.Link href="#" className="nav-options selected" key={idx}><span>{item.name}</span></Nav.Link>
                                )
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
                    <div className="justify-content-end  user-section">
                        <div className="icons">
                          <VscBellDot />
                        </div>
                        <div className="icons USD">
                          <AiFillDollarCircle />
                          <span>USD</span>
                        </div>
                        <div className="User">
                            <span>Hi, Hugo Solis</span>
                            <div style={{marginLeft: "-2rem", display: "flex"}}>
                                <span>Identifix</span>
                                <span>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <Button variant="secondary"
                                         style={{fontSize:"10px", height:"20px", paddingTop: 0, borderRadius: "20px", marginLeft: "5px"}}
                                         >
                                        Account
                                        <BiChevronDown style={{fontWeight: 500, marginLeft: "3px", fontSize: "16px"}}/>
                                        </Button>
                                </OverlayTrigger>
                                </span>
                            </div>
                        </div>
                    </div>
        </Navbar>
        </>
    )
}



export default NavBar;


