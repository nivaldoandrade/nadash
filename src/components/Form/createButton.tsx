import { Button, Icon, ButtonProps } from "@chakra-ui/react";
import React from "react";
import { ElementType, ReactNode } from "react";
import { RiAddLine } from "react-icons/ri";


interface CreateButtonProps extends ButtonProps {
	icon?: ElementType;
	children?: ReactNode;
}

export const CreateButton = React.forwardRef<HTMLButtonElement, CreateButtonProps>(
	({ icon, children, ...rest }, ref) => {
		return (
			<Button
				as="a"
				ref={ref}
				{...rest}
				colorScheme="pink"
				borderRadius="8"
				leftIcon={<Icon as={icon ?? RiAddLine} />}
			>
				{children ?? 'Criar Novo'}
			</Button>
		);
	});