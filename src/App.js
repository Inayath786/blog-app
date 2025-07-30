import React from "react";

import Main from "./main";
import BlackFileAccess from "./components/BlackFileAccess";
import Systemdesign from "./components/Systemdesign";

import AroundtheWorld from "./components/AroundtheWorld";

import ScalingSystems from "./Systemdesign/Scaling";
import LoadBalancingAndAutoScaling from "./Systemdesign/Loadbalancing";
import CachingTechniques from "./Systemdesign/Caching";
import MonolithicVsMicroservices from "./Systemdesign/Microservices";

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
import { Helmet } from "react-helmet";
import Pattern from "./BlackFileAccess/patterns";
import CashDeposit from "./BlackFileAccess/CashDeposit";
import RichnoBanks from "./BlackFileAccess/RichnoBanks";
import ZeroTaxes from "./BlackFileAccess/ZeroTaxes";
import CreditCharges from "./BlackFileAccess/CreditCharges";
import EMIBlog from "./BlackFileAccess/EMIBlog";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Helmet>
        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3425783300028526"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Main/>}></Route>
    
        <Route path="/systemdesign" element={<Systemdesign/>}></Route>
       <Route path="/blackfileaccess" element={<BlackFileAccess/>}></Route>
        <Route path="/aroundtheworld" element={<AroundtheWorld/>}></Route>
        <Route path="/indianprojects" element={<FutureProjects/>}></Route>
        
          <Route path="/systemdesign/scaling" element={<ScalingSystems/>}></Route>
          <Route path="/systemdesign/loadbalancers" element={<LoadBalancingAndAutoScaling/>}></Route>
          <Route path="/systemdesign/caching" element={<CachingTechniques/>}></Route>
           <Route path="/systemdesign/microservices" element={<MonolithicVsMicroservices/>}></Route>
          <Route path="/blackfile/patterns" element={<Pattern/>}></Route>
          <Route path="/blackfile/bankdeposits" element={<CashDeposit/>}></Route>
          <Route path="/blackfile/richbanks" element={<RichnoBanks/>}></Route>
          <Route path="/blackfile/zerotaxes" element={<ZeroTaxes/>}/>
          <Route path="/blackfile/creditcharges" element={<CreditCharges/>}></Route>
          <Route path="/blackfile/emicharges" element={<EMIBlog/>}></Route>
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
