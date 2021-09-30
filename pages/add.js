import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { instance } from '../configs'
import Layout from '../layouts/Layout'

const Add = () => {
    //state untuk menampung data user
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "", job: "" })

    //update data user sesuai input
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    //post data
    const handleClick = () => {
        instance.post('api/users', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
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
            <Layout>
                <Form.Label>Nama Depan</Form.Label>
                <Form.Control name='first_name' type='text' onChange={handleChange} /> {/*tambahkan onchange*/}
                <Form.Label>Nama Belakang</Form.Label>
                <Form.Control name='last_name' type='text' onChange={handleChange} /> {/*tambahkan onchange*/}
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type='email' onChange={handleChange} /> {/*tambahkan onchange*/}
                <Form.Label>Pekerjaan</Form.Label>
                <Form.Control name='job' type='text' onChange={handleChange} /> {/*tambahkan onchange*/}
                <Button onClick={() => handleClick()}>Create User</Button>
            </Layout>
        </div>
    )
}

export default Add
