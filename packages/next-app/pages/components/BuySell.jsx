import React from 'react';
import { Flex,Box,Text, Heading } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider,Input,InputGroup,InputLeftElement,Button } from '@chakra-ui/react'

function BuySell() {
    return ( 
        <Flex ml={"60px"}>
             <Box bgColor={'white'} width={'400px'} padding={"20px"} borderRadius={"20px"} mb={'30px'}>
             <Tabs>
                <TabList justifyContent={'center'} alignItems={'center'}>
                    <Tab>Buy</Tab>
                    <Tab>Sell</Tab>
                </TabList>

                <TabPanels >
                    <TabPanel >
                        <Box justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                           <h2>Current Price</h2>
                           <h2>$0.00</h2>
                           <Divider/>
                           <br/>
                           <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                                />
                                <Input placeholder='Enter Price' />
                            </InputGroup>
                            <h3>Or</h3>
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                                />
                                <Input placeholder='Enter Token Amount' />
                            </InputGroup>
                            <Button colorScheme='blue' mt={"20px"}>Confirm Buy</Button>
                        </Box>
                    
                    </TabPanel>
                    <TabPanel>
                    <Box justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                           <h2>Current Price</h2>
                           <h2>$0.00</h2> 
                           <Divider/>
                           <br/>
                           <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                                />
                                <Input placeholder='Enter Price' />
                            </InputGroup>
                            <h3>Or</h3>
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                                />
                                <Input placeholder='Enter Token Amount' />
                            </InputGroup>
                            <Button colorScheme='blue' mt={"20px"}>Confirm Sell</Button>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
             </Box>
        </Flex>
     );
}

export default BuySell;