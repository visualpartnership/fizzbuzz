module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent : ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "multiline-comment-style": ["error", "bare-block"],
        camelcase: "warn",
        eqeqeq: ["error", "always"],
        "func-call-spacing": ["error", "always"],
        "one-var": ["error", "consecutive"],
        "no-cond-assign": ["error", "always"],
        "no-extra-parens": "error",
        "no-constant-condition": "error",
        "no-dupe-args": "error"
    }
};
