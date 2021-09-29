import React from 'react'
import { Row } from 'react-bootstrap'
import UserItem from './user-item'

const UserList = ({ users }) => {
    return (
        <>
            <Row>
                <UserItem users={users} />
            </Row>
        </>

    )
}

export default UserList
