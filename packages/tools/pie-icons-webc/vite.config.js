import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Recursively get all Icon TS files from the icons folder and its subfolders
 * @param {string} dir - Directory to search for files
 * @returns {Object} - An object containing all TS icon entries
 */
function getIconEntries (dir = path.resolve(__dirname, 'icons')) {
    let entries = {};

    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.resolve(dir, file);
        // Check if the path points to a directory or a file
        if (fs.statSync(fullPath).isDirectory()) {
            // Merge objects for subdirectories
            entries = { ...entries, ...getIconEntries(fullPath) };
        } else if (file.endsWith('.ts')) {
            // Replace '.ts' with empty string and create relative path
            const name = path.relative(path.resolve(__dirname, 'icons'), fullPath).replace('.ts', '').replace(/\\/g, '/');
            entries[name] = fullPath;
        }
    });

    return entries;
}

const iconEntries = getIconEntries();

export default defineConfig({
    build: {
        lib: {
            entry: {
                ...iconEntries,
            },
            name: (name) => `@justeattakeaway/pie-icons-webc/${name}`,
            formats: ['es'],
            fileName: (name) => `dist/${name}.js`,
        },
        rollupOptions: {
            external: (id) => {
                if (['react', '@lit/react', '@justeattakeaway/pie-webc-core'].includes(id) || /^lit/.test(id)) {
                    return true;
                }

                return false;
            },
            output: {
                exports: 'named',
                dir: 'dist',
                format: 'esm',
                entryFileNames: '[name].js',
                chunkFileNames: '[name].[hash].js',
            },
        },
    },
    test: {
        dir: '.',
        environment: 'jsdom',
        globals: true,
        exclude: [
            '**/test/{accessibility,component,system,visual}/*.spec.{js,ts}',
            '**/test/**/*.browser.spec.{js,ts}',
            '**/node_modules/**/*'
        ],
    },
    plugins: [
        visualizer({
            gzipSize: true,
            brotliSize: true,
        })
    ],
});
