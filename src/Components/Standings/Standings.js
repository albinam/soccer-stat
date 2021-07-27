import React, {useEffect, useState} from 'react';
import axios from 'axios';
import image from '../../Images/football.svg';
import {
    MDBCol,
    MDBRow, MDBTable, MDBTypography
} from 'mdb-react-ui-kit';
import {useParams} from 'react-router-dom';
import Header from '../Header/Header';

const Standings = ({history, location}) => {

    const [standings, setStandings] = useState([]);
    const [league, setLeague] = useState([]);
    let leagueId = useParams().leagueId;
    ;

    useEffect(() => {
        getStandings();
    }, [location])

    const getStandings = () => {
        axios.get(`http://api.football-data.org/v2/competitions/${leagueId}/standings`, {
            headers: {'X-Auth-Token':process.env.REACT_APP_API_KEY },
            dataType: 'json'
        })
            .then(response => {
                setStandings(response.data.standings[0].table);
                setLeague(response.data.competition)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <Header></Header>
            <MDBRow>
                <MDBCol className='col-md-4 mx-auto'>
                    <MDBTypography colorText={'white'} className='text-center'
                                   variant='h3'>{league.name}</MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBTable className='table-dark'>
                <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Draw</th>
                    <th>Lost</th>
                    <th>For</th>
                    <th>Against</th>
                    <th>Difference</th>
                </tr>
                </thead>
                <tbody>
                {standings.map((data, i) =>
                    <tr key={i + 1}>
                        <th scope='row'>{i + 1}</th>
                        <td><img src={data.team.crestUrl ? data.team.crestUrl : image} width={'30px'} height={'30px'}/></td>
                        <td>{data.team.name}</td>
                        <td>{data.playedGames}</td>
                        <td>{data.won}</td>
                        <td>{data.draw}</td>
                        <td>{data.lost}</td>
                        <td>{data.goalsFor}</td>
                        <td>{data.goalsAgainst}</td>
                        <td>{data.goalDifference}</td>
                    </tr>)}
                </tbody>
            </MDBTable>
        </div>
    );
};

export default Standings;