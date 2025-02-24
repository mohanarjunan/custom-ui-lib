"use client"

import React, { useState } from 'react'
import { DropdownMenu } from 'radix-ui'
import { Check, ChevronDown } from 'lucide-react'
import { OptionType, SelectOptionType } from '../type';


interface SingleSelectProps {
  selected: OptionType;
  options: SelectOptionType;
  onSelect: (option: OptionType) => void;
  placeHolder: string;
  className?: string;
}

export const SingleSelect = ( {
  options,
  onSelect,
  selected,
  placeHolder,
  className = "w-full"
} : SingleSelectProps ) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={handleToggle}>
      <DropdownMenu.Trigger asChild>
        <button className={`single-select--trigger ${className}`}>
          { selected?.value || placeHolder }
          <ChevronDown className="ml-2 h-5 w-5 text-gray-500" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-[var(--radix-dropdown-menu-trigger-width)] rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
          sideOffset={2}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.key}
              onSelect={() => onSelect(option)}
              className={`single-select--item ${
                selected.key === option.key ? "font-medium text-blue-600" : ""
              }`}
            >
              {option.value}
              {selected.key === option.key && <Check className="w-4 h-4 text-blue-600" />}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className='fill-gray-200' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
