'use client'
import { GetAllCoilsFromTHIRDdatabase } from "@/utils/action"
import { JsonValue } from "@prisma/client/runtime/library";

import { useEffect, useState } from "react"


type FinishedPrograms = {
    id: number;
    status: boolean;
    numberCoils: number;
    number: JsonValue; // Allow any JSON value
    order: JsonValue;
    width: JsonValue;
    thick: JsonValue;
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
                    <tr key={item.id}>
                        <td className='border border-black p-0 m-0'>{item.id}</td>
                        <td className='border border-black p-0 m-0'>{item.status === false && 'N'}</td>
                        <td className='border border-black p-0 m-0'>{item.numberCoils}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
