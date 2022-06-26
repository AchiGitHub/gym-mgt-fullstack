import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { VscDashboard } from "react-icons/vsc";
import { TbUsers } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { MdCardMembership, MdOutlinePayments } from "react-icons/md";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: VscDashboard, route: "/" },
  { name: "Members", icon: TbUsers, route: "/members" },
  { name: "Group", icon: AiOutlineTeam, route: "/group" },
  { name: "Store", icon: BiStoreAlt, route: "/store" },
  { name: "Payments", icon: MdOutlinePayments, route: "/payments" },
  { name: "Membership Type", icon: MdCardMembership, route: "membership" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  to: string;
}
const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      // _focus={{ boxShadow: "none" }}
      to={to}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SidebarContent;
