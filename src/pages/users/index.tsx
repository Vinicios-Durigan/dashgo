
import { Box, Button, Flex, Heading, Icon, Table, Th, Text, Thead, Tr, Checkbox, Tbody, Td } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPantoneLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Form/pagination";
import { Sidebar } from "../../components/Form/Sidebar";
import { Header } from "../../components/Header";

export default function UserList() {
  return (
    <Box> 
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>

      <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
        <Flex mb='8' justify='space-between' align='center'>
          <Heading size='lg' fontWeight='normal'>Usúarios</Heading>
            <Button as="a" size='sm' fontSize='sm' colorScheme='whatsapp' leftIcon={<Icon as={RiAddLine} fontSize='20'  />}>Criar Novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color='grat.300' width='8'>
                  <Checkbox colorScheme="whatsapp" />
                </Th>
                <Th>Usúario</Th>
                <Th>Data de Cadastro</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="whatsapp" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vinicios Durigan</Text>
                    <Text fontSize="sm" color="gray.300">vinicios_durigan@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>01 de Abril, 2021</Td>
                <Td>
                   <Button as="a" size='sm' fontSize='sm' colorScheme='twitter' leftIcon={<Icon as={RiPencilLine} fontSize='16'  />}>Editar
                   </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>

  );
}