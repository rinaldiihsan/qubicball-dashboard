import { cookies } from 'next/headers';
import { verifyToken } from './jwt';
import { AuthUser } from '@/lib/types/auth';

export async function getSession(): Promise<AuthUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) return null;

  const payload = await verifyToken(token);

  if (!payload) return null;

  return {
    userId: payload.userId,
    username: payload.username,
  };
}

export async function requireAuth(): Promise<AuthUser> {
  const session = await getSession();

  if (!session) {
    throw new Error('Unauthorized');
  }

  return session;
}
