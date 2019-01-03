export function mapToMessageAttributes(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] === 'string') {
      acc[key] = {
        DataType: 'String',
        StringValue: obj[key],
      };
    } else if (typeof obj[key] === 'number') {
      acc[key] = {
        DataType: 'Number',
        StringValue: obj[key].toString(),
      };
    } else if (typeof obj[key] === 'boolean') {
      acc[key] = {
        DataType: 'String',
        StringValue: obj[key].toString(),
      };
    } else {
      throw new Error('Type not supported');
    }
    return acc;
  }, {});
}

export function mapAttributesToObj(attributes) {
  if (!attributes) {
    return attributes;
  }
  return Object.keys(attributes).reduce((acc, key) => {
    if (attributes[key].DataType === 'String') {
      acc[key] = attributes[key].StringValue;
    } else if (attributes[key].DataType === 'Number') {
      acc[key] = parseInt(attributes[key].StringValue, 10);
    } else {
      // ignore it
    }
    return acc;
  }, {});
}
