import { SignJWT, jwtVerify } from 'jose';
import { JWTPayload } from '@/lib/types/auth';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'jwt-secret-key');

export async function signToken(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload as any).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('24h').sign(secret);
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as JWTPayload;
  } catch (error) {
    return null;
  }
}
