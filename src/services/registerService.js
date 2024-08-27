import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
mutation Register($email: String!, $password: String!, $username: String!, $address: String!) {
  register(email: $email, password: $password, username: $username, address: $address) {
    token
  }
}
`;