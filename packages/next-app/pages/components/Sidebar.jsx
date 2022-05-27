import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import React from 'react';
  import { Button, Input } from '@chakra-ui/react';
  import { BsFillAlarmFill, BsGearFill } from "react-icons/bs";
  import { FaBars,FaHome,FaRegChartBar, FaCalculator, FaWallet, FaExchangeAlt, FaInfoCircle, FaSignOutAlt } from "react-icons/fa";
  import { Divider } from '@chakra-ui/react'



  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} variant='outline' colorScheme='blue' onClick={onOpen}>
          <FaBars/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>ReKarma</DrawerHeader>
  
            <DrawerBody>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                    <FaHome/> &nbsp; Dashboard
                </Button>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                    <FaRegChartBar/> &nbsp; Analytics
                </Button>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                    <FaCalculator/> &nbsp; Portfolio
                </Button>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                    <FaWallet/> &nbsp; Wallets
                </Button>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                   <FaExchangeAlt/> &nbsp; Exchanges
                </Button>
                <Divider mt={"20px"}/>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                   <BsGearFill/> &nbsp; Setting
                </Button>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                   <FaInfoCircle/> &nbsp; Help
                </Button>
                <Button colorScheme='twitter' width={"260px"} mt={"10px"} variant='ghost'>
                   <FaSignOutAlt/> &nbsp; Log Out
                </Button>
            </DrawerBody>
             
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample