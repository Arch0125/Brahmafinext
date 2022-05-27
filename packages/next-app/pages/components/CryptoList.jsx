import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Text,
    Button,
    Flex,
    Image
  } from '@chakra-ui/react'

  export function CryptoList() {
      return ( 
          <Flex ml={"60px"}>
             <Box bgColor={'white'} width={'400px'} padding={"20px"} borderRadius={"20px"}>
        <Text color={"black"}>New Currencies</Text>
        <Button colorScheme='twitter' width={"360px"} mt={"10px"} variant='ghost'>
                   <Image src='https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022' width={"20px"}/> &nbsp; LiteCoin
        </Button>
        <Button colorScheme='twitter' width={"360px"} mt={"10px"} variant='ghost'>
                   <Image src='https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022' width={"20px"}/> &nbsp; LiteCoin
        </Button>
        <Button colorScheme='twitter' width={"360px"} mt={"10px"} variant='ghost'>
                   <Image src='https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022' width={"20px"}/> &nbsp; LiteCoin
        </Button>
        <Button colorScheme='twitter' width={"360px"} mt={"10px"} variant='ghost'>
                   <Image src='https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022' width={"20px"}/> &nbsp; LiteCoin
        </Button>
      </Box> 
          </Flex>
        
       );
  }
  
  export default CryptoList;