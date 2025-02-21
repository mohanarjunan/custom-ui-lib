import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export default function Page() {
  return <>
    <PageBreadcrumb pageTitle="About" />
    <ComponentCard title="About" divider>
        About Component!
    </ComponentCard>
  </>;
}