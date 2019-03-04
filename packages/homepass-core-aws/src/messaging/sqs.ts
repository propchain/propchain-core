/* eslint-disable import/prefer-default-export */
import AWS from 'aws-sdk';

import config from '../awsConfig';
import { SQSMessageRequest } from './sqsMessageRequest';

class SQS {
  awsSQS: AWS.SQS;

  createQueue(queueName: string) {
    const params = {
      QueueName: queueName,
    };
    return this.getSQS()
      .createQueue(params)
      .promise();
  }

  send(queueUrl: string, message: SQSMessageRequest) {
    const params = message.toRequest();
    return this.getSQS()
      .sendMessage({
        ...params,
        QueueUrl: queueUrl,
      })
      .promise();
  }

  getSQS() {
    // load init AWS.SNS
    if (!this.awsSQS) {
      this.awsSQS = new AWS.SQS(config.sqs);
    }
    return this.awsSQS;
  }
}

export default new SQS();
