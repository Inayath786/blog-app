import React from "react";

import Main from "./main";
import Cinema from "./components/Cinema";
import Systemdesign from "./components/Systemdesign";
import Environment from "./components/Environment";
import AroundtheWorld from "./components/AroundtheWorld";
import DarkSecretsOfCinema from "./Cinema/Secrets";
import HistoryOfIndianCinema from "./Cinema/History"
import IndianCinemaFacts from "./Cinema/topPerformance";
import IconicDialogues from "./Cinema/Iconicdia";
import ScalingSystems from "./Systemdesign/Scaling";
import LoadBalancingAndAutoScaling from "./Systemdesign/Loadbalancing";
import CachingTechniques from "./Systemdesign/Caching";
import MonolithicVsMicroservices from "./Systemdesign/Microservices";
import ClimateCrisis from "./Environment.js/Climate";
import UrbanPollution from "./Environment.js/UrbanPollution";
import ForestConservation from "./Environment.js/Forest";
import GoGreen from "./Environment.js/Gogreen";
import RussiaUkraineWar from "./Aroundtheworld.js/Russia-ukraine";
import MiddleEastConflict from "./Aroundtheworld.js/Middleeast";
import UsChinaTradeWar from "./Aroundtheworld.js/Us-chinatrade";
import GlobalCrisis from "./Aroundtheworld.js/GlobalCrisis";
import FutureProjects from "./components/IndianProjects";
import VandeBharat from "./Futureprojects/Vandebharath";
import GaganyaanMission from "./Futureprojects/Gagaanyan";
import SemiconductorManufacturing from "./Futureprojects/Semiconductor";
import GreenHydrogenSolar from "./Futureprojects/Greenenergy";
import MegaInfrastructure from "./Futureprojects/Megainfra";

import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Main/>}></Route>
        <Route path="/cinema" element={<Cinema/>}></Route>
        <Route path="/systemdesign" element={<Systemdesign/>}></Route>
        <Route path="/environment" element={<Environment/>}></Route>
        <Route path="/aroundtheworld" element={<AroundtheWorld/>}></Route>
        <Route path="/indianprojects" element={<FutureProjects/>}></Route>
        <Route path="/cinema/darksecrets" element={<DarkSecretsOfCinema/>}></Route>
        <Route path="/cinema/history" element={<HistoryOfIndianCinema/>}></Route>
        <Route path="/cinema/topPerformance" element={<IndianCinemaFacts/>}></Route>
        <Route path="/cinema/iconicdialouges" element={<IconicDialogues/>}></Route>
          <Route path="/systemdesign/scaling" element={<ScalingSystems/>}></Route>
          <Route path="/systemdesign/loadbalancers" element={<LoadBalancingAndAutoScaling/>}></Route>
          <Route path="/systemdesign/caching" element={<CachingTechniques/>}></Route>
           <Route path="/systemdesign/microservices" element={<MonolithicVsMicroservices/>}></Route>
           <Route path="/environment/climate-crisis" element={<ClimateCrisis/>}></Route>
            <Route path="/environment/urbanpollution" element={<UrbanPollution/>}></Route>
            <Route path="/environment/forest" element={<ForestConservation/>}></Route>
            <Route path="/environment/green" element={<GoGreen/>}></Route>
            <Route path="/global/russia-ukraine" element={<RussiaUkraineWar/>}></Route>
            <Route path="/global/middle-east" element={<MiddleEastConflict/>}></Route>
            <Route path="/global/us-china" element={<UsChinaTradeWar/>}></Route>
             <Route path="/global/energy-food-crisis" element={<GlobalCrisis/>}></Route>
              <Route path="/india/future/vandebharat" element={<VandeBharat/>}></Route>
               <Route path="/india/future/gagan" element={<GaganyaanMission/>}></Route>
                <Route path="/india/future/semiconductorfab" element={<SemiconductorManufacturing/>}></Route>
                <Route path="/india/future/greenenergy" element={<GreenHydrogenSolar/>}></Route>
                 <Route path="/india/future/infrastructure" element={<MegaInfrastructure/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
