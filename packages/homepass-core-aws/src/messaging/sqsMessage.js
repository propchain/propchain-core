import { mapAttributesToObj } from './messageAttributes';

/* eslint-disable import/prefer-default-export */
export class SQSMessage {
  constructor(rawMsg) {
    Object.assign(this, rawMsg);
    try {
      this.body = JSON.parse(rawMsg.body);
    } catch (err) {
      this.body = rawMsg.body;
    }
    this.messageAttributes = mapAttributesToObj(rawMsg.messageAttributes) || {};
  }
}
