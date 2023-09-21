import { UserForm } from '@/components';

export default function LoginPage() {
  return (
    <>
      <h1 className='mb-4 text-2xl uppercase'>Log In</h1>
      <div className='my-3 flex w-full flex-col items-center'>
        <UserForm btnName='Log in' isCreateUser={false} />
      </div>
    </>
  );
}
