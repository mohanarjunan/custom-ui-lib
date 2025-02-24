"use client"

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { MultiSelect, SingleSelect } from "@/components/ui/dropdown";
import { OptionType } from "@/components/ui/dropdown/type";
import { useState } from "react";

export default function Page () {
  
  const [state, setState] = useState<OptionType>([])


  const states: OptionType = [
    "Tamil Nadu", "Karnataka", "Goa", "Kerala"
  ]

  const handleSelect = (option: OptionType) => {
    setState(option)
  }
  
  return (  
    <>
      <PageBreadcrumb pageTitle="Notification" />
      <ComponentCard title="Content" desc="Description" >
        <MultiSelect  options={states}  onChange={handleSelect} selected={state} placeHolder="Select"/>
        {/* <SingleSelect className="w-64" options={states}  onSelect={handleSelect} selected={state} placeHolder="Select"/> */}
      </ComponentCard>
    </>
  )
}