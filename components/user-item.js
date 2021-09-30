import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { useRouter } from 'next/router'

const UserItem = ({ user }) => {
    console.log(user)
    const router = useRouter()

    const handleCardClick = (id) => {
        router.push(`users/${id}`)
    }

    return (
        <Col md={4}>
            <Card onClick={() => handleCardClick(user.id)}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                    <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserItem
