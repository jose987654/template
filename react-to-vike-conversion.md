# Converting React Project to Vike

This guide outlines the steps to convert your existing React project to a Vike project, with a focus on converting pages and their rendering process.

## 1. Project Setup

1. Install Vike and its dependencies:
   ```
   npm install vike
   ```

2. Create a `vite.config.js` file in your project root:
   ```javascript
   import { defineConfig } from 'vite'
   import vike from 'vike/plugin'

   export default defineConfig({
     plugins: [vike()]
   })
   ```

## 2. Directory Structure

Vike uses a file-based routing system. Restructure your project as follows:

```
src/
  ├── pages/
  │   ├── index/
  │   │   └── +Page.tsx
  │   ├── user/
  │   │   └── +Page.tsx
  │   ├── products/
  │   │   └── +Page.tsx
  │   ├── blog/
  │   │   └── +Page.tsx
  │   ├── sign-in/
  │   │   └── +Page.tsx
  │   └── 404/
  │       └── +Page.tsx
  ├── layouts/
  │   ├── DashboardLayout.tsx
  │   └── AuthLayout.tsx
  └── renderer/
      ├── +config.h.ts
      └── +onRenderClient.tsx
```

## 3. Converting Pages

For each page in your React project, create a corresponding `+Page.tsx` file in the appropriate directory under `src/pages/`.

Example for HomePage (`src/pages/index/+Page.tsx`):

```typescript
import React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';

export function Page() {
  return (
    <DashboardLayout>
      {/* Your HomePage content */}
    </DashboardLayout>
  );
}
```

Repeat this process for each page (UserPage, ProductsPage, BlogPage, SignInPage, and Page404).

## 4. Layouts

Keep your existing layout components (`DashboardLayout` and `AuthLayout`) in the `src/layouts/` directory. You'll use these in your page components as shown in the example above.

## 5. Routing Configuration

Vike uses file-based routing, so you don't need to define routes explicitly. The file structure in the `pages/` directory determines the routing.

## 6. Renderer Setup

Create a `+config.h.ts` file in the `src/renderer/` directory to configure your app:

```typescript
import type { Config } from 'vike/types'

export default {
  passToClient: ['pageProps'],
  clientRouting: true,
} satisfies Config
```

Create a `+onRenderClient.tsx` file in the `src/renderer/` directory to handle client-side rendering:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageContextProvider } from './usePageContext'
import type { OnRenderClientAsync } from 'vike/types'

export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <PageContextProvider pageContext={pageContext}>
      <Page {...pageProps} />
    </PageContextProvider>
  )
}
```

## 7. Lazy Loading

Vike handles code-splitting automatically, so you don't need to use `lazy` and `Suspense` explicitly for your main page components.

## 8. Navigation

Replace `react-router-dom` navigation with Vike's `navigate()` function:

```typescript
import { navigate } from 'vike/client/router'

// Instead of useNavigate from react-router-dom
const handleNavigation = () => {
  navigate('/user')
}
```

## 9. 404 Handling

Create a `+Page.tsx` file in `src/pages/404/` to handle 404 errors:

```typescript
import React from 'react'
import { Page404 } from '../../components/Page404'

export function Page() {
  return <Page404 />
}
```

## 10. Testing and Refinement

After making these changes, test your application thoroughly. You may need to make additional adjustments to ensure all features work correctly with Vike.

Remember to update any imports throughout your project to reflect the new file structure and routing system.

By following these steps, you'll have converted your React project to use Vike for routing and rendering, while maintaining most of your existing component structure and logic.