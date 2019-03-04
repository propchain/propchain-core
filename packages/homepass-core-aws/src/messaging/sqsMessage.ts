import { mapAttributesToObj } from './messageAttributes';

/* eslint-disable import/prefer-default-export */
export class SQSMessage {
  body: any;
  messageAttributes: any;
  constructor(rawMsg: any) {
    Object.assign(this, rawMsg);
    try {
      this.body = JSON.parse(rawMsg.body);
    } catch (err) {
      this.body = rawMsg.body;
    }
    this.messageAttributes = mapAttributesToObj(rawMsg.messageAttributes) || {};
  }
}
