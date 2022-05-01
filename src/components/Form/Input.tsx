import { FormControl, FormErrorMessage, FormLabel, InputGroup, Input as ChakraInput, InputRightElement, Button, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { useState, ForwardRefRenderFunction, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';


interface InputProps extends ChakraInputProps {
	label?: string;
	name: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
	({ name, label, error = null, ...rest }, ref) => {
		const [isShow, setIsShow] = useState(false);

		const handleShowPassword = () => setIsShow(!isShow);

		return (
			<FormControl id={name} isInvalid={!!error}>
				<FormLabel>{label}</FormLabel>
				<InputGroup
					size="lg"
				>
					<ChakraInput
						ref={ref}
						{...rest}
						name={name}
						type={(name === 'password') ? (
							(isShow) ? "text" : "password"
						) : (
							rest.type
						)}
						variant="filled"
						bg="gray.900"
						focusBorderColor={error ? 'red' : 'pink.600'}
						_hover={{
							bg: "gray.900"
						}}
					/>
					{(rest.type === 'password') && (
						<InputRightElement width="4.5rem">
							<Button
								size="lg"
								onClick={handleShowPassword}
								bg="inherit"
								fontSize="10"
								_hover={{
									bg: "inherit"
								}}
								_active={{
									bg: "inherit"
								}}
							>
								{isShow ? "Ocultar" : "Mostrar"}
							</Button>
						</InputRightElement>
					)}
				</InputGroup>
				{!!error && (
					<FormErrorMessage>{error.message}</FormErrorMessage>
				)}
			</FormControl>
		)
	}

export const Input = forwardRef(InputBase);