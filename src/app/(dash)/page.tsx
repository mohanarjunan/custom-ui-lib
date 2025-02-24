"use client"

import { ComponentCard, PageBreadcrumb } from "@/components/common";
import { Alert } from "@/components/ui/alert";

export default function Page () {
  
  return (  
    <>
      <PageBreadcrumb pageTitle="Notification" />
      <ComponentCard title="Content" desc="Description" >
        <Alert content="Alert Message" variant="warning" desc="Secondary Text" />
      </ComponentCard>
    </>
  )
}