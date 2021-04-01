import {Flex, Button, Stack, } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
export default function SignIn() {
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
        <Stack spacing='3'>
          <Input name="email" type="email" label="E-mail" size="lg" />
          <Input name="password" type="password" label="Senha" size="lg"/>
        </Stack>
        
          <Button
            type='submit'
            colorScheme="whatsapp"
            size='lg'
            mt='8'
            textColor="whatsapp.50">Entrar
          </Button>

      </Flex>
    </Flex>

  )
}
