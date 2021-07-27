import React from "react";
import styles from "./App.css";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Leagues from "./Components/Leagues/Leagues";
import Teams from "./Components/Teams/Teams";
import TeamMatches from "./Components/TeamMatches/TeamMatches";
import LeagueMatches from "./Components/LeagueMatches/LeagueMatches";
import Standings from "./Components/Standings/Standings";
import {Redirect} from "react-router-dom";
import TeamsPage from "./Components/TeamsPage/TeamsPage";

function App() {
    return (
        <div className={styles}>
            <HashRouter>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route path='/' exact><Redirect to='/leagues'/>
                        </Route>
                        <Route path='/leagues' exact component={Leagues}/>
                        <Route path='/leagues/:leagueId/teams/:team?' exact component={Teams}/>
                        <Route path='/teams/:params?' exact component={TeamsPage}/>
                        <Route path='/teams/:teamId/matches' exact component={TeamMatches}/>
                        <Route path='/leagues/:leagueId/matches' exact component={LeagueMatches}/>
                        <Route path='/leagues/:leagueId/standings' exact component={Standings}/>
                    </Switch>
                </BrowserRouter>
            </HashRouter>
        </div>
    );
}

export default App;
