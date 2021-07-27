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
    MDBRow, MDBTypography
} from 'mdb-react-ui-kit';
import {Link, useParams} from 'react-router-dom';
import Header from '../Header/Header';

const Teams = ({history, location}) => {

    const [teams, setTeams] = useState([]);
    const [league, setLeague] = useState('');
    const [seasons, setSeasons] = useState([]);
    let url;
    let teamInput = React.createRef();
    let params = new URLSearchParams(location.search);
    let leagueId = useParams().leagueId;
    let teamSearch = params.get('team');
    let seasonSearch = params.get('season');

    useEffect(() => {
        if (seasonSearch) {
            url = `https://api.football-data.org/v2/competitions/${leagueId}/teams?season=${seasonSearch}`;
        } else {
            url = `https://api.football-data.org/v2/competitions/${leagueId}/teams`;
        }
        getTeams();
        seasonsList();
    }, [location])

    const getTeams = () => {
        axios.get(url, {
            headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY},
            dataType: 'json'
        })
            .then(response => {
                setTeams(response.data.teams);
                setLeague(response.data.competition);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`https://api.football-data.org/v2/competitions/` + leagueId, {
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

    const seasonsList = () => {
        return seasons.map(function (date, i) {
            return <option value={date.startDate.substring(0, 4)} key={date.startDate.substring(0, 4)}
                           selected={seasonSearch == date.startDate.substring(0, 4) ? date.startDate.substring(0, 4) : false}>
                {date.startDate}/{date.endDate}
            </option>
        })
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

    const filterSeason = (e) => {
        seasonSearch = e.target.value;
        pushHistory();
    }

    const pushHistory = () => {
        let params = new URLSearchParams();
        if (teamSearch) {
            params.set('team', teamSearch);
        }
        if (seasonSearch) {
            params.set('season', seasonSearch);
        }
        history.push(`/leagues/${leagueId}/teams/?${params.toString()}`);
    }

    return (
        <div>
            <Header></Header>
            <MDBRow>
                <MDBCol className='col-md-4 mx-auto'>
                    <MDBTypography colorText={'white'} className='text-center'
                                   variant='h3'>{league.name}</MDBTypography>
                    <MDBCard className='mb-2'>
                        <MDBCardBody className='d-flex justify-content-between py-2 bg-dark'>
                            <MDBInputGroup className='input-group-sm'>
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
                                <FormSelect className='form-select-sm' onChange={filterSeason}>
                                    {seasonsList()}
                                </FormSelect>
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

export default Teams;