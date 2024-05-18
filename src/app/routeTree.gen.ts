/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../pages/__root'
import { Route as LoginImport } from './../pages/login'
import { Route as ListImport } from './../pages/list'
import { Route as DetailImport } from './../pages/detail'
import { Route as CscenterImport } from './../pages/cscenter'
import { Route as IndexImport } from './../pages/index'
import { Route as CscenterIndexImport } from './../pages/cscenter/index'
import { Route as SignupIndexImport } from './../pages/Signup/index'
import { Route as RegisterItemIndexImport } from './../pages/RegisterItem/index'
import { Route as CscenterPostIdImport } from './../pages/cscenter/$postId'
import { Route as AuthAuthImport } from './../pages/_auth/_auth'
import { Route as AuthMypageWithdrawalImport } from './../pages/_auth/mypage/withdrawal'
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

const DetailRoute = DetailImport.update({
  path: '/detail',
  getParentRoute: () => rootRoute,
} as any)

const CscenterRoute = CscenterImport.update({
  path: '/cscenter',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CscenterIndexRoute = CscenterIndexImport.update({
  path: '/',
  getParentRoute: () => CscenterRoute,
} as any)

const SignupIndexRoute = SignupIndexImport.update({
  path: '/Signup/',
  getParentRoute: () => rootRoute,
} as any)

const RegisterItemIndexRoute = RegisterItemIndexImport.update({
  path: '/RegisterItem/',
  getParentRoute: () => rootRoute,
} as any)

const CscenterPostIdRoute = CscenterPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => CscenterRoute,
} as any)

const AuthAuthRoute = AuthAuthImport.update({
  id: '/_auth/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthMypageWithdrawalRoute = AuthMypageWithdrawalImport.update({
  path: '/mypage/withdrawal',
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
    '/cscenter': {
      preLoaderRoute: typeof CscenterImport
      parentRoute: typeof rootRoute
    }
    '/detail': {
      preLoaderRoute: typeof DetailImport
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
    '/cscenter/$postId': {
      preLoaderRoute: typeof CscenterPostIdImport
      parentRoute: typeof CscenterImport
    }
    '/RegisterItem/': {
      preLoaderRoute: typeof RegisterItemIndexImport
      parentRoute: typeof rootRoute
    }
    '/Signup/': {
      preLoaderRoute: typeof SignupIndexImport
      parentRoute: typeof rootRoute
    }
    '/cscenter/': {
      preLoaderRoute: typeof CscenterIndexImport
      parentRoute: typeof CscenterImport
    }
    '/_auth/_auth/mypage': {
      preLoaderRoute: typeof AuthAuthMypageImport
      parentRoute: typeof AuthAuthImport
    }
    '/_auth/mypage/withdrawal': {
      preLoaderRoute: typeof AuthMypageWithdrawalImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CscenterRoute.addChildren([CscenterPostIdRoute, CscenterIndexRoute]),
  DetailRoute,
  ListRoute,
  LoginRoute,
  AuthAuthRoute.addChildren([AuthAuthMypageRoute]),
  RegisterItemIndexRoute,
  SignupIndexRoute,
  AuthMypageWithdrawalRoute,
])

/* prettier-ignore-end */
