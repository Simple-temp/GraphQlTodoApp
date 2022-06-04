import { gql } from "@apollo/client"

export const SIGN_UP_USER = gql `

    mutation signUpuser ( $newUser : createUser! ) {
        user : signUpuser( newUser: $newUser ),{
        _id
        name
        email
        password
        website
        }
    }
`

export const SIGN_IN_USER = gql `

mutation signInuser ( $newUserSignIn : SignInUser! ) {
    user : signUInUser( signInUser: $newUserSignIn ),{
        token
    }
  }
  
`

export const CREATE_POST = gql `

mutation createNewPost ($post : String!) {
    userpost : createPost (post : $post)
  }
  
`

export const DELETE_POST = gql `

mutation deletePost ($userId : ID!){
  delPost (_id : $userId){
    _id
    post
    by
  }
}
  
`

