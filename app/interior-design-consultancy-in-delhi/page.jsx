import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import InternalServiceSection from '../../components/InternalServiceSection';
import CallToActionSection from "@/components/Call-to-action-section";
import { consultancyServices, consultancyserviceSkills } from "@/data/content";
import ServicesSection from "@/components/Services-section";
import BackgroundContentSection from "@/components/Background-content-section";
import ServicesSkillSection from "@/components/Services-skill-section";
export default function IDCID() {
    const architectServiceData = {
        title: "Sense Interiors; at your help!",
        mainContent: `<p>
        <strong>Interior Designer Consultant
</strong><br><br>
        
Sense Interior is an Interior design consultant in Delhi. Interior design is like the stylish of making spaces look aesthetic. It's all about planning and overseeing the design and setup of inside places, making sure everything looks cool and comfy. Interior design consultants are like creative wizards for your spaces. Similarly, we listen to what you want, draw up cool designs, and make mini-models of how your place could look. Then, we bring those ideas to life, turning your space into a personalised masterpiece, whether a home sweet home or a buzzing office.
    </p>`,
        imageSrc: "/img/turnkey-project-in-delhi-ncr.webp",
        imageAlt: "Turney firms in Delhi",
        whoWeAreTitle: "No.1 Company with Interior Designer Consultant",
        whoWeAreContent: `<p>Sense Interior is an Interior design consultancy in Delhi. We are interior design consultants. We specialize in helping clients decorate and design their living spaces, offices, and more. Our job is to analyze the space you want to renovate, create drawings and models of potential designs, and bring your vision to life. At our core, we are interior design consultants who begin by understanding your taste and style. We carefully craft a concept that not only resonates with you but also reflects your unique identity. We believe that each element, from furniture to colours, should inspire and showcase your personality. We understand that sometimes it's challenging to fully articulate your design ideas. As experienced interior designers, we stay updated with the latest trends. Additionally, we conduct thorough research to grasp your vision accurately, ensuring its seamless execution in your space.

    </p>`,
        benefitsTitle: "",
        benefitsContent: ``,
    }

    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="Interior Design Consultant in Delhi"
                    pageName="Interior Design Consultant"
                />
                <Navbar />
            </div>
            <InternalServiceSection {...architectServiceData} />



            <ServicesSection services={consultancyServices} />
       <BackgroundContentSection
  title="INDEPENEDENT & FLEXIBLE"
  description="Choosing us is a smart move because we get why concept development matters in interior design. We figure out what your room needs, pick the perfect furniture and lighting, and help you discover your style. We're not just designing spaces; we're creating a vibe that feels just right for you. Choose us because our design journey starts with understanding your goals. We turn on the creativity to craft unique ideas just for you. Our expert guidance in concept development ensures you're making smart design choices. With us, your space will reflect your dreams, bringing them to life with style and substance."
/>


            <ServicesSkillSection
                title="Quality Which Makes us Different From others as Interior Designer Consultant Company"
                phoneNumber="+91 9319412012"
                skills={consultancyserviceSkills}
            />
            <CallToActionSection
                title="If you find a high quality Interior Design Company for your project?"
                phoneNumber="+91 9821995637"
            />

        </>
    );
}