import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <div className='flex flex-col gap-3'>UsersPage

      <Link href={"/dashboard/users/users2"}>user 2</Link>
      <Link href={"/dashboard/users/users2/users3"}>user 3</Link>

    </div>
    
  )
}

export default UsersPage