"use client"

import React, { useState } from 'react'
import { DropdownMenu } from 'radix-ui'
import { Check, ChevronDown } from 'lucide-react'

interface DropDownProps {
  selected: string;
  options: string[] | number[];
  onSelect: () => void;
}

export default function DropDown() {
  const [selected, setSelected] = useState("Option 1");

  const options = ["Option 1", "Option 2", "Option 3"];

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={handleToggle}>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center justify-between w-64 rounded-lg bg-white border border-gray-300 px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {selected}
          <ChevronDown className="ml-2 h-5 w-5 text-gray-500" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-64 rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
          sideOffset={2}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              onSelect={() => setSelected(option)}
              className={`flex items-center justify-between rounded-md outline-none px-4 py-2 cursor-pointer select-none text-gray-700 hover:bg-blue-100 ${
                selected === option ? "font-medium text-blue-600" : ""
              }`}
            >
              {option}
              {selected === option && <Check className="w-4 h-4 text-blue-600" />}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className='fill-gray-200' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
