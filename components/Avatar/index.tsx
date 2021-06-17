import React, { ReactElement } from 'react'
import { User } from '../../firebase/client'
import Image from 'next/image'

interface ProfileProps {
    user: User
}

export default function Avatar({user}: ProfileProps): ReactElement {
    const myLoader = () => {
        return `${user.avatar}`
      }
    return (
        <>
           <Image
            loader={myLoader}
            src={myLoader()}
            alt="avatar"
            width={150}
            height={150}
          />  
          <p>User name: {user.username}</p>
        </>
    )
}
