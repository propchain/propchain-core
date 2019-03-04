import { SQSMessageRequest } from '../sqsMessageRequest';

describe('messaging', () => {
  describe('MessageRequest', () => {
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
      const msg = new SQSMessageRequest(body, attr);
      const request = msg.toRequest();

      // assert
      expect(JSON.parse(request.MessageBody)).toEqual(body);
      expect(request.MessageAttributes).toBeObject();
    });
  });
});
