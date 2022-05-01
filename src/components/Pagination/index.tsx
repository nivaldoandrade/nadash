import { HStack, Stack, Box, Text } from '@chakra-ui/react';
import { PaginationButton } from './PaginationButton';

interface PaginationProps {
	totalCount: number;
	perPage?: number;
	currentPage?: number;
	onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
	return [...new Array(to - from)].map((_, index) => {
		return from + index + 1;
	}).filter(page => page > 0);
}

export function Pagination({
	totalCount,
	perPage = 10,
	currentPage = 1,
	onPageChange
}: PaginationProps) {
	const lastPage = Math.ceil(totalCount / perPage);

	const previousPages = currentPage > 1
		? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
		: []

	const nextPages = currentPage < lastPage
		? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
		: []

	return (
		<Stack
			direction={["column", "row"]}
			spacing="4"
			justify="space-between"
			align="center"
			mt="6"
		>
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>
			<HStack>
				{currentPage > (1 + siblingsCount) && (
					<>
						<PaginationButton
							onPageChange={onPageChange}
							number={1}
						/>
						{currentPage > (1 + siblingsCount) && (
							<Text
								width="8"
								color="gray.300"
								textAlign="center"
								height="8"
							>
								...
							</Text>
						)}
					</>
				)}

				{previousPages.length > 0 && previousPages.map(page => (
					<PaginationButton
						onPageChange={onPageChange}
						key={page}
						number={page}
					/>
				))}

				<PaginationButton
					onPageChange={onPageChange}
					number={currentPage}
					isCurrentPage
				/>

				{nextPages.length > 0 && nextPages.map(page => (
					<PaginationButton
						onPageChange={onPageChange}
						key={page}
						number={page}
					/>
				))}

				{(currentPage + siblingsCount) < lastPage && (
					<>
						{(currentPage + siblingsCount + 1) < lastPage && (
							<Text
								width="8"
								color="gray.300"
								textAlign="center"
								height="8"
							>
								...
							</Text>
						)}
						<PaginationButton
							onPageChange={onPageChange}
							number={lastPage}
						/>
					</>
				)}
			</HStack>
		</Stack>
	)
}