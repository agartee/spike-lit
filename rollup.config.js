import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'my-element.js',
  output: {
    file: 'dist/my-element.js',
    format: 'esm',
  },
  plugins: [nodeResolve(), terser()],
};
