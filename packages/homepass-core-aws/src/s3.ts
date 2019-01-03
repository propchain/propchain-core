// eslint-disable-next-line import/no-extraneous-dependencies
import AWS from 'aws-sdk';

import config from './awsConfig';

class S3 {
  awsS3: any;

  createBucket(bucketName: string) {
    return this.s3
      .createBucket({
        Bucket: bucketName,
      })
      .promise()
      .catch((err: any) => {
        if (err.name !== 'BucketAlreadyExists') {
          throw err;
        }
      });
  }

  writeFile(bucketName: string, fileName: string, fileStream: any) {
    const bucketConfig = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileStream,
      ContentType: 'application/octet-stream',
    };
    return this.s3.upload(bucketConfig).promise();
  }

  async fileExist(bucketName: string, fileName: string) {
    try {
      const bucketConfig = {
        Bucket: bucketName,
        Key: fileName,
      };
      await this.s3.headObject(bucketConfig).promise();
      return true;
    } catch (err) {
      return false;
    }
  }

  async removeFile(bucketName: string, fileName: string) {
    const bucketConfig = {
      Bucket: bucketName,
      Key: fileName,
    };
    return this.s3.deleteObject(bucketConfig).promise();
  }

  get s3() {
    // load init AWS.S3
    if (!this.awsS3) {
      this.awsS3 = new AWS.S3(config.s3);
    }
    return this.awsS3;
  }
}

export default new S3();
