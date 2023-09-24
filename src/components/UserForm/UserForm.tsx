'use client';

import { FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { TextInput } from '..';

interface UserFormParams {
  btnName: string;
  isCreateUser: boolean;
}

export default function UserForm({ btnName, isCreateUser }: UserFormParams) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const isCreateBtnDisabled =
    loading || !email || !password || (isCreateUser && !name);

  const onHandleFormSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      // Send request to create user
      console.log({ name: isCreateUser ? name : null, email, password });

      router.replace('/all-coins');
    },
    [email, isCreateUser, name, password, router]
  );

  return (
    <form
      onSubmit={onHandleFormSubmit}
      className='flex w-full max-w-md flex-col rounded bg-my-col-4 p-6 shadow-lg'
    >
      {isCreateUser && (
        <TextInput
          label='Email:'
          value={email}
          onSetValue={setEmail}
          type='email'
        />
      )}
      <TextInput label='Name:' value={name} onSetValue={setName} />
      <TextInput
        label='Password:'
        value={password}
        onSetValue={setPassword}
        // type='password'
      />

      <button
        className='btn mt-2 self-center border border-my-col-1 bg-my-col-1 text-white transition duration-500 ease-out hover:bg-my-col-3 hover:text-my-col-2'
        disabled={isCreateBtnDisabled}
      >
        {btnName}
      </button>
    </form>
  );
}
