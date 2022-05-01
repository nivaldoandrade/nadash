import { Button, Icon } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";

export function EditButton() {
	return (
		<Button
			as="a"
			borderRadius="8"
			colorScheme="twitter"
			leftIcon={<Icon as={RiEdit2Fill} />}
		>
			Editar
		</Button>
	);
}