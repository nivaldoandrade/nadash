import { useQuery } from 'react-query';
import { api } from '../../services/api';

interface User {
	id: number;
	name: string;
	email: string;
	createdAt: string;
	created_at?: string;
}

interface GetUsersResponse {
	users: User[];
	totalCount: number;
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
	const response = await api.get('users', {
		params: {
			page,
		}
	});

	const { data } = response;
	const totalCount = Number(response.headers['x-total-count']);


	const users = data.users.map((user: User) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		})
	}))


	return { users, totalCount };
}

export function useUsers(page: number) {
	return useQuery(['users', page], () => getUsers(page),
		{
			staleTime: 5000, // 5 seconds
		}
	)
}