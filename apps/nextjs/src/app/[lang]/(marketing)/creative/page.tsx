import Image from "next/image";

const services = [
  {
    title: "Web Design and Development",
    description:
      "Custom-built websites tailored to your brand and business needs.",
    icon: "/images/web-design-dev.svg",
  },
  {
    title: "Restaurant Menu Design",
    description:
      "Unique, accessible menu designs for websites and print, tailored to your restaurant's style.",
    icon: "/images/restaurant.svg",
  },
  {
    title: "Accessibility Solutions",
    description:
      "Ensuring your digital content is accessible to all users, across all platforms.",
    icon: "/images/accessibility.svg",
  },
  {
    title: "Custom Content Creation",
    description:
      "Unique, engaging content tailored to your brand and audience.",
    icon: "/images/content-structure.svg",
  },
];

export default function CreativeServices() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-5xl font-bold">Creative Services</h1>
        <p className="mb-12 text-xl">
          We offer a range of creative services to help your business stand out.
          From web design to unique menu creation, we ensure all our work is as
          accessible as possible.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-100 p-6 transition-all duration-300 hover:shadow-lg dark:bg-[#182a38]"
            >
              <div className="mb-4 flex items-center">
                <Image
                  src={service.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="mr-4"
                />
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-gray-100 p-6 dark:bg-[#182a38]">
          <h2 className="mb-4 text-3xl font-bold">
            Our Commitment to Accessibility
          </h2>
          <p className="text">
            At Backcountry Creative, we believe in creating digital experiences
            that everyone can enjoy. Whether it's a website, a menu, or any
            other content, we ensure that it's as accessible as possible. Our
            team is dedicated to implementing best practices in accessibility,
            making sure your digital presence is inclusive and reaches the
            widest possible audience.
          </p>
        </div>
      </div>
    </div>
  );
}
