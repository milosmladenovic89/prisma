'use client'

import { Coils } from "@/generated/client1";
import { FilteredCoils, moveTOFirstDatabase } from "@/utils/action";
import { useState } from "react";

export default function NewProgram() {
  const [nextClick, setNextClick] = useState(true)
  const [backClick, setBackClick] = useState(true)
  const [coils, setCoils] = useState<Coils[]>([]);

  const [widthMin, setWidthMin] = useState(0)
  const [widthMax, setWidthMax] = useState(0)


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const widthMinNumber = Number(widthMin);
    const widthMaxNumber = Number(widthMax);

    const data = await FilteredCoils(widthMinNumber, widthMaxNumber);
    setCoils(data);
  };

  const sortedCoils = coils.sort((a, b) => a.width - b.width);



  return (
    <div className='h-80v flex justify-center items-center w-full'>

      <div className="h-full">


        {nextClick === true && <div className='w-70v h-75v border border-black' >


          <div className='w-full h-12 bg-slate-200 flex justify-end'>
            <button className='btn btn-sm btn-error'>X</button>
          </div>

          <div className=' h-16 flex justify-end'>
            <button className='btn btn-primary m-1'>Cancel</button>
            <button className='btn btn-primary m-1' disabled>Back</button>
            <button className='btn btn-primary m-1' onClick={() => {

              setNextClick(pre => !pre)
              setBackClick(pre => !pre)
            }}>Next</button>
            <button className='btn btn-primary m-1' disabled>Finish</button>
          </div>

          <form onSubmit={handleSubmit} className="h-45pro">

            <div className='flex justify-evenly h-full  '>

              <div className='border border-black h-full flex-1'>
                1
              </div>
              <div className='border border-black h-full flex-1'>
                <div className='flex justify-between'>

                  <div>
                    <label htmlFor="widthMin">
                      Width min:
                    </label>
                    <input className='input input-sm input-secondary w-20'
                      onChange={(e) => setWidthMin(Number(e.target.value))} content="widthMin" value={widthMin} type={'number'} />
                  </div>

                  <div>
                    <label htmlFor="widthMax">
                      Width Max:
                    </label>
                    <input className='input input-sm input-secondary w-20'
                      onChange={(e) => setWidthMax(Number(e.target.value))} content="widthMax" value={widthMax} id='widthMax' type={'number'} />
                  </div>

                </div>

                <div className='flex justify-between mt-2'>

                  <div>
                    <label htmlFor="thickMin">
                      Thick min:
                    </label>
                    <input className='input input-sm input-secondary w-20' id='thickMin' type={'number'} />
                  </div>

                  <div>
                    <label htmlFor="thickMax">
                      Thick Max:
                    </label>
                    <input className='input input-sm input-secondary w-20' id='thickMax' type={'number'} />
                  </div>

                </div>

              </div>

              <div className='border border-black  h-full flex-1'>
                <button type={'submit'} className='btn bg-gray-600'>Show coils</button>
              </div>

            </div>
          </form>

          <div className='h-39pro overflow-y-scroll'>
            <table className="table">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Order</th>
                  <th>Width</th>
                  <th>Thick</th>
                  <th>Time</th>
                </tr>
              </thead>
              {sortedCoils.map((item: Coils) => (
                <tbody key={item.id}>
                  <tr>
                    <td>{item.number}</td>
                    <td>{item.order}</td>
                    <td>{item.width}</td>
                    <td>{item.thick}</td>
                    <td>{item.createAt.toLocaleTimeString()}</td>
                  </tr>
                </tbody>
              ))}

            </table>
          </div>

        </div>}




        {backClick === false &&
          <div className='w-70v h-75v border border-black flex flex-col' >


            <div className='w-full h-12 bg-slate-200 flex justify-end'>
              <button className='btn btn-sm btn-error'>X</button>
            </div>

            <div className=' h-16 flex justify-end'>
              <button className='btn btn-primary m-1'>Cancel</button>
              <button className='btn btn-primary m-1' onClick={() => {
                setNextClick(pre => !pre)
                setBackClick(pre => !pre)
              }}>Back</button>
              <button className='btn btn-primary m-1' disabled>Next</button>
              <button className='btn btn-primary m-1'
                onClick={
                  async () => {
                    //await moveTOFirstDatabase(sortedCoils)
                    await console.log(sortedCoils)
                    
                  }}
                  
              >Finish</button>
            </div>



            <div className="flex border border-red-700 flex-1 overflow-auto">

              <div className="border border-black flex-1 overflow-y-scroll">


                <table className="table">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Order</th>
                      <th>Width</th>
                      <th>Thick</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  {sortedCoils.map((item: Coils) => (
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.number}</td>
                        <td>{item.order}</td>
                        <td>{item.width}</td>
                        <td>{item.thick}</td>
                        <td>{item.createAt.toLocaleTimeString()}</td>
                      </tr>
                    </tbody>
                  ))}

                </table>


              </div>


              <div className="border border-black w-56">2</div>

              <div className="border border-black flex-1">

                <table className="table">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Order</th>
                      <th>Width</th>
                      <th>Thick</th>
                      <th>Time</th>
                    </tr>
                  </thead>


                </table>

              </div>

            </div>

          </div>

        }








      </div>



    </div >
  )
}
