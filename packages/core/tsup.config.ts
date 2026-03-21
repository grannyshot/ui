import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'styles/index': 'src/styles/index.ts',
    'react/index': 'src/react/index.ts',
    'utils/index': 'src/utils/index.ts',
    'context/index': 'src/context/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
})
