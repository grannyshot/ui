import { defineConfig } from 'tsup'
import path from 'path'

export default defineConfig({
  esbuildOptions(options) {
    options.alias = {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  entry: {
    index: 'src/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'styles/index': 'src/styles/index.ts',
    'react/index': 'src/react/index.ts',
    'utils/index': 'src/utils/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
})
