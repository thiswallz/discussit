/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate {
    onCreateTemplate {
      id
      name
      isDefault
      statuses {
        items {
          id
          templateId
          title
          color
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
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate {
    onUpdateTemplate {
      id
      name
      isDefault
      statuses {
        items {
          id
          templateId
          title
          color
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
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate {
    onDeleteTemplate {
      id
      name
      isDefault
      statuses {
        items {
          id
          templateId
          title
          color
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
export const onCreateStatus = /* GraphQL */ `
  subscription OnCreateStatus {
    onCreateStatus {
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
      order
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStatus = /* GraphQL */ `
  subscription OnUpdateStatus {
    onUpdateStatus {
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
      order
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStatus = /* GraphQL */ `
  subscription OnDeleteStatus {
    onDeleteStatus {
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
      order
      createdAt
      updatedAt
    }
  }
`;
export const onCreateElement = /* GraphQL */ `
  subscription OnCreateElement {
    onCreateElement {
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
export const onUpdateElement = /* GraphQL */ `
  subscription OnUpdateElement {
    onUpdateElement {
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
export const onDeleteElement = /* GraphQL */ `
  subscription OnDeleteElement {
    onDeleteElement {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateElementDiscussed = /* GraphQL */ `
  subscription OnCreateElementDiscussed {
    onCreateElementDiscussed {
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
      discussion {
        id
        title
        priority
        status {
          id
          templateId
          title
          color
          order
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        labels
        owners
        checklist
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
  }
`;
export const onUpdateElementDiscussed = /* GraphQL */ `
  subscription OnUpdateElementDiscussed {
    onUpdateElementDiscussed {
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
      discussion {
        id
        title
        priority
        status {
          id
          templateId
          title
          color
          order
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        labels
        owners
        checklist
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
  }
`;
export const onDeleteElementDiscussed = /* GraphQL */ `
  subscription OnDeleteElementDiscussed {
    onDeleteElementDiscussed {
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
      discussion {
        id
        title
        priority
        status {
          id
          templateId
          title
          color
          order
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        template {
          id
          name
          isDefault
          createdAt
          updatedAt
        }
        labels
        owners
        checklist
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
  }
`;
export const onCreateDiscussion = /* GraphQL */ `
  subscription OnCreateDiscussion {
    onCreateDiscussion {
      id
      title
      priority
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
        order
        createdAt
        updatedAt
      }
      team {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      checklist
      peopleInvolved
      dateProposed
      dateProposedGranularity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDiscussion = /* GraphQL */ `
  subscription OnUpdateDiscussion {
    onUpdateDiscussion {
      id
      title
      priority
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
        order
        createdAt
        updatedAt
      }
      team {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      checklist
      peopleInvolved
      dateProposed
      dateProposedGranularity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDiscussion = /* GraphQL */ `
  subscription OnDeleteDiscussion {
    onDeleteDiscussion {
      id
      title
      priority
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
        order
        createdAt
        updatedAt
      }
      team {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      checklist
      peopleInvolved
      dateProposed
      dateProposedGranularity
      createdAt
      updatedAt
    }
  }
`;
