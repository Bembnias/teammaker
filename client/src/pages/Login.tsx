import BSImage from '@/assets/images/bs-wallpaper.jpg'
import Logo from '@/assets/images/teammaker-logo.svg'

import LoginForm from '@/features/LoginPage/LoginForm/LoginForm'

const Login = () => {
  return (
    <div className='relative flex flex-row min-h-[calc(100vh-4rem)] w-full'>
      <section className='w-full lg:w-1/2 dark-linear-gradient'>
        <div className='w-2/3 mx-auto'>
          <h2 className='text-white text-center font-semibold text-4xl mt-5 lg:mt-10'>Sign in</h2>
          <LoginForm />
        </div>
      </section>
      <section
        className='hidden lg:block relative w-1/2 bg-image-centered'
        style={{ backgroundImage: `url(${BSImage})` }}
      >
        <div className='absolute top-0 bg-primary-dark w-full h-full bg-opacity-60'>
          <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 mx-auto'>
            <img className='w-full' src={Logo} alt='teammaker logo' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
