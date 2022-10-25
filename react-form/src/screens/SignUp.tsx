import { yupResolver } from "@hookform/resolvers/yup";
import { Center, Heading, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const SignUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be less than 6 digits"),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf(
      [yup.ref("password")],
      "The confirmation password is not equal the password"
    ),
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(SignUpSchema),
  });

  const handleRegister = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <VStack bgColor={"gray.200"} flex={1} px={5}>
      <Center>
        <Heading my={24}>Create your account.</Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Name"
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Password"
              onChangeText={onChange}
              secureTextEntry
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirm_password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Confirm password"
              onChangeText={onChange}
              secureTextEntry
              errorMessage={errors.confirm_password?.message}
            />
          )}
        />
        <Button title="Register" onPress={handleSubmit(handleRegister)} />
      </Center>
    </VStack>
  );
}
