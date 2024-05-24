import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    AWS_ID: z.string(),
    AWS_SECRET: z.string(),
    CF_REWRITE_URL: z.string().url().default("https://utfs.io"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
