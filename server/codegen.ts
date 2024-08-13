
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://192.168.1.4:3001/graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript","typescript-resolvers", "typescript-document-nodes"]
    }
  }
};

export default config;
