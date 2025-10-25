import { apiClient } from './client';
import { User, UsersResponse } from '@/lib/types/user';

export async function getUsers(): Promise<User[]> {
  return apiClient<UsersResponse>('/users', {
    next: { revalidate: 3600 },
  });
}

export async function getUserById(id: number): Promise<User> {
  return apiClient<User>(`/users/${id}`, {
    next: { revalidate: 3600 },
  });
}

export async function getUserByIdWithCache(id: number): Promise<User> {
  return apiClient<User>(`/users/${id}`, {
    cache: 'force-cache',
  });
}

export async function searchUsers(query: string): Promise<User[]> {
  const users = await getUsers();
  const lowercaseQuery = query.toLowerCase();

  return users.filter((user) => user.name.toLowerCase().includes(lowercaseQuery) || user.email.toLowerCase().includes(lowercaseQuery) || user.username.toLowerCase().includes(lowercaseQuery));
}
