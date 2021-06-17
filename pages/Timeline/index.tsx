/* eslint-disable react/react-in-jsx-scope */
import { ReactElement } from 'react'
import { User } from '../../firebase/client'

interface TimelineProps {
    user: User
}

export default function Timeline ({ user }: TimelineProps): ReactElement {
  console.log(user)

  return (
        <div>

        </div>
  )
}
