import { useState } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue, Spinner, Link } from '@chakra-ui/react';

import { useUsers } from '../../hooks/users/useUsers';

import { queryClient } from '../../services/QueryClient';

import { CreateButton } from '../../components/Form/createButton';
import { EditButton } from '../../components/Form/EditButton';

import { LayoutContainer } from '../../components/Layout/Index';
import { Pagination } from '../../components/Pagination';
import { HeadingUser } from '../../components/UsersPage/Heading';
import { api } from '../../services/api';


export default function UserList() {
	const [page, setPage] = useState(1);
	const { data, isLoading, isFetching, error } = useUsers(page);

	const variant = useBreakpointValue({ base: false, md: true });

	async function handlePrefetch(userID: number) {
		await queryClient.prefetchQuery(['user', userID], async () => {
			const response = await api.get(`users/${userID}`)
			return response.data;
		})
	}

	return (
		<LayoutContainer>
			<Box
				flex="1"
				bg="gray.800"
				borderRadius="8"
				p={["4", "8"]}
			>
				<Flex justify="space-between" direction={["column", "row"]} mb={["6", "0"]}>
					<HeadingUser textAlign={["center", "inherit"]}>
						Criar Usuário
						{(!isLoading && isFetching) && (
							<Spinner size="sm" color="gray.400" ml={4} />
						)}
					</HeadingUser>
					<NextLink href="/users/create" passHref>
						<CreateButton />
					</NextLink>
				</Flex>

				{isLoading ? (
					<Flex h="100%" justify="center" align="center">
						<Spinner />
					</Flex>
				) : error ? (
					<Flex justify="center" >
						<Text>Falha no carregando dos usuários</Text>
					</Flex>
				) : (
					<>
						<Table>
							<Thead>
								<Tr>
									<Th w="8" px={["4", "6"]}>
										<Checkbox colorScheme="pink" size="lg"></Checkbox>
									</Th>
									<Th>Usuários</Th>
									{variant && <Th>Data de Cadastro</Th>}
									<Th></Th>
								</Tr>
							</Thead>

							<Tbody>
								{data.users.map((user) => (
									<Tr key={user.id}>
										<Td px={["4", "6"]}>
											<Checkbox colorScheme="pink" size="lg"></Checkbox>
										</Td>
										<Td>
											<Box>
												<Link color="purple.400" onMouseEnter={() => handlePrefetch(user.id)}>
													<Text>{user.name}</Text>
												</Link>
												<Text fontSize="small" color="gray.400">{user.email}</Text>
											</Box>
										</Td>
										{variant && <Td>{user.createdAt}</Td>}
										<Td width="8">
											{variant && <EditButton />}
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
						<Pagination
							totalCount={data.totalCount}
							currentPage={page}
							perPage={10}
							onPageChange={setPage}
						/>
					</>
				)}
			</Box>
		</LayoutContainer>
	)
}
