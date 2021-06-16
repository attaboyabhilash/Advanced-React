import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import ErrorMessage from './ErrorMessage';
import SuccessStyles from './styles/SuccessStyles';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

const SignUp = () => {
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup();
    clearForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Register</h2>
      {data?.createUser && (
        <SuccessStyles>
          <p>
            <strong>Success</strong> Please signin with{' '}
            {data?.createUser?.email}
          </p>
        </SuccessStyles>
      )}
      <ErrorMessage error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={inputs.name}
            placeholder="Your Full Name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={inputs.email}
            placeholder="Your Email Address"
            autoComplete="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={inputs.password}
            placeholder="Your Password Here"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </fieldset>
    </Form>
  );
};

export default SignUp;
