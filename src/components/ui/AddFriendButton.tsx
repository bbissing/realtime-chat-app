'use client'

import { FC, ReactNode } from 'react'
import Button from './Button'

interface AddFriendButtonProps {
  children: ReactNode
}

const AddFriendButton: FC<AddFriendButtonProps> = ({}) => {
  return (
    <form className='max-w-sm'>
      <label
        htmlFor="email"
        className='block text-sm font-medium leading-6 text-gray-900'>
        Add friend by E-mail
      </label>
      <div className='mt-2 glex gap-4'>
        <input type='text'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='you@example.com'
        />
        <Button>Add</Button>
      </div>
    </form>
  )
}

export default AddFriendButton