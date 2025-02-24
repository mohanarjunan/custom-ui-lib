import { Check, Cross, Info, InfoIcon } from 'lucide-react';
import React from 'react'

type AlertProps = {
  className?: string;
  variant: string;
  content: string;
  desc?: string;
  icon?: React.ReactElement;
}

interface AlertVariant {
  variant: string;
  style: string; 
  variantIcon: React.ReactElement;
}

const variants: AlertVariant[] = [
  {
    variant: "success",
    style: "bg-green-200 text-green-700 border-green-300 border-l-green-500",
    variantIcon: <Check size={22} />
  },
  {
    variant: "warning",
    style: "bg-yellow-200 text-yellow-700 border-yellow-300 border-l-yellow-500",
    variantIcon: <Info size={22} />
  },
  {
    variant: "error",
    style: "bg-red-200 text-red-700 border-red-300 border-l-red-500",
    variantIcon: <Cross size={22} />
  },
  {
    variant: "info",
    style: "bg-blue-200 text-blue-700 border-blue-300 border-l-blue-500",
    variantIcon: <Info size={22} />
  },
]
const Alert = (
  { content, variant = "info", className = "w-full", desc, icon }: AlertProps
) => {

  const { style, variantIcon } = variants.filter((v: AlertVariant) => v.variant === variant )[0];

  return (
    <div className={` ${style}  px-6 py-5 text-md text-bold rounded-md border-2 border-l-[5px] ${className}`}>
      <div className={` flex ${desc === "" ? "items-center" : ""} gap-2`}>
        { icon || variantIcon}
        <div>
          { content }
          <div className='text-xs font-bold'> { desc }</div>
        </div>
      </div>
    </div>
  )
}

export default Alert