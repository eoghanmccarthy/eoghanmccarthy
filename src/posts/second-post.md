---
title: Building a Modern Web Stack with React and TanStack
date: 2024-01-20
slug: second-post
type: blog
category: technology
description: My experience setting up a type-safe routing solution with TanStack Router and React 19
tags: React, TypeScript, TanStack, Web Development
---

I recently spent some time building out a modern web application using React 19 and TanStack Router. The experience has been surprisingly smooth, and I wanted to share some thoughts on why this stack works so well.

## Why TanStack Router?

The biggest selling point for me was the **type-safety**. With TanStack Router, you get full TypeScript support for route parameters, search params, and loader data. No more runtime errors from typos in route paths.

```typescript
export const Route = createFileRoute("/posts/$slug")({
  loader: async ({ params: { slug } }) => loadPost(slug),
  component: PostView,
});
```

## React 19 Improvements

React 19 brings some nice quality-of-life improvements, especially around async components and better error boundaries. The new hooks are making state management much more intuitive.

![Coding workspace](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60)

## Final Thoughts

The combination of TanStack Router, React 19, and TypeScript creates a development experience that's both productive and safe. Highly recommend giving it a try if you're starting a new project.

Check out the [TanStack Router docs](https://tanstack.com/router) to learn more.
