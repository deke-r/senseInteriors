import CallToActionSection from "@/components/Call-to-action-section";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ServicesSkillSection from "@/components/Services-skill-section";
import InternalServiceSection from '../../components/InternalServiceSection';
import ServicesSection from "@/components/Services-section";
import { INCIServices, INCIserviceSkills } from "@/data/content";
import BackgroundContentSection from "@/components/Background-content-section";

export default function INCI() {
    const architectServiceData = {
        title: "Interior Design Company in Delhi NCR",
        mainContent: `<p>
        <strong>
        Interior Designer’s team has played a major & vital role in adding and bringing attractiveness towards an individual’s room.
        </strong>

        <br>
        <br>
        Sense Interiors Pvt Ltd. is a leading Interior Design Company in Delhi NCR. Interior design is the skillful creation of indoor spaces that cater to human needs. It combines art, science, and business to plan functional, sustainable, visually appealing interiors that align with the architecture. It believes in well-being, safety, and aesthetics, making informed decisions about style.
    <br>
    Sense Interiors Pvt Ltd. designers form a network of design communities across the globe. Join your local chapter to leverage the transformative power of design in effecting change and promoting inclusivity. Explore the Future of Membership and discover how you can create significant areas for everyone.
    </p>`,
        imageSrc: "/img/parallax-portfolio.webp",
        imageAlt: "Architectural firms in Delhi",
        whoWeAreTitle: "Who We Are?",
        whoWeAreContent: `<p>Sense Interior Pvt Ltd. is a trusted interior design Company in Delhi NCR. Our role is to organize the inside of buildings and structures, providing they promote well-being, safety, and functionality. We work on fixed buildings and mobile structures like boats and planes. Our decisions have an important impact on how spaces work for the people using them.
    <br>
   Our job is to make the inside of buildings more attractive and healthier for the people who use them. We plan, research, coordinate, and manage projects to improve the interior spaces. Our goal is to create a beautiful and pleasant atmosphere for everyone. 
    <br>
   Our work involves defining creativity by changing empty spaces into functional and attractive environments. We solve problems related to space, budget, and client preferences, finding solutions that balance aesthetics and feasibility.
    </p>`,
        benefitsTitle: "Benefits of Choosing Interior Design Firms",
        benefitsContent: `<p>Choosing interior design as a career offers benefits like the opportunity to express creativity, engage in challenging projects, make a positive impact, and explore diverse sectors. It allows for creativity, imagination, and innovation, with potential for entrepreneurship. Our work provides an enriching direction and profitable work.
    </p>`,
    }
    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="Interior Design Company in Delhi NCR"
                    pageName="Interior Design Company in Delhi NCR"
                />
                <Navbar />
            </div>


            <InternalServiceSection {...architectServiceData} />


            <ServicesSection services={INCIServices} />

            <BackgroundContentSection
                title="INDEPENEDENT & FLEXIBLE"
                description="If you are looking for the best Interior Design Firm in Delhi NCR. Choose us because we offer excellent opportunities for aspiring students in the field of interior design. With our reputable design institute, you can enhance your skills and think creatively. We provide a range of career paths, including interior design, spatial planning, design consultancy, furniture design, set design, project management, and more.
Our specializations in sustainable design, hospitality design, and healthcare design are also available. Choose us because we excel in client interaction, understanding their needs and effectively communicating design concepts. We have expertise in design software and stay updated with trends and technologies."


            />





            <ServicesSkillSection
                                title="Quality Which Makes us Different From others as Interior Designing Company"
                                phoneNumber="+91 9319412012"
                                skills={INCIserviceSkills}
                              />
            <CallToActionSection
                title="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now"
                phoneNumber="+91 9821995637"
            />
        </>
    );
}