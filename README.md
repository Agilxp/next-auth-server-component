This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The goal of this project is to show code with next-auth that uses only Server component in the app router.

## Background
In a usual Next-Auth setup, you will wrap your application in a `SessionProvider`. 
This component needs to be on the client side, so it means that you would have almost all your application inside the `'use client'` boundary.
It may not be a problem, but I wanted to show how it would be possible to use Next-Auth within the Server Component boundaries.

## Solution
We need to:
- create a const with the auth options and export it (need to be re-usable). In our example, we have GitHub and Google providers set up in the route.
- Copy `.env.local.example` to `.env.local` and update the values for your clients 
- set up the api route under `/app/api/auth/[...nextauth]/route.ts`
- add a `middleware.ts` with the route you want to protect in the config const

After that, you can get the session with `const session = await getServerSession(authOptions)` in your pages.
The session will contain a user object (with name and email) if the user is logged in.

You still can use the `singIn`, `signOut`, `getCsrfToken` and `getSession` method in client components but cannot call `useSession` 

## Getting Started

First, install dependencies:
```bash
yarn
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The pages you are working on will auto-update as you edit the files.
