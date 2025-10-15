import type { CodegenConfig } from '@graphql-codegen/cli'
import {environment} from './src/environments/environment'
const config: CodegenConfig = {
  schema: environment.serverUrl,
  documents: 'src/**/*.graphql',
  generates: {
    'src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular']
    }
  },
  config:{
    apolloAngularImportFrom: 'apollo-angular'
  }
}
export default config