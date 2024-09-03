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


export async function create({ order }: any) {
        const coils = await prisma.coils.findMany({
                where: {
                        order: order
                }
        })
        return coils
}


export async function create2({ order }: any) {
        const coils = await prisma2.coils2.findMany({
                where: {
                        order: order
                }
        })
        
        return coils
}




import { PrismaClient as PrismaClient1 } from '../generated/client1';
import { PrismaClient as PrismaClient2 } from '../generated/client2';

const prisma1 = new PrismaClient1();
const prisma2 = new PrismaClient2();

// Example usage
export async function fetchDataFromSecondDatabase() {

        const data = await prisma2.coils2.findMany({
                orderBy: {
                        id: 'asc'
                }
        });

        return data
}


export async function AddToSecondDatabase(formData: FormData) {
        const number = formData.get('number')
        const order = formData.get('order')
        const width = formData.get('width')
        const thick = formData.get('thick')
        await prisma2.coils2.create({
                data: {
                        number: number?.toString(),
                        order: order?.toString(),
                        width: Number(width),
                        thick: Number(thick),
                        createAt: new Date()

                }
        })


}