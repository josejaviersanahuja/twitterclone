/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { addFollowerFollowing, removeFollowerFollowing, User, UserReducedInfo } from '../../firebase/client'
import Image from 'next/image'
import css from 'styled-jsx/css'
import Link from 'next/link'
import useUser from '../../hooks/useUser'
import Boton from '../Boton'
import { colors } from '../../styles/StyleGlobal'
import { useRouter } from 'next/router'

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
  const { userFullData } = useUser()
  const router = useRouter()
  const myLoader = () => {
    return `${userA.avatar}`
  }
  const FollowingThisUser = () => {
    return userFullData.following.includes(userFullDataA.id)
  }
  const handleFollowClick = () => {
    addFollowerFollowing(userFullData, userFullDataA)
    router.reload()
  }
  const handleUnFollowClick = () => {
    removeFollowerFollowing(userFullData, userFullDataA)
    router.reload()
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

        {userPage && userFullDataA && (<div className="details">
          Email: {userA.email}
        </div>)}
{/* esto es engorroso. los followers y who you follow solo se muestran si estamos en la página del usuario SSR */}
        {userPage && userFullDataA && (<div className="details">
        <>Following: {userFullDataA.following.length} Followers: {userFullDataA.followers.length}.</>
{/* Ahora estas ternarias sirven para distinguir si el user que esta en esta página es el mismo usuario o no */}

           { userFullData && FollowingThisUser()
             ? <Boton
                  onClick={() => { handleUnFollowClick() }}
                  botonBackGroundColor={colors.third}
                  botonColor="white"
                  disabled={!userFullData || userFullData.id === userFullDataA.id}
                  style={{ marginLeft: '1rem' }}
               >
                  <>Dejar de seguir</>
               </Boton>
             : <Boton
            onClick={() => { handleFollowClick() }}
            botonBackGroundColor={colors.third}
            botonColor="white"
            disabled={!userFullData || userFullData.id === userFullDataA.id}
            style={{ marginLeft: '1rem' }}
          >
            <>Seguir</>
          </Boton>}
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
