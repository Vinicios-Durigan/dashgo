import {Flex, Input, Button, Stack, FormLabel, FormControl} from '@chakra-ui/react';
export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>
        <FormControl>
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Input
              name='email'
              type='email'
              id='email'
              focusBorderColor="whatsapp.300"
              bgColor="gray.900"
              variant='filled'
              _hover={{bgColor:
                'gray.900'
              }}
              size='lg'
            />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password'>Senha</FormLabel>
          <Input
            name='password'
            id='password'
            type='password'focusBorderColor="whatsapp.300"
            bgColor="gray.900"
            variant='filled'
            _hover={{bgColor:
              'gray.900'
            }}
            size='lg'
            />
        </FormControl>  
  
          <Button
            type='submit'
            colorScheme="whatsapp"
            size='lg'
            textColor="whatsapp.50">Entrar
          </Button>
        </Stack>  
      </Flex>
    </Flex>

  )
}
