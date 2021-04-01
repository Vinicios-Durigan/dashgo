import { Flex , Text, Input, Icon, HStack, Box, Avatar} from "@chakra-ui/react";
import { RiNotification2Fill, RiNotification2Line, RiNotification3Line, RiSearchLine, RiUserAddLine  } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={
      1480 }
      h="20vh"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="whatsapp.500">.</Text>
      </Text>
      <Flex
        as="label"
        flex='1'
        py='4' //padding vertical
        px='8' //padding vertical
        ml='6' //margin left
        maxWidth={400}
        alignSelf="center"
        color="gray.400"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Buscar na plataforma'
          _placeholder={ {color: 'gray.400'} }
        />
        <Icon as={ RiSearchLine } fontSize='20' />
      </Flex>
      <Flex
        align='center'
        ml='auto'
      >
        <HStack  spacing='8' mx='8' pr='8' py='1' colo='gray.300' borderRightWidth={1} borderColor='gray.700' > 
          <Icon as={RiNotification3Line} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
        <Flex align='center' >
          <Box mr="4" textAlign="right">
            <Text>Vinicios Durigan</Text>
            <Text color="gray.300" fontSize='small'>vinicios_durigan@hotmail.com</Text>
          </Box>
          <Avatar size="md" name="Vinicios Durigan" src="https://scontent.fdou1-1.fna.fbcdn.net/v/t1.6435-9/158291244_3680345335407430_936805187721866581_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=86We0naB9VMAX_6vVpi&_nc_oc=AQk8jKCwfBkjhjrBIXBzC_SRAgh9yVjcTCkUePY72ReKXvcW1N4wuyYWpbj0Lor1UTc&_nc_ht=scontent.fdou1-1.fna&oh=63c0d18447f5fd4a99afb55a2d09fce1&oe=608BABCC"/>
        </Flex>
      </Flex>
    </Flex>
  );
}