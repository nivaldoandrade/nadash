import { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";

interface InputFormProps {
	children: ReactNode;
}


export function InputForm({ children }: InputFormProps) {
	return (
		<SimpleGrid minChildWidth="240px" flex="1" spacing="4" >
			{children}
		</SimpleGrid>
	)
}