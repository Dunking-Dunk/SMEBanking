"use client"

import React from 'react'
// import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Logout from '@/components/Logout'
import { useSession } from 'next-auth/react'

export default function HomePage() {
    const { data } = useSession()
    console.log(data)
    if (data?.user) {
        return (
            <>
                <h1>Logged in</h1>
                <Logout />
            </>

        )
    } else {
        return (
            <main>
                <div>Protected Dashboard, hello: Hursun</div>

            </main>
        )
    }

}