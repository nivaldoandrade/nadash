import { Box, Flex, Divider, Stack, HStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { api } from '../../services/api';
import { queryClient } from '../../services/QueryClient';

import { Input } from '../../components/Form/Input';
import { HeadingUser } from '../../components/UsersPage/Heading';
import { InputForm } from '../../components/UsersPage/InputForm';
import { CancelButton } from '../../components/Form/CancelButton';
import { SaveButton } from '../../components/Form/SaveButton';
import { LayoutContainer } from '../../components/Layout/Index';


interface UserCreateFormData {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	createdAt: string
}

const schema = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha Obrigatório').min(6, 'No mínimo 6 caracteres'),
	passwordConfirmation: yup.string().oneOf([null, yup.ref('password')], 'Senha devem ser iguais')
});


export default function UserCreate() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm({ resolver: yupResolver(schema) })

	const createUser = useMutation(async (user: UserCreateFormData) => {
		const response = await api.post('users', {
			user: {
				name: user.name,
				email: user.email,
				password: user.password,
				createdAt: new Date(),
			}
		})

		return response.data.user;
	}, {
		onSuccess: () => {
			queryClient.invalidateQueries('users');
		}
	})


	const handleCreateUser: SubmitHandler<UserCreateFormData> = async (values, event) => {
		await createUser.mutateAsync(values);
		router.push('/users');
	}

	return (
		<LayoutContainer>
			<Box
				as="form"
				flex="1"
				bg="gray.800"
				borderRadius="8"
				p="8"
				onSubmit={handleSubmit(handleCreateUser)}
			>

				<HeadingUser>Criar Usuário</HeadingUser>

				<Divider mb="8" borderColor="gray.600" size="1" />

				<Stack spacing="4">
					<InputForm>
						<Input
							name="name"
							label="Nome Completo"
							error={errors.name}
							{...register("name")}
						/>
						<Input
							name="email"
							label="E-mail"
							type="email"
							error={errors.email}
							{...register("email")}
						/>
					</InputForm>

					<InputForm>
						<Input
							name="password"
							label="Senha"
							type="password"
							error={errors.password}
							{...register("password")}
						/>
						<Input
							name="passwordConfirmation"
							label="Confirmação"
							type="password"
							error={errors.passwordConfirmation}
							{...register("passwordConfirmation")}
						/>
					</InputForm>
				</Stack>
				<Flex justify="flex-end" mt="8" w="100%">
					<HStack spacing="4">

						<Link href="/users" passHref>
							<CancelButton />
						</Link>

						<SaveButton isSubmitting={isSubmitting} />
					</HStack>
				</Flex>
			</Box>
		</LayoutContainer>
	)
}