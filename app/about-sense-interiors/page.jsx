import ClientsSection from "@/components/Clients-section";
import TestimonialsSection from "../../components/Testimonials-section";
import { designServices, whyChooseUs, serviceSkills, testimonials } from "@/data/content"
import ServicesSkillSection from "@/components/Services-skill-section";
import CallToActionSection from "@/components/Call-to-action-section";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
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