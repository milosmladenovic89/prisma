'use server'

import { revalidatePath } from "next/cache"
import prisma from "./db"




export async function AddCoilToDatabase(formData: FormData,) {
        const number = formData.get('number')
        const order = formData.get('order')
        const width = formData.get('width')
        const thick = formData.get('thick')

        await prisma.coils.create({
                data: {
                        number: number?.toString(),
                        order: order?.toString(),
                        width: Number(width),
                        thick: Number(thick),
                        createAt: new Date()

                }
        })
        revalidatePath('/coils')

}

export async function GetAllCoils() {
        const coils = await prisma.coils.findMany({
                orderBy: {
                        id: 'asc'
                }
        })
        return coils
}


export async function create({order}: any) {
        const coils = await prisma.coils.findMany({
                where:{
                        order:order
                }
        })
        return coils
}
