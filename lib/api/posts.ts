import { apiClient } from './client';
import { Post, PostsResponse } from '@/lib/types/post';

export async function getPosts(): Promise<Post[]> {
  return apiClient<PostsResponse>('/posts', {
    next: { revalidate: 3600 },
  });
}

export async function getPostById(id: number): Promise<Post> {
  return apiClient<Post>(`/posts/${id}`, {
    next: { revalidate: 3600 },
  });
}

export async function getPostsByUserId(userId: number): Promise<Post[]> {
  return apiClient<Post[]>(`/posts?userId=${userId}`, {
    next: { revalidate: 3600 },
  });
}

export async function getPostsByUserIdWithCache(userId: number): Promise<Post[]> {
  return apiClient<Post[]>(`/posts?userId=${userId}`, {
    cache: 'force-cache',
  });
}
