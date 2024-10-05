# React Zustand
- React State with Zustand for the client side
- Store, Slices, State, Actions, Subscriptions
- TypeScript
- Vitest

## Installing and running
```
npm install
npm run dev
```

## Building from the ground up

### 1. Scaffolding Vite Project
```
npm create vite@latest . -- --template react-ts
```

### 2. Add Zustand and Immer
```
npm install zustand@4.5.2
npm install immer
```

### 3. Add Tailwind CSS 
```
npx tailwindcss init -p
npm install -D tailwindcss postcss autoprefixer
```
Post-installation configuration: https://tailwindcss.com/docs/guides/vite

### 4. Install Sass
```
npm install -D sass-embedded
```
Add to vite.config.ts:
```
css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
```

Read more: https://vite.dev/config/shared-options#css-preprocessoroptions

### 5. Testing

#### Install Vitest and other required dependencies
```
npm install vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev
```
#### Update the Vite configuration to support Vitest

https://github.com/t-i-m-i/react-zustand/commit/e6af6c5bc9f886ca5812af9ec3f2842c6d0942b2

#### Deps description

- `vitest`: Testing framework.
- `@vitest/ui`: Optional UI for running Vitest.
- `jsdom`: For mocking the DOM in tests.
- `@testing-library/react` and `@testing-library/jest-dom`: Useful for writing React component tests.

### 6. Add tests to run before commit

Install husky and lint-staged
```
npm install --save-dev husky lint-staged
```
Set up Husky in your project, create a .husky directory, and create a sample pre-commit hook with command:
```
npx husky-init
```

Add to package.json:
```
"scripts": {
  "test:staged": "vitest --run",
},
"lint-staged": {
    "**.*.{js,jsx,ts,tsx}": [
      "npm run test:staged"
    ]
  },
```

Add to pre-commit hook:
```
npx lint-staged
```

https://github.com/t-i-m-i/react-zustand/commit/e912303c1a7a51d3641aaf3b2a0b7597ee9db574

TODO fix husky tests:
https://bluesockets.com/react/react-js-unit-testing-vitest-husky-lint-staged-eslint-prettier/
https://dev.to/rajaerobinson/reactjs-vitest-unit-testing-husky-lint-staged-eslint-prettier-2e50
https://leandroaps.medium.com/building-a-modern-react-app-with-vite-vitest-typescript-eslint-prettier-and-husky-abc7a9876e9d

https://medium.com/@rajaerobinson/react-js-vite-unit-testing-vitest-husky-lint-staged-eslint-prettier-497e158e9579
