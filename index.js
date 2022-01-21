"use strict";

const kebabCase = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

module.exports = {
    customSyntax: "postcss-scss",
    plugins: [
        "stylelint-scss"
    ],


    rules: {
        // IMPORTANT: Please keep these rules in alphabetical order.
        // @see https://github.com/stylelint/stylelint/tree/main/lib/rules
        "alpha-value-notation": "number",
        "at-rule-allowed-list": null,
        "at-rule-disallowed-list": null,
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-same-name-blockless", "first-nested"],
                ignore: ["after-comment"]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-newline-after": "always-single-line",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-no-unknown": null, // false-positive with @include scss syntax
        "at-rule-no-vendor-prefix": true,
        "at-rule-property-required-list": null,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-newline-before": "always-multi-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-function-notation": "modern",
        "color-hex-alpha": null,
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-hex": true,
        "color-no-invalid-hex": true,
        "comment-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["stylelint-commands"]
            }
        ],
        "comment-no-empty": true,
        "comment-pattern": null,
        "comment-whitespace-inside": "always",
        "comment-word-disallowed-list": null,
        "custom-media-pattern": kebabCase,
        "custom-property-empty-line-before": [
            "always",
            {
                except: [
                    "after-custom-property",
                    "first-nested"
                ],
                ignore: [
                    "after-comment",
                    "inside-single-line-block"
                ]
            }
        ],
        "custom-property-no-missing-var-function": null,
        "custom-property-pattern": kebabCase,
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-custom-properties": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-newline-before": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [
            "always",
            {
                except: [
                    "after-declaration",
                    "first-nested"
                ],
                ignore: [
                    "after-comment",
                    "inside-single-line-block"
                ]
            }
        ],
        "declaration-no-important": true,
        "declaration-property-unit-allowed-list": {
            "/^font(-size)?$/": ["em", "rem"],
            "line-height": ["rem"]
        },
        "declaration-property-unit-disallowed-list": null,
        "declaration-property-value-allowed-list": null,
        "declaration-property-value-disallowed-list": [
            {
                // See https://stackoverflow.com/a/8962837/221528.
                "/^transition(-property)?$/": ["/\\ball\\b/"]
            },
            {
                // TODO: See https://github.com/stylelint/stylelint/issues/4117.
                message: "Avoid using 'transition: all', for performance reasons."
            }
        ],
        "font-family-name-quotes": "always-unless-keyword",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        // See https://github.com/w3c/csswg-drafts/issues/4048.
        "font-weight-notation": "numeric",
        "function-allowed-list": null,
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-disallowed-list": "false",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "function-url-scheme-allowed-list": null,
        "function-url-scheme-disallowed-list": null,
        "function-whitespace-after": "always",
        "hue-degree-notation": "angle",
        "indentation": 4,
        "keyframe-declaration-no-important": true,
        "keyframes-name-pattern": kebabCase,
        "length-zero-no-unit": true,
        "linebreaks": "unix",
        "max-empty-lines": 1,
        "max-line-length": 120,
        "max-nesting-depth": [3, { ignore: ["blockless-at-rules", "pseudo-classes"] }],
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-allowed-list": null,
        "media-feature-name-case": "lower",
        "media-feature-name-disallowed-list": null,
        "media-feature-name-no-unknown": true,
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-name-value-allowed-list": null,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-newline-before": "never",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "named-grid-areas-no-invalid": null,
        "no-descending-specificity": null,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-first-line": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "no-invalid-position-at-import-rule": [true, { ignoreAtRules: ["use"]}], // @use rules must be written before any other rules.
        "no-irregular-whitespace": true,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,
        "number-leading-zero": "always",
        "number-max-precision": 3,
        "number-no-trailing-zeros": true,
        "property-allowed-list": null,
        "property-case": "lower",
        "property-disallowed-list": null,
        "property-no-unknown": true,
        "property-no-vendor-prefix": true,
        "rule-empty-line-before": [
            "always-multi-line",
            {
                except: ["first-nested"],
                ignore: ["after-comment"],
            }
        ],
        "rule-selector-property-disallowed-list": null,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-name-disallowed-list": "never",
        "selector-attribute-operator-allowed-list": "never",
        "selector-attribute-operator-disallowed-list": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": "always",
        "selector-class-pattern": kebabCase,
        "selector-combinator-allowed-list": null,
        "selector-combinator-disallowed-list": null,
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-disallowed-list": null,
        "selector-id-pattern": null,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never",
        "selector-list-comma-space-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-attribute": 0,
        "selector-max-class": 5,
        "selector-max-combinators": 5,
        "selector-max-compound-selectors": 5,
        "selector-max-empty-lines": 0,
        "selector-max-id": null,
        "selector-max-pseudo-class": 5,
        "selector-max-specificity": null,
        "selector-max-type": 5,
        "selector-max-universal": 5,
        "selector-nested-pattern": null,
        "selector-no-qualifying-type": true,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-allowed-list": null,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-disallowed-list": null,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-allowed-list": null,
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-disallowed-list": null,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "string-quotes": "double",
        "time-min-milliseconds": 50,
        "unicode-bom": "never",
        "unit-allowed-list": null, // new
        "unit-case": "lower",
        "unit-disallowed-list": ['em', 'px'], // new
        "unit-no-unknown": true,
        "value-keyword-case": "lower",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": true,
        // IMPORTANT: Please keep these rules in alphabetical order.
        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules
        "scss/at-each-key-value-single-line": null,
        "scss/at-else-closing-brace-newline-after": null,
        "scss/at-else-closing-brace-space-after": null,
        "scss/at-else-empty-line-before": null,
        "scss/at-else-if-parentheses-space-before": null,
        "scss/at-extend-no-missing-placeholder": null,
        "scss/at-function-named-arguments": null,
        "scss/at-function-parentheses-space-before": null,
        "scss/at-function-pattern": null,
        "scss/at-if-closing-brace-newline-after": null,
        "scss/at-if-closing-brace-space-after": null,
        "scss/at-if-no-null": null,
        "scss/at-import-no-partial-leading-underscore": null,
        "scss/at-import-partial-extension-blacklist": null,
        "scss/at-import-partial-extension-whitelist": null,
        "scss/at-import-partial-extension": null,
        "scss/at-mixin-argumentless-call-parentheses": null,
        "scss/at-mixin-named-arguments": null,
        "scss/at-mixin-parentheses-space-before": null,
        "scss/at-mixin-pattern": null,
        "scss/at-rule-conditional-no-parentheses": null,
        "scss/at-rule-no-unknown": true,
        "scss/comment-no-empty": null,
        "scss/comment-no-loud": null,
        "scss/declaration-nested-properties-no-divided-groups": null,
        "scss/declaration-nested-properties": null,
        "scss/dimension-no-non-numeric-values": null,
        "scss/dollar-variable-colon-newline-after": null,
        "scss/dollar-variable-colon-space-after": null,
        "scss/dollar-variable-colon-space-before": null,
        "scss/dollar-variable-default": null,
        "scss/dollar-variable-empty-line-after": null,
        "scss/dollar-variable-empty-line-before": null,
        "scss/dollar-variable-first-in-block": null,
        "scss/dollar-variable-no-missing-interpolation": null,
        "scss/dollar-variable-pattern": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/double-slash-comment-inline": null,
        "scss/double-slash-comment-whitespace-inside": null,
        "scss/function-color-relative": null,
        "scss/function-quote-no-quoted-strings-inside": null,
        "scss/function-unquote-no-unquoted-strings-inside": null,
        "scss/map-keys-quotes": null,
        "scss/media-feature-value-dollar-variable": null,
        "scss/no-dollar-variables": null,
        "scss/no-duplicate-dollar-variables": null,
        "scss/no-duplicate-mixins": null,
        "scss/no-global-function-names": null,
        "scss/operator-no-newline-after": null,
        "scss/operator-no-newline-before": null,
        "scss/operator-no-unspaced": null,
        "scss/partial-no-import": null,
        "scss/percent-placeholder-pattern": null,
        "scss/selector-nest-combinators": null,
        "scss/selector-no-redundant-nesting-selector": null,
        "scss/selector-no-union-class-name": null,
    }
};
