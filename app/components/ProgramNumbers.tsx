'use client'
import { GetAllCoilsFromTHIRDdatabase } from "@/utils/action"
import { Coils } from "@prisma/client"
import { useEffect, useState } from "react"


type FinishedPrograms = {
    programID: number;
    status: boolean;
    numberCoils: number;
    number: string;
    order: string;
    width: number;
    thick: number;
    createAt: Date;
}

export default function ProgramNumbers() {
    const [state, setState] = useState<FinishedPrograms[]>([])

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
                    <tr key={item.programID}>
                        <td className='border border-black p-0 m-0'>{item.programID}</td>
                        <td className='border border-black p-0 m-0'>{item.programID}</td>
                        <td className='border border-black p-0 m-0'>{item.programID}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
