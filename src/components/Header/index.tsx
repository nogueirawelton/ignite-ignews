import { SignInButton } from './SignInButton';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ActiveLink } from './ActiveLink';

export const Header = () => {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/assets/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={ styles.active }>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={ styles.active } prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
