import { SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { LayoutContainer } from '../components/Layout/Index';
const Charts = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const options = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[400]
	},
	tooltip: {
		enabled: true,
		theme: "dark",
		x: {
			format: 'dd/MM/yy'
		}
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityForm: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100]
		}
	},
	xaxis: {
		type: 'category',
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		labels: {
			show: true,
			style: {
				fontSize: '12px',
				fontFamily: 'Roboto',
				fontWeight: 400,
				cssClass: 'apexcharts-xaxis-label',
			},
		},
		categories: [
			'01 Mar',
			'02 Mar',
			'03 Mar',
			'04 Mar',
			'05 Mar',
			'06 Mar',
			'07 Mar',
			'08 Mar',
		]
	}
} as ApexCharts.ApexOptions

const series = [
	{
		name: 'series1',
		data: [30, 40, 45, 50, 49, 60, 70, 91]
	}
]

export default function Dashboard() {
	return (
		<LayoutContainer>
			<SimpleGrid flex="1" gap="4" minChildWidth={["250px", "300px"]} align="flex-start" mx="auto" maxHeight="300px">
				<Box
					bg="gray.800"
					p={["4", "8"]}
					borderRadius="8"
					pb="4"
				>
					<Text>Inscritos da semana</Text>
					<Charts
						options={options}
						series={series}
						height={240}
						type="area"
					/>
				</Box>

				<Box
					bg="gray.800"
					p={["4", "8"]}
					borderRadius="8"
					pb="4"

				>
					<Text>Taxa de Abertura</Text>
					<Charts
						options={options}
						series={series}
						height={240}
						type="area"
					/>
				</Box>
			</SimpleGrid>
		</LayoutContainer>
	)
}