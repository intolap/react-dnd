import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense } from 'react'
import Home from './Home';
import Loading from './Loading';
import Header from './Header';
import Dragandrop from './examples/Dragandrop';
import TriggerclickEvent from './examples/TriggerClickEvent';
import Html2Canvas from './examples/Html2Canvas';
import SetFocus from './examples/SetFocus';
import Facebook from './examples/Facebook';
import PlaceFinder from './examples/PlaceFinder';
import PlaceFinder2 from './examples/PlaceFinder2';
import SearchLocationInput from './examples/SearchLocationInput';

function App() {
  return (
    <Router>
      <>
      <Header/>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/draganddrop/" element={<Dragandrop />}></Route>
          <Route path="/triggerclick/" element={<TriggerclickEvent />}></Route>
          <Route path="/html2canvas/" element={<Html2Canvas />}></Route>
          <Route path="/setfocus/" element={<SetFocus />}></Route>
          <Route path="/facebook/" element={<Facebook />}></Route>
          <Route path="/placefinder/" element={<PlaceFinder />}></Route>
          <Route path="/placefinder2/" element={<PlaceFinder2 />}></Route>
          <Route path="/SearchLocationInput/" element={<SearchLocationInput />}></Route>
        </Routes>
      </Suspense>
      {/* <Footer/> */}
      </>
    </Router>
  );
}

export default App;
