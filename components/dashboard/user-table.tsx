'use client';

import { useMemo, useState } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from '@/lib/types/user';
import { SearchBar } from './search-bar';
import { TableFilters, SortField, SortOrder } from './table-filters';
import { Pagination } from './pagination';
import { UserTableRow } from './user-table-row';
import { useDebounce } from '@/lib/hooks/use-debounce';
import { Skeleton } from '@/components/ui/skeleton';

interface UserTableProps {
  users: User[];
}

const ITEMS_PER_PAGE = 10;

export function UserTable({ users }: UserTableProps) {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search, 300);

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users;

    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase();
      filtered = users.filter((user) => user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower) || user.username.toLowerCase().includes(searchLower));
    }

    filtered.sort((a, b) => {
      let aValue: string;
      let bValue: string;

      if (sortField === 'company') {
        aValue = a.company.name.toLowerCase();
        bValue = b.company.name.toLowerCase();
      } else {
        aValue = a[sortField].toLowerCase();
        bValue = b[sortField].toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [users, debouncedSearch, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedUsers.length / ITEMS_PER_PAGE);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedUsers.slice(startIndex, endIndex);
  }, [filteredAndSortedUsers, currentPage]);

  const handleSortChange = (field: SortField, order: SortOrder) => {
    setSortField(field);
    setSortOrder(order);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Users</CardTitle>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <SearchBar
              value={search}
              onChange={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
              placeholder="Search by name, email, username..."
            />
            <TableFilters sortField={sortField} sortOrder={sortOrder} onSortChange={handleSortChange} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>City</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.length === 0 ? (
                <TableRow>
                  <td colSpan={6} className="h-24 text-center text-muted-foreground">
                    No users found.
                  </td>
                </TableRow>
              ) : (
                paginatedUsers.map((user) => <UserTableRow key={user.id} user={user} />)
              )}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="mt-4">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}

        <div className="mt-4 text-sm text-muted-foreground">
          Showing {paginatedUsers.length} of {filteredAndSortedUsers.length} users
        </div>
      </CardContent>
    </Card>
  );
}
