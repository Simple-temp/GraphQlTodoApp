import { gql } from "@apollo/client"

export const GET_ALL_POST = gql`

query getPostWithName  {
    posts{
      post
      by{
        _id
        name
      }
    }
  }

`
export const GET_MY_PROFILE = gql`

query getUserAndPost {
  myprofile{
    _id
    name
    email
    password
    website
    posts {
      by 
      post
    }
  }
}


`