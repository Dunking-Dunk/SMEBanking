"use server"

import { db } from "../db";


export const signIn = () => {

}

export const signUp = async (userData: SignUpParams) => {
    const res = await db.user.create({
        data: userData
    })
    return res
}