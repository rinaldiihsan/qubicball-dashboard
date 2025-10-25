'use client';

import { memo } from 'react';
import Link from 'next/link';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { User } from '@/lib/types/user';
import { Eye } from 'lucide-react';

interface UserTableRowProps {
  user: User;
}

function UserTableRowComponent({ user }: UserTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="lowercase">{user.username}</TableCell>
      <TableCell className="lowercase">{user.email}</TableCell>
      <TableCell>{user.company.name}</TableCell>
      <TableCell>{user.address.city}</TableCell>
      <TableCell>
        <Link href={`/users/${user.id}`}>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}

export const UserTableRow = memo(UserTableRowComponent);
