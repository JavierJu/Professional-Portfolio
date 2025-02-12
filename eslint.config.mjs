import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginNode from 'eslint-plugin-node';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfigData[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node, // Node.js 환경
    },
    plugins: {
      node: pluginNode, // 플러그인 등록 방식 변경
    },
    rules: {
      // 기본적인 코드 품질 규칙
      'no-console': 'off', // console.log 허용
      'no-unused-vars': ['warn'], // 사용하지 않는 변수 경고
      eqeqeq: ['error', 'always'], // 일치 연산자 사용 권장 (===, !==)
      curly: ['error', 'all'], // 모든 조건문에 중괄호 사용
      'consistent-return': 'off', // return 일관성 규칙 비활성화
    },
  },
  {
    files: ['public/**/*.js'], // public 폴더의 JS 파일에만 적용
    languageOptions: {
      globals: {
        ...globals.browser, // 브라우저 전역 객체 허용
        dataLayer: 'readonly', // ✅ dataLayer 추가
      },
    },
    rules: {
      'no-undef': 'off', // 'no-undef' 규칙 비활성화 (선택 사항)
    },
  },
  pluginJs.configs.recommended,
  prettier,
];
