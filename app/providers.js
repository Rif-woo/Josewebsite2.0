// app/providers.js
  'use client'
  import posthog from 'posthog-js'
  import { PostHogProvider as PHProvider } from 'posthog-js/react'
  import { useEffect } from 'react'
  import PostHogPageView from "./PostHogPageView"

  export function PostHogProvider({ children }) {
    useEffect(() => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
      })
    }, [])

    return (
      <PHProvider client={posthog}>
        <PostHogPageView />
        {children}
      </PHProvider>
    )
  }