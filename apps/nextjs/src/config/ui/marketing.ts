import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { MarketingConfig } from "~/types";

export const getMarketingConfig = async ({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}): Promise<MarketingConfig> => {
  const dict = await getDictionary(lang);
  return {
    mainNav: [
      {
        title: dict.marketing.main_nav_ourwork,
        href: `/our-work`,
      },
      {
        title: dict.marketing.main_nav_creative,
        href: `/creative`,
      },
      {
        title: dict.marketing.main_nav_contact,
        href: `/contact`,
      },
    ],
  };
};
