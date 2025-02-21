import ComponentCard from "@/ui/common/ComponentCard";
import PageBreadcrumb from "@/ui/common/PageBreadCrumb";

export default function Page () {
  return (
    <>
      <PageBreadcrumb pageTitle="Notification" />
      <ComponentCard title="Content" desc="Description" >
        Page Content
      </ComponentCard>
    </>
  )
}