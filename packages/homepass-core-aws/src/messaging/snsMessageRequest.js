import { mapToMessageAttributes } from './messageAttributes';

/* eslint-disable import/prefer-default-export */
export class SNSMessageRequest {
  /**
   * Defines a message request to send to SQS or SNS
   * @param {Object} body
   * @param {Object} messageAttributes
   */
  constructor(body, messageAttributes) {
    this.body = body;
    if (messageAttributes) {
      this.messageAttributes = messageAttributes;
    }
  }

  /**
   * convert to request object, ready to send/publish to SQS, SNS
   */
  toRequest() {
    let { body } = this;
    if (typeof this.body === 'object' && this.body) {
      body = JSON.stringify(this.body, null, 4);
    }
    // console.log('Stringified Sns.toRequest.body : ', body);
    // body = [body.slice(0, 1), '"default": "default message",', body.slice(1)].join('');
    // console.log('body with default', body);
    const request = {
      Message: body,
      // MessageStructure: 'json',
    };
    if (this.messageAttributes) {
      request.MessageAttributes = mapToMessageAttributes(this.messageAttributes);
    }
    return request;
  }
}
