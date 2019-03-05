import { SNSMessage } from '../snsMessage';

describe('SNSMessage', () => {
  test('should parse message so it has the correct message property set', () => {
    // arrange
    const rawMessage = {
      Records: [
        {
          EventSource: 'aws:sns',
          EventVersion: '1.0',
          EventSubscriptionArn:
            'arn:aws:sns:eu-central-1:428380179333:homepass-import-property-dev:8364c10c-004c-47af-974e-467233c45e40',
          Sns: {
            Type: 'Notification',
            MessageId: '3bf74c7a-7fa2-5fba-a53f-188d4ad2b6bb',
            TopicArn: 'arn:aws:sns:eu-central-1:428380179333:homepass-import-property-dev',
            Subject: null,
            Message:
              '{\n    "partner": {\n        "id": "101"\n    },\n    "account": {\n        "id": "501",\n        "email": "wim.smet@gmail.com"\n    },\n    "property": {\n        "reference": "abc",\n        "address": {\n            "street": "Kerkstraat",\n            "number": "77",\n            "zip": "9000",\n            "city": "Gent"\n        }\n    },\n    "collaborator": {\n        "email": "nico.heymans@gmail.com",\n        "name": "Nico Heymans"\n    }\n}',
            Timestamp: '2019-03-04T14:16:16.119Z',
            SignatureVersion: '1',
            Signature:
              'OB9/LXJlYnb9heubwm73AUejIClt+4N+K61zWDQeZbJOTqLG1pV5/9UjUanaZQE7IzYL9T9JtXEJX/1F+i4Dm1gGE1dKZR5Fq4H368f6x29zEoY86xXSxX96n2etMWsaFCP0IeBlWqJkCY0otCIetQnSdjRdFjxiS0dc1MUpYz7TThvHNTo/1obNf9nZtjm34OqcbdRugfnTgBuYkMe3MQ9gqYXkxrdNsgvth6ts+lFWu1PxjQ7sJCW+C2n2pc3WXcXeg+p0iUMSLUcWR4TQPaCzt0DACyYcl0ImVZpAL5A9U1lP3CP6F/ZoLvR3ST0ZydJ7v165Iuhg81WpckOmSg==',
            SigningCertUrl:
              'https://sns.eu-central-1.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem',
            UnsubscribeUrl:
              'https://sns.eu-central-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-central-1:428380179333:homepass-import-property-dev:8364c10c-004c-47af-974e-467233c45e40',
            MessageAttributes: {},
          },
        },
      ],
    };

    // act
    const snsMessage = new SNSMessage(rawMessage.Records[0]);

    // assert
    const expectedMessage = {
      partner: { id: '101' },
      account: { id: '501', email: 'wim.smet@gmail.com' },
      property: {
        reference: 'abc',
        address: { street: 'Kerkstraat', number: '77', zip: '9000', city: 'Gent' },
      },
      collaborator: { email: 'nico.heymans@gmail.com', name: 'Nico Heymans' },
    };
    expect(snsMessage.message).toEqual(expectedMessage);
  });
});
