/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      id
      name
      isDefault
      statuses {
        items {
          id
          templateId
          title
          color
          icon
          order
          createdAt
          updatedAt
        }
        nextToken
      }
      elements {
        items {
          id
          templateId
          title
          order
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
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isDefault
        statuses {
          nextToken
        }
        elements {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStatus = /* GraphQL */ `
  query GetStatus($id: ID!) {
    getStatus(id: $id) {
      id
      templateId
      template {
        id
        name
        isDefault
        statuses {
          nextToken
        }
        elements {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      color
      icon
      order
      createdAt
      updatedAt
    }
  }
`;
export const listStatuss = /* GraphQL */ `
  query ListStatuss(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        templateId
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        title
        color
        icon
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getElement = /* GraphQL */ `
  query GetElement($id: ID!) {
    getElement(id: $id) {
      id
      templateId
      template {
        id
        name
        isDefault
        statuses {
          nextToken
        }
        elements {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      order
      createdAt
      updatedAt
    }
  }
`;
export const listElements = /* GraphQL */ `
  query ListElements(
    $filter: ModelElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        templateId
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        title
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      members {
        items {
          id
          teamId
          name
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      teamId
      team {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamId
        team {
          id
          name
          createdAt
          updatedAt
        }
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getElementDiscussed = /* GraphQL */ `
  query GetElementDiscussed($id: ID!) {
    getElementDiscussed(id: $id) {
      id
      element {
        id
        templateId
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        title
        order
        createdAt
        updatedAt
      }
      discussionId
      discussion {
        id
        title
        priority
        statusId
        status {
          id
          templateId
          title
          color
          icon
          order
          createdAt
          updatedAt
        }
        teamId
        team {
          id
          name
          createdAt
          updatedAt
        }
        templateId
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        labels
        owners
        checklist {
          title
          checked
        }
        peopleInvolved
        dateProposed
        dateProposedGranularity
        elements {
          nextToken
        }
        createdAt
        updatedAt
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const listElementDiscusseds = /* GraphQL */ `
  query ListElementDiscusseds(
    $filter: ModelElementDiscussedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listElementDiscusseds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        element {
          id
          templateId
          title
          order
          createdAt
          updatedAt
        }
        discussionId
        discussion {
          id
          title
          priority
          statusId
          teamId
          templateId
          labels
          owners
          peopleInvolved
          dateProposed
          dateProposedGranularity
          createdAt
          updatedAt
        }
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDiscussion = /* GraphQL */ `
  query GetDiscussion($id: ID!) {
    getDiscussion(id: $id) {
      id
      title
      priority
      statusId
      status {
        id
        templateId
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        title
        color
        icon
        order
        createdAt
        updatedAt
      }
      teamId
      team {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      templateId
      template {
        id
        name
        isDefault
        statuses {
          nextToken
        }
        elements {
          nextToken
        }
        createdAt
        updatedAt
      }
      labels
      owners
      checklist {
        title
        checked
      }
      peopleInvolved
      dateProposed
      dateProposedGranularity
      elements {
        items {
          id
          discussionId
          text
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
export const listDiscussions = /* GraphQL */ `
  query ListDiscussions(
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscussions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        priority
        statusId
        status {
          id
          templateId
          title
          color
          icon
          order
          createdAt
          updatedAt
        }
        teamId
        team {
          id
          name
          createdAt
          updatedAt
        }
        templateId
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        labels
        owners
        checklist {
          title
          checked
        }
        peopleInvolved
        dateProposed
        dateProposedGranularity
        elements {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
