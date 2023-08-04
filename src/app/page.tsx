"use client";

import { signIn, useSession, signOut } from 'next-auth/react';

export default function Home() {
  const {data} = useSession();

  return (
    <div>
      <div className='flex flex-col'>
        <button onClick={() => signIn()}>Login</button>
        <button onClick={() => signOut()}>Logout</button>
      </div>
      <h1>Hey, {data?.user?.name}</h1>
      <img src={data?.user?.image ?? ""} alt=""/>
    </div>
  )
}
