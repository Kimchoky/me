# SvelteKit

## SvelteKit Core structure
```sh
npm create svelte@latest
```
  - Skeleton Project
  - TypeScript
  - ESList
  - Prettier


## Virtual List
```sh
npm install -D @sveltejs/svelte-virtual-list
```



# Tailwind
[Docs](https://tailwindcss.com/docs/guides/sveltekit)

## Packages
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Configs
```js
/* svelte.config.js */
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // <---EDIT
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()  // <---EDIT
};
export default config;
```

```js
/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],  // <---EDIT
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',  // <--- EDIT (Dark/Light Mode)
}
```

```css
/* src/app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```html
/* src/routes/+layout.svelte */
<script>
  import "../app.css";
</script>

<slot />
```

## Light/Dark Mode
  - 테일윈드는 기본적으로 미디어쿼리 prefer-color-scheme 을 사용한다.
  - 사용자가 임의로 변경할 수 있도록 처리하기 위한 과정은 아래와 같다.

### 테일윈드 설정변경
  - tailwind.config.js 에서 설정함

### 전역 관리변수 함수 추가
  - 
  ```js
  //공식 문서의 darkMode 설정
  if( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  ```