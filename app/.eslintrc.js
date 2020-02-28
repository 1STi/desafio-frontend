module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended" // Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: false
        }
    },
    rules: {
        "@typescript-eslint/ban-ts-ignore":"warn", // Just to use in case some lib has screwed up definition
        "no-use-before-define": ["warn", { "functions": false}],
        "@typescript-eslint/explicit-function-return-type": "off", //disable for all files
        "react/prop-types": "off",
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            }
        }]
    },
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts"],
            "rules": {
                "@typescript-eslint/no-use-before-define":["warn", { "functions": false}],
                "@typescript-eslint/explicit-function-return-type": ["error", {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                }]
            }
        }
    ],
};
