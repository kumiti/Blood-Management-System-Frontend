import "./App.css";
import Header from "./Component/Header/Header";
import { Routes, Route } from "react-router-dom";
import Regesindivual from "./Component/Donate_as_indiviual/Regesindivual";
import RidaNextRI from "./Component/Donate_as_indiviual/RidaNextRI";
import Nextindivual from "./Component/Donate_as_indiviual/Nextindivual";
import City from "./Component/Donate_as_indiviual/City";
import NotFound from "./Component/Fou404page/F404page";
import Rasorg from "./Component/Donate_organzation/Rasorg";
import Hospitailrgtr from "./Component/Donate_Hospitail/Hospitalregtr.jsx";
import Donerrgtr from "./Component/Donae_Doner/Donerregister";
import MixHoPN from "./Component/Dashboard_Hospitail_profile/MixHoPN.jsx";
import MixLN from "./Component/Dashboard_Labatory/MixLN.jsx";
import MixStoreN from "./Component/Dashboard_store/MixStoreN.jsx";
import MixsyNav from "./Component/Dashboard_System_adimn/MixsyNav.jsx";
import QualificationForm from "./Component/QualificationForm/Qualificationform";
import Registersion from "./Component/Doner_as_staff/DonationAs_D_S_H";
import Indivdualdash from "./Component/Donate_as_indiviual/Indivdualdash";
import DashboardInformation from "./Component/Donar_information/Dashboard.jsx";
import Awareness from "./Component/Awareness/Awareness";
import LogIn from "./Component/LogIn/LogIn";
import Schedule from "./Component/Schedule/Schedule";
import Collector from "./Component/Dashboard_Collector/Collector";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />

        {/* Dashboard  start*/}
        <Route path="/Donerinfo" element={<DashboardInformation />} />
        <Route path="/Awareness" element={<Awareness />} />
        <Route path="/HospitailDashboard" element={<MixHoPN />} />
        <Route path="/LabratoryDashboard" element={<MixLN />} />
        <Route path="/storeDashboard" element={<MixStoreN />} />
        <Route path="/systemadimnDashboard" element={<MixsyNav />} />
        <Route path="/QualificationForm" element={<QualificationForm />} />
        {/* dashboard end */}

        {/* donate as indivial start */}
        <Route path="/Register" element={<Indivdualdash />} />
        <Route path="/register1" element={<Regesindivual />} />
        <Route path="/register2" element={<Nextindivual />} />
        <Route path="/register4" element={<RidaNextRI />} />
        <Route path="/register3" element={<City />} />
        {/* donate as indivial ends */}

        {/* donate as select as hosipital ,as staff,doner start*/}
        <Route path="/registerion" element={<Registersion />} />
        {/* donate as select as hosipital ,as staff,doner ends*/}
        {/* donate as as hosipital */}
        <Route path="/hostpitalsubmit" element={<Hospitailrgtr />} />
        {/* donate as doner */}
        <Route path="/Donersubmit" element={<Donerrgtr />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Dashboard_Collector" element={<Collector />} />
      </Routes>
    </>
  );
}

export default App;
