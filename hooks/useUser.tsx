import { useState, useEffect } from 'react'
import { User, onAuthStateChange } from '../firebase/client'

export default function useUser (): User | null | undefined {
  const [user, setuser] = useState<User | null | undefined>(null)

  useEffect(() => {
    onAuthStateChange(setuser)
  }, [])

  return user
}
