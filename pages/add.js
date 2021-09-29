import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { instance } from '../configs'

const Add = () => {
    //state untuk menampung data user
    const [user, setUser] = useState({ name: "", job: "" })

    //update data user sesuai input
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        instance.post('api/users', {
            name: user.name,
            job: user.job
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Form.Label>Nama</Form.Label>
            <Form.Control name='name' type='text' onChange={handleChange} /> {/*tambahkan onchange*/}
            <Form.Label>Job</Form.Label>
            <Form.Control name='job' type='text' onChange={handleChange} /> {/*tambahkan onchange*/}
            <Button onClick={() => handleClick()}>Create User</Button>
        </div>
    )
}

export default Add
