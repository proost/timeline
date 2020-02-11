import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GetPosts($search: String){
    allPosts(search: $search) {
      edges {
        node {
          id
          author {
            id
            name
          }
          contents
        }
        cursor
      }
    }
  }`

const GET_USER = gql`
  query GetUser($email: String, $password: String) {
    user(email: $email, password: $password) {
      email
      name
      id
    }
  } 
`
