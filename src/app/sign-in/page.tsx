import { UserForm } from '@/components';

export default function SignInPage() {
  return (
    <>
      <h1 className='mb-4 text-2xl uppercase'>Create User</h1>
      <div className='my-3 flex w-full flex-col items-center'>
        <UserForm />
      </div>
    </>
  );
}
