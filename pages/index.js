import Layout from '../layouts/Layout'
import { instance } from '../configs'
import UserList from '../components/user-list'
import { Form, Row, Col, Pagination } from 'react-bootstrap'
import { useState } from 'react'
import PaginationFunc from '../components/Pagination'

export default function Home({ usersData }) {

  const [users, setUsers] = useState(usersData.data)

  const filterUser = (e) => {
    const value = e.target.value
    console.log(value)

    //filter user by name
    const filterData = users.filter((user) => {
      return (
        user.first_name.search(value) != -1 ||
        user.last_name.search(value) != -1
      )
    });

    //check length of value
    if (value.length == 0 || value.trim() == '') {
      async function checkLength() {
        const res = await instance.get('users?page=2')
        const data = res.data
        setUsers(data.data)
      };
      checkLength();
    }
    setUsers(filterData)
  }

  return (
    // <>
    //   <Layout>
    //     <Row className='justify-content-md-end mb-3'>
    //       <Col md={3} className='searchbox'>
    //         <Form.Control type="text" placeholder="Insert name" onChange={filterUser} />
    //       </Col>
    //     </Row>
    //     <UserList users={users}></UserList>
    //   </Layout>
    // </>

    <div>
      {users.length > 0 ? (
        <>
          <PaginationFunc
            users={users}
            RenderComponent={UserList}
            title="Users"
            pageLimit={5}
            dataLimit={3}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await instance.get('users?page=2')
  const data = res.data

  return {
    props: { usersData: data }, // will be passed to the page component as props
  }
}
