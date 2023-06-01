const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
// const { PrismaClient } = risma;
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// export const prisma = new PrismaClient();
async function main() {
    try{
        const user = await prisma.user.create({
            data: {
                email : 'alo',
                name : 'alok'
            }
        })
        
console.log(user)
    }catch(error){
        console.log("error",error)
    }

}

main()