// @ts-check
/**
 * @type {import('prettier').Options}
 */
export default {
  semi: true,
  singleQuote: false, // 단일 인용부호 사용
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
};
