import PageHeader from "@/components/header";
import PageSidebar from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <PageSidebar />
        </div>
        <div className="flex flex-col">
          <PageHeader />
          {children}
        </div>
      </div>
    </section>
  );
}
