// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

const isProduction = process.env.NODE_ENV === 'production'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'no-console': isProduction ? 'error' : 'warn',
      'no-debugger': isProduction ? 'error' : 'warn',
      'no-unused-vars': isProduction ? 'error' : 'warn',
      'comma-dangle': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'vue/html-indent': ['error', 2],
      'semi': ['error', 'never'],
      'vue/multi-word-component-names': 'off',
      'vue/no-async-in-computed-properties': 'off',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always'
        }
      ]
    }
  }
)
