import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
import React from "react";

type ButtonProps = IButtonProps & {
  title: string;
};

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <NativeBaseButton
      w={"full"}
      h={16}
      bg={"green.700"}
      _pressed={{
        bgColor: "green.800",
      }}
      {...rest}
    >
      <Text color={"white"} fontSize={"lg"}>
        {title}
      </Text>
    </NativeBaseButton>
  );
};
