"use client"

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { SingleSelect } from "@/components/ui/select";
import { OptionType, SelectOptionType } from "@/components/ui/select/type";
import { useState } from "react";

export default function Page () {
  
  const [state, setState] = useState<OptionType>({
    key: "",
    value: ""
  })

  const states: SelectOptionType = [
    { key: "TN", value: "Tamil Nadu" },
    { key: "AN", value: "Andra Pradesh"},
  ]

  const handleStateSelection = (option: OptionType) => {
    setState(option);
  }
  
  return (
    <>
      <PageBreadcrumb pageTitle="Notification" />
      <ComponentCard title="Content" desc="Description" >
        <SingleSelect  className="w-64" options={states} onSelect={handleStateSelection} placeHolder="Select" selected={state} />
      </ComponentCard>
    </>
  )
}