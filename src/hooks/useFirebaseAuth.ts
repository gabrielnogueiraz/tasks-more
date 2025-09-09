import { useSession, signOut } from 'next-auth/react';

export function useFirebaseAuth() {
  const { data: session, status } = useSession();
  
  const user = session?.user ? {
    email: session.user.email,
    displayName: session.user.name,
    uid: (session.user as any).id || session.user.email,
  } : null;

  const loading = status === 'loading';

  const logout = async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return { user, loading, logout };
}
