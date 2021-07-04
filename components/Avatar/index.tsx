/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { UserReducedInfo } from '../../firebase/client'
import Image from 'next/image'
import css from 'styled-jsx/css'
import useUser from '../../hooks/useUser'
import Link from 'next/link'

interface ProfileProps {
  user: UserReducedInfo;
  displayName?: boolean;
  small?: boolean;
  userPage? : boolean;
}

export default function Avatar ({ user, displayName = false, small = false, userPage = false }: ProfileProps): ReactElement {
  const { userFullData } = useUser()

  const myLoader = () => {
    return `${user.avatar}`
  }

  return (
    <>
      <div className={userPage ? 'avatarUserPage' : 'avatar'}>

        <Link href="/user/[id]" as={`/user/${user.id}`} ><a><Image
          loader={myLoader}
          src={myLoader()}
          alt="avatar"
          width={small ? 36 : 49}
          height={small ? 36 : 49}
          className="fotoAvatar"
        /></a></Link>
        {displayName && <strong>{user.username}</strong>}

        {userPage && userFullData && (<div className="details">
          Email: {user.email}
        </div>)}

        {userPage && userFullData && (<div className="details">
          Following: {userFullData.following.length}, Followers: {userFullData.followers.length}
        </div>)}
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
