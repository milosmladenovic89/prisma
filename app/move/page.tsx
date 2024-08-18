'use client';

import { create, GetAllCoils } from "@/utils/action";
import { useEffect, useState } from "react";

type Coils = {
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
  const [state, setState] = useState(1)
  

  const handleSubmit = async () => {
    await createAction({ id: state });
  };

  useEffect(() => {
    async function setCoilsState() {
      const coils = await GetAllCoils()

      if (coils.length > 0) {
        setCoil(coils);

      }

    }
    setCoilsState()
  }, [])

  useEffect(()=>{
    console.log(state)
  },[state])


  return (
    <div className="h-90v border-black border">
 
      <div className="w-full h-1/2 flex flex-row">
        <div className="border border-black flex-1">1</div>
        <div className="border border-black w-40">2</div>
        <div className="border border-black flex-1 overflow-x-auto">3</div>
      </div>

      {coil
        .filter((item: Coils, index, self) =>
          index === self.findIndex((t: Coils) => t.order === item.order)
        )
        .map((item: Coils) => (
          <div key={item.id}>
            <p onClick={() => {
              handleSubmit();
              setState(item.id)
            }}>
              {item.order}</p>
          </div>
        ))
      }

    </div >
  );
}
