import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    sourceMap: false,
    namespace: 'ketchup',
    testing: {
        reporters: [
            'default',
            [
                'jest-junit',
                {
                    outputDirectory: 'target/tests/unit/junit/junit.xml',
                    classNameTemplate: '{classname}',
                    titleTemplate: '{classname} - {title}',
                },
            ],
            [
                './node_modules/jest-html-reporter',
                {
                    pageTitle: 'Jest Unit Test Report',
                    outputPath: 'target/tests/unit/html/index.html',
                },
            ],
        ],
        coverageReporters: ['text', 'cobertura', 'html'],
        coverageDirectory: 'target/tests/unit/coverage',
        // todo: rise them!
        coverageThreshold: {
            global: {
                branches: 0,
                functions: 1,
                lines: 1,
                statements: 1,
            },
        },
        collectCoverageFrom: ['src/**/*.ts'],
    },
    outputTargets: [
        /*{ type: 'dist' },*/
        { type: 'docs-readme' },
        {
            type: 'www',
            copy: [
                { src: 'accordion.html' },
                { src: 'autocomplete.html' },
                { src: 'box.html' },
                { src: 'box-performance.html' },
                { src: 'button.html' },
                { src: 'button-list.html' },
                { src: 'calendar.html' },
                { src: 'card.html' },
                { src: 'card-performance.html' },
                { src: 'cell.html' },
                { src: 'chart.html' },
                { src: 'checkbox.html' },
                { src: 'chip.html' },
                { src: 'color-picker.html' },
                { src: 'combobox.html' },
                { src: 'css-grid.html' },
                { src: 'card-list.html' },
                { src: 'dashboard.html' },
                { src: 'data-table.html' },
                { src: 'data-table-performance.html' },
                { src: 'date-picker.html' },
                { src: 'debug.html' },
                { src: 'dialog.html' },
                { src: 'drawer.html' },
                { src: 'dropdown-button.html' },
                { src: 'echart.html' },
                { src: 'family-tree.html' },
                { src: 'form.html' },
                { src: 'gantt.html' },
                { src: 'gauge.html' },
                { src: 'grid.html' },
                { src: 'image.html' },
                { src: 'image-list.html' },
                { src: 'kupdata.html' },
                { src: 'kupinteract.html' },
                { src: 'kuptooltip.html' },
                { src: 'list.html' },
                { src: 'magic-box.html' },
                { src: 'nav-bar.html' },
                { src: 'numeric-picker.html' },
                { src: 'planner.html' },
                { src: 'planner-example-1.html' },
                { src: 'planner-example-2.html' },
                { src: 'planner-example-3.html' },
                { src: 'planner-example-4.html' },
                { src: 'probe.html' },
                { src: 'progress-bar.html' },
                { src: 'radio.html' },
                { src: 'rating.html' },
                { src: 'switch.html' },
                { src: 'snackbar.html' },
                { src: 'tab-bar.html' },
                { src: 'time-picker.html' },
                { src: 'text-field.html' },
                { src: 'tree-performance.html' },
                { src: 'tree.html' },
            ],
            serviceWorker: null, // disable service workers
        },
        reactOutputTarget({
            componentCorePackage: '@sme.up/ketchup',
            proxiesFile: '../ketchup-react/src/index.ts',
            includeDefineCustomElements: true,
        }),
        {
            type: 'dist',
            esmLoaderPath: './loader',
        },
        {
            type: 'dist-custom-elements',
        },
    ],
    plugins: [
        sass({
            includePaths: ['./node_modules', './src/f-components'],
            injectGlobalPaths: ['src/style/global.scss'],
        }),
    ],
};
