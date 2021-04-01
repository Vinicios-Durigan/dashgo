import { FormControl, FormLabel, Input as ChakaraIpout, InputProps as ChackraInputProps} from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChackraInputProps{
  name: string,
  label?: string
} 
export function Input({ name, label, ...rest }: InputProps) {
  return(
    <FormControl >
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakaraIpout
        name={name}
        type='email'
        id={name}
        focusBorderColor="whatsapp.300"
        bgColor="gray.900"
        variant='filled'
        _hover={{
          bgColor:
            'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  );
}
