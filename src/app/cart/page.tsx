import ClientStorageWrapper from "./ClientStorageWrapper";

export default function Cart() {

  return (
    <div className="text-black bg-white rounded-sm md:p-10 font-dangrek">
      <div className="md:pl-4 pt-2 pl-6 text-[4vb]">
        <h1>Cart</h1>
      </div>
 

      <div className="md:flex flex-row p-6">
        <ClientStorageWrapper />
   

        <div className="block max-w-sm p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 h-min">
          <div className="pad1 md:flex flex-row text-[2vb]">
            <div className="pr-10">
              <p>Estimated Total</p>
            </div>
            <div>
              <p>$66</p>
            </div>
          </div>
          <div className="pad1">
          <a href={`/checkout`}><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button></a>
          </div>
        </div>


      </div>
    </div>
  )
}
