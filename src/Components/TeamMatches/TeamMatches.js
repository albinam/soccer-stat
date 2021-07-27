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


const TeamMatches = ({history, location}) => {

    const [matches, setMatches] = useState([]);
    const [team, setTeam] = useState([]);
    let urlMatches;
    let params = new URLSearchParams(location.search);
    let teamId = useParams().teamId;
    let dateFromSearch = params.get('dateFrom');
    let dateToSearch = params.get('dateTo');

    useEffect(() => {
        if (dateToSearch && dateFromSearch) {
            urlMatches = `https://api.football-data.org/v2/teams/${teamId}/matches?dateFrom=${dateFromSearch}&&dateTo=${dateToSearch}`;
        } else {
            urlMatches = `https://api.football-data.org/v2/teams/${teamId}/matches`;
        }
        getMatches();
    }, [location])

    const handleOnChange = (value) => {
        if (value) {
            dateFromSearch = moment(value[0]).format('YYYY-MM-DD');
            dateToSearch = moment(value[1]).format('YYYY-MM-DD');
            let params = new URLSearchParams();
            params.set('dateFrom', dateFromSearch);
            params.set('dateTo', dateToSearch);
            history.push(`/teams/${teamId}/matches?${params.toString()}`);
            return;
        }
        history.push(`/teams/${teamId}/matches`);
    }

    const getMatches = () => {
        axios.get(urlMatches, {
            headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY },
            dataType: 'json'
        })
            .then(response => {
                setMatches(response.data.matches);
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('https://api.football-data.org/v2/teams/' + teamId, {
            headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY },
            dataType: 'json'
        })
            .then(response => {
                setTeam(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <Header></Header>
            <MDBRow>
                <MDBCol className='col-md-3 mx-auto'>
                    <MDBTypography colorText={'white'} className='text-center'
                                   variant='h3'>{team.name}</MDBTypography>
                    <MDBCard className='mb-3'>
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
                {matches.map((data, i) =>
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


export default TeamMatches;