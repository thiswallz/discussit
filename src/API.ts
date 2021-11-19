/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTemplateInput = {
  id?: string | null,
  name: string,
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Template = {
  __typename: "Template",
  id: string,
  name: string,
  statuses?: ModelStatusConnection | null,
  elements?: ModelElementConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStatusConnection = {
  __typename: "ModelStatusConnection",
  items:  Array<Status >,
  nextToken?: string | null,
};

export type Status = {
  __typename: "Status",
  id: string,
  templateId: string,
  template?: Template | null,
  color: Array< string >,
  order: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelElementConnection = {
  __typename: "ModelElementConnection",
  items:  Array<Element >,
  nextToken?: string | null,
};

export type Element = {
  __typename: "Element",
  id: string,
  templateId: string,
  template?: Template | null,
  title: string,
  order: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTemplateInput = {
  id: string,
  name?: string | null,
};

export type DeleteTemplateInput = {
  id: string,
};

export type CreateStatusInput = {
  id?: string | null,
  templateId: string,
  color: Array< string >,
  order: number,
};

export type ModelStatusConditionInput = {
  templateId?: ModelIDInput | null,
  color?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelStatusConditionInput | null > | null,
  or?: Array< ModelStatusConditionInput | null > | null,
  not?: ModelStatusConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStatusInput = {
  id: string,
  templateId?: string | null,
  color?: Array< string > | null,
  order?: number | null,
};

export type DeleteStatusInput = {
  id: string,
};

export type CreateElementInput = {
  id?: string | null,
  templateId: string,
  title: string,
  order: number,
};

export type ModelElementConditionInput = {
  templateId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelElementConditionInput | null > | null,
  or?: Array< ModelElementConditionInput | null > | null,
  not?: ModelElementConditionInput | null,
};

export type UpdateElementInput = {
  id: string,
  templateId?: string | null,
  title?: string | null,
  order?: number | null,
};

export type DeleteElementInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  members?: ModelMemberConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items:  Array<Member >,
  nextToken?: string | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  teamId: string,
  team?: Team | null,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateMemberInput = {
  id?: string | null,
  teamId: string,
  name: string,
};

export type ModelMemberConditionInput = {
  teamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type UpdateMemberInput = {
  id: string,
  teamId?: string | null,
  name?: string | null,
};

export type DeleteMemberInput = {
  id: string,
};

export type CreateElementDiscussedInput = {
  id?: string | null,
  text: string,
};

export type ModelElementDiscussedConditionInput = {
  text?: ModelStringInput | null,
  and?: Array< ModelElementDiscussedConditionInput | null > | null,
  or?: Array< ModelElementDiscussedConditionInput | null > | null,
  not?: ModelElementDiscussedConditionInput | null,
};

export type ElementDiscussed = {
  __typename: "ElementDiscussed",
  id: string,
  element: Element,
  discussion: Discussion,
  text: string,
  createdAt: string,
  updatedAt: string,
};

export type Discussion = {
  __typename: "Discussion",
  id: string,
  title: string,
  priority: string,
  status: Status,
  team: Team,
  template: Template,
  labels?: Array< string | null > | null,
  owners?: Array< string | null > | null,
  checklist?: Array< string | null > | null,
  peopleInvolved?: Array< string | null > | null,
  dateProposed?: string | null,
  dateProposedGranularity?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateElementDiscussedInput = {
  id: string,
  text?: string | null,
};

export type DeleteElementDiscussedInput = {
  id: string,
};

export type CreateDiscussionInput = {
  id?: string | null,
  title: string,
  priority: string,
  labels?: Array< string | null > | null,
  owners?: Array< string | null > | null,
  checklist?: Array< string | null > | null,
  peopleInvolved?: Array< string | null > | null,
  dateProposed?: string | null,
  dateProposedGranularity?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelDiscussionConditionInput = {
  title?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  labels?: ModelStringInput | null,
  owners?: ModelStringInput | null,
  checklist?: ModelStringInput | null,
  peopleInvolved?: ModelStringInput | null,
  dateProposed?: ModelStringInput | null,
  dateProposedGranularity?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDiscussionConditionInput | null > | null,
  or?: Array< ModelDiscussionConditionInput | null > | null,
  not?: ModelDiscussionConditionInput | null,
};

export type UpdateDiscussionInput = {
  id: string,
  title?: string | null,
  priority?: string | null,
  labels?: Array< string | null > | null,
  owners?: Array< string | null > | null,
  checklist?: Array< string | null > | null,
  peopleInvolved?: Array< string | null > | null,
  dateProposed?: string | null,
  dateProposedGranularity?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteDiscussionInput = {
  id: string,
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection",
  items:  Array<Template >,
  nextToken?: string | null,
};

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null,
  templateId?: ModelIDInput | null,
  color?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelStatusFilterInput | null > | null,
  or?: Array< ModelStatusFilterInput | null > | null,
  not?: ModelStatusFilterInput | null,
};

export type ModelElementFilterInput = {
  id?: ModelIDInput | null,
  templateId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelElementFilterInput | null > | null,
  or?: Array< ModelElementFilterInput | null > | null,
  not?: ModelElementFilterInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team >,
  nextToken?: string | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelElementDiscussedFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelElementDiscussedFilterInput | null > | null,
  or?: Array< ModelElementDiscussedFilterInput | null > | null,
  not?: ModelElementDiscussedFilterInput | null,
};

export type ModelElementDiscussedConnection = {
  __typename: "ModelElementDiscussedConnection",
  items:  Array<ElementDiscussed >,
  nextToken?: string | null,
};

export type ModelDiscussionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  priority?: ModelStringInput | null,
  labels?: ModelStringInput | null,
  owners?: ModelStringInput | null,
  checklist?: ModelStringInput | null,
  peopleInvolved?: ModelStringInput | null,
  dateProposed?: ModelStringInput | null,
  dateProposedGranularity?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDiscussionFilterInput | null > | null,
  or?: Array< ModelDiscussionFilterInput | null > | null,
  not?: ModelDiscussionFilterInput | null,
};

export type ModelDiscussionConnection = {
  __typename: "ModelDiscussionConnection",
  items:  Array<Discussion >,
  nextToken?: string | null,
};

export type CreateTemplateMutationVariables = {
  input: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStatusMutationVariables = {
  input: CreateStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type CreateStatusMutation = {
  createStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStatusMutationVariables = {
  input: UpdateStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type UpdateStatusMutation = {
  updateStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStatusMutationVariables = {
  input: DeleteStatusInput,
  condition?: ModelStatusConditionInput | null,
};

export type DeleteStatusMutation = {
  deleteStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateElementMutationVariables = {
  input: CreateElementInput,
  condition?: ModelElementConditionInput | null,
};

export type CreateElementMutation = {
  createElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateElementMutationVariables = {
  input: UpdateElementInput,
  condition?: ModelElementConditionInput | null,
};

export type UpdateElementMutation = {
  updateElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteElementMutationVariables = {
  input: DeleteElementInput,
  condition?: ModelElementConditionInput | null,
};

export type DeleteElementMutation = {
  deleteElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateElementDiscussedMutationVariables = {
  input: CreateElementDiscussedInput,
  condition?: ModelElementDiscussedConditionInput | null,
};

export type CreateElementDiscussedMutation = {
  createElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateElementDiscussedMutationVariables = {
  input: UpdateElementDiscussedInput,
  condition?: ModelElementDiscussedConditionInput | null,
};

export type UpdateElementDiscussedMutation = {
  updateElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteElementDiscussedMutationVariables = {
  input: DeleteElementDiscussedInput,
  condition?: ModelElementDiscussedConditionInput | null,
};

export type DeleteElementDiscussedMutation = {
  deleteElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDiscussionMutationVariables = {
  input: CreateDiscussionInput,
  condition?: ModelDiscussionConditionInput | null,
};

export type CreateDiscussionMutation = {
  createDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateDiscussionMutationVariables = {
  input: UpdateDiscussionInput,
  condition?: ModelDiscussionConditionInput | null,
};

export type UpdateDiscussionMutation = {
  updateDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteDiscussionMutationVariables = {
  input: DeleteDiscussionInput,
  condition?: ModelDiscussionConditionInput | null,
};

export type DeleteDiscussionMutation = {
  deleteDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id: string,
};

export type GetTemplateQuery = {
  getTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates?:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetStatusQueryVariables = {
  id: string,
};

export type GetStatusQuery = {
  getStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatussQueryVariables = {
  filter?: ModelStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatussQuery = {
  listStatuss?:  {
    __typename: "ModelStatusConnection",
    items:  Array< {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetElementQueryVariables = {
  id: string,
};

export type GetElementQuery = {
  getElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListElementsQueryVariables = {
  filter?: ModelElementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListElementsQuery = {
  listElements?:  {
    __typename: "ModelElementConnection",
    items:  Array< {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      teamId: string,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetElementDiscussedQueryVariables = {
  id: string,
};

export type GetElementDiscussedQuery = {
  getElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListElementDiscussedsQueryVariables = {
  filter?: ModelElementDiscussedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListElementDiscussedsQuery = {
  listElementDiscusseds?:  {
    __typename: "ModelElementDiscussedConnection",
    items:  Array< {
      __typename: "ElementDiscussed",
      id: string,
      element:  {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      discussion:  {
        __typename: "Discussion",
        id: string,
        title: string,
        priority: string,
        labels?: Array< string | null > | null,
        owners?: Array< string | null > | null,
        checklist?: Array< string | null > | null,
        peopleInvolved?: Array< string | null > | null,
        dateProposed?: string | null,
        dateProposedGranularity?: string | null,
        createdAt: string,
        updatedAt?: string | null,
      },
      text: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetDiscussionQueryVariables = {
  id: string,
};

export type GetDiscussionQuery = {
  getDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListDiscussionsQueryVariables = {
  filter?: ModelDiscussionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiscussionsQuery = {
  listDiscussions?:  {
    __typename: "ModelDiscussionConnection",
    items:  Array< {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    statuses?:  {
      __typename: "ModelStatusConnection",
      items:  Array< {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    elements?:  {
      __typename: "ModelElementConnection",
      items:  Array< {
        __typename: "Element",
        id: string,
        templateId: string,
        title: string,
        order: number,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStatusSubscription = {
  onCreateStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStatusSubscription = {
  onUpdateStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStatusSubscription = {
  onDeleteStatus?:  {
    __typename: "Status",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color: Array< string >,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateElementSubscription = {
  onCreateElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateElementSubscription = {
  onUpdateElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteElementSubscription = {
  onDeleteElement?:  {
    __typename: "Element",
    id: string,
    templateId: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    members?:  {
      __typename: "ModelMemberConnection",
      items:  Array< {
        __typename: "Member",
        id: string,
        teamId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    teamId: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateElementDiscussedSubscription = {
  onCreateElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateElementDiscussedSubscription = {
  onUpdateElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteElementDiscussedSubscription = {
  onDeleteElementDiscussed?:  {
    __typename: "ElementDiscussed",
    id: string,
    element:  {
      __typename: "Element",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    discussion:  {
      __typename: "Discussion",
      id: string,
      title: string,
      priority: string,
      status:  {
        __typename: "Status",
        id: string,
        templateId: string,
        color: Array< string >,
        order: number,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      labels?: Array< string | null > | null,
      owners?: Array< string | null > | null,
      checklist?: Array< string | null > | null,
      peopleInvolved?: Array< string | null > | null,
      dateProposed?: string | null,
      dateProposedGranularity?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDiscussionSubscription = {
  onCreateDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateDiscussionSubscription = {
  onUpdateDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteDiscussionSubscription = {
  onDeleteDiscussion?:  {
    __typename: "Discussion",
    id: string,
    title: string,
    priority: string,
    status:  {
      __typename: "Status",
      id: string,
      templateId: string,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      color: Array< string >,
      order: number,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      statuses?:  {
        __typename: "ModelStatusConnection",
        nextToken?: string | null,
      } | null,
      elements?:  {
        __typename: "ModelElementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    labels?: Array< string | null > | null,
    owners?: Array< string | null > | null,
    checklist?: Array< string | null > | null,
    peopleInvolved?: Array< string | null > | null,
    dateProposed?: string | null,
    dateProposedGranularity?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};
