/* eslint-disable import/no-anonymous-default-export */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [{
    input: 'src/index.ts',
    inlineDynamicImports: true,
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            name: 'react-lib'
        },
        {
            file: packageJson.module,
            format: 'esm',
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json', sourceMap: false }),
        postcss(),
        terser({ compress: true }),
        image()
    ]
},
{
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
}]