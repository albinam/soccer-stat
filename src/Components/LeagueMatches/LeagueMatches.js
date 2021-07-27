import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment';
import {useParams} from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBInputGroup,
    MDBRow,
    MDBTable,
    MDBTypography
} from 'mdb-react-ui-kit';
import Header from '../Header/Header';
import FormSelect from 'react-bootstrap/FormSelect';


const Matches = ({history, location}) => {

    const [matches, setMatches] = useState([]);
    const [league, setLeague] = useState([]);
    const [seasons, setSeasons] = useState([]);
    let urlMatches;
    let params = new URLSearchParams(location.search);
    let leagueId = useParams().leagueId;
    let dateFromSearch = params.get('dateFrom');
    let dateToSearch = params.get('dateTo');
    let seasonSearch = params.get('season');

    useEffect(() => {
        if (seasonSearch) {
            urlMatches = `https://api.football-data.org/v2/competitions/${leagueId}/matches?season=${seasonSearch}`;
        } else {
            urlMatches = `https://api.football-data.org/v2/competitions/${leagueId}/matches`;
        }
        getMatches();
        seasonsList();
    }, [location])

    const handleOnChange = (value) => {
        if (value) {
            dateFromSearch = moment(value[0]).format('YYYY-MM-DD');
            dateToSearch = moment(value[1]).format('YYYY-MM-DD');
            pushHistory();
        } else {
            dateFromSearch = 0;
            dateToSearch = 0;
            pushHistory();
        }
    }

    const filter = matches.filter(match => {
            let filtered
            if (dateFromSearch && dateToSearch) {
                let dateFrom = moment(dateFromSearch).format();
                let dateTo = moment(dateToSearch).format();
                if (match.utcDate >= dateFrom && match.utcDate <= dateTo) {
                    filtered = match;
                }
            } else {
                filtered = match;
            }
            return filtered
        }
    )

    const pushHistory = () => {
        let params = new URLSearchParams();
        if (dateFromSearch && dateToSearch) {
            params.set('dateFrom', dateFromSearch);
            params.set('dateTo', dateToSearch);
        }
        if (seasonSearch) {
            params.set('season', seasonSearch);
        }
        history.push(`/leagues/${leagueId}/matches?${params.toString()}`);
    }

    const seasonsList = () => {
        return seasons.map(function (date, i) {
            return <option value={date.startDate.substring(0, 4)} key={date.startDate.substring(0, 4)}
                           selected={seasonSearch == date.startDate.substring(0, 4) ? date.startDate.substring(0, 4) : false}>
                {date.startDate}/{date.endDate}
            </option>
        })
    }

    const filterSeason = (e) => {
        seasonSearch = e.target.value;
        pushHistory();
    }

    const getMatches = () => {
        axios.get(urlMatches, {
            headers: {'X-Auth-Token':  process.env.REACT_APP_API_KEY  },
            dataType: 'json'
        })
            .then(response => {
                setMatches(response.data.matches);
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('https://api.football-data.org/v2/competitions/' + leagueId, {
            headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY },
            dataType: 'json'
        })
            .then(response => {
                setLeague(response.data);
                setSeasons(response.data.seasons);
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
                    <MDBCard className='mb-2'>
                        <MDBCardBody className='d-flex justify-content-between py-2 bg-dark'>
                            <MDBInputGroup className='input-group-sm align-items-stretch'
                                           style={{textAlign: 'center'}}>
                                <div className='mx-auto bg-white'>
                                    <DateRangePicker
                                        onChange={(value) => handleOnChange(value)}
                                        value={[dateFromSearch, dateToSearch]}
                                        format='yyyy-MM-dd'
                                        locale={'en'}
                                    />
                                </div>
                                <div className='mx-auto bg-white'>
                                    <FormSelect className='form-select-sm' onChange={filterSeason}>
                                        {seasonsList()}
                                    </FormSelect>
                                </div>
                            </MDBInputGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBTable className='table-dark'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Away team</th>
                    <th>Home team</th>
                    <th>Date</th>
                    <th>Score (fulltime)</th>
                    <th>Winner</th>
                </tr>
                </thead>
                <tbody>
                {filter.map((data, i) =>
                    <tr key={i + 1}>
                        <th scope='row'>{i + 1}</th>
                        <td>{data.awayTeam.name}</td>
                        <td>{data.homeTeam.name}</td>
                        <td>{data.utcDate}</td>
                        {(data.score.winner != null) ?
                            < td> {data.score.fullTime.awayTeam} - {data.score.fullTime.homeTeam}</td>
                            : <td>-</td>
                        }
                        {(data.score.winner != null) ?
                            < td> {data.score.winner}</td>
                            : <td>-</td>
                        }
                    </tr>)}
                </tbody>
            </MDBTable>
        </div>
    );
}

export default Matches;