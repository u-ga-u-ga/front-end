/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../pages/__root'
import { Route as LoginImport } from './../pages/login'
import { Route as ListImport } from './../pages/list'
import { Route as IndexImport } from './../pages/index'
import { Route as AuthAuthImport } from './../pages/_auth/_auth'
import { Route as AuthAuthMypageImport } from './../pages/_auth/_auth.mypage'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ListRoute = ListImport.update({
  path: '/list',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
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
    '/list': {
      preLoaderRoute: typeof ListImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_auth': {
      preLoaderRoute: typeof AuthAuthImport
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
  ListRoute,
  LoginRoute,
  AuthAuthRoute.addChildren([AuthAuthMypageRoute]),
])

/* prettier-ignore-end */
