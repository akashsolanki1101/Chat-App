export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom {
            id
            chatRoomUsers {
              items {
                user {
                  name
                  id
                  imageUri
                  status
                }
              }
            }
            lastMessage {
              content
              createdAt
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;