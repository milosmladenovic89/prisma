'use client';

import { create, fetchData, GetAllCoils } from "@/utils/action";
import { useEffect, useState } from "react";

export type Coils = {
  id: number
  order: string
  number: string | undefined
  width: number
  thick: number
  createAt: Date
}

export default function ParentComponent() {
  return <ChildComponent createAction={create} />;
}

function ChildComponent({ createAction }: any) {
  const [coil, setCoil] = useState<Coils[]>([]);
  const [order, setOrder] = useState<Coils[]>([]);
  const [state, setState] = useState<string | undefined>()


  const handleSubmit = async (newState: string | undefined) => {
    await createAction({ order: newState });

  };




  async function SetOrderState(newState2: string | undefined) {
    const orderState = await create({ order: newState2 })
    setOrder(orderState)
  }

  async function TwoDatabases() {
    return await fetchData()

  }

  useEffect(() => {
    async function SetOrderStateAtLoading() {
      const coils = await GetAllCoils()
      const order = coils[0].order
      const filteredItems = coils.filter(item => item.order === order);
      setOrder(filteredItems)


    }
    SetOrderStateAtLoading()
  }, [])

  useEffect(() => {
    async function setCoilsState() {
      const coils = await GetAllCoils()

      if (coils.length > 0) {
        setCoil(coils);
        setState(coils[0].order)

      }

    }
    setCoilsState()
  }, [state])



  return (
    <div className="h-80v border-black border flex">

      <div className=" w-48 border border-red-700">1</div>


      <div className="w-full">


        <div className="w-full h-1/2 flex flex-row">
          <div className="border border-black flex-1 overflow-y-scroll">

            <table className="table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>ID</th>
                  <th>Width</th>
                  <th>Thick</th>
                  <th>Created</th>
                </tr>
              </thead>
              {coil
                .filter((item: Coils, index, self) =>
                  index === self.findIndex((t: Coils) => t.order === item.order)
                )
                .map((item: Coils) => (
                  <tbody key={item.id} className=" cursor-pointer">
                    <tr className=" hover:bg-cyan-500"
                      onClick={() => {
                        handleSubmit(item.order);
                        setState(item.order)
                        SetOrderState(item.order)
                      }}>
                      <td >
                        {item.order}
                      </td>
                      <td>{item.id}</td>
                      <td>{item.width}</td>
                      <td>{item.thick}</td>
                      <td>{item.createAt.toDateString()}</td>
                    </tr>


                  </tbody>
                ))
              }

            </table>


          </div>


          <div className="border border-black w-40 flex flex-col justify-evenly">

            <button className="btn btn-accent m-5">
              &#8594;
            </button>

            <button className="btn btn-accent m-5">
              &#8592;
            </button>

          </div>


          <div className="border border-black flex-1 overflow-x-auto">



          </div>

        </div>






        <div className="w-full h-1/2 flex flex-row">
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

              {order.map((item: Coils) => (
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
          <div className="border border-black w-40">2 down</div>


          <div className="border border-black flex-1 overflow-x-auto">



          </div>

        </div>

        <button className="btn btn-primary mt-2" onClick={TwoDatabases}>New Program</button>

      </div>
    </div >
  );
}
