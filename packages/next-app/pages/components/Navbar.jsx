import React from "react";
import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DrawerExample from "./Sidebar";

function Navbar() {
  return (
    <>
      <Flex px={"3em"} py={"1.5em"} justifyContent={"space-between"}>
        <DrawerExample/>
        <ConnectButton />
      </Flex>
    </>
  );
}

export default Navbar;
