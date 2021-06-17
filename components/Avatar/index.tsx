/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { User } from '../../firebase/client'
import Image from 'next/image'

interface ProfileProps {
    user: User
}

export default function Avatar ({ user }: ProfileProps): ReactElement {
  const myLoader = () => {
    return `${user.avatar}`
  }
  return (
        <>
        <div>
           <Image
            loader={myLoader}
            src={myLoader()}
            alt="avatar"
            width={100}
            height={100}
          />
          <strong>{user.username}</strong>
          <AvatarStyle/>
          </div>

        </>
  )
}

function AvatarStyle () {
  return (
    <style jsx>{`
    div {
        display: flex;
        flex-direction: row;
        align-items:center;
        height: auto;
    }
    img {
      border-radius:50%;
      margin: auto;
    }
    strong {
        margin: auto;
    }
    `}
    </style>
  )
}
