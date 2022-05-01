
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, DrawerOverlay, DrawerContent, useBreakpointValue, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSidebar } from '../../contexts/SidebarContext';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
	const isDrawerSidebar = useBreakpointValue({ base: true, md: false });
	const { isOpen, onClose } = useSidebar();

	if (isDrawerSidebar) {
		return (
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent bg="gray.800" >
					<DrawerCloseButton mt="2" onClick={onClose} />
					<DrawerHeader
						borderBottomWidth="1px"
						borderColor="pink.400"
						mb="8"
					>
						Navegação
					</DrawerHeader>
					<DrawerBody>
						<SidebarNav />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Box display="flex" flex-direction="column" w="64" mr="8">
			<SidebarNav />
		</Box>
	)
}