import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
    </DashboardShell>
  );
}
