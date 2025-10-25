import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '@/lib/api/users';
import { getPostsByUserId } from '@/lib/api/posts';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
    }

    const [user, posts] = await Promise.all([getUserById(userId), getPostsByUserId(userId)]);

    return NextResponse.json({
      success: true,
      data: {
        user,
        posts,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
  }
}
