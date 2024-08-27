import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    obtainToken(username: $username, password: $password) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;