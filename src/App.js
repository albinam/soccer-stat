import React from "react";
import styles from "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Leagues from "./Components/Leagues/Leagues";
import Teams from "./Components/Teams/Teams";
import TeamMatches from "./Components/TeamMatches/TeamMatches";
import Home from "./Components/Home/Home";
import LeagueMatches from "./Components/LeagueMatches/LeagueMatches";
import Standings from "./Components/Standings/Standings";
import {Redirect} from "react-router";
import TeamsPage from "./Components/TeamsPage/TeamsPage";

function App() {
    return (
        <div className={styles}>
            <BrowserRouter>
                <Route path='/' exact><Redirect to='/leagues'/>
                </Route>
                <Route path='/leagues' exact component={Leagues}/>
                <Route path='/leagues/:leagueId/teams/:team?' exact component={Teams}/>
                <Route path='/teams/:params?' exact component={TeamsPage}/>
                <Route path='/teams/:teamId/matches' exact component={TeamMatches}/>
                <Route path='/leagues/:leagueId/matches' exact component={LeagueMatches}/>
                <Route path='/leagues/:leagueId/standings' exact component={Standings}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
