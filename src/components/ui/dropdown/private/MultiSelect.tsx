"use client";

import React, { useState } from "react";
import { DropdownMenu, Popover } from "radix-ui";
import { Check, ChevronDown, Info } from "lucide-react";
import { OptionType } from "../type";

interface MultiSelectProps {
  selected: OptionType;
  options: OptionType;
  onChange: (options: OptionType) => void;
  placeHolder: string;
  className?: string;
}

export const MultiSelect = ({
  selected,
  options,
  onChange,
  placeHolder,
  className = "w-full",
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    if (selected.some((item) => item === option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const removeTag = (key: string) => {
    onChange(selected.filter((item) => item !== key));
  };

  const clearAll = () => {
    onChange([]);
  }

  const selectAll = (options: OptionType) => {
    onChange(options)
  }

  return (
      <DropdownMenu.Root open={isOpen} onOpenChange={handleToggle}>
        <DropdownMenu.Trigger asChild>
          <button className={`multi-select--trigger ${className}`}>
            {selected.length === 0 ? (
              <span className="text-gray-400 text-sm">{ placeHolder }</span>
            ) : (
              selected.length > 1 ? (
                <div className="relative">
                  <span
                  className="multi-select--info"
                >
                  More then One Selected
                </span>
                  <SelectedItems options={selected} />
                </div>
              ) : (
                <span
                  className="multi-select--tag"
                >
                  {selected[0]}
                </span>
              )
            )}
            <ChevronDown className={`multi-select--chevron ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="multi-select--content"
            sideOffset={4}
          >
            { options.map((option) => {
              const isChecked = selected.some((item) => item === option);
              return (
                <DropdownMenu.Item
                  key={option}
                  onSelect={() => handleSelect(option)}
                  className="multi-select--item"
                >
                  <div
                    className={`flex items-center justify-center h-5 w-5 rounded-md border transition-colors ${
                      isChecked ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-white"
                    }`}
                  >
                    {isChecked && (
                    <Check className="h-4 w-4 text-white" />
                  )}
                </div>
                <span>{option}</span>
              </DropdownMenu.Item>
                          );
                        })}
                        <hr className="my-2" />
                <DropdownMenu.Item
                  className="flex items-center gap-2 cursor-pointer px-2 py-1"
                >
                <span className="text-gray-400 hover:text-gray-700 font-bold text-sm  pe-2 border-r-2" 
                  onClick={() => clearAll()}
                  >Clear All</span>
                <span className="text-blue-400 hover:text-blue-800 font-bold text-sm"
                  onClick={() => selectAll(options)}
                >Select All</span>
              </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
  );
};

function SelectedItems ({ options }: any ){

  const [popover, setIsOpen] = useState(false)

  const handlePopOver = () => {
    setIsOpen(!popover)
  }

  return(
    <div className="z-999999" onMouseEnter={handlePopOver} onMouseLeave={handlePopOver}>
      <Popover.Root open={popover} onOpenChange={handlePopOver}>
        <Popover.Trigger asChild>
          <Info className="absolute -right-7 top-1/2 -translate-y-1/2 text-blue-900" size={20} />
        </Popover.Trigger>    
        <Popover.Portal>
          <Popover.Content className="border shadow-sm bg-white px-8 py-2 w-[200px] rounded-md text-sm">
              <ul className="list-disc">
                {options.map((option: string) => (
                  <li key={option} className="">{option}</li>
                )) }
              </ul>
            <Popover.Arrow className="fill-gray-400"/>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    
    </div>
  )
}