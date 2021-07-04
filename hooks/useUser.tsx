import { useState, useEffect } from 'react'
import { amplifyUserInformation, onAuthStateChange, User, UserReducedInfo } from '../firebase/client'

export interface ValidUser {
  user: UserReducedInfo,
  userFullData : User | null | undefined
}

export default function useUser (): ValidUser | null | undefined {
  const [user, setuser] = useState<UserReducedInfo | null | undefined>(null)
  const [userFullData, setuserFullData] = useState<User | null | undefined>(null)

  const twoFunctionsInOne = (user : UserReducedInfo) => {
    setuser(user)
    amplifyUserInformation(user, setuserFullData)
  }

  useEffect(() => {
    onAuthStateChange(twoFunctionsInOne)
  }, [])

  return { user, userFullData }
}
