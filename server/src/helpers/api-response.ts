import { StatusCodes } from "http-status-codes";

export const errorsCustomMessage = (errors: any) => errors.details.reduce((acc: any, curr: any) => ({
  ...acc,
  [curr.path]: curr.message,
}), {});

export const apiResponse = (code = StatusCodes.OK, status = 'OK', message: string, data: any) => ({
  code,
  status,
  message,
  data,
});

export const apiResponseValidationError = (errors: any) => ({
  code: StatusCodes.UNPROCESSABLE_ENTITY,
  status: 'UNPROCESSABLE_ENTITY',
  message: 'The given data was invalid.',
  errors: errorsCustomMessage(errors),
});

export const notFoundResponse = (message: string) => ({
  code: StatusCodes.NOT_FOUND,
  status: 'NOT_FOUND',
  message: `${message ? `${message} not found` : 'Resource not found'}`,
});

export const unauthorizedResponse = (message: string) => ({
  code: StatusCodes.UNAUTHORIZED,
  status: 'UNAUTHORIZED',
  message: `Unauthorized.${message ? ` ${message}` : ''}`,
});

export const noContentResponse = (message: string) => ({
  code: StatusCodes.NO_CONTENT,
  status: 'NO_CONTENT',
  message,
});

export const badRequestResponse = (message: string) => ({
  code: StatusCodes.BAD_REQUEST,
  status: 'BAD_REQUEST',
  message,
});
