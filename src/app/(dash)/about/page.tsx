import ComponentCard from "@/components/common/private/ComponentCard";
import PageBreadcrumb from "@/components/common/private/PageBreadCrumb";

export default function Page() {
  return <>
    <PageBreadcrumb pageTitle="About" />
    <ComponentCard title="About" divider>
        About Component!
    </ComponentCard>
  </>;
}