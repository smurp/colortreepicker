import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js', // Entry point of your application
  output: {
    file: 'dist/bundle.js', // Output bundled file
    format: 'es',           // Using ES module format
    sourcemap: true         // Generate a sourcemap for debugging
  },
  plugins: [
    nodeResolve(), // Resolves third-party modules in node_modules
  ]
};
