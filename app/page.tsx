

import { GetAllCoils } from "@/utils/action";


export default async function Home() {

  const coils = await GetAllCoils()


  return (
    <main className=" w-full">
      <div className="h-80v border-black border flex">

       

        <div className="w-full">
          <div className="w-full h-full flex flex-row">
            <div className="border border-black flex-1 overflow-y-scroll">

              <table className="table">
                <thead>
                  <tr>
                    <th>Order</th>

                    <th>Width</th>
                    <th>Thick</th>
                    <th>Created</th>
                  </tr>
                </thead>


                {coils.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{item.number}</td>
                      <td>{item.width}</td>
                      <td>{item.thick}</td>
                      <td>{item.createAt.toDateString()}</td>
                    </tr>
                  </tbody>
                ))}
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

              </table>
            </div>
          </div>


        </div>
      </div >
    </main>
  );
}
