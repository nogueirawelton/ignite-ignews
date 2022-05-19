import { FaGithub  } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession,  } from 'next-auth/react';

import styles from './styles.module.scss';

export const SignInButton = () => {
  const { data: session} = useSession();

  return session ? (
    <button type="button" className={styles.signInButton}><FaGithub color="#04d361" /><span>{session.user.name}</span><FiX onClick={() => signOut()} color="#737380" className={styles.closeIcon}/></button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => {signIn('github')}}><FaGithub color="#eba417" /><span>Sign in with Github</span></button>
  )
}
