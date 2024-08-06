import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About Backcountry Creative</AccordionTrigger>
        <AccordionContent>
          Backcountry Creative is a team of passionate developers and designers
          dedicated to transforming your digital presence. We specialize in web
          development and creative services, ensuring every project is not only
          visually stunning but also accessible and user-friendly. With a focus
          on quality and innovation, we deliver exceptional results tailored to
          your unique needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Backcountry Creative?</AccordionTrigger>
        <AccordionContent>
          We merge creativity with technology to create websites and digital
          experiences that truly stand out. Our expertise in web development,
          accessibility, and creative services ensures your brand leaves a
          memorable impact. Partner with Backcountry Creative for high-quality,
          innovative solutions tailored to your needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Is Backcountry Creative Right for You?
        </AccordionTrigger>
        <AccordionContent>
          If you're looking for a reliable partner to enhance your digital
          presence, Backcountry Creative is here to help. We work with
          businesses of all sizes, providing fast, unique, and accessible
          digital experiences. Whether you're a small business or a large
          enterprise, we tailor our services to meet your goals and exceed your
          expectations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
