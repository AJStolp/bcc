import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const reviews = [
  {
    name: "Jason",
    username: "Polar Lights Imaging",
    body: "Backcountry Creative built our site from scratch, and the results are fantastic. They're great to work with and really understand our vision.",
    img: "/images/pli-fox-logo-new.webp",
  },
  {
    name: "Radiant Hair Salon",
    username: "Radiant906",
    body: "The transformation in our online presence is remarkable. Backcountry Creative streamlined our online booking and brought innovative solutions that have truly revolutionized our business.",
    img: "/images/radiant-logo.webp",
  },
  {
    name: "Yooper Bros Coffee",
    username: "YB",
    body: "I’m at a loss for words. The website they developed for us is outstanding. It’s been a game-changer for our business.",
    img: "/images/yb-logo-main-nobg-upscaled.webp",
  },
  {
    name: "Coffee Cup Hut",
    username: "CCH",
    body: "Working with Backcountry Creative has been a great experience. Their expertise and creativity brought our ideas to life.",
    img: "/images/cch-logo-2x.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
