import { ElementType, ReactNode } from "react";
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: ReactNode;
	href: string;
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display="flex" align="center" variant="text" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">{children}</Text>
			</ChakraLink>
		</ActiveLink>
	);
}