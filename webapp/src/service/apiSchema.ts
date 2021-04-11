/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/v2/repositories/{repositoryId}/users/{userId}/set-permissions/{permissionType}": {
    put: operations["setUsersPermissions"];
  };
  "/v2/repositories/{repositoryId}/users/{userId}/revoke-access": {
    put: operations["revokePermission"];
  };
  "/v2/organizations/{organizationId}/users/{userId}/set-role": {
    put: operations["setUserRole"];
  };
  "/api/organizations/{organizationId}/users/{userId}/set-role": {
    put: operations["setUserRole_1"];
  };
  "/v2/organizations/{id}/leave": {
    put: operations["leaveOrganization"];
  };
  "/api/organizations/{id}/leave": {
    put: operations["leaveOrganization_1"];
  };
  "/v2/organizations/{id}/invite": {
    put: operations["inviteUser"];
  };
  "/api/organizations/{id}/invite": {
    put: operations["inviteUser_1"];
  };
  "/v2/organizations/{id}": {
    get: operations["get_1"];
    put: operations["update"];
    delete: operations["delete"];
  };
  "/api/organizations/{id}": {
    get: operations["get_2"];
    put: operations["update_1"];
    delete: operations["delete_1"];
  };
  "/api/repository/{repositoryId}/keys": {
    put: operations["edit"];
    post: operations["create_3"];
  };
  "/api/repository/keys": {
    delete: operations["delete_5"];
  };
  "/api/repository/translations": {
    put: operations["setTranslations_1"];
    post: operations["createOrUpdateTranslations_1"];
  };
  "/v2/organizations": {
    get: operations["getAll_1"];
    post: operations["create"];
  };
  "/api/organizations": {
    get: operations["getAll_2"];
    post: operations["create_1"];
  };
  "/v2/address-part/generate-repository": {
    post: operations["generateRepositoryAddressPart"];
  };
  "/api/address-part/generate-repository": {
    post: operations["generateRepositoryAddressPart_1"];
  };
  "/v2/address-part/generate-organization": {
    post: operations["generateOrganizationAddressPart"];
  };
  "/api/address-part/generate-organization": {
    post: operations["generateOrganizationAddressPart_1"];
  };
  "/api/user": {
    get: operations["getInfo"];
    post: operations["updateUser"];
  };
  "/api/repository/{repositoryId}/keys/edit": {
    post: operations["editDeprecated"];
  };
  "/api/repository/{repositoryId}/keys/create": {
    post: operations["create_2"];
  };
  "/api/repository/{repositoryId}/import": {
    post: operations["doImport"];
  };
  "/api/repository/languages/edit": {
    post: operations["editLanguage_1"];
  };
  "/api/repository/{repositoryId}/languages": {
    get: operations["getAll_3"];
    post: operations["createLanguage"];
  };
  "/api/repository/{repositoryId}/screenshots/get": {
    post: operations["getKeyScreenshots_1"];
  };
  "/api/repository/{repositoryId}/screenshots": {
    post: operations["uploadScreenshot_1"];
  };
  "/api/repositories": {
    get: operations["getAll_5"];
    post: operations["createRepository"];
  };
  "/api/repositories/invite": {
    post: operations["inviteUser_2"];
  };
  "/api/repositories/edit": {
    post: operations["editRepository"];
  };
  "/api/public/validate_email": {
    post: operations["validateEmail"];
  };
  "/api/public/sign_up": {
    post: operations["signUp"];
  };
  "/api/public/reset_password_set": {
    post: operations["resetPasswordSet"];
  };
  "/api/public/reset_password_request": {
    post: operations["resetPasswordRequest"];
  };
  "/api/public/generatetoken": {
    post: operations["authenticateUser"];
  };
  "/api/apiKeys": {
    get: operations["allByUser"];
    post: operations["create_6"];
  };
  "/api/apiKeys/edit": {
    post: operations["edit_2"];
  };
  "/v2/repositories": {
    get: operations["getAll"];
  };
  "/v2/repositories/{repositoryId}": {
    get: operations["get"];
  };
  "/v2/repositories/{repositoryId}/users": {
    get: operations["getAllUsers"];
  };
  "/v2/organizations/{organizationId}/invitations": {
    get: operations["getInvitations"];
  };
  "/api/organizations/{organizationId}/invitations": {
    get: operations["getInvitations_1"];
  };
  "/v2/organizations/{id}/users": {
    get: operations["getAllUsers_1"];
  };
  "/api/organizations/{id}/users": {
    get: operations["getAllUsers_2"];
  };
  "/v2/organizations/{id}/repositories": {
    get: operations["getAllRepositories"];
  };
  "/api/organizations/{id}/repositories": {
    get: operations["getAllRepositories_1"];
  };
  "/v2/organizations/{addressPart}/repositories": {
    get: operations["getAllRepositories_2"];
  };
  "/api/organizations/{addressPart}/repositories": {
    get: operations["getAllRepositories_3"];
  };
  "/v2/organizations/{addressPart}": {
    get: operations["get_3"];
  };
  "/api/organizations/{addressPart}": {
    get: operations["get_4"];
  };
  "/v2/address-part/validate-repository/{addressPart}": {
    get: operations["validateRepositoryAddressPart"];
  };
  "/api/address-part/validate-repository/{addressPart}": {
    get: operations["validateRepositoryAddressPart_1"];
  };
  "/v2/address-part/validate-organization/{addressPart}": {
    get: operations["validateOrganizationAddressPart"];
  };
  "/api/address-part/validate-organization/{addressPart}": {
    get: operations["validateOrganizationAddressPart_1"];
  };
  "/api/repository/keys/{id}": {
    get: operations["getDeprecated_1"];
    delete: operations["delete_3"];
  };
  "/api/repository/{repositoryId}/export/jsonZip": {
    get: operations["doExportJsonZip"];
  };
  "/api/repository/translations/{languages}": {
    get: operations["getTranslations_1"];
  };
  "/api/repository/{repositoryId}/translations/view": {
    get: operations["getViewData"];
  };
  "/api/repository/languages/{id}": {
    get: operations["get_6"];
    delete: operations["deleteLanguage_1"];
  };
  "/api/repositories/{id}": {
    get: operations["getRepository"];
    delete: operations["deleteRepository"];
  };
  "/api/public/verify_email/{userId}/{code}": {
    get: operations["verifyEmail"];
  };
  "/api/public/reset_password_validate/{email}/{code}": {
    get: operations["resetPasswordValidate"];
  };
  "/api/public/configuration": {
    get: operations["getPublicConfiguration"];
  };
  "/api/public/authorize_oauth/{serviceType}/{code}": {
    get: operations["authenticateUser_1"];
  };
  "/api/invitation/list/{repositoryId}": {
    get: operations["getRepositoryInvitations"];
  };
  "/api/invitation/accept/{code}": {
    get: operations["acceptInvitation"];
  };
  "/api/apiKeys/scopes": {
    get: operations["getApiKeyScopes"];
  };
  "/api/apiKeys/repository/{repositoryId}": {
    get: operations["allByRepository"];
  };
  "/api/apiKeys/availableScopes": {
    get: operations["getScopes"];
  };
  "/v2/organizations/{organizationId}/users/{userId}": {
    delete: operations["removeUser"];
  };
  "/api/organizations/{organizationId}/users/{userId}": {
    delete: operations["removeUser_1"];
  };
  "/api/repository/screenshots/{ids}": {
    delete: operations["deleteScreenshots"];
  };
  "/api/invitation/{invitationId}": {
    delete: operations["deleteInvitation"];
  };
  "/api/apiKeys/{key}": {
    delete: operations["delete_6"];
  };
}

export interface components {
  schemas: {
    SetOrganizationRoleDto: {
      roleType: "MEMBER" | "OWNER";
    };
    OrganizationInviteUserDto: {
      roleType: "MEMBER" | "OWNER";
    };
    Links: { [key: string]: components["schemas"]["Link"] };
    OrganizationInvitationModel: {
      id: number;
      code: string;
      type: "MEMBER" | "OWNER";
      createdAt: string;
      _links?: components["schemas"]["Links"];
    };
    OrganizationDto: {
      name: string;
      description?: string;
      addressPart?: string;
      basePermissions: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
    };
    OrganizationModel: {
      id: number;
      name: string;
      addressPart: string;
      description?: string;
      basePermissions: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      currentUserRole: "MEMBER" | "OWNER";
      _links?: components["schemas"]["Links"];
    };
    EditKeyDTO: {
      currentName: string;
      newName: string;
    };
    SetTranslationsDTO: {
      key: string;
      translations?: { [key: string]: string };
    };
    GenerateAddressPathDto: {
      oldAddressPart?: string;
      name: string;
    };
    UserUpdateRequestDTO: {
      name: string;
      email: string;
      password?: string;
    };
    DeprecatedEditKeyDTO: {
      oldFullPathString: string;
      newFullPathString: string;
    };
    ImportDto: {
      languageAbbreviation: string;
      data: { [key: string]: string };
    };
    StreamingResponseBody: { [key: string]: any };
    LanguageDTO: {
      id?: number;
      name: string;
      abbreviation: string;
    };
    GetScreenshotsByKeyDTO: {
      key: string;
    };
    ScreenshotDTO: {
      id: number;
      filename: string;
      createdAt: string;
    };
    CreateRepositoryDTO: {
      name: string;
      languages: components["schemas"]["LanguageDTO"][];
      addressPart?: string;
      /** If not provided, repository will be created as users */
      organizationId?: number;
    };
    RepositoryDTO: {
      id?: number;
      name?: string;
      permissionType?: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
    };
    RepositoryInviteUserDto: {
      repositoryId: number;
      type: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
    };
    EditRepositoryDTO: {
      repositoryId: number;
      name: string;
      addressPart?: string;
    };
    TextNode: { [key: string]: any };
    SignUpDto: {
      name: string;
      email: string;
      password: string;
      invitationCode?: string;
      callbackUrl?: string;
    };
    ResetPassword: {
      email: string;
      code: string;
      password?: string;
    };
    ResetPasswordRequest: {
      callbackUrl: string;
      email?: string;
    };
    LoginRequest: {
      username?: string;
      password?: string;
    };
    CreateApiKeyDTO: {
      repositoryId: number;
      scopes?: string[];
    };
    ApiKeyDTO: {
      id?: number;
      "Resulting user's api key"?: string;
      userName?: string;
      repositoryId?: number;
      repositoryName?: string;
      scopes?: string[];
    };
    EditApiKeyDTO: {
      id: number;
      scopes: string[];
    };
    Pageable: {
      page?: number;
      size?: number;
      sort?: string[];
    };
    PageMetadata: {
      size?: number;
      totalElements?: number;
      totalPages?: number;
      number?: number;
    };
    PagedModelRepositoryModel: {
      _embedded?: {
        repositories?: components["schemas"]["RepositoryModel"][];
      };
      _links?: components["schemas"]["Links"];
      page?: components["schemas"]["PageMetadata"];
    };
    RepositoryModel: {
      id: number;
      name: string;
      description?: string;
      addressPart?: string;
      userOwner?: components["schemas"]["UserAccountModel"];
      organizationOwnerName?: string;
      organizationOwnerAddressPart?: string;
      organizationOwnerBasePermissions?:
        | "VIEW"
        | "TRANSLATE"
        | "EDIT"
        | "MANAGE";
      organizationRole?: "MEMBER" | "OWNER";
      /** Current user's direct permission */
      directPermissions?: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      /** Actual current user's permissions on this repository. You can not sort data by this column! */
      computedPermissions?: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      _links?: components["schemas"]["Links"];
    };
    UserAccountModel: {
      id: number;
      username: string;
      name: string;
      _links?: components["schemas"]["Links"];
    };
    PagedModelUserAccountInRepositoryModel: {
      _embedded?: {
        users?: components["schemas"]["UserAccountInRepositoryModel"][];
      };
      _links?: components["schemas"]["Links"];
      page?: components["schemas"]["PageMetadata"];
    };
    UserAccountInRepositoryModel: {
      id: number;
      username: string;
      name: string;
      organizationRole?: "MEMBER" | "OWNER";
      organizationBasePermissions?: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      directPermissions?: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      /** Actual user's permissions on selected repository. You can not sort data by this column! */
      computedPermissions: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      _links?: components["schemas"]["Links"];
    };
    CollectionModelOrganizationInvitationModel: {
      _embedded?: {
        organizationInvitations?: components["schemas"]["OrganizationInvitationModel"][];
      };
      _links?: components["schemas"]["Links"];
    };
    PagedModelUserAccountWithOrganizationRoleModel: {
      _embedded?: {
        usersInOrganization?: components["schemas"]["UserAccountWithOrganizationRoleModel"][];
      };
      _links?: components["schemas"]["Links"];
      page?: components["schemas"]["PageMetadata"];
    };
    UserAccountWithOrganizationRoleModel: {
      id: number;
      name: string;
      username: string;
      organizationRole: "MEMBER" | "OWNER";
      _links?: components["schemas"]["Links"];
    };
    OrganizationRequestParamsDto: {
      filterCurrentUserOwner: boolean;
    };
    PagedModelOrganizationModel: {
      _embedded?: {
        organizations?: components["schemas"]["OrganizationModel"][];
      };
      _links?: components["schemas"]["Links"];
      page?: components["schemas"]["PageMetadata"];
    };
    UserResponseDTO: {
      id?: number;
      name?: string;
      username?: string;
    };
    DeprecatedKeyDto: {
      /** This means name of key. Will be renamed in v2 */
      fullPathString: string;
    };
    KeyWithTranslationsResponseDto: {
      id?: number;
      name?: string;
      translations: { [key: string]: string };
    };
    PaginationMeta: {
      offset?: number;
      allCount?: number;
    };
    ResponseParams: {
      search?: string;
      languages?: string[];
    };
    ViewDataResponseLinkedHashSetKeyWithTranslationsResponseDtoResponseParams: {
      paginationMeta?: components["schemas"]["PaginationMeta"];
      params?: components["schemas"]["ResponseParams"];
      data?: components["schemas"]["KeyWithTranslationsResponseDto"][];
    };
    JwtAuthenticationResponse: {
      accessToken?: string;
      tokenType?: string;
    };
    AuthMethodsDTO: {
      github: components["schemas"]["GithubPublicConfigDTO"];
    };
    GithubPublicConfigDTO: {
      clientId?: string;
      isEnabled: boolean;
    };
    PublicConfigurationDTO: {
      isAuthentication: boolean;
      authMethods?: components["schemas"]["AuthMethodsDTO"];
      isPasswordResettable: boolean;
      isAllowRegistrations: boolean;
      screenshotsUrl: string;
      maxUploadFileSize: number;
      clientSentryDsn?: string;
      needsEmailVerification: boolean;
      userCanCreateRepositories: boolean;
      userCanCreateOrganizations: boolean;
    };
    InvitationDTO: {
      id?: number;
      code?: string;
      type?: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
    };
    Link: {
      href?: string;
      hreflang?: string;
      title?: string;
      type?: string;
      deprecation?: string;
      profile?: string;
      name?: string;
      templated?: boolean;
    };
  };
}

export interface operations {
  setUsersPermissions: {
    parameters: {
      path: {
        repositoryId: number;
        userId: number;
        permissionType: "VIEW" | "TRANSLATE" | "EDIT" | "MANAGE";
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  revokePermission: {
    parameters: {
      path: {
        repositoryId: number;
        userId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  setUserRole: {
    parameters: {
      path: {
        organizationId: number;
        userId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetOrganizationRoleDto"];
      };
    };
  };
  setUserRole_1: {
    parameters: {
      path: {
        organizationId: number;
        userId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetOrganizationRoleDto"];
      };
    };
  };
  leaveOrganization: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  leaveOrganization_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  inviteUser: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationInvitationModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OrganizationInviteUserDto"];
      };
    };
  };
  inviteUser_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationInvitationModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OrganizationInviteUserDto"];
      };
    };
  };
  get_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
  };
  update: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OrganizationDto"];
      };
    };
  };
  delete: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  get_2: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
  };
  update_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OrganizationDto"];
      };
    };
  };
  delete_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  edit: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditKeyDTO"];
      };
    };
  };
  create_3: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetTranslationsDTO"];
      };
    };
  };
  delete_5: {
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": number[];
      };
    };
  };
  setTranslations_1: {
    parameters: {};
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetTranslationsDTO"];
      };
    };
  };
  createOrUpdateTranslations_1: {
    parameters: {};
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetTranslationsDTO"];
      };
    };
  };
  getAll_1: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
        params: components["schemas"]["OrganizationRequestParamsDto"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/hal+json": components["schemas"]["PagedModelOrganizationModel"];
        };
      };
    };
  };
  create: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OrganizationDto"];
      };
    };
  };
  getAll_2: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
        params: components["schemas"]["OrganizationRequestParamsDto"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/hal+json": components["schemas"]["PagedModelOrganizationModel"];
        };
      };
    };
  };
  create_1: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["OrganizationDto"];
      };
    };
  };
  generateRepositoryAddressPart: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenerateAddressPathDto"];
      };
    };
  };
  generateRepositoryAddressPart_1: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenerateAddressPathDto"];
      };
    };
  };
  generateOrganizationAddressPart: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenerateAddressPathDto"];
      };
    };
  };
  generateOrganizationAddressPart_1: {
    responses: {
      /** OK */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GenerateAddressPathDto"];
      };
    };
  };
  getInfo: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["UserResponseDTO"];
        };
      };
    };
  };
  updateUser: {
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserUpdateRequestDTO"];
      };
    };
  };
  editDeprecated: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["DeprecatedEditKeyDTO"];
      };
    };
  };
  create_2: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SetTranslationsDTO"];
      };
    };
  };
  doImport: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["StreamingResponseBody"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ImportDto"];
      };
    };
  };
  editLanguage_1: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["LanguageDTO"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LanguageDTO"];
      };
    };
  };
  getAll_3: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["LanguageDTO"][];
        };
      };
    };
  };
  createLanguage: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["LanguageDTO"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LanguageDTO"];
      };
    };
  };
  getKeyScreenshots_1: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["ScreenshotDTO"][];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetScreenshotsByKeyDTO"];
      };
    };
  };
  uploadScreenshot_1: {
    parameters: {
      path: {
        repositoryId: number;
      };
      query: {
        key: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["ScreenshotDTO"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": {
          screenshot: string;
        };
      };
    };
  };
  getAll_5: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["RepositoryDTO"][];
        };
      };
    };
  };
  createRepository: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["RepositoryDTO"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateRepositoryDTO"];
      };
    };
  };
  inviteUser_2: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": string;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RepositoryInviteUserDto"];
      };
    };
  };
  editRepository: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["RepositoryDTO"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditRepositoryDTO"];
      };
    };
  };
  validateEmail: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": boolean;
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["TextNode"];
      };
    };
  };
  signUp: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": { [key: string]: any };
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SignUpDto"];
      };
    };
  };
  resetPasswordSet: {
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ResetPassword"];
      };
    };
  };
  resetPasswordRequest: {
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ResetPasswordRequest"];
      };
    };
  };
  authenticateUser: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": { [key: string]: any };
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequest"];
      };
    };
  };
  allByUser: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["ApiKeyDTO"][];
        };
      };
    };
  };
  create_6: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["ApiKeyDTO"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateApiKeyDTO"];
      };
    };
  };
  edit_2: {
    responses: {
      /** OK */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditApiKeyDTO"];
      };
    };
  };
  getAll: {
    parameters: {
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/hal+json": components["schemas"]["PagedModelRepositoryModel"];
        };
      };
    };
  };
  get: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["RepositoryModel"];
        };
      };
    };
  };
  getAllUsers: {
    parameters: {
      path: {
        repositoryId: number;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
        search?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelUserAccountInRepositoryModel"];
        };
      };
    };
  };
  getInvitations: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelOrganizationInvitationModel"];
        };
      };
    };
  };
  getInvitations_1: {
    parameters: {
      path: {
        organizationId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["CollectionModelOrganizationInvitationModel"];
        };
      };
    };
  };
  getAllUsers_1: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
        search?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelUserAccountWithOrganizationRoleModel"];
        };
      };
    };
  };
  getAllUsers_2: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
        search?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelUserAccountWithOrganizationRoleModel"];
        };
      };
    };
  };
  getAllRepositories: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelRepositoryModel"];
        };
      };
    };
  };
  getAllRepositories_1: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelRepositoryModel"];
        };
      };
    };
  };
  getAllRepositories_2: {
    parameters: {
      path: {
        addressPart: string;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelRepositoryModel"];
        };
      };
    };
  };
  getAllRepositories_3: {
    parameters: {
      path: {
        addressPart: string;
      };
      query: {
        pageable: components["schemas"]["Pageable"];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PagedModelRepositoryModel"];
        };
      };
    };
  };
  get_3: {
    parameters: {
      path: {
        addressPart: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
  };
  get_4: {
    parameters: {
      path: {
        addressPart: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["OrganizationModel"];
        };
      };
    };
  };
  validateRepositoryAddressPart: {
    parameters: {
      path: {
        addressPart: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": boolean;
        };
      };
    };
  };
  validateRepositoryAddressPart_1: {
    parameters: {
      path: {
        addressPart: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": boolean;
        };
      };
    };
  };
  validateOrganizationAddressPart: {
    parameters: {
      path: {
        addressPart: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": boolean;
        };
      };
    };
  };
  validateOrganizationAddressPart_1: {
    parameters: {
      path: {
        addressPart: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": boolean;
        };
      };
    };
  };
  getDeprecated_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["DeprecatedKeyDto"];
        };
      };
    };
  };
  delete_3: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  doExportJsonZip: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "application/zip": components["schemas"]["StreamingResponseBody"];
        };
      };
    };
  };
  getTranslations_1: {
    parameters: {
      path: {
        languages: string[];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": { [key: string]: { [key: string]: any } };
        };
      };
    };
  };
  getViewData: {
    parameters: {
      path: {
        repositoryId: number;
      };
      query: {
        languages?: string[];
        limit?: number;
        offset?: number;
        search?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["ViewDataResponseLinkedHashSetKeyWithTranslationsResponseDtoResponseParams"];
        };
      };
    };
  };
  get_6: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["LanguageDTO"];
        };
      };
    };
  };
  deleteLanguage_1: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  getRepository: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["RepositoryDTO"];
        };
      };
    };
  };
  deleteRepository: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  verifyEmail: {
    parameters: {
      path: {
        userId: number;
        code: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["JwtAuthenticationResponse"];
        };
      };
    };
  };
  resetPasswordValidate: {
    parameters: {
      path: {
        code: string;
        email: string;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  getPublicConfiguration: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["PublicConfigurationDTO"];
        };
      };
    };
  };
  authenticateUser_1: {
    parameters: {
      path: {
        serviceType: string;
        code: string;
      };
      query: {
        invitationCode?: string;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["JwtAuthenticationResponse"];
        };
      };
    };
  };
  getRepositoryInvitations: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["InvitationDTO"][];
        };
      };
    };
  };
  acceptInvitation: {
    parameters: {
      path: {
        code: string;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  getApiKeyScopes: {
    parameters: {};
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": string[];
        };
      };
    };
  };
  allByRepository: {
    parameters: {
      path: {
        repositoryId: number;
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": components["schemas"]["ApiKeyDTO"][];
        };
      };
    };
  };
  getScopes: {
    responses: {
      /** OK */
      200: {
        content: {
          "*/*": { [key: string]: string[] };
        };
      };
    };
  };
  removeUser: {
    parameters: {
      path: {
        organizationId: number;
        userId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  removeUser_1: {
    parameters: {
      path: {
        organizationId: number;
        userId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  deleteScreenshots: {
    parameters: {
      path: {
        ids: number[];
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  deleteInvitation: {
    parameters: {
      path: {
        invitationId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  delete_6: {
    parameters: {
      path: {
        key: string;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
}
