/* eslint-disable import/prefer-default-export */
import AWS from 'aws-sdk';

import config from '../awsConfig';

class SQS {
  createQueue(queueName) {
    const params = {
      QueueName: queueName,
    };
    return this.getSQS()
      .createQueue(params)
      .promise();
  }

  send(queueUrl, message) {
    const params = message.toRequest('sqs');
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
