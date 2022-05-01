import { Button, ButtonProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react';


const CancelButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> =
	(({ ...rest }, ref) => {
		return (
			<Button
				as="a"
				ref={ref}
				colorScheme="whiteAlpha"
				{...rest}
			>
				Cancelar
			</Button>
		)
	})


export const CancelButton = forwardRef(CancelButtonBase);
