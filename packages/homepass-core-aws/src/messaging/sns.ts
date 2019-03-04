/* eslint-disable import/prefer-default-export */
import AWS from 'aws-sdk';

import config from '../awsConfig';
import { SNSMessageRequest } from './snsMessageRequest';

class SNS {
  rawSNS: AWS.SNS;
  /**
   * Send a message to a SNS topic
   * @param {string} topicArn
   * @param {MessageRequest} message
   */
  publish(topicArn: string, message: SNSMessageRequest) {
    const params: any = message.toRequest();
    return this.getSNS()
      .publish({
        ...params,
        TopicArn: topicArn,
      })
      .promise();
  }

  getSNS() {
    // load init AWS.SNS
    if (!this.rawSNS) {
      this.rawSNS = new AWS.SNS(config.sns);
    }
    return this.rawSNS;
  }
}

export default new SNS();
