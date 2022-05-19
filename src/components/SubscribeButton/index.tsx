import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string;
}

// Variaveis Privadas

// getServerSideProps(SSR)
// getStaticProps(SSG)
// API routes


export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session} = useSession();
  const router = useRouter();
  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    if(session.activeSubscription) {
      router.push('./posts')
      return;
    }

    try {
      const response = await api.post('./subscribe');
      const { sessionId } = response.data;
      const stripe = await getStripeJs()

      stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }
  

  return (
    <button type="submit" className={styles.subscribeButton} onClick={handleSubscribe}>Subscribe Now</button>
  )
}
