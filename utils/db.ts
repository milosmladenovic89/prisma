import { PrismaClient } from "@prisma/client" 


const prismaClientSingleton = () => {
    return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>


const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma



  
  /*
  how to create two databases in ine prisma projects mysql php phpmyadmin nextjs + typescript  in one projet
  */