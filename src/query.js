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
