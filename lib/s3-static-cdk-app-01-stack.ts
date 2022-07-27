import { Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment'
import { Construct } from 'constructs';

export class S3StaticCdkApp01Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pandasWebsiteBucket = new s3.Bucket(this, 'PandaWebsite', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });
    
    new s3Deployment.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3Deployment.Source.asset('./website')],
      destinationBucket: pandasWebsiteBucket,
     //destinationKeyPrefix: 'web/static', // optional prefix in destination bucket
    });


  }
}
