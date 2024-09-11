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
                        width:'asc'
                                
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
import { Coils } from "@/app/move/page"

const prisma1 = new PrismaClient1();
const prisma2 = new PrismaClient2();

// Example usage
export async function fetchDataFromSecondDatabase() {

        const data = await prisma2.coils2.findMany({
                orderBy: {
                        width:'asc'
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

export async function moveFromOneDbToOther(order: Array<Coils>) {

        const coilID = order.map((item) => item.id)
        const flattenedCoilID =coilID.flat()
        const orderToMove = order.map(item => ({
                id: item.id,
                order: item.order,
                number: item.number,
                width: item.width,
                thick: item.thick,
                createAt: item.createAt,
        }));

        await prisma.coils.createMany({
                data: orderToMove,
        });

        await prisma2.coils2.deleteMany({
                where: {
                        id:{
                                in:flattenedCoilID
                        }
                }
        })

        revalidatePath('/move')

}

export async function moveTOFirstDatabase(order: Array<Coils>) {
        const coilID = order.map((item) => item.id)
        const flattenedCoilID = coilID.flat();
        console.log(coilID)
        const orderToMove = order.map(item => ({
                id: item.id,
                order: item.order,
                number: item.number,
                width: item.width,
                thick: item.thick,
                createAt: item.createAt,
        }));

        await prisma2.coils2.createMany({
                data: orderToMove,
        });


        await prisma.coils.deleteMany({
                where: {
                        id:{
                                in:flattenedCoilID
                        }
                }
        })


        revalidatePath('/move')

}




