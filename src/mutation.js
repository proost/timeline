import gql from 'graphql-tag'

const CREATE_USER = gql`
  mutation CreateUser($email: String!, $name: String!, $password: String!) {
    createUser(userData: {email: $email, name: $name, password:$$password})
    user {
      name
    }
  }
`

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $password: String) {
    updateUser(userData: {id: $id, name: $name, password: $password}) {
      user {
        name
      }
    }
  }
` 

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(userData: {id: $id}) {
      user {
        name
      }
    }
  }
`

const CREATE_POST = gql`
  mutation CreatePost($authorId: ID!, $contents: String!) {
    createPost(postData: {authorId: $authorId, contents: $contents}) {
      post {
        author {
          name
        }
        contents
      }
    }
  }
`

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(postData: {id: $id}){
      post {
        author {
          name
        }
      }
    }
  }
`

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $contents: String!) {
    updatePost(postData: {id: $id, contents: $contents}) {
      post {
        contents
      }
    }
  }
`

const CREATE_GROUP = gql`
  mutation CreateGroup($name: String) {
    createGroup(groupData: {name: $name}) {
      group {
        name
      }
    }
  }
`
