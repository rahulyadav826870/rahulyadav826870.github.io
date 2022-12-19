import { Link } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Button, Text } from "@chakra-ui/react";

const Links = ["About", "Technologies", "Skills", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    id="navbar"
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={`${children}`}
    spy={true}
    smooth={true}
    offset={-80}
    duration={700}
    fontSize={"20px"}

    // onClick={onClose}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        mt={{ lg: "-9%" }}
        mb={"20px"}
        bg={"#D0D9E1"}
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr",
          lg: "0.2fr 0.5fr 0.2fr",
        }}
        justifyContent="space-between"
        p={3}
        gap={{ base: "10px", sm: "10px", lg: "0px" }}
        alignItems="center"
        pos="sticky"
        top="0"
        zIndex="100"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            background={"#d0d9e1"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ml={"30px"}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* <Box>Rahul Yadav</Box> */}
            <Text id="logo">Rahul</Text>
            <HStack
              style={{ marginLeft: "250px" }}
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink className="active" key={link} offset={-70}>
                  {link}
                </NavLink>
              ))}
              <a
                href={require("../images/Rahul_Yadav_Resume.pdf")}
                download="Rahul-Yadav-Resume"
                style={{ marginLeft: "190px" }}
              >
                <Button
                  display={{ base: "none", sm: "none", lg: "block" }}
                  variant="outline"
                  id="resume"
                  _hover={{ bg: "#2b6cb0", color: "white" }}
                  letterSpacing={1}
                  fontSize={"14px"}
                >
                  RESUME
                </Button>
              </a>
            </HStack>
          </HStack>
          <Flex alignItems={"right"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box>
                  {/* <Button
                    onClick={isOpen ? onClose : onOpen}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  > */}

                  <NavLink className="active" key={link}>
                    {link}
                  </NavLink>

                  {/* </Button> */}
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
