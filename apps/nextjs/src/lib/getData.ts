import {
  HeroProps,
  ServiceProps,
  WebTrendItem,
  WebTrendProps,
} from "../types/interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getHeroData(): Promise<HeroProps[]> {
  const res = await fetch(`${BASE_URL}/api/hero-data`);
  if (!res.ok) throw new Error("Failed to fetch hero data");
  return res.json();
}

export async function getServicesData(): Promise<ServiceProps[]> {
  const res = await fetch(`${BASE_URL}/api/services`);
  if (!res.ok) throw new Error("Failed to fetch services data");
  return res.json();
}

export async function getWebTrendData(): Promise<WebTrendProps> {
  const res = await fetch(`${BASE_URL}/api/web-trend`);
  if (!res.ok) throw new Error("Failed to fetch web trend data");
  const data: WebTrendItem[] = await res.json();
  return { trends: data };
}
