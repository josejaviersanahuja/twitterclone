/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { User, UserReducedInfo } from '../../firebase/client'
import Image from 'next/image'
import css from 'styled-jsx/css'
import Link from 'next/link'

import AvatarUserPage from './AvatarUserPager'

interface ProfileProps {
  userA: UserReducedInfo;
  displayName?: boolean;
  small?: boolean;
  userPage? : boolean;
  userFullDataA? : User
}

export default function Avatar (
  {
    userA,
    displayName = false,
    small = false,
    userPage = false,
    userFullDataA = null
  }: ProfileProps): ReactElement {
  const myLoader = () => {
    return `${userA.avatar}`
  }

  return (
    <>
      <div className={userPage ? 'avatarUserPage' : 'avatar'}>

        <Link href="/user/[id]" as={`/user/${userA.id}`} ><a><Image
          loader={myLoader}
          src={myLoader()}
          alt="avatar"
          width={small ? 36 : 49}
          height={small ? 36 : 49}
          className="fotoAvatar"
        /></a></Link>
        {displayName && <strong>{userA.username}</strong>}
        {userPage && <AvatarUserPage userFullDataA={userFullDataA}/>}
        <style jsx>{avatarStyle}</style>
      </div>
    </>
  )
}

const avatarStyle = css`
        .avatar {
          display: flex;
          flex-direction:row;
          align-items: center;
          height: auto;
          justify-content: space-evenly;
          width: auto;
          border-radius: 50%;
        }
        
        strong {
          margin: auto;
        }
        
        .avatarUserPage {
          width:100%;
          display:grid;
          grid-template-columns: 18% 82%;
          place-items:center;
        }
        .details {
          grid-column:2/3;
          margin-bottom:1rem;
        }
        
      `
