import { Box, Text, Avatar, Flex } from "@chakra-ui/react";

interface ProfileProps {
	isVariantProfileData?: boolean;
}

export function Profile({ isVariantProfileData }: ProfileProps) {
	return (
		<Flex align="center">
			{isVariantProfileData && (
				<Box textAlign="right" mr="4">
					<Text>Nivaldo Andrade</Text>
					<Text fontSize="small" color="gray.400">nivaldoandradef@gmail.com</Text>
				</Box>
			)}

			<Avatar size="md" name="Nivaldo Andrade" />
		</Flex>
	);
}