import { mapAttributesToObj, mapToMessageAttributes } from '../messageAttributes';

describe('messageAttributes', () => {
  test('mapAttributesToObj', () => {
    // arrange
    const attr = {
      vlanId: {
        StringValue: '123',
        DataType: 'Number',
      },
      vlanCode: {
        StringValue: 'aaaa',
        DataType: 'String',
      },
    };

    // act
    const obj = mapAttributesToObj(attr);

    // assert
    expect(typeof obj.vlanId).toEqual('number');
    expect(typeof obj.vlanCode).toEqual('string');
  });

  test('mapToMessageAttributes', () => {
    const obj = {
      name: '12345',
      value: 345,
      boolean: true,
    };

    const attr = mapToMessageAttributes(obj);
    expect(attr.name.DataType).toBe('String');
    expect(attr.name.StringValue).toBe('12345');
    expect(attr.value.DataType).toBe('Number');
    expect(attr.value.StringValue).toBe('345');
    expect(attr.boolean.DataType).toBe('String');
    expect(attr.boolean.StringValue).toBe('true');
  });

  test('mapToMessageAttributes - invalid attr', () => {
    // arrange
    const attr = {
      date: new Date(),
    };

    // act
    const action = () => {
      mapToMessageAttributes(attr);
    };
    expect(action).toThrow();
  });
});
