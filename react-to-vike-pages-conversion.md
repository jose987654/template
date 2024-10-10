# Converting React Pages to Vike Pages

## 1. File Structure

In Vike, pages are organized in a file-based routing system. The following is the structure of pages expected by Vike:

```
src/
  └── pages/
      ├── index/
      │   └── +Page.tsx
      ├── user/
      │   └── +Page.tsx
      ├── products/
      │   └── +Page.tsx
      ├── blog/
      │   └── +Page.tsx
      └── 404/
          └── +Page.tsx
```

## 2. Page Conversion

For each React page, create a new `+Page.tsx` file in the corresponding directory. Here's a basic template:

```typescript
import React from 'react'
import { PageProps } from 'vike/types'

export function Page(pageProps: PageProps) {
  return (
    <div>
      {/* Your page content */}
    </div>
  )
}
```

## 3. Layouts

If you're using layouts, import and use them directly in your page components:

```typescript
import React from 'react'
import { PageProps } from 'vike/types'
import { DashboardLayout } from '../../layouts/DashboardLayout'

export function Page(pageProps: PageProps) {
  return (
    <DashboardLayout>
      {/* Your page content */}
    </DashboardLayout>
  )
}
```

## 4. Route Parameters

For pages with route parameters, use the `pageProps.routeParams` object:

```typescript
import React from 'react'
import { PageProps } from 'vike/types'

export function Page(pageProps: PageProps) {
  const { id } = pageProps.routeParams
  return (
    <div>
      User ID: {id}
    </div>
  )
}
```

## 5. Navigation in vike

Replace React Router's `Link` component with Vike's `navigate` function:

```typescript
import { navigate } from 'vike/client/router'

function handleClick() {
  navigate('/user')
}
```

## 6. Data Fetching in vike using hooks

For data fetching, you can use the `onBeforeRender` hook:

```typescript
export async function onBeforeRender(pageContext) {
  const data = await fetchSomeData()
  return {
    pageContext: {
      pageProps: {
        data
      }
    }
  }
}
```

Then access the data in your Page component:

```typescript
export function Page(pageProps: PageProps) {
  const { data } = pageProps
  // Use data in your component
}
```

## 7. Adding Themes to Pages and Layouts

To use themes into your Vike pages and layouts, you can use a theme provider from a UI library like Material-UI.
1. Create a theme file (if you don't already have one):

```typescript
// src/theme/index.ts
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  // Your theme configuration
})
```

2. Create a ThemeProvider component:

```typescript
// src/components/ThemeProvider.tsx
import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
```

3. Wrap your layouts with the ThemeProvider:

```typescript
// src/layouts/DashboardLayout.tsx
import React from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* Your layout content */}
      {children}
    </ThemeProvider>
  )
}
```

4. For pages that don't use a layout, wrap the Page component with the ThemeProvider:

```typescript
// src/pages/some-page/+Page.tsx
import React from 'react'
import { PageProps } from 'vike/types'
import { ThemeProvider } from '../../components/ThemeProvider'

export function Page(pageProps: PageProps) {
  return (
    <ThemeProvider>
      {/* Your page content */}
    </ThemeProvider>
  )
}
```

By following these steps, you can convert your React pages to Vike pages while maintaining most of your existing component logic and incorporating your theme throughout the application.