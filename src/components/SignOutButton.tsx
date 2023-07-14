'use client'

import {signOut} from 'next-auth/react'

const SignOutButton = () => {
    return (
        <button type="button" onClick={() => signOut({callbackUrl: '/'})}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-100">
            Sign out
        </button>
    )
}

export default SignOutButton