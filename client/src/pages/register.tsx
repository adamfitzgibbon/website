import React from "react";
import { Formik, Form } from "formik";
import { Container, InputField } from "../components";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useMutation } from "urql";

interface registerProps {}

const REGISTER_MUT = `mutation Register($username: String!, $password: String!) {
  register(options: {
    username: $username
    password: $password
  }) {
    errors {
      field
      message
    }
    user {
      id
      username
      createdOn
    }
  }
}`;

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUT);
  return (
    <Container variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
              mt={4}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Register;
