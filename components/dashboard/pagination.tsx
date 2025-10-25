'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true;
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>

      <div className="flex items-center gap-x-2">
        <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-x-1">
          {visiblePages.map((page, index) => {
            const prevPage = visiblePages[index - 1];
            const showEllipsis = prevPage && page - prevPage > 1;

            return (
              <div key={page} className="flex items-center gap-x-1">
                {showEllipsis && <span className="px-2 text-muted-foreground">...</span>}
                <Button variant={currentPage === page ? 'default' : 'outline'} size="sm" onClick={() => onPageChange(page)} className="min-w-[2.5rem]">
                  {page}
                </Button>
              </div>
            );
          })}
        </div>

        <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
