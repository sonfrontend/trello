import trello_left from '@/assets/images/trello-left.svg';
import trello_right from '@/assets/images/trello-right.svg';

function AuthLayout({ children }) {
  return (
    <div className={'relative h-screen bg-primary'}>
      <div
        className={
          ' rounded-sm shadow-md absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] bg-secondary py-[20px] px-[40px]'
        }
      >
        {children}
      </div>
      <img src={trello_left} alt='Background left' className='absolute w-[500px]  left-0 bottom-5 ' />
      <img src={trello_right} alt='Background right' className='absolute  w-[500px]  right-0 bottom-5' />
    </div>
  );
}

export default AuthLayout;
