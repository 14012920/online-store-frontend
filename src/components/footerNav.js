import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import "react-spring-bottom-sheet/dist/style.css";
const FooterNav = ({ onDismiss, open, setOpen, router, total }) => {
  return (
    <div>
      <footer
        class="bg-slate-50
              text-center
             fixed
             inset-x-0
             bottom-0"
      >
        <div className="mt-2 flex justify-between px-2">
          <div className="flex flex-1 items-center gap-2 ">
            <div className="flex flex-col items-baseline   text-gray-900">
              <p className="font-sans text-sm font-semibold"> Total</p>
              <p className="font-normal text-base">₹{total}</p>
            </div>
            {/* <ChevronUpIcon
              onClick={() => setOpen(true)}
              className="h-6 w-6 font-bold text-slate-900"
              aria-hidden="true"
            /> */}
          </div>
          <div
            onClick={(e) => {
              router.push("/checkout");
            }}
            className=" cursor-pointer flex flex-1 gap-1 items-center justify-center border border-transparent bg-slate-800 px-2 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-900"
          >
            <h1 className="text-base">Checkout</h1>
            <ChevronRightIcon className="h-6 w-4" aria-hidden="true" />
          </div>
        </div>
      </footer>
      <BottomSheet
        open={false}
        onDismiss={onDismiss}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        // snapPoints={({ maxHeight }) => minHeight}
      >
        <p className="text-center font-semibold">Order Summary</p>
        <div className="p-3 flex flex-col">
          <div className="flex justify-between items-baseline text-base font-normal text-gray-900">
            <h2>Subtotal</h2>
            <h2>₹262.00</h2>
          </div>
          <div className="flex justify-between items-baseline text-base font-normal text-gray-900">
            <h2>delivery charges</h2>
            <h2>₹2.00</h2>
          </div>
          <div className="flex justify-between items-baseline text-base font-normal text-gray-900">
            <h2>discount</h2>
            <h2>₹26.00</h2>
          </div>
          <div className="flex justify-between items-baseline text-base font-medium text-gray-900">
            <h2>Total</h2>
            <h2>₹262.00</h2>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};
export default FooterNav;
