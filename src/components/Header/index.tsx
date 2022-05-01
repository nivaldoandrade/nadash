import { Flex, IconButton, Icon, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebar } from '../../contexts/SidebarContext';

import { Logo } from './Logo';
import { Notification } from './Notification';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
	const variant = useBreakpointValue({ base: false, md: true });
	const { onOpen } = useSidebar();

	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1480}
			h="20"
			align="center"
			mx='auto'
			px={["4", "6"]}
			my="4"
		>
			{!variant && (
				<IconButton
					icon={<Icon as={RiMenuLine} />}
					fontSize="20"
					mr="4"
					aria-label="Abrir Navegação"
					onClick={onOpen}
					variant="unstyled"
				/>
			)}
			<Logo />
			{variant && <SearchBox />}
			<Flex
				ml="auto"
				align="center"
			>
				<Notification />
				<Profile isVariantProfileData={variant} />
			</Flex>
		</Flex>
	)
}

