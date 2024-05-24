import {
  S3Client,
} from "@aws-sdk/client-s3";

import { env } from "./env";

type Region = "us-west-1" | "us-west-2" | "us-west-2-legacy";

export const getS3Client = (region: Region) => {
  return new S3Client({
    region: region.replace("-legacy", ""),
    credentials: {
      accessKeyId: env.AWS_ID,
      secretAccessKey: env.AWS_SECRET,
    },
  });
};

/**
 * This client contains raw AWS S3 operations.
 * Operations that require DB access are in `@uploadthing/aws` which extends this client
 * and adds methods that require DB access.
 *
 * This is required not to get circular dependencies.
 */
export class UTS3ClientCore {
  protected readonly client: S3Client;
  constructor(
    public readonly region: Region,
  ) {
    this.client = getS3Client(region);

  }

  public createMPU() {
    throw new Error("Not implemented");
  }
}
