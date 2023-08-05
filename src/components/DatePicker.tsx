import { LegacyRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import _DatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("en-US", enUS);

interface InputProps extends ReactDatePickerProps {
  error?: boolean;
  errorMessage?: string;
}

function DatePicker({ className, error, errorMessage, ...props }: InputProps, ref: LegacyRef<HTMLInputElement> | undefined) {
  const datePickerClassName = twMerge(
    "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primary placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primaryLighter",
    error ? "border-red-500" : "",
    className
  );

  return (
    <div className="flex w-full flex-col">
      <_DatePicker
        dateFormat="MM/dd/yyyy"
        locale="en-US"
        wrapperClassName="w-full"
        className={datePickerClassName}
        enableTabLoop={false}
        {...props}
      />
      {error && errorMessage && <div className="text-red-500 mt-1 text-xs">{errorMessage}</div>}
    </div>
  );
}

export default forwardRef(DatePicker);