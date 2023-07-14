'use client'

import {signIn} from 'next-auth/react'

const SignInButton = () => {
    return (
        <button type="button" onClick={() => signIn()}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-100">
            Sign in
        </button>
    )
}

export default SignInButton