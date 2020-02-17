import React from 'react'
import { Link } from 'react-router-dom';

export default function Users({user}) {
    return (
        <div className='user'>
            <Link to={'/' + user.login.uuid}>{user.name.first} {user.name.last}</Link> 
        </div>
    )
}
