import { Button } from "@chakra-ui/react";

interface SaveButtonProps {
	isSubmitting: boolean;
}

export function SaveButton({ isSubmitting }: SaveButtonProps) {
	return (
		<Button
			type="submit"
			colorScheme="pink"
			isLoading={isSubmitting}
		>
			Salvar
		</Button>
	);
}