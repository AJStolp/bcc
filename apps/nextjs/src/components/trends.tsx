import { WebTrendItem, WebTrendProps } from "~/types/interfaces";

export function WebTrend({ trends }: WebTrendProps) {
  return (
    <div className="w-full">
      {trends.map((trend: WebTrendItem, index: number) => (
        <div key={index} className="mb-8 w-full last:mb-0">
          <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
            <div className="aspect-w-16 aspect-h-10 relative w-full overflow-hidden rounded-t-2xl bg-gray-100">
              <img
                src="/images/web-trends-graphic.webp"
                alt={`Web Design Trend - ${trend.title}`}
                className="transform object-cover transition duration-200 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-xl font-bold text-zinc-800">
                {trend.title}
              </h2>
              <p className="mb-4 text-sm text-zinc-600">{trend.content}</p>
              {/* <div className="flex items-center justify-between">
                <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
                  Read More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
