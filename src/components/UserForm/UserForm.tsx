'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <form className='flex w-1/2 flex-col '>
      <label className='mb-3 flex flex-col items-center'>
        <span>Email:</span>
        <input
          className='h-9 w-1/2 rounded border border-my-col-1 px-3 text-xl shadow-xl'
          required
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className='mb-3 flex flex-col items-center'>
        <span>Name:</span>
        <input
          className='h-9 w-1/2 rounded border border-my-col-1 px-3 text-xl shadow-xl'
          required
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className='mb-3 flex flex-col items-center'>
        <span>Password:</span>
        <input
          className='h-9 w-1/2 rounded border border-my-col-1 px-3 text-xl shadow-xl'
          required
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </form>
  );
}
