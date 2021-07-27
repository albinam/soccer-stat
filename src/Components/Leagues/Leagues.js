import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol, MDBInputGroup, MDBInputGroupText,
    MDBRow
} from 'mdb-react-ui-kit';
import image from '../../Images/football.svg';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

const Leagues = ({history, location}) => {

    const [leagues, setLeagues] = useState([]);
    let params = new URLSearchParams(location.search);
    let search = params.get('league');
    let textInput = React.createRef();

    useEffect(() => {
        getLeagues();
    },)

    const leagueFilter = leagues.filter(league => {
            let filteredLeague
            if (search) {
                filteredLeague = league.name.toLowerCase().includes(search.toLowerCase());
            } else {
                filteredLeague = league;
            }
            return filteredLeague
        }
    )

    const filter = () => {
        search = textInput.current.value;
        if (search) {
            let params = new URLSearchParams();
            params.set('league', search);
            history.push(`/leagues/?${params.toString()}`);
            return;
        }
        history.push('/leagues');
    }

    const getLeagues = () => {
        axios.get('http://api.football-data.org/v2/competitions?plan=TIER_ONE', {
            headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY  },
            dataType: 'json'
        })
            .then(response => {
                setLeagues(response.data.competitions);
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
                    <MDBCard className='mb-2'>
                        <MDBCardBody className='d-flex justify-content-between py-2 bg-dark'>
                            <MDBInputGroup className='input-group-sm'>
                                <input type='text' className='form-control form-control-sm rounded'
                                       placeholder='Search'
                                       aria-label='Search'
                                       ref={textInput}
                                       value={search ? search : ''}
                                       onChange={filter}
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
                {leagueFilter.map((l, i) =>
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
                                    src={l.emblemUrl ? l.emblemUrl : l.area.ensignUrl || image}
                                    alt={l.name}
                                    position='top'
                                    className='img-thumbnail rounded'
                                    style={{
                                        maxWidth: '150px', maxHeight: '105px', margin: 'auto',
                                        padding: 'auto'
                                    }}
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{l.name}</MDBCardTitle>
                                    <MDBCardText>{l.area.name}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <i className='fas fa-calendar-week'></i>
                                        {l.currentSeason.startDate} - {l.currentSeason.endDate}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <Link to={{pathname: `/leagues/${l.id}/teams`, leagueId: l.id}}>Teams</Link>
                                    </MDBCardText>
                                    <MDBCardText>
                                        <Link to={{pathname: `/leagues/${l.id}/matches`, leagueId: l.id}}>Matches</Link>
                                    </MDBCardText>
                                    <MDBCardText>
                                        <Link to={{pathname: `/leagues/${l.id}/standings`, leagueId: l.id}}>Standings</Link>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>)}
            </MDBRow>
        </div>
    );
};

export default Leagues;