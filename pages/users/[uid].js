import React from 'react'
import { useRouter } from 'next/router'

const UserDetail = () => {
    const router = useRouter()
    const idUser = router.query.uid
    console.log(idUser)

    return (
        <div>
            Hello user dengan id {idUser}
        </div>
    )
}

export default UserDetail
