/* eslint-disable no-use-before-define */
import React, { ReactElement, useEffect, useState } from 'react'
import { addFollowerFollowing, db, removeFollowerFollowing, User } from '../../firebase/client'
import Boton from '../Boton'
import Spinner from '../Spinner'
import useUser from '../../hooks/useUser'
import { colors } from '../../styles/StyleGlobal'
import css from 'styled-jsx/css'

interface Props {
  userFullDataA: User
}

export default function AvatarUserPager ({ userFullDataA }: Props): ReactElement {
  const { userFullData, setuserFullData } = useUser()
  const [userAvatar, setUserAvatar] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const FollowingThisUser = () => {
    if (userAvatar && userFullData) {
      // console.log(userAvatar.followers, userFullData.following)
      return userFullData.following.includes(userAvatar.email) && userAvatar.followers.includes(userFullData.email)
    } else {
      return undefined
    }
  }
  const handleFollowClick = () => {
    addFollowerFollowing(userFullData, userAvatar, setUserAvatar, setLoading, setuserFullData)
  }
  const handleUnFollowClick = () => {
    removeFollowerFollowing(userFullData, userAvatar, setUserAvatar, setLoading, setuserFullData)
  }

  useEffect(() => {
    setLoading(true)
    userFullDataA && db
      .collection(process.env.NEXT_PUBLIC_users_collection)
      .doc(userFullDataA.id)
      .get()
      .then(doc => {
        const data = doc.data()
        setUserAvatar(data)
        setLoading(false)
      }).catch(err => setError(err))
  }, [])
  console.log(FollowingThisUser())

  if (error) { return <>Something wrong happened fetching the userAvatar. please refresh</> }
  return (
        <>

{ userAvatar && (<div className="details">
          Email: {userFullDataA.email}
        </div>)}
{/* esto es engorroso. los followers y who you follow solo se muestran si estamos en la página del usuario SSR */}
        {userAvatar && (loading
          ? <Spinner/>
          : <div className="details">
        <>Following: {userAvatar.following.length} Followers: {userAvatar.followers.length}.</>
{/* Ahora estas ternarias sirven para distinguir si el user que esta en esta página es el mismo usuario o no */}

           { userFullData && FollowingThisUser()
             ? <Boton
                  onClick={() => { handleUnFollowClick() }}
                  botonBackGroundColor={colors.third}
                  botonColor="white"
                  disabled={!userFullData || userFullData.id === userFullDataA.id || FollowingThisUser() === undefined || loading}
                  style={{ marginLeft: '1rem' }}
               >
                  <>Dejar de seguir</>
               </Boton>
             : !FollowingThisUser() && <Boton
            onClick={() => { handleFollowClick() }}
            botonBackGroundColor={colors.third}
            botonColor="white"
            disabled={!userFullData || userFullData.id === userFullDataA.id || FollowingThisUser() === undefined || loading}
            style={{ marginLeft: '1rem' }}
          >
            <>Seguir</>
          </Boton>}
        </div>)}
        <style jsx>{avatarStyle}</style>
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
