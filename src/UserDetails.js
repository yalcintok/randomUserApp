import React, { useContext } from 'react';
import { ApiContext } from './App';
import { useParams, Link } from 'react-router-dom';

export default function UserDetails() {
    const {uuid} = useParams();
    const {usersData} = useContext(ApiContext);
    const user = usersData.filter(user => user.login.uuid === uuid)
    return (
        <div>       
            <img src={user[0].picture.large} alt='user profile' />
            <p><b>{user[0].name.first} {user[0].name.last}</b></p>
            <p>Email : {user[0].email}</p>
            <p>Gender : {user[0].gender}</p>
            <p>Age : {user[0].dob.age}</p>
            <p>Country of origin : {user[0].location.country}</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}
