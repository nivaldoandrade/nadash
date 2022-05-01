import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Notification() {
	return (
		<HStack
			spacing="4"
			ml={["2", "0"]}
			mr={["4", "8"]}
			pr={["4", "8"]}
			py="1"
			borderRight="1px"
			borderColor="gray.400"
		>
			<Icon as={RiNotificationLine} fontSize="20" color="gray.400" />
			<Icon as={RiUserAddLine} fontSize="20" color="gray.400" />
		</HStack>
	);
}