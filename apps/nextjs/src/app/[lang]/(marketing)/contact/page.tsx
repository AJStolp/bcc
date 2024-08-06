import type { Locale } from "~/config/i18n-config";

export const metadata = {
  title: "Contact",
};

export default async function PricingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <h1>Contact us</h1>
    </div>
  );
}
