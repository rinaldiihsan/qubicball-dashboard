'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/types/post';
import { FileText } from 'lucide-react';

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">No posts found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <FileText className="h-5 w-5" />
          Posts ({posts.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg border p-4 transition-colors hover:bg-accent">
            <h3 className="font-semibold capitalize">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
