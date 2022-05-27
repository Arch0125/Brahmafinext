import React from 'react';
import { Flex,Box,Text, Container } from '@chakra-ui/react';
import { StatsCard } from './Stats';
import cryptoTable from './CryptoTable';
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
  } from '@chakra-ui/react'
import { CryptoList } from './CryptoList';
import BuySell from './BuySell';

function Dashboard() {
    return ( 
        <>
            <StatsCard/>
        <Flex height={'100vh'} pl={'80px'} bgColor={'#add8e6'}>
            
            
            <Box flex='1' ml={"50px"} mt={"30px"}>
        <TableContainer bgColor={'white'} px={'10px'} py={'10px'} borderRadius={'20px'}>
            <Text px={"20px"} py={'20px'} color={'black'}>Trending Market</Text>
        <Table variant='simple' >
            
          <TableCaption>Trending Market</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
        </TableContainer>

            </Box>
            <Box flex='1' mt={"30px"} >
                <BuySell/>
                <CryptoList/>
            </Box>
        </Flex>
        </>
     );
}

export default Dashboard;