import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { useRouter } from 'next/router'

const UserItem = ({ users }) => {
    const router = useRouter()

    const handleCardClick = (id) => {
        router.push(`users/${id}`)
    }

    return (
        <Col md={4}>
            <Card onClick={() => handleCardClick(users.id)}>
                <Card.Img variant="top" src={users.avatar} />
                <Card.Body>
                    <Card.Title>{users.first_name} {users.last_name}</Card.Title>
                    <Card.Text>
                        {users.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserItem
