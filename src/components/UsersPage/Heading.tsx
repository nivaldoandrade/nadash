import { ReactNode } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

interface HeadingUserProps extends HeadingProps {
	children: ReactNode;
}

export function HeadingUser({ children, ...rest }: HeadingUserProps) {
	return (
		<Heading {...rest} fontWeight="bold" mb="8">{children}</Heading>
	);
}