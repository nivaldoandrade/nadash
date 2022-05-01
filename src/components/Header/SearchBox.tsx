import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
	return (
		<InputGroup
			maxWidth={400}
			h={45}
			bg="gray.800"
			borderRadius="full"
			// flex="1"
			mx="4"
		>
			<Input
				variant="unstyled"
				px="8"
				mr="4"
				color="gray.50"
				placeholder="Buscar na plataforma"
				whiteSpace="nowrap"
				textOverflow="ellipsis"
				_placeholder={{
					color: "gray.400"
				}}
			/>
			<InputRightElement
				pointerEvents="auto"
				mr="4"
				children={<Icon as={RiSearchLine} fontSize="20" color="gray.400" />}
			/>
		</InputGroup>
	);
}