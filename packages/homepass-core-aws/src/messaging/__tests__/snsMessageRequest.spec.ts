import { SNSMessageRequest } from '../snsMessageRequest';

describe('messaging', () => {
  describe('SNSMessageRequest', () => {
    test('body', () => {
      // arrange
      const body = {
        name: 'peter',
        number: 123,
      };
      const attr = {
        text: 'hello',
        number: 1,
        boolean: true,
      };

      // act
      const msg = new SNSMessageRequest(body, attr);
      const request = msg.toRequest();

      // assert
      expect(JSON.parse(request.Message)).toEqual(body);
      expect(request.MessageAttributes).toBeObject();
    });
  });
});
