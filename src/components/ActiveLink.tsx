import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
	children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
	let isActive = false;
	const { asPath } = useRouter();

	if (asPath === rest.href || asPath.substring(0, asPath.indexOf('/', 1)) === rest.href) {
		isActive = true;
	}

	return (
		<Link {...rest} passHref>
			{cloneElement(children, {
				color: isActive ? "pink.400" : 'gray.50'
			})}
		</Link>
	);
}