import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Headeradd from "./Components/Headeradd";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Fixtures from "./Pages/Fixtures";
import Blog from "./Pages/Blog";
import NewsDetails from "./Pages/NewsDetails";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Privcypolicy from "./Pages/Privcypolicy";
import Term from "./Pages/Term";
import Grievance from "./Pages/Grievance";
import Schedule from "./Pages/Schedule";
import Recent from "./Components/Recent";
import Upcoming from "./Components/Upcoming";
import Live from "./Components/Live";

import Pagenotfound from "./Pages/Pagenotfound";
import Seriescomponent from "./Components/Seriescomponent";
import MatchComponent from "./Components/MatchComponent";
import ScoreCard from "./Components/ScoreCard";
import Squad from "./Components/Squad";
import MatchInfo from "./Components/MatchInfo";
import RankTable from "./Components/RankTable";
import RankCountryTable from "./Components/RankCountryTable";
import AllUpcoming from "./Components/AllUpcoming";
import T20Upcoming from "./Components/T20Upcoming";
import OdiUpcoming from "./Components/OdiUpcoming";
import AllRecent from "./Components/AllRecent";
import TestUpcoming from "./Components/TestUpcoming";
function App() {
  return (
    <>
      <Headeradd />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cricket-schedule" element={<Schedule />}>
          <Route index element={<Recent />} />
          <Route path="recent" element={<Recent />}>
            <Route index element={<AllRecent />} />
            <Route path="all" element={<AllRecent />} />
          </Route>
          <Route path="upcoming" element={<Upcoming />}>
            <Route index element={<AllUpcoming />} />
            <Route path="all" element={<AllUpcoming />} />
            <Route path="t20" element={<T20Upcoming />} />
            <Route path="odi" element={<OdiUpcoming />} />
            <Route path="test" element={<TestUpcoming />} />
          </Route>
          <Route path="live" element={<Live />}/>
           
        </Route>
        <Route path="series" element={<Series />} />
        <Route path="series/details/:id" element={<Seriescomponent />} />
        <Route path="match/:id" element={<MatchComponent />}>
          <Route index element={<ScoreCard />} />
          <Route path="scorecard" element={<ScoreCard />} />
          <Route path="match-info" element={<MatchInfo />} />
          <Route path="squad" element={<Squad />} />
        </Route>
        <Route path="fixtures" element={<Fixtures />} />
        <Route path="rank-table/:category/:format" element={<RankTable />} />
        <Route path="team/rank-table/:format" element={<RankCountryTable />} />
        <Route path="news" element={<Blog />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<About />} />
        <Route path="privacy-policy" element={<Privcypolicy />} />
        <Route path="terms-condtion" element={<Term />} />
        <Route path="grievance" element={<Grievance />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
