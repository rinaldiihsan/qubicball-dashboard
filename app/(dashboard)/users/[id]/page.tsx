import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getUserById } from '@/lib/api/users';
import { getPostsByUserId } from '@/lib/api/posts';
import { UserInfoCard } from '@/components/user/user-info-card';
import { UserEditModal } from '@/components/user/user-edit-modal';
import { PostList } from '@/components/user/post-list';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const userId = parseInt(id);

  if (isNaN(userId)) {
    return {
      title: 'User Not Found',
    };
  }

  try {
    const user = await getUserById(userId);
    return {
      title: `${user.name} - User Details`,
      description: `View and edit information for ${user.name}`,
    };
  } catch {
    return {
      title: 'User Not Found',
    };
  }
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-48" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}

async function UserDetailData({ id }: { id: number }) {
  try {
    const [user, posts] = await Promise.all([getUserById(id), getPostsByUserId(id)]);

    return (
      <>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Details</h1>
            <p className="text-muted-foreground">View and edit user information</p>
          </div>
          <UserEditModal user={user} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <UserInfoCard user={user} />
          <PostList posts={posts} />
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = parseInt(id);

  if (isNaN(userId)) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <UserDetailData id={userId} />
      </Suspense>
    </div>
  );
}
