import './App.css';
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountSection from './components/AccountSection/AccountSection';
import CampaignName from './components/Layout/CampaignName/CampaignName';
import {Row,Col} from "react-bootstrap";
import SelectChannels from './components/Layout/SelectChannels/SelectChannels';
import CampaignInfo from './components/Layout/CampaignInfo/CampaignInfo';
import Scheduling from './components/Layout/Scheduling/Scheduling';
import Budget from './components/Layout/Budget/Budget';
import Targeting from './components/Layout/Targeting/Targeting';
import Attribution from './components/Layout/Attribution/Attribution';
import ManagementFees from './components/Layout/ManagementFees/ManagementFees';
import FooterSection from './components/FooterSection/FooterSection';
import {NavList,GeoData,LangOptions} from "./components/ListData.js";

function App() {
  return (
    <div className="App">
      <NavBar data={NavList}/>
      <AccountSection />
      <div className="mainLayout">
        <Row>
          <Col className="newCampaign_heading">New Campaign</Col>
        </Row>
        <Row className="rows">
          <Col><CampaignName /></Col>
        </Row>
        <Row className="rows" style={{height: "12rem"}}>
          <Col><SelectChannels /></Col>
        </Row>
        <Row className="rows">
          <Col><CampaignInfo /></Col>
        </Row>
        <Row className="rows" style={{marginTop: "4rem"}}>
          <Col><Scheduling/></Col>
        </Row>
        <Row className="rows">
          <Col><Budget/></Col>
        </Row>
        <Row className="rows">
          <Col><Targeting GeoData={GeoData}  LangOptions={LangOptions}/></Col>
        </Row>
        <Row className="rows">
          <Col><Attribution/></Col>
        </Row>
        <Row className="rows">
          <Col><ManagementFees/></Col>
        </Row>
        <div className="buttons">
          <button>reset</button>
          <button>save</button>
        </div>
      </div>
      <FooterSection/>
    </div>
  );
}

export default App;
