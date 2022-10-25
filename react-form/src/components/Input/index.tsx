import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
} from "native-base";
import React from "react";

type InputProps = IInputProps & {
  errorMessage?: string | null;
};

export const Input: React.FC<InputProps> = ({
  errorMessage = null,
  isInvalid,
  ...rest
}) => {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        bg={"gray.200"}
        fontSize={"md"}
        h={16}
        isInvalid={invalid}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.300",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
