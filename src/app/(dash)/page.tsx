import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DropDown from "@/components/ui/dropdown";

export default function Page () {
  return (
    <>
      <PageBreadcrumb pageTitle="Notification" />
      <ComponentCard title="Content" desc="Description" >
        Content Page
        <DropDown />
      </ComponentCard>
    </>
  )
}