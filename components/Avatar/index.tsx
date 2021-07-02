/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { UserReducedInfo } from '../../firebase/client'
import Image from 'next/image'
import css from 'styled-jsx/css'

interface ProfileProps {
  user: UserReducedInfo;
  displayName?: boolean;
  small?: boolean
}

export default function Avatar ({ user, displayName = false, small = false }: ProfileProps): ReactElement {
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
          width={small ? 36 : 49}
          height={small ? 36 : 49}
          className="fotoAvatar"
        />
        {displayName && <strong>{user.username}</strong>}
        <style jsx>{avatarStyle}</style>
      </div>
    </>
  )
}

const avatarStyle = css`
        .avatar {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: auto;
          justify-content: space-evenly;
          width: auto;
          border-radius: 50%;
        }
        
        strong {
        }
      `
