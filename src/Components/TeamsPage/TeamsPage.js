import React, {useEffect, useState} from 'react';
import FormSelect from 'react-bootstrap/FormSelect';
import axios from 'axios';
import image from '../../Images/football.svg';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage, MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBInputGroup,
    MDBInputGroupText,
    MDBRow
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

const TeamsPage = ({history, location}) => {

    const [teams, setTeams] = useState([]);
    const [leagues, setLeagues] = useState('');
    const [seasons, setSeasons] = useState([]);
    let url;
    let teamInput = React.createRef();
    let params = new URLSearchParams(location.search);
    let leagueSearch = params.get('league')
    let seasonSearch = params.get('season');
    let teamSearch = params.get('team');

    useEffect(() => {
        if (leagueSearch) {
            if (seasonSearch) {
                url = `https://api.football-data.org/v2/competitions/${leagueSearch}/teams?season=${seasonSearch}`;
            } else {
                url = `https://api.football-data.org/v2/competitions/${leagueSearch}/teams`;
            }
        }
        getTeams();
        leaguesList();
        seasonsList();
    }, [location])

    const getTeams = () => {
        axios.get('https://api.football-data.org/v2/competitions?plan=TIER_ONE', {
            headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY},
            dataType: 'json'
        })
            .then(response => {
                console.log(response)
                setLeagues(response.data.competitions);
            })
            .catch((error) => {
                console.log(error);
            })
        console.log(leagueSearch)
        if (leagueSearch) {
            axios.get(url, {
                headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY},
                dataType: 'json'
            })
                .then(response => {
                    console.log(response)
                    setTeams(response.data.teams);
                })
                .catch((error) => {
                    console.log(error);
                })
            axios.get(`https://api.football-data.org/v2/competitions/` + leagueSearch, {
                headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY},
                dataType: 'json'
            })
                .then(response => {
                    setSeasons(response.data.seasons);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const seasonsList = () => {
        if (leagueSearch) {
            return seasons.map(function (date, i) {
                return <option value={date.startDate.substring(0, 4)} key={date.startDate.substring(0, 4)}
                               selected={seasonSearch == date.startDate.substring(0, 4) ? date.startDate.substring(0, 4) : false}>
                    {date.startDate}/{date.endDate}
                </option>
            })
        }
    }

    const leaguesList = () => {
        if (leagues) {
            return leagues.map(function (league, i) {
                return <option value={league.id} key={league.id}
                               selected={league.id == leagueSearch ? league.id : false}>
                    {league.name}
                </option>
            })
        }
    }

    const filterSeason = (e) => {
        seasonSearch = e.target.value;
        pushHistory();
    }

    const filterLeague = (e) => {
        leagueSearch = e.target.value;
        pushHistory();
    }

    const teamFilter = teams.filter(team => {
            let filteredTeam
            if (teamSearch) {
                filteredTeam = team.name.toLowerCase().includes(teamSearch.toLowerCase());
            } else {
                filteredTeam = team;
            }
            return filteredTeam
        }
    )

    const filterTeam = () => {
        teamSearch = teamInput.current.value;
        pushHistory();
    }

    const pushHistory = () => {
        let params = new URLSearchParams();
        if (leagueSearch) {
            params.set('league', leagueSearch);
        }
        if (seasonSearch) {
            params.set('season', seasonSearch);
        }
        if (teamSearch) {
            params.set('team', teamSearch);
        }
        history.push(`/teams/?${params.toString()}`);
    }

    return (
        <div>
            <Header></Header>
            <MDBRow>
                <MDBCol className='col-md-4 mx-auto'>
                    <MDBCard className='mb-2'>
                        <MDBCardBody className='d-flex justify-content-between py-2 bg-dark'>
                            <MDBInputGroup className='input-group-sm'>
                                <FormSelect className='form-select-sm' onChange={filterLeague}>
                                    {leaguesList()}
                                </FormSelect>
                            </MDBInputGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className='col-md-4 mx-auto'>
                    <MDBCard className='mb-2'>
                        <MDBCardBody className='d-flex justify-content-between py-2 bg-dark'>
                            <MDBInputGroup>
                                <FormSelect className='form-select-sm' onChange={filterSeason}>
                                    {seasonsList()}
                                </FormSelect>
                            </MDBInputGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className='col-md-4 mx-auto'>
                    <MDBCard className='mb-2'>
                        <MDBCardBody className='d-flex justify-content-between py-2 bg-dark'>
                            <MDBInputGroup>
                                <input type='text' className='form-control form-control-sm rounded'
                                       placeholder='Search'
                                       aria-label='Search'
                                       ref={teamInput}
                                       value={teamSearch ? teamSearch : ''}
                                       onChange={filterTeam}
                                />
                                <MDBInputGroupText className='border-0 bg-dark' id='search-addon'>
                                    <i className='fas fa-search'></i>
                                </MDBInputGroupText>
                            </MDBInputGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {teamFilter.map((t, i) =>
                    <MDBCol>
                        <div style={{
                            padding: 10,
                            margin: 10,
                            height: '100%'
                        }}>
                            <MDBCard className='h-100 d-flex bg-dark text-center' style={{
                                maxWidth: '550px',
                                maxHeight: '350px',
                                padding: 10,
                                color: 'white'
                            }}>
                                <MDBCardImage
                                    src={t.crestUrl ? t.crestUrl : image}
                                    alt={t.name}
                                    position='top'
                                    className='img-thumbnail rounded'
                                    style={{
                                        maxWidth: '150px', maxHeight: '105px', margin: 'auto',
                                        padding: 'auto'
                                    }}
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{t.name}</MDBCardTitle>
                                    <MDBCardText>{t.area.name}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <a href={t.website}>{t.website}</a>
                                    </MDBCardText>
                                    <MDBCardText>
                                        Founded in {t.founded}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <Link to={{pathname: `/teams/${t.id}/matches`}}>Matches</Link>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>)}
            </MDBRow>
        </div>
    );
};

export default TeamsPage;