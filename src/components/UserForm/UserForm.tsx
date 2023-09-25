'use client';

import { FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { TextInput } from '..';

import { validateUserCredentials } from './validators';

interface UserFormParams {
  btnName: string;
  isCreateUser: boolean;
}

export default function UserForm({ btnName, isCreateUser }: UserFormParams) {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const isCreateBtnDisabled = !name || !password || (isCreateUser && !email);

  const onHandleFormSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const userEmail = isCreateUser ? email : undefined;

      const validationResult = validateUserCredentials(
        name,
        password,
        userEmail
      );

      if (validationResult.isValid) {
        // Send request to create user
        console.log({ email: userEmail, name, password });

        router.replace('/all-coins');
      } else {
        setError(validationResult.message);
      }
    },
    [email, isCreateUser, name, password, router]
  );

  const onClearErrorWrapper = useCallback(
    (fn: (v: string) => void) => {
      return (value: string) => {
        if (error) setError(null);

        fn(value);
      };
    },
    [setError, error]
  );

  return (
    <>
      <form
        onSubmit={onHandleFormSubmit}
        className={`flex w-full max-w-md flex-col rounded border-2 bg-my-col-4 p-6 shadow-lg ${
          error && 'border-red-600'
        }`}
      >
        {isCreateUser && (
          <TextInput
            label='Email:'
            value={email}
            onSetValue={onClearErrorWrapper(setEmail)}
            type='email'
          />
        )}
        <TextInput
          label='Name:'
          value={name}
          onSetValue={onClearErrorWrapper(setName)}
        />
        <TextInput
          label='Password:'
          value={password}
          onSetValue={onClearErrorWrapper(setPassword)}
          // type='password'
        />

        <button
          className='btn mt-2 self-center border border-my-col-1 bg-my-col-1 text-white transition duration-500 ease-out hover:bg-my-col-3 hover:text-my-col-2'
          disabled={isCreateBtnDisabled}
        >
          {btnName}
        </button>
      </form>
      {error && (
        <div className='my-3 w-full max-w-md rounded border border-red-300 bg-red-100 p-2 text-center text-base shadow-lg'>
          {error}
        </div>
      )}
    </>
  );
}
