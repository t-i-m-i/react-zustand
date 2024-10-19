# React Zustand
- React State with Zustand for the client side
- Store, Slices, State, Actions, Subscriptions
- TypeScript
- Vitest, Testing Library, Husky

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

### 6. Add precommit eslint hook

Install husky and lint-staged
```
npm install husky lint-staged --save-dev
```
Set up Husky in your project, create a .husky directory, and create a sample pre-commit hook with command:
```
npx husky-init
```

Add to pre-commit hook:

`npx lint-staged --verbose`

Add config file `.lintstagedrc` with content:
```
{
  "*.ts": "eslint",
  "*.tsx": "eslint"
}
```


Debug:
```
sh .husky/pre-commit

npx lint-staged --verbose

npx vitest --run
```

`git config core.hooksPath` - shall show `.husky`
in case of trouble remove `.git/hooks`
