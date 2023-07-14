import {getServerSession} from 'next-auth'
import {authOptions} from '@/app/api/auth/[...nextauth]/route'
import SignOutButton from '@/components/SignOutButton'
import GetSessionButton from '@/components/GetSessionButton'
import Link from 'next/link'

const AdminPage = async () => {
    const session = await getServerSession(authOptions)

    console.log('Session: ', session)

    return (
        <div className="flex min-h-screen flex-col items-center justify-evenly md:p-24 lg:pb-96">
            <p className="text-xl font-semibold">Hello {session?.user?.name}</p>
            <div className='flex justify-between w-3/4 md:w-1/2 lg:w-1/3'>
                <Link className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-100' href={'/'}>Home</Link>
                <GetSessionButton/>
                <SignOutButton/>
            </div>
        </div>
    )
}

export default AdminPage