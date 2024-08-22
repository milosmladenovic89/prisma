'use client';

import { create, GetAllCoils } from "@/utils/action";
import { use, useEffect, useState } from "react";

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
    <div className="h-90v border-black border">

      <div className="w-full h-1/2 flex flex-row">
        <div className="border border-black flex-1">

          {coil
            .filter((item: Coils, index, self) =>
              index === self.findIndex((t: Coils) => t.order === item.order)
            )
            .map((item: Coils) => (
              <div key={item.id} className=" cursor-pointer">
                <p onClick={() => {
                  handleSubmit(item.order);
                  setState(item.order)
                  SetOrderState(item.order)
                }}>
                  {item.order}</p>
              </div>
            ))
          }


        </div>
        <div className="border border-black w-40">2</div>


        <div className="border border-black flex-1 overflow-x-auto">

          {order.map((item: Coils) => (
            <div key={item.id}>
              <p>{item.number}</p>
            </div>
          ))}

        </div>

      </div>



    </div >
  );
}
