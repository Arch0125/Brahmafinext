import {
    Box,
    chakra,
    SimpleGrid,
    useColorModeValue,
    Text,
    Flex,
  } from '@chakra-ui/react';
  import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

  export function StatsCard() {
    return (
        <Flex bgColor={'#add8e6'} width={"100vw"} pl={'110px'}  py={"20px"}>
            <Box px={"50px"} py={"20px"} bgColor={'#EBECF0'} ml={"15px"} borderRadius={"10px"}  >
               <Stat>
                <StatLabel>No. of Dapps Interacted</StatLabel>
                <StatNumber>15</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat> 
            </Box>
            <Box px={"50px"} py={"20px"} bgColor={'#EBECF0'} ml={"15px"} borderRadius={"10px"}  >
               <Stat>
                <StatLabel>No. of Dapps Interacted</StatLabel>
                <StatNumber>15</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat> 
            </Box>
            <Box px={"50px"} py={"20px"} bgColor={'#EBECF0'} ml={"15px"} borderRadius={"10px"}  >
               <Stat>
                <StatLabel>No. of Dapps Interacted</StatLabel>
                <StatNumber>15</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat> 
            </Box>
            <Box px={"50px"} py={"20px"} bgColor={'#EBECF0'} ml={"15px"} borderRadius={"10px"}  >
               <Stat>
                <StatLabel>No. of Dapps Interacted</StatLabel>
                <StatNumber>15</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat> 
            </Box>
            
        </Flex>
    );
  }