import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormErrorIcon, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/react';
import { Container } from '../components';

interface registerProps {
}

const Register: React.FC<registerProps> = ({ }) => {
  return (
    <Container variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={values => console.log(values)}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormControl>
              {/* isInvalid={form.errors.username && form.touched.username}> */}
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                value={values.username}
                onChange={handleChange}
                id="username"
                placeholder="username"
              />
              {/* <FormErrorMessage>{form.errors.username}</FormErrorMessage>  */}
            </FormControl>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Register;