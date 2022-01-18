import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Image
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
import LandingPageImage from "../assets/images/landing-page.png";
const Home = props => {
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login')
    }
    return (
        <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Box align="center"><Image  objectFit='contain' boxSize="40vh" src={LandingPageImage} /> </Box>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Manage your <br />
            <Text as={'span'} fontWeight={'bold'} color={'primary.100'}>
              grad courses
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Academia is an online course management software that offers students access to online university courses.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'primary.900'}
              rounded={'full'}
              variant={'outline'}
              px={6}
              _hover={{
                bg: 'primary.800',
                color: 'white'
              }}
              onClick={goToLogin}
              >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    )
}

Home.propTypes = {

}

export default Home