import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DropDown from "@/components/ui/dropdown";
import { Form } from "radix-ui";

export default function Page () {
  return (
    <>
      <PageBreadcrumb pageTitle="Notification" />
      <ComponentCard title="Content" desc="Description" >
        <DropDown />
      </ComponentCard>
    </>
  )
}