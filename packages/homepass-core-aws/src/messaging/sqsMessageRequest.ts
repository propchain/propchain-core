import { mapToMessageAttributes } from './messageAttributes';

/* eslint-disable import/prefer-default-export */
export class SQSMessageRequest {
  body: any;
  messageAttributes: any;

  /**
   * Defines a message request to send to SQS or SNS
   * @param {Object} body
   * @param {Object} messageAttributes
   */
  constructor(body: any, messageAttributes: any) {
    this.body = body;
    if (messageAttributes) {
      this.messageAttributes = messageAttributes;
    }
  }

  /**
   * convert to request object, ready to send/publish to SQS
   */
  toRequest() {
    let { body } = this;
    if (typeof this.body === 'object' && this.body) {
      body = JSON.stringify(this.body, null, 4);
    }
    const request: any = {
      MessageBody: body,
    };
    if (this.messageAttributes) {
      request.MessageAttributes = mapToMessageAttributes(this.messageAttributes);
    }
    return request;
  }
}
