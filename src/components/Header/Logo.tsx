import { Text } from "@chakra-ui/react";
import Link from 'next/link';

export function Logo() {
	return (
		<Link href="/dashboard" passHref>
			<Text
				as="a"
				fontSize={["2xl", "3xl"]}
				fontWeight="bold"
				letterSpacing="tight"
				w="64"
				cursor="pointer"
			>
				nadash
				<Text
					as="span"
					color="pink.400"
					ml="1"
				>.</Text>
			</Text>
		</Link>
	);
}