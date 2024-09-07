import { AddCoilToDatabase, AddToSecondDatabase, GetAllCoils } from '@/utils/action'
import React from 'react'

export default async function CoilsPage() {
    const coils = await GetAllCoils()
    return (
        <div>

            <form className='m-20' action={AddCoilToDatabase}>
                <label htmlFor="number">Number</label><br />
                <input className=' input input-success mx-2' id='number' type={'text'} content='number' name='number' /><br />
                <label htmlFor="order">Order</label><br />
                <input className=' input input-success mx-2' id='order' type={'text'} content='order' name='order' /><br />
                <label htmlFor="width">Width</label><br />
                <input className=' input input-success mx-2' id='width' type={'number'} content='width' name='width' /><br />
                <label htmlFor="thick">Thick</label><br />
                <input className=' input input-success mx-2' id='thick' type={'number'} content='thick' name='thick' /> <br /> <br />
                <button type={'submit'} className='btn btn-success btx-xs'>Add</button>
            </form>

            <table className=' table'>
                <thead >
                    <tr className='border border-black' >
                        <th className='border border-black bg-slate-300'>Number</th>
                        <th className='border border-black bg-slate-300'>Order</th>
                        <th className='border border-black bg-slate-300'>Width</th>
                        <th className='border border-black bg-slate-300'>Thick</th>
                    </tr>
                </thead>
                <tbody>
                {coils.map((item) => (
                        <tr key={item.id}>
                            <td className='border border-black'>{item.number}</td>
                            <td className='border border-black'>{item.order}</td>
                            <td className='border border-black'>{item.width}</td>
                            <td className='border border-black'>{item.thick}</td>
                        </tr>
                ))}
                </tbody>
        
            </table>



        </div>
    )
}
