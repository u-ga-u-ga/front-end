/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../pages/__root'
import { Route as IndexImport } from './../pages/index'
import { Route as LoginIndexImport } from './../pages/login/index'
import { Route as AuthAuthImport } from './../pages/_auth/_auth'
import { Route as AuthAuthMypageImport } from './../pages/_auth/_auth.mypage'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const AuthAuthRoute = AuthAuthImport.update({
  id: '/_auth/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthAuthMypageRoute = AuthAuthMypageImport.update({
  path: '/mypage',
  getParentRoute: () => AuthAuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_auth': {
      preLoaderRoute: typeof AuthAuthImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_auth/mypage': {
      preLoaderRoute: typeof AuthAuthMypageImport
      parentRoute: typeof AuthAuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthAuthRoute.addChildren([AuthAuthMypageRoute]),
  LoginIndexRoute,
])

/* prettier-ignore-end */
