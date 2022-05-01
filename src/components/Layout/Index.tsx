import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface LayoutContainerProps {
	children: ReactNode;
}

export function LayoutContainer({ children }: LayoutContainerProps) {
	return (
		<Flex flexDirection="column">
			<Header />
			<Flex w="100%" maxWidth={1480} my="8" mx="auto" px={["4", "6"]}>
				<Sidebar />
				{children}
			</Flex>
		</Flex>
	);
}