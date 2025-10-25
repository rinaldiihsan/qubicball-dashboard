import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { signToken } from '@/lib/auth/jwt';
import { loginSchema } from '@/lib/validations/auth.schema';
import { MOCK_CREDENTIALS, AUTH_COOKIE_NAME } from '@/lib/auth/constants';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ success: false, message: 'Invalid input', errors: validation.error.issues }, { status: 400 });
    }

    const { username, password } = validation.data;

    if (username !== MOCK_CREDENTIALS.username || password !== MOCK_CREDENTIALS.password) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    const token = await signToken({
      userId: '1',
      username: username,
    });

    const cookieStore = await cookies();
    cookieStore.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: { userId: '1', username },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
