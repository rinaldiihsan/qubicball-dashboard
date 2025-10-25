'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

export type SortField = 'name' | 'email' | 'company';
export type SortOrder = 'asc' | 'desc';

interface TableFiltersProps {
  sortField: SortField;
  sortOrder: SortOrder;
  onSortChange: (field: SortField, order: SortOrder) => void;
}

export function TableFilters({ sortField, sortOrder, onSortChange }: TableFiltersProps) {
  const sortOptions: { label: string; field: SortField }[] = [
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
    { label: 'Company', field: 'company' },
  ];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      onSortChange(field, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      onSortChange(field, 'asc');
    }
  };

  const currentLabel = sortOptions.find((opt) => opt.field === sortField)?.label || 'Sort';

  return (
    <div className="flex items-center gap-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            {currentLabel}
            {sortField && (sortOrder === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {sortOptions.map((option) => (
            <DropdownMenuItem key={option.field} onClick={() => handleSort(option.field)}>
              {option.label}
              {sortField === option.field && (sortOrder === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
