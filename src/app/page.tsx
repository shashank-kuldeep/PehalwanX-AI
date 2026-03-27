"use client"
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  const { isSignedIn } = useUser();

  return (
    <div>
      HomePage

      {!isSignedIn && <SignInButton />}
      {isSignedIn && <SignOutButton />}
    </div>
  )
}

export default HomePage
