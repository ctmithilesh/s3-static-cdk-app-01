#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3StaticCdkApp01Stack } from '../lib/s3-static-cdk-app-01-stack';

const app = new cdk.App();
new S3StaticCdkApp01Stack(app, 'S3StaticCdkApp01Stack');
