import React from 'react'
import { Row } from 'react-bootstrap'
import UserItem from './user-item'

const UserList = ({ users }) => {
    console.log('this is user list')
    console.log(users)
    return (
        <>
            <Row>
                {users.map((user) => (
                    <UserItem user={user} key={user.id} />
                ))}
            </Row>
        </>

    )
}

export default UserList
