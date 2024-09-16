'use client'
import { GetAllCoilsFromTHIRDdatabase } from "@/utils/action"
import { Coils } from "@prisma/client"
import { useEffect, useState } from "react"


export default function ProgramNumbers() {
    const [state, setState] = useState<Coils[]>([])

    useEffect(() => {
        async function ProgramNumber() {
            const programNumbers = await GetAllCoilsFromTHIRDdatabase()
            setState(programNumbers)
        }
        ProgramNumber()
        
    }, [])

    return (
        <table className=' table'>
            <thead >
                <tr className='border border-black' >
                    <th className='border border-black bg-slate-300  m-0'>PrNUm</th>
                    <th className='border border-black bg-slate-300 p-0 m-0'>Status</th>
                    <th className='border border-black bg-slate-300 p-0 m-0'>Coils</th>
                </tr>
            </thead>
            <tbody>
                {state.map((item) => (
                    <tr key={item.id}>
                        <td className='border border-black p-0 m-0'>{item.id}</td>
                        <td className='border border-black p-0 m-0'>{item.id}</td>
                        <td className='border border-black p-0 m-0'>{item.id}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
