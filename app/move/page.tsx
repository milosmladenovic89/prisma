'use client';

import { create, create2, fetchDataFromSecondDatabase, GetAllCoils, moveFromOneDbToOther, moveTOFirstDatabase } from "@/utils/action";
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
  return <ChildComponent createAction={create} createAction2={create2} />;
}

function ChildComponent({ createAction, createAction2 }: any) {
  const [coil, setCoil] = useState<Coils[]>([]);
  const [coil2, setCoil2] = useState<Coils[]>([]);
  const [order, setOrder] = useState<Coils[]>([]);
  const [order2, setOrder2] = useState<Coils[]>([]);
  const [state, setState] = useState<string | undefined>()
  const [state2, setState2] = useState<string | undefined>()

  const handleSubmit = async (newState: string | undefined) => {
    await createAction({ order: newState });

  };



  const handleSubmit2 = async (newState: string | undefined) => {
    await createAction2({ order: newState });

  };

  async function SetOrderState(newState: string | undefined) {
    const orderState = await create({ order: newState })
    setOrder(orderState)
  }


  async function SetOrderState2(newState: string | undefined) {
    const orderState2 = await create2({ order: newState })
    setOrder2(orderState2)
  }


  useEffect(() => {
    async function SetOrderStateAtLoading() {
      const coils = await GetAllCoils()

      if (coils && coils.length > 0) {
        const order = coils[0].order
        const filteredItems = coils.filter(item => item.order === order);
        setOrder(filteredItems)
      } else {
        setOrder([])
      }
    }

    async function SetOrderStateAtLoading2() {
      const coils2 = await fetchDataFromSecondDatabase()
      if (coils2 && coils2.length > 0) {
        const order2 = coils2[0].order;
        const filteredItems2 = coils2.filter(item => item.order === order2);
        setOrder2(filteredItems2);
      } else {

        setOrder2([]);
      }
    }

    SetOrderStateAtLoading()
    SetOrderStateAtLoading2()
  }, [])



  async function fetchAndSetOrderState() {
    const coils = await GetAllCoils();
    if (coils && coils.length > 0) {
      const order = coils[0].order;
      setCoil(coils)
      setState(order);
      SetOrderState(order);
    } else {
      setState(undefined);
      SetOrderState(undefined);
      setCoil([])
    }
  }

  async function fetchAndSetOrderState2() {
    const coils2 = await fetchDataFromSecondDatabase();
    if (coils2 && coils2.length > 0) {
      const order2 = coils2[0].order;
      setCoil2(coils2)
      setState2(order2);
      SetOrderState2(order2);
    } else {
      setState2(undefined);
      SetOrderState2(undefined)
      setCoil2([])
    }
  }


  useEffect(() => {
    async function setCoilsState() {
      const coils = await GetAllCoils()
      const coils2 = await fetchDataFromSecondDatabase()

      if (coils && coils.length > 0) {
        setCoil(coils);
        setState(coils[0].order)
      } else {
        setCoil([])
      }


      if (coils2 && coils2.length > 0) {
        setCoil2(coils2);
        setState2(coils2[0].order)
      } else {
        setCoil2([])
      }

    }

    setCoilsState()
  }, [state, state2])


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
                    <tr className={order && order.length > 0 && item.order === order[0].order ? "bg-red-300" : "bg-white"}
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

            <button className="btn btn-accent m-5"
              onClick={async () => {
                await moveTOFirstDatabase(order)
                await fetchAndSetOrderState()
                await fetchAndSetOrderState2()
                //await order2 && order2.length > 0 ? setState2(order2[0].order) : setState2(undefined)
                //await order && order.length > 0 ? setState(order[0].order) : setState(undefined)
              }}
            >
              &#8594;
            </button>

            <button className="btn btn-accent m-5"
              onClick={async () => {
                await moveFromOneDbToOther(order2)
                await fetchAndSetOrderState()
                await fetchAndSetOrderState2()
                //await order && order.length > 0 ? setState(order[0].order) : setState(undefined)
                //await order2 && order2.length > 0 ? setState2(order2[0].order) : setState2(undefined)
              }}
            >
              &#8592;
            </button>

          </div>


          <div className="border border-black flex-1 overflow-x-auto">

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
              {coil2
                .filter((item: Coils, index, self) =>
                  index === self.findIndex((t: Coils) => t.order === item.order)
                )
                .map((item: Coils) => (
                  <tbody key={item.id} className=" cursor-pointer">
                    <tr
                      className={order2 && order2.length > 0 && item.order === order2[0].order ? "bg-blue-300" : "bg-white"}
                      onClick={() => {
                        handleSubmit2(item.order);
                        setState2(item.order)
                        SetOrderState2(item.order)

                      }}
                    >
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

              {order2.map((item: Coils) => (
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

        </div>

        <button className="btn btn-primary mt-2" >New Program</button>

      </div>
    </div >
  );
}
