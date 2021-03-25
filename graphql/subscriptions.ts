/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      imageUri
      status
      online
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      imageUri
      status
      online
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      imageUri
      status
      online
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        online
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        updatedAt
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        online
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        updatedAt
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        online
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        updatedAt
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        messageStatus
        taggedMessageContent
        taggedMessageSenderName
        taggedMessageSenderID
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          online
          createdAt
          updatedAt
        }
        chatRoom {
          id
          updatedAt
          lastMessageID
          createdAt
        }
        updatedAt
      }
      createdAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        messageStatus
        taggedMessageContent
        taggedMessageSenderName
        taggedMessageSenderID
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          online
          createdAt
          updatedAt
        }
        chatRoom {
          id
          updatedAt
          lastMessageID
          createdAt
        }
        updatedAt
      }
      createdAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        messageStatus
        taggedMessageContent
        taggedMessageSenderName
        taggedMessageSenderID
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          online
          createdAt
          updatedAt
        }
        chatRoom {
          id
          updatedAt
          lastMessageID
          createdAt
        }
        updatedAt
      }
      createdAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      createdAt
      content
      messageStatus
      taggedMessageContent
      taggedMessageSenderName
      taggedMessageSenderID
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        online
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        updatedAt
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        createdAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      createdAt
      content
      messageStatus
      taggedMessageContent
      taggedMessageSenderName
      taggedMessageSenderID
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        online
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        updatedAt
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        createdAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      createdAt
      content
      messageStatus
      taggedMessageContent
      taggedMessageSenderName
      taggedMessageSenderID
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        online
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        updatedAt
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          messageStatus
          taggedMessageContent
          taggedMessageSenderName
          taggedMessageSenderID
          userID
          chatRoomID
          updatedAt
        }
        createdAt
      }
      updatedAt
    }
  }
`;
