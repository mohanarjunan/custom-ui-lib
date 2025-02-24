"use client"

import React, { useState } from 'react'
import { DropdownMenu } from 'radix-ui'
import { Check, ChevronDown } from 'lucide-react'
import { OptionType } from '../type';


interface SingleSelectProps {
  selected: string;
  options: OptionType;
  onSelect: (option: string) => void;
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
          { selected || placeHolder }
          <ChevronDown className="single-select--chevron" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="single-select--content"
          sideOffset={2}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              onSelect={() => onSelect(option)}
              className={`single-select--item ${
                selected === option ? "single-select--selected" : ""
              }`}
            >
              {option}
              {selected === option && <Check className="single-select--check" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
