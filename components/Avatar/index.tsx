/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { User } from '../../firebase/client'
import Image from 'next/image'

interface ProfileProps {
  user: User;
  displayName?: boolean;
}

export default function Avatar ({ user, displayName = false }: ProfileProps): ReactElement {
  const myLoader = () => {
    return `${user.avatar}`
  }
  return (
    <>
      <div className="avatar">
        <Image
          loader={myLoader}
          src={myLoader()}
          alt="avatar"
          width={49}
          height={49}
        />
        {displayName && <strong>{user.username}</strong>}
        <AvatarStyle />
      </div>
    </>
  )
}

function AvatarStyle () {
  return (
    <style jsx>
      {`
        .avatar {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: auto;
          justify-content: space-evenly;
          width: 50%;
        }
        img {
          border-radius: 50%;
          margin-left: auto;
        }
        strong {
        }
      `}
    </style>
  )
}
