import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
	title: string;
	children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
	return (
		<Box>
			<Text fontSize="small" fontWeight="bold" color="gray.400">{title}</Text>

			<Stack spacing="4" mt="8">
				{children}
			</Stack>
		</Box>
	);
}