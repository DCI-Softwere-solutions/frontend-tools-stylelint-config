# Stylelint config for DCISS

A shareable [stylelint](https://stylelint.io/) config for DCISS saas projects.

## Important notes

* If the application uses custom elements, you will need to customize the `selector-type-no-unknown` rule configuration in the `.stylelintrc.js` file.
    * e.g. `"selector-type-no-unknown": [true, { ignoreTypes: [/^app-/] }]` (to ignore custom elements beginning with "app-")

## Development

You will need to set an environment variable named `EC_NPM_TOKEN` with the value of a [personal access token](https://gitlab.com/profile/personal_access_tokens) (name: `npm`, scopes: `api`).

### Publishing a new version

1. Run `npm version patch` (replace `patch` [as necessary](https://docs.npmjs.com/cli/version)) to increase the version number.
2. Run `git push && git push --tags` to push the version commit and tag.
3. Run `npm publish` to publish the new version.

## Unused rules

### Has issues

* `no-unknown-animations`
    * https://github.com/stylelint/stylelint/issues/4088
* `selector-no-qualifying-type`
    * https://github.com/stylelint/stylelint/issues/4410

### No use for

* `at-rule-name-newline-after`
* `at-rule-no-unknown` – using `scss/at-rule-no-unknown` instead.
* `at-rule-property-requirelist`
* `at-rule-whitelist` – using `at-rule-blacklist` instead.
* `block-closing-brace-space-after`
* `block-opening-brace-newline-before`
* `color-no-hex`
* `comment-word-blacklist`
* `declaration-block-semicolon-newline-before`
* `declaration-property-unit-blacklist`
* `declaration-property-value-whitelist`
* `function-blacklist`
* `function-comma-newline-before` – using `function-comma-space-before` instead.
* `function-url-scheme-blacklist` – using `function-url-scheme-whitelist` instead.
* `function-whitelist`
* `media-feature-name-blacklist`
* `media-feature-name-value-whitelist`
* `media-feature-name-whitelist`
* `media-query-list-comma-newline-before` – using `media-query-list-comma-space-before` instead.
* `no-invalid-double-slash-comments` – applies only to CSS, not Sass.
* `property-blacklist`
* `property-whitelist`
* `selector-attribute-operator-blacklist`
* `selector-attribute-operator-whitelist`
* `selector-combinator-blacklist`
* `selector-combinator-whitelist`
* `selector-id-pattern` – ID selectors may not be used.
* `selector-list-comma-space-after` – using `selector-list-comma-newline-after` instead.
* `selector-max-attribute`
* `selector-max-class`
* `selector-max-combinators`
* `selector-max-compound-selectors`
* `selector-max-pseudo-class`
* `selector-max-specificity`
* `selector-max-type`
* `selector-max-universal`
* `selector-nested-pattern`
* `selector-pseudo-class-blacklist`
* `selector-pseudo-class-whitelist`
* `selector-pseudo-element-blacklist`
* `selector-pseudo-element-whitelist`
* `time-min-milliseconds`
* `unit-blacklist`
* `unit-whitelist`
* `value-list-comma-newline-before` – using `value-list-comma-space-before` instead.

## Used rules with issues

* `declaration-property-value-blacklist`
    * https://github.com/stylelint/stylelint/issues/4117
