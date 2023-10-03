import { HStack, Image, Text } from "@chakra-ui/react";
import log from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  children: React.ReactNode;
}

export default function NavBar({ children }: Props) {
  return (
    <HStack padding="10px">
      <Image src={log} boxSize="60px" />
      {/* <SearchInput/> */}
      {children}
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}
