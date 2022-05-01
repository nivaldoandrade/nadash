import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarProviderProps {
	children: ReactNode;
}


const SidebarContext = createContext({} as UseDisclosureReturn);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
	const disclosure = useDisclosure();


	return (
		<SidebarContext.Provider value={disclosure}>
			{children}
		</SidebarContext.Provider>
	)
}


export const useSidebar = () => useContext(SidebarContext);