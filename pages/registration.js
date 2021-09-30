import React from 'react'
import Layout from '../layouts/Layout'
import { Form, Row, Col, Container } from 'react-bootstrap'


const registration = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label>Nama Depan</Form.Label>
                            <Form.Control name='nama_depan' type='text' />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Nama Belakang</Form.Label>
                            <Form.Control name='nama_belakang' type='text' />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control as='textarea' name='alamat' type='text' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label>Kelurahan</Form.Label>
                            <Form.Control name='kelurahan' type='text' />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Kecamatan</Form.Label>
                            <Form.Control name='kecamatan' type='text' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label>Kota</Form.Label>
                            <Form.Control name='kota' type='text' />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Provinsi</Form.Label>
                            <Form.Control name='provinsi' type='text' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Label>Nomor Telepon</Form.Label>
                            <Form.Control name='no_telp' type='text' />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Label>Handphone</Form.Label>
                            <Form.Control name='no_hp' type='text' />
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default registration
