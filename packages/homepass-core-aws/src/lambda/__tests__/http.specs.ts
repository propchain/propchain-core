import HttpStatus from 'http-status-codes';
import { res } from '../http';

describe('http', () => {
  test('OK', () => {
    const result = res.ok({ name: 'test' });
    expect(result.statusCode).toBe(HttpStatus.OK);
  });

  test('NotFound', () => {
    const result = res.notFound();
    const body = JSON.parse(result.body);
    expect(result.statusCode).toBe(HttpStatus.NOT_FOUND);
    expect(body.message).toBe('Resource not found');
  });

  test('InternetServerError', () => {
    const error = new Error('bad bad');
    const result = res.internetServerError(error);
    const body = JSON.parse(result.body);

    expect(result.statusCode).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
    expect(body.code).toBe(HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR));
    expect(body.message).toContain('Oops');
    expect(body.details.error).toBe('bad bad');
    expect(body.details.stack).toBe(error.stack);
  });
});
