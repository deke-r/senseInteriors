export const metadata = {
  title: "About | Sense Interiors",
  description: "Learn about Sense Interiors – top-rated interior design firm in Delhi, Noida, and Gurgaon, specializing in turnkey office and home interiors.",
  keywords: [
    "About Sense Interiors",
    "Interior Designers in Delhi",
    "Top Architecture Firms in NCR",
    "Office Interior Design",
    "Turnkey Projects",
    "Gurgaon Interior Designers",
    "Noida Interior Consultancy"
  ],
  metadataBase: new URL("https://senseinteriors.in"),
  alternates: {
    canonical: "/about",
    types: {
      "application/rss+xml": [
        {
          title:
            "Interior designers in Delhi, Noida, Gurgaon, office interior designer in Delhi » Feed",
          url: "https://senseinteriors.in/feed/",
        },
        {
          title:
            "Interior designers in Delhi, Noida, Gurgaon, office interior designer in Delhi » Comments Feed",
          url: "https://senseinteriors.in/comments/feed/",
        },
      ],
    },
  },
  openGraph: {
    title: "About | Sense Interiors",
    description:
      "Explore the journey and philosophy behind Sense Interiors – leaders in interior design and architecture for Delhi NCR.",
    url: "https://senseinteriors.in/about",
    siteName: "Sense Interiors",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: "large",
  },
};







import ClientsSection from "@/components/Clients-section";
import TestimonialsSection from "../../components/Testimonials-section";
import { designServices, whyChooseUs, serviceSkills, testimonials } from "@/data/content"
import ServicesSkillSection from "@/components/Services-skill-section";
import CallToActionSection from "@/components/Call-to-action-section";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Aboutus() {
    return (
        <>
        
            <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="About Us"
                    pageName="About"
                />
                <Navbar />
            </div>
             <WhyChooseUs/>
              <CallToActionSection
                title="If you find a high quality Interior Design Company for your project?"
                phoneNumber="+91 9821995637"
              />
              <ServicesSkillSection
                title="Quality Which Makes us Different From others as Interior Designing Company"
                phoneNumber="+91 9319412012"
                skills={serviceSkills}
              />
        
        <ClientsSection/>
     <TestimonialsSection testimonials={testimonials} imageSrc="/img/image2-home2.webp" />
        </>
    );
}