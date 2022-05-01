import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface PaginationButtonProps extends ChakraButtonProps {
	number: number;
	isCurrentPage?: boolean;
	onPageChange: (page: number) => void;
}

export function PaginationButton(
	{ number,
		isCurrentPage = false,
		onPageChange,
		...rest
	}: PaginationButtonProps
) {
	if (isCurrentPage) {
		return (
			<Button
				fontSize="xs"
				width="4"
				size="sm"
				colorScheme="pink"
				borderRadius="4"
				disabled
				_disabled={{
					colorScheme: "pink",
					cursor: 'default'
				}}
				{...rest}
			>
				{number}
			</Button>
		);
	}

	return (
		<Button
			fontSize="xs"
			width="4"
			size="sm"
			bg="gray.700"
			borderRadius="4"
			_hover={{
				bg: 'gray.400'
			}}
			onClick={() => onPageChange(number)}
			{...rest}
		>
			{number}
		</Button>
	);
}