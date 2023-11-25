import { Fragment } from "react";
import FooterNav from "./footerNav";

export default function AddressForm({ fullAddress, setFullAddress }) {
  return (
    <>
      <div className="mx-3 my-3 lg:items-start">
        <form class=" flex  flex-col w-full max-w-lg lg:items-center ">
          <div class="w-full md:w-1/2 px-3  md:mb-0 lg:w-full">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pl-1"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter Name"
              onChange={(e) =>
                setFullAddress({ ...fullAddress, name: e.target.value })
              }
            />
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 lg:w-full lg:mb-2">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pl-1"
              htmlFor="grid-zip"
            >
              Pincode
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Enter Pincode"
              onChange={(e) =>
                setFullAddress({ ...fullAddress, pinCode: e.target.value })
              }
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 lg:w-full">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pl-1"
              htmlFor="grid-password"
            >
              Address
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Enter H.No/Area/Block/Town/Colony"
              onChange={(e) =>
                setFullAddress({ ...fullAddress, address: e.target.value })
              }
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 lg:w-full">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pl-1"
              htmlFor="grid-password"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              value={fullAddress.city}
              placeholder="Enter City"
              onChange={(e) =>
                setFullAddress({ ...fullAddress, city: e.target.value })
              }
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 lg:w-full">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pl-1"
              htmlFor="state"
            >
              State
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              type="text"
              value={fullAddress.state}
              placeholder="Enter State"
              onChange={(e) =>
                setFullAddress({ ...fullAddress, state: e.target.value })
              }
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 lg:w-full">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pl-1"
              htmlFor="grid-mobile"
            >
              Mobile/Phone No.
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-mobile"
              type="text"
              value={fullAddress.mobile}
              onChange={(e) =>
                setFullAddress({ ...fullAddress, mobile: e.target.value })
              }
              placeholder="Enter Mobile/Phone No."
            />
          </div>

          {/* <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
}
