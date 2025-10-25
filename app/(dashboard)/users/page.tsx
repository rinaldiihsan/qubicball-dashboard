import { getUsers } from '@/lib/api/users';
import { UserTable } from '@/components/dashboard/user-table';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

function UserTableSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[400px] w-full" />
    </div>
  );
}

async function UsersData() {
  const users = await getUsers();

  return <UserTable users={users} />;
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">View and manage all users in the system</p>
      </div>

      <Suspense fallback={<UserTableSkeleton />}>
        <UsersData />
      </Suspense>
    </div>
  );
}
