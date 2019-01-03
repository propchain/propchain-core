import httpStatus from 'http-status-codes';

const responseHeaders = {
  'Content-Type': 'application/json',
};

export function json(data: any, statusCode: number) {
  return {
    statusCode,
    headers: responseHeaders,
    body: JSON.stringify(data),
  };
}

export function error(message: string, statusCode: number, details?: any) {
  const resource: any = {
    code: httpStatus.getStatusText(statusCode),
    message,
  };
  if (details) {
    resource.details = details;
  }
  return json(resource, statusCode);
}

function ok(data = {}, statusCode = httpStatus.OK) {
  return json(data, statusCode);
}

function notFound() {
  return error('Resource not found', httpStatus.NOT_FOUND);
}

function internetServerError(err: any) {
  return error('Oops! something went wrong!', httpStatus.INTERNAL_SERVER_ERROR, {
    error: err.message,
    stack: err.stack,
  });
}

export const res = {
  ok,
  error,
  notFound,
  internetServerError,
};
