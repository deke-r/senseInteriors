import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import InternalServiceSection from '../../components/InternalServiceSection';
import CallToActionSection from "@/components/Call-to-action-section";
import { architectServices, architectserviceSkills } from "@/data/content";
import ServicesSection from "@/components/Services-section";
import BackgroundContentSection from "@/components/Background-content-section";
import ServicesSkillSection from "@/components/Services-skill-section";
export default function ALF() {
    const architectServiceData = {
        title: "Architects in Delhi",
        mainContent: `<p>Sense Interiors Pvt Ltd is the leading architectural firm in Delhi. An architect designs and manages building construction, shaping functional and aesthetic structures.
    We create practical and aesthetically attractive spaces for people. Our work includes planning and overseeing the entire building process. Our architects focus on structures for human use and their surroundings.
    <br>
    As a result, we operate all architect's projects to help our clients engage our insights. We make the area aesthetic with an elegant look. By taking help urbanscaping leads modern architecture in Delhi, search for innovative designs. Our projects prioritize sustainability, using organic materials and merging with green spaces for a greener, more responsible urban landscape.
    </p>`,
        imageSrc: "/img/architecture-firms-delhi.webp",
        imageAlt: "Architectural firms in Delhi",
        whoWeAreTitle: "Who We Are?",
        whoWeAreContent: `<p>Sense Interiors is the best architectural Firm in Delhi. We, a dedicated team of architects, design functional and visually pleasing spaces. Our mission is to enhance lives through well-designed buildings.
    <br>
    With a focus on structures for human use and their surroundings, we oversee the entire building process from initial planning to final execution. Our architects bring their expertise to all projects, providing valuable insights and creating beautiful and elegant spaces. We collaborate with urbanscaping experts in Delhi to incorporate innovative designs that prioritize sustainability and utilize organic materials. 
    <br>
    By joining our projects with green spaces, we contribute to a more immature and more responsible urban landscape. With our passion for architecture and commitment to excellence, we strive to create impactful and inspiring spaces for our clients.
    </p>`,
        benefitsTitle: "Benefits of Architecture",
        benefitsContent: `<p>You will get the benefits of Architecture that shapes a nation's specific identity and image. It serves as a potent tool for moulding the cultural and social aspects of society. We examine ancient civilizations, we witness architecture's climactic role, evolving from Gothic to Neoclassical styles, notably during the Renaissance. Researching all level of large structures throughout history have not only pointed to architectural prowess but have also reflected and influenced the values, beliefs, and aesthetics of your respective societies, leaving a lasting cultural legacy.
    <br>
    Considerate architecture designs welcoming environments for people to reside, labour, and socialize, fostering well-being and conveying sentiments. We help you make structural, at personal and societal scales, enrich the social tapestry, mirroring our ambitions and culture, and defining our identity.
    </p>`,
    }

    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="Architectural firms in Delhi"
                    pageName="Architectural firms in Delhi"
                />
                <Navbar />
            </div>
            <InternalServiceSection {...architectServiceData} />



            <ServicesSection services={architectServices} />
            <BackgroundContentSection
                title="Why Choose Our Architectural Firm in Delhi?"
                description="Choose our architectural firm for your project, as we provide a distinctive mix of skill and creativity. Our specialist architects excel in designing and managing the construction of useful and visually appealing spaces. Our goal is to help to enhance lives through innovative designs.
With a focus on designs for human use and your surroundings, we handle every aspect of the building process with careful attention to detail. By teaming with urbanscape experts in Delhi, we bring innovative and sustainable designs to life, merging our projects with green spaces for a responsible urban landscape."
                additionalText="Our firm is known for its passion, excellence, and dedication to giving impactful and inspiring spaces. Rely on us to bring your vision to life, crafting a space that surpasses your expectations."

            />


            <ServicesSkillSection
                title="Quality Which Makes us Different From others as Architectural firms"
                phoneNumber="+91 9319412012"
                skills={architectserviceSkills}
            />
            <CallToActionSection
                title="If you find a high quality Architectural Firm for your project?"
                phoneNumber="+91 9821995637"
            />

        </>
    );
}