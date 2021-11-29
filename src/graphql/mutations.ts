/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
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
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
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
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
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
export const createStatus = /* GraphQL */ `
  mutation CreateStatus(
    $input: CreateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    createStatus(input: $input, condition: $condition) {
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
export const updateStatus = /* GraphQL */ `
  mutation UpdateStatus(
    $input: UpdateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    updateStatus(input: $input, condition: $condition) {
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
export const deleteStatus = /* GraphQL */ `
  mutation DeleteStatus(
    $input: DeleteStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    deleteStatus(input: $input, condition: $condition) {
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
export const createElement = /* GraphQL */ `
  mutation CreateElement(
    $input: CreateElementInput!
    $condition: ModelElementConditionInput
  ) {
    createElement(input: $input, condition: $condition) {
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
export const updateElement = /* GraphQL */ `
  mutation UpdateElement(
    $input: UpdateElementInput!
    $condition: ModelElementConditionInput
  ) {
    updateElement(input: $input, condition: $condition) {
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
export const deleteElement = /* GraphQL */ `
  mutation DeleteElement(
    $input: DeleteElementInput!
    $condition: ModelElementConditionInput
  ) {
    deleteElement(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createElementDiscussed = /* GraphQL */ `
  mutation CreateElementDiscussed(
    $input: CreateElementDiscussedInput!
    $condition: ModelElementDiscussedConditionInput
  ) {
    createElementDiscussed(input: $input, condition: $condition) {
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
          icon
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
export const updateElementDiscussed = /* GraphQL */ `
  mutation UpdateElementDiscussed(
    $input: UpdateElementDiscussedInput!
    $condition: ModelElementDiscussedConditionInput
  ) {
    updateElementDiscussed(input: $input, condition: $condition) {
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
          icon
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
export const deleteElementDiscussed = /* GraphQL */ `
  mutation DeleteElementDiscussed(
    $input: DeleteElementDiscussedInput!
    $condition: ModelElementDiscussedConditionInput
  ) {
    deleteElementDiscussed(input: $input, condition: $condition) {
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
          icon
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
export const createDiscussion = /* GraphQL */ `
  mutation CreateDiscussion(
    $input: CreateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    createDiscussion(input: $input, condition: $condition) {
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
        icon
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
export const updateDiscussion = /* GraphQL */ `
  mutation UpdateDiscussion(
    $input: UpdateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    updateDiscussion(input: $input, condition: $condition) {
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
        icon
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
export const deleteDiscussion = /* GraphQL */ `
  mutation DeleteDiscussion(
    $input: DeleteDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    deleteDiscussion(input: $input, condition: $condition) {
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
        icon
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
