import React from "react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { Text, Icon, HStack } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
interface Props {
  platfomrs: Platform[];
}
export default function PlatformIconList({ platfomrs }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platfomrs.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color={"gray.500"}>
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
}
