import { Heading, Container, Text, Flex, Link, Code, Box,Center,Square, Button } from "@chakra-ui/react";
import React from "react";
import { useConnect } from "wagmi";
import { Image } from "@chakra-ui/react";

function Hero() {
  const { isConnected } = useConnect();
  return (
    <>
       <Flex color='white'>
        <Box flex='1' bg='white' flexWrap={'wrap'} ml={"100px"}
            mt={"100px"}>
        <Text
            bgGradient='linear(to-l, #009ffd, #2a2a72)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
            
          >
            Welcome to <br/> ReKarma
          </Text>
          <Text color={"black"}>
          You reap what you sow; community perks are directly proportional <br/> to a  members' efforts and work within the ecosystem.
          </Text>
          <Button mt={"50px"} bgColor={'#0E76FD'}>Go to Dashboard</Button>
        </Box>
        <Box flex='1' bg='white'>
            <Image src="https://i.ibb.co/7SRRK82/Team-work-Monochromatic.png" />
        </Box>
      </Flex>
    </>
  );
}

export default Hero;
