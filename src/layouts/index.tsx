// ** React Imports
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <>{children}</>
  )
}

export default UserLayout
