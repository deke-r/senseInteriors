export const metadata = {
  title: "Turnkey Interior Contractor in Delhi | Sense Interiors",
  description:
    "Sense Interiors is the leading turnkey interior contractor in Delhi. We specialize in residential, commercial, and industrial sectors. Call us at +91-9821995637.",
  keywords: [
    "Turnkey Interior Contractor",
    "Turnkey Interior projects",
    "Turnkey solutions in Delhi NCR",
    "Interior design and build",
    "Residential turnkey interiors",
    "Commercial turnkey contractors",
    "Industrial turnkey projects",
    "Best turnkey interior company in Delhi",
    "Design and build contractors Delhi",
    "Full-service interior contractors",
    "Top turnkey interior firm NCR"
  ],
  metadataBase: new URL("https://senseinteriors.in"),
  alternates: {
    canonical: "/turnkey-project-in-delhi-ncr",
    types: {
      "application/rss+xml": [
        {
          title: "Interior designers in Delhi, Noida, Gurgaon, office interior designer in Delhi » Feed",
          url: "https://senseinteriors.in/feed/",
        },
        {
          title: "Interior designers in Delhi, Noida, Gurgaon, office interior designer in Delhi » Comments Feed",
          url: "https://senseinteriors.in/comments/feed/",
        },
      ],
    },
  },
  openGraph: {
    title:
      "Turnkey Projects Provider in Delhi NCR | Top Turnkey Solutions Pan India - Sense Interiors",
    description:
      "Sense Interiors is the leading and best turnkey solutions provider company in Delhi NCR and Pan India. Specializing in complete interior execution for all sectors.",
    url: "https://senseinteriors.in/turnkey-project-in-delhi-ncr",
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





import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import InternalServiceSection from '../../components/InternalServiceSection';
import CallToActionSection from "@/components/Call-to-action-section";
import { turnkeyServices, turnkeyserviceSkills } from "@/data/content";
import ServicesSection from "@/components/Services-section";
import BackgroundContentSection from "@/components/Background-content-section";
import ServicesSkillSection from "@/components/Services-skill-section";
export default function TPIDN() {
    const architectServiceData = {
        title: "Turnkey Solutions",
        mainContent: `<p>
        <strong>Turnkey Interior Contractors in Delhi
</strong><br><br>
        
 Sense Interior is a leading Turnkey Interior contractor in Delhi. Turnkey interior design by Sense Interior We handle it all, from layouts to moving days. Your dream home is effortlessly designed and built with care. Simplify your journey with us. It provides custom interior design services for residential, commercial, and industrial spaces.
    <br>
Our team creates unique designs that perfectly match your project. As an experience, we make the perfect blend of style that functions with our tailored interior designs. From initial concepts to final execution, we deliver exceptional results.
    </p>`,
        imageSrc: "/img/turnkey-project-in-delhi-ncr.webp",
        imageAlt: "Turney firms in Delhi",
        whoWeAreTitle: "Sense Interiors is the leading and the best Turnkey Solutions provider company in Delhi NCR and Pan India.",
        whoWeAreContent: `<p>At Centaurus Designs, we offer a turnkey solution for your interior design needs. With a turnkey project, you can trust that one person will handle everything, from the initial meeting to the final touches. Our team ensures a seamless experience from start to finish, taking care of each aspect. Once you've communicated your requirements and preferences, sit back and relax as we take charge of transforming your space into the interior of your dreams.
    <br>
   At Sense Interior Designs, we prioritize delivering exceptional results. Our team is dedicated to providing you with a hassle-free journey, offering personalized attention, meticulous planning, and a commitment to delivering outstanding interior designs that align perfectly with your vision. Trust us for a seamless and satisfying experience. You can sit back and enjoy as we bring your dream space to life.

    </p>`,
        benefitsTitle: "Collaborating as Turnkey Contractors in Delhi NCR and Pan India.",
        benefitsContent: `<p>Choosing Sense Interiors means clarity in design and cost. We specialize in custom fabrication and product procurement, collaborating with top-notch local and national vendors. Our experienced team, led by her, ensures the finest furnishings and outcomes. We have successfully delivered turnkey projects in Delhi. Trust us to create your perfect space.
    <br>
Choose Sense Interiors for hassle-free interiors. Our turnkey service seamlessly blends design and construction, ensuring your dream home from concept to move-in. We take care of layouts, planning, and every detail. With us, your journey from vision to reality is smooth, stress-free, and tailored just for you."
    </p>`,
    }

    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="Are you looking for turnkey interior contractors in Delhi?"
                    pageName="Turnkey Interior"
                />
                <Navbar />
            </div>
            <InternalServiceSection {...architectServiceData} />



            <ServicesSection services={turnkeyServices} />
       <BackgroundContentSection
  title="Why Choose Our Turnkey Solutions?"
  description="Our Turnkey Solutions offer a seamless experience from concept to completion. We manage every aspect of your project—design, planning, procurement, and execution—so you don't have to worry about coordinating multiple vendors. With our expert team at the helm, you get a single point of contact and complete transparency throughout the process.
From residential renovations to full-scale commercial developments, our focus is on quality, efficiency, and timely delivery. We tailor each project to your vision while ensuring it’s built to last with premium materials and innovative methods."
  additionalText="Clients trust us for our commitment to excellence, streamlined execution, and eye for detail. Let us turn your dream space into a reality—efficiently, beautifully, and stress-free."
/>


            <ServicesSkillSection
                title="Quality Which Makes us Different From others as Turnkey Solutions in Delhi"
                phoneNumber="+91 9319412012"
                skills={turnkeyserviceSkills}
            />
            <CallToActionSection
                title="Looking for high quality constructor for your project Residential, Industrial Hotels & Resorts? Call Now"
                phoneNumber="+91 9821995637"
            />

        </>
    );
}