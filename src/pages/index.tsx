import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

interface FormData {
	email: string;
	password: string;
}

const schema = yup.object().shape({
	email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
	password: yup.string().required('Senha obrigatório'),
});


export default function SignIn() {
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: yupResolver(schema)
	});


	const handleSignIn: SubmitHandler<FormData> = async (values, event) => {
		await new Promise(resolve => setTimeout(resolve, 3000));
		console.log(values);
	}

	return (
		<Flex
			w="100vw"
			h="100vh"
			align="center"
			justify="center"
		>
			<Flex
				as="form"
				w="100%"
				maxW="360"
				flexDir="column"
				bg="gray.800"
				borderRadius="8"
				p="8"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						name="email"
						type="email"
						label="Email"
						error={errors.email}
						{...register("email")}
					/>

					<Input
						name="password"
						type="password"
						label="Senha"
						error={errors.password}
						{...register("password")}
					/>
				</Stack>
				<Button
					type="submit"
					mt={4}
					size="lg"
					colorScheme="pink"
					isLoading={isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	)
}
