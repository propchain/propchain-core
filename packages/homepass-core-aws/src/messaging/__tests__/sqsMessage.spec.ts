import { SQSMessage } from '../sqsMessage';

describe('messaging', () => {
  describe('Message', () => {
    test('full message', () => {
      const rawMessage = {
        messageId: '1234',
        receiptHandle: 'abc',
        body: 'ImmoVlan update',
        attributes: {
          SentTimestamp: '1543585524232',
          ApproximateReceiveCount: '1',
        },
        messageAttributes: {
          vlanId: {
            StringValue: '123',
            DataType: 'Number',
          },
          vlanCode: {
            StringValue: 'aaaa',
            DataType: 'String',
          },
          mode: {
            StringValue: 'updated',
            DataType: 'String',
          },
        },
      };
      const msg = new SQSMessage(rawMessage);

      // assert
      expect(msg.body).toBe(rawMessage.body);
      expect(typeof msg.messageAttributes.mode).toEqual('string');
      expect(typeof msg.messageAttributes.vlanId).toEqual('number');
      expect(typeof msg.messageAttributes.vlanCode).toEqual('string');
    });

    test('body only', () => {
      const rawMessage = {
        messageId: '1234',
        receiptHandle: 'abc',
        body: '{ "name": "peter"}',
      };
      const msg = new SQSMessage(rawMessage);

      // assert
      expect(msg.body).toEqual({ name: 'peter' });
      expect(msg.messageAttributes).toEqual({});
    });
  });
});
