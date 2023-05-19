export default function panier() {
    return (
        <>
            <div className="h-screen bg-gray-300">
                <div className="py-12">
                    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
                        <div className="md:flex ">
                            <div className="w-full p-4 px-5 py-5">
                                <div className="md:grid md:grid-cols-3 gap-2 ">
                                    <div className="col-span-2 p-5">
                                        <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                        <div className="flex justify-between items-center mt-6 pt-6">
                                            <div className="flex  items-center">
                                                <img
                                                    src="https://i.imgur.com/EEguU02.jpg"
                                                    width={60}
                                                    className="rounded-full "
                                                />
                                                <div className="flex flex-col ml-3">
                                                    <span className="md:text-md font-medium">Chicken momo</span>
                                                    <span className="text-xs font-light text-gray-400">
                                                        #41551
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <div className="pr-8 flex ">
                                                    <span className="font-semibold">-</span>
                                                    <input
                                                        type="text"
                                                        className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                        defaultValue={1}
                                                    />
                                                    <span className="font-semibold">+</span>
                                                </div>
                                                <div className="pr-8 ">
                                                    <span className="text-xs font-medium">$10.50</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-close text-xs font-medium" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-6 mt-6 border-t">
                                            <div className="flex  items-center">
                                                <img
                                                    src="https://i.imgur.com/Uv2Yqzo.jpg"
                                                    width={60}
                                                    className="rounded-full "
                                                />
                                                <div className="flex flex-col ml-3 ">
                                                    <span className="text-md font-medium w-auto">
                                                        Spicy Mexican potatoes
                                                    </span>
                                                    <span className="text-xs font-light text-gray-400">
                                                        #66999
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <div className="pr-8 flex">
                                                    <span className="font-semibold">-</span>
                                                    <input
                                                        type="text"
                                                        className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                        defaultValue={1}
                                                    />
                                                    <span className="font-semibold">+</span>
                                                </div>
                                                <div className="pr-8">
                                                    <span className="text-xs font-medium">$10.50</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-close text-xs font-medium" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div className="flex  items-center">
                                                <img
                                                    src="https://i.imgur.com/xbTAITF.jpg"
                                                    width={60}
                                                    className="rounded-full "
                                                />
                                                <div className="flex flex-col ml-3 ">
                                                    <span className="text-md font-medium">Breakfast</span>
                                                    <span className="text-xs font-light text-gray-400">
                                                        #86577
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <div className="pr-8 flex">
                                                    <span className="font-semibold">-</span>
                                                    <input
                                                        type="text"
                                                        className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                        defaultValue={1}
                                                    />
                                                    <span className="font-semibold">+</span>
                                                </div>
                                                <div className="pr-8">
                                                    <span className="text-xs font-medium">$10.50</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-close text-xs font-medium" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div className="flex items-center">
                                                <i className="fa fa-arrow-left text-sm pr-2" />
                                                <span className="text-md  font-medium text-blue-500">
                                                    Continue Shopping
                                                </span>
                                            </div>
                                            <div className="flex justify-center items-end">
                                                <span className="text-sm font-medium text-gray-400 mr-1">
                                                    Subtotal:
                                                </span>
                                                <span className="text-lg font-bold text-gray-800 ">
                                                    {" "}
                                                    $24.90
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" p-5 bg-gray-800 rounded overflow-visible">
                                        <span className="text-xl font-medium text-gray-100 block pb-3">
                                            Card Details
                                        </span>
                                        <span className="text-xs text-gray-400 ">Card Type</span>
                                        <div className="overflow-visible flex justify-between items-center mt-2">
                                            <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
                                                <span className="italic text-lg font-medium text-gray-200 underline">
                                                    VISA
                                                </span>
                                                <div className="flex justify-between items-center pt-4 ">
                                                    <span className="text-xs text-gray-200 font-medium">
                                                        ****
                                                    </span>
                                                    <span className="text-xs text-gray-200 font-medium">
                                                        ****
                                                    </span>
                                                    <span className="text-xs text-gray-200 font-medium">
                                                        ****
                                                    </span>
                                                    <span className="text-xs text-gray-200 font-medium">
                                                        ****
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center mt-3">
                                                    <span className="text-xs  text-gray-200">
                                                        Giga Tamarashvili
                                                    </span>
                                                    <span className="text-xs  text-gray-200">12/18</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center  items-center flex-col">
                                                <img
                                                    src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                                                    width={40}
                                                    className="relative right-5"
                                                />
                                                <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">
                                                    mastercard.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center flex-col pt-3">
                                            <label className="text-xs text-gray-400 ">Name on Card</label>
                                            <input
                                                type="text"
                                                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                placeholder="Giga Tamarashvili"
                                            />
                                        </div>
                                        <div className="flex justify-center flex-col pt-3">
                                            <label className="text-xs text-gray-400 ">Card Number</label>
                                            <input
                                                type="text"
                                                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                placeholder="****     ****      ****      ****"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                                            <div className="col-span-2 ">
                                                <label className="text-xs text-gray-400">
                                                    Expiration Date
                                                </label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <input
                                                        type="text"
                                                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                        placeholder="mm"
                                                    />
                                                    <input
                                                        type="text"
                                                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                        placeholder="yyyy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="">
                                                <label className="text-xs text-gray-400">CVV</label>
                                                <input
                                                    type="text"
                                                    className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                    placeholder="XXX"
                                                />
                                            </div>
                                        </div>
                                        <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
                                            Check Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second panier  */}


  {/* component */}
  {/* Create By Joker Banny */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n'
    }}
  />
  <div className="h-screen bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                Nike Air Max 2019
              </h2>
              <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  defaultValue={2}
                  min={1}
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">259.000 ₭</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                Nike Air Max 2019
              </h2>
              <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  defaultValue={2}
                  min={1}
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">259.000 ₭</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub total */}
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  </div>

        </>
    )
}
