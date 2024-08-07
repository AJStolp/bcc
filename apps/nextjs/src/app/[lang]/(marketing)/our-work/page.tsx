import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Polar Lights Imaging",
    description: "Built from scratch with a super great team.",
    image: "/images/pli-bcc.webp",
    link: "https://www.polarlightsimaging.com/",
  },
  {
    title: "Radiant Hair Salon",
    description: "Streamlined online booking and enhanced user experience.",
    image: "/images/radiant-bcc.webp",
    link: "https://www.radiant906.com/",
  },
  {
    title: "Yooper Bros Coffee",
    description: "A stunning ecommerce platform for coffee lovers.",
    image: "/images/yb-bcc.webp",
    link: "https://yooperbroscoffee.com/",
  },
  {
    title: "Coffee Cup Hut",
    description: "Creative solutions for unique coffee experiences.",
    image: "/images/cch-bcc.webp",
    link: "https://coffeecuphut.com/",
  },
];

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-4xl font-bold">Our Work</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} target="_blank">
              <div className="transform overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-105 dark:bg-gray-900">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 hover:opacity-75"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
