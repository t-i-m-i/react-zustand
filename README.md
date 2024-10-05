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

