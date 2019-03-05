import { mapAttributesToObj } from './messageAttributes';

/* eslint-disable import/prefer-default-export */
export class SNSMessage {
  message: any;
  messageAttributes: any;
  constructor(rawMsg: any) {
    try {
      this.message = JSON.parse(rawMsg.Sns.Message);
    } catch (err) {
      this.message = rawMsg.Sns.Message;
    }
    this.messageAttributes = mapAttributesToObj(rawMsg.Sns.MessageAttributes) || {};
  }
}
