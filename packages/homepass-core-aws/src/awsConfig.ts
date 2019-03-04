const isLocal = process.env.STAGE === 'local';

/*
  AWS Docs: Endpoint String Format

  Endpoint values should be a string in the format:
  https://{service}.{region}.amazonaws.com
*/
export default {
  s3: {
    endpoint: isLocal ? 'http://localhost:4572' : undefined,
    s3ForcePathStyle: isLocal,
  },
  sqs: {
    endpoint: isLocal ? 'http://localhost:4576' : undefined,
  },
  sns: {
    endpoint: isLocal ? 'http://localhost:4575' : undefined,
  },
  sns2: {
    endpoint: isLocal ? 'http://localhost:4575' : undefined,
  },
  dynamoDb: {
    endpoint: isLocal ? 'http://localhost:4569' : undefined,
  },
};
