export type GenericErrorMessageType = {
  path: string;
  message: string;
};

export type GenericErrorResponseType = {
  statusCode: number;
  message: string;
  errorMessages: GenericErrorMessageType[];
};
