"use client"

import React, { useState } from 'react'
import { DropdownMenu } from 'radix-ui'
import { ChevronDown } from 'lucide-react'

export default function DropDown() {

  const [isOpen, setIsOpen] = useState (false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DropdownMenu.Root open={isOpen} onOpenChange={handleToggle} >
			<DropdownMenu.Trigger asChild >
				<button
					className="px-5 py-2 border-2 rounded-md mx-2 inline-flex text-slate-600 gap-2 focus:outline-none hover:border-slate-400"
				>
          Dropdown
          <ChevronDown className={`${isOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out`} />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal  >
				<DropdownMenu.Content
					className="min-w-[220px] rounded-md bg-white p-[5px] shadow-md border transition-all duration-300 ease-in-out"
					sideOffset={5}
				>
					<DropdownMenu.Item className="text-sm px-2 py-2 hover:bg-slate-600 hover:text-white rounded-md transition-all duration-300 ease-in-out outline-none cursor-pointer">
						Option 1
					</DropdownMenu.Item>
					<DropdownMenu.Item className="text-sm px-2 py-2 hover:bg-slate-600 hover:text-white rounded-md transition-all duration-300 ease-in-out outline-none cursor-pointer">
						Option 2
					</DropdownMenu.Item>
					<DropdownMenu.Item className="text-sm px-2 py-2 hover:bg-slate-600 hover:text-white rounded-md transition-all duration-300 ease-in-out outline-none cursor-pointer">
						Option 3
					</DropdownMenu.Item>
					<DropdownMenu.Item className="text-sm px-2 py-2 hover:bg-slate-600 hover:text-white rounded-md transition-all duration-300 ease-in-out outline-none cursor-pointer">
						Option 4
					</DropdownMenu.Item>

					<DropdownMenu.Arrow className="fill-slate-200" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
    </>
  )
}
