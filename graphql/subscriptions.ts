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
        group
        groupName
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
        updatedAt
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
        group
        groupName
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
        updatedAt
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
        group
        groupName
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
        updatedAt
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
      group
      groupName
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
          group
          groupName
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      group
      groupName
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
          group
          groupName
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      group
      groupName
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
          group
          groupName
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        group
        groupName
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
        updatedAt
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
        group
        groupName
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
        updatedAt
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
        group
        groupName
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
        updatedAt
      }
      updatedAt
    }
  }
`;
