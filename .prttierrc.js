module.exports = {
    parser: 'typescript',
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    trailingComma: 'all',
    semi: false,
    singleQuote: true,
    jsxSingleQuote: false,
    arrowParens: 'always',
    bracketSpacing: true,
    importOrder__: [
        ',^@utils/(.*)$',
        '^@apis/(.*)$',
        '^@hooks/(.*)$',
        '^@recoils/(.*)$',
        '^@pages/(.*)$',
        '^@base/(.*)$',
        '^@common/(.*)$',
        '^@components/(.*)$',
        '^@styles/(.*)$',
        '^[./]',
    ],
    importOrder: ['^src/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}