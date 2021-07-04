/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'

export default function index ({ small = false, displayName = false, userPage = false }): ReactElement {
  return (
        <>
          <div className={userPage ? 'avatarUserPage' : 'avatar'}>

            <div
              style={small ? { width: 36, height: 36 } : { width: 49, height: 49 }}
              className="fotoAvatar"
            />
            {displayName && <strong> User Name </strong>}

            {userPage && (<div className="details">
              Email: zitrojj@gmail.com
            </div>)}

            {userPage && (<div className="details">
              Following: 0, Followers: 0
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
              background:linear-gradient(to right, white, lightgray, white);
              background-size:300%;
              color:transparent;
              background-position:left;
              animation: loadingEffect 1s infinite ease;
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
              background: linear-gradient(to right, white, lightgray, white, lightgray);
              color:transparent;
              background-size:300%;
              background-position:left;
              animation: loadingEffect 1s infinite ease;
            }        

            .fotoAvatar {
                border-radius: 50%;
                background:linear-gradient(to right, white, lightgray, white, lightgray);
                background-size:300%;
                background-position:left;
                animation: loadingEffect 1s infinite ease;
            }

            @keyframes loadingEffect {
                0% {background-position:left;}
                100% {background-position:right}
            }
          `
