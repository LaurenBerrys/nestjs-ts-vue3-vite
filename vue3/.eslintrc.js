/**
 * 所需插件
 * prettier // 规则见 https://prettier.io/docs/en/options.html
 * eslint // 规则见 https://cn.eslint.org/docs/rules/
 * eslint-plugin-vue 规则见 https://github.com/vuejs/eslint-plugin-vue
 * eslint-plugin-prettier // 将prettier作为ESLint规范来使用
 * eslint-config-prettier
 * @typescript-eslint/eslint-plugin
 * @typescript-eslint/parser // ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
 *
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    globals: {
      Message: true,
      env: true,
      useRoute: true,
      useRouter: true,
      useStore: true,
    },
    /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
    parser: "vue-eslint-parser",
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
      parser: "@typescript-eslint/parser", // Specifies the ESLint parser
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      ecmaFeatures: {
        // tsx: true, // Allows for the parsing of JSX
        jsx: true,
      },
    },
    extends: [
      "vue-global-api",
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:jest/recommended",
    ],
    plugins: ["vue"],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
      "no-debugger": process.env.NODE_ENV === "production" ? 1 : 0,
      eqeqeq: 2, // 要求使用 === 和 !==
      "vue/eqeqeq": 2, // 要求使用 === 和 !==
      "no-undef": 2, // 禁用未声明的变量
      "vue/require-v-for-key": 1, // 当v-for写在自定义组件上时，它需要同时使用v-bind：key。在其他元素上，v-bind：key也最好写。
      "no-unused-vars": 0, // 禁止出现未使用过的变量
      "vars-on-top": 0, // 要求所有的 var 声明出现在它们所在的作用域顶部
      "prefer-destructuring": 0, // 优先使用数组和对象解构
      "no-useless-concat": 1, // 禁止不必要的字符串字面量或模板字面量的连接
      "no-useless-escape": 0, // 禁止不必要的转义字符
      "consistent-return": 0, // 要求 return 语句要么总是指定返回的值，要么不指定
      camelcase: 0, // 强制使用骆驼拼写法命名约定
      "no-redeclare": 1, // 禁止多次声明同一变量
      "array-callback-return": 1, // 强制数组方法的回调函数中有 return 语句,Array有几种过滤，映射和折叠的方法。如果我们忘记return在这些回调中写入语句，那可能是一个错误。
      "default-case": 1, // 要求 switch 语句中有 default 分支
      "no-fallthrough": 1, // 禁止 case 语句落空
      "no-lonely-if": 1, // 禁止 if 作为唯一的语句出现在 else 语句中.如果一个if陈述是该else块中唯一的陈述，那么使用一个else if表格通常会更清晰。
      "no-irregular-whitespace": 1, // 禁止在字符串和注释之外不规则的空白
      "prefer-const": 0, // 要求使用 const 声明那些声明后不再被修改的变量.如果一个变量从不重新分配，使用const声明更好。const 声明告诉读者，“这个变量永远不会被重新分配，”减少认知负荷并提高可维护性。
      "no-use-before-define": 1, // 禁止在变量定义之前使用它们
      "vue/attributes-order": 2, // vue api使用顺序
      "vue/order-in-components": [
        2,
        {
          order: [
            "el",
            "name",
            "key",
            "parent",
            "functional",
            ["delimiters", "comments"],
            ["components", "directives", "filters"],
            "extends",
            "mixins",
            ["provide", "inject"],
            "validate",
            "scrollToTop",
            "transition",
            "loading",
            "inheritAttrs",
            "model",
            ["props", "propsData"],
            "emits",
            "setup",
            "asyncData",
            "data",
            "computed",
            "watch",
            "created",
            "mounted",
            "methods",
            ["template", "render"],
            "renderError",
          ],
        },
      ],
      "vue/no-multiple-template-root": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-empty-function": 0,
    },
    overrides: [
      {
        files: ["**/__tests__/*.{j,t}s?(x)"],
        env: {
          mocha: true,
        },
      },
    ],
  };