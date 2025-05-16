export const metadata = {
  title: "Best Interior Design Company in Delhi NCR - Sense Interiors Pvt Ltd.",
  description: "Sense Interiors Pvt. Ltd. is a leading interior design company in Delhi NCR. We cover the residential, commercial, and Industrial sectors. Book a consultation now!",
  keywords: [
    "Interior Design Company",
    "interior design firm",
    "Interior Designers"
  ],
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxVideoPreview: -1,
    maxImagePreview: "large"
  },
  alternates: {
    canonical: "https://senseinteriors.in/",
    types: {
      "application/rss+xml": [
        {
          title: "Interior designers in Delhi, Noida, Gurgaon, office interior designer in Delhi » Feed",
          url: "https://senseinteriors.in/feed/"
        },
        {
          title: "Interior designers in Delhi, Noida, Gurgaon, office interior designer in Delhi » Comments Feed",
          url: "https://senseinteriors.in/comments/feed/"
        }
      ]
    }
  },
  openGraph: {
    title: "Interiors Design Services in Delhi NCR, commercial and residential interior design in Delhi NCR",
    description: "Best Interior Designers in Delhi NCR - Latest Interiors offers residential, Corporate Retail, Hospitality, Industrial, Institutional interior design services. Call our interior decorators in Delhi now.",
    url: "https://senseinteriors.in/interior-design-company-in-delhi",
    siteName: "Sense Interiors",
    locale: "en_US",
    type: "website"
  }
}




import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import HeroSection from "../components/Hero-section"
import ServicesSection from "../components/Services-section"
import WhoWeAreSection from "../components/Who-we-are-section"
import CallToActionSection from "../components/Call-to-action-section"
import WhyChooseUsSection from "../components/Why-choose-us-section"
import ServicesSkillSection from "../components/Services-skill-section"
import BackgroundContentSection from "../components/Background-content-section"
import ClientsSection from "../components/Clients-section"
import TestimonialsSection from "../components/Testimonials-section"
import Footer from "../components/Footer"

import { designServices, whyChooseUs, serviceSkills, testimonials } from "@/data/content"

export default function Home() {
  return (
    <main>
        <div className="banner-top">
        <Carousel />
        <div className="video-overlay"></div>
        <Navbar />
      </div>
      <HeroSection
        title="Are you looking for the Most Experienced Interior Designers & Architects?"
        areas={[
          "Basement",
          "Bathroom",
          "Bedroom",
          "Dining Room",
          "Family Room",
          "Kitchen",
          "Living room",
          "Nursery",
          "Outdoor",
          "living home",
        ]}
        subtitle="Best Interior Designing & Architectural Company Based in Delhi Noida, Gurgaon, Faridabad & Ghaziabad."
        description="Sense Interiors is an interior designing and architectural company that was established in 1998. We specialize in balancing interior design and architecture services and crafting beautiful designs for your needs. With a team of designers, we have successfully completed over 1300 projects across Pan India, offering a diverse range of balancing packages."
        additionalText="In truth, We offer a wide range of design and architectural services surrounding residential and commercial projects. Our expertise extends to apartments, homes, offices, salons, restaurants, and home interiors with architectural renovations. With this personalized consultation and turnkey solutions, we aim uniquely to create unique and aesthetic spaces that reflect your individual style and preferences."
        welcomeTitle="Welcome to India's Leading, Most Experienced Interior Designers & Architectural Firm"
        imageSrc="/img/Interior-Art-Work-for-website.webp"
      />

      <WhoWeAreSection
        mainImage="/img/who-we.webp"
        infoTitle="Get Your Free consulting"
        infoLinkText="CLICK HERE!"
        infoLinkUrl="#"
        infoDescription="If you are confusing? Do not worry. We offer a free consultation to help you make a decision with the best creativity and quality that you deserve."
        title="Who We Are?"
        subtitle="Sense Interior Pvt. Ltd is a renowned nationwide interior design and architectural company that excels in providing good quality services at competitive and flexible prices. Our track record of successful project completions showcases our ability to optimize budgets by leveraging our vast experience and industry expertise."
        description="Moreover, As a premier interior designer and architectural company, we boast a team of leading and highly experienced professionals. We recognize the challenges clients face in selecting the right firm, we offer wide solutions that are our priority quality, costing, performance, trustworthiness, reliability, and timely delivery. Our commitment is to exceed expectations, ensuring utmost client satisfaction in every aspect."
        additionalText="Similarly, we create functionality as a crucial aspect of designed spaces, helping seamless daily task performance with comfort. In the field of interior design and architecture, the integration of functional elements ensures that spaces not only visually appeal but also serve their intended purpose efficiently."
        contactNumber="+91 9821995637"
      />

      <ServicesSection services={designServices} />

      <CallToActionSection
        title="Looking for high quality services for your project Residential, Industrial Hotels & Resorts? Call Now"
        phoneNumber="+91 9821995637"
      />

      <WhyChooseUsSection items={whyChooseUs} />

      <ServicesSkillSection
        title="Quality Which Makes us Different From others as Interior Designing Company"
        phoneNumber="+91 9319412012"
        skills={serviceSkills}
      />

      <BackgroundContentSection
        title="Complete Interior Designing & Architectural Solution"
        description="Our Interior design solution contains a careful selection process for wall paints, textures, patterns, ceiling and flooring options. Our team of architects of making the structure of place prioritize balanced combinations of furniture design, colour, texture, and patterns, ensuring a cohesive and unique interior design that highlights the desired atmosphere and brings out the best features of each structure."
        additionalText="Moreover, prior to project initiation, our team imparts extensive knowledge about furniture and installations. Our supervision is important, ensuring flawless, meticulously designed interiors goes credit for project success goes to our highly skilled and experienced interior design team, guaranteeing excellence in every part of the process."
        furtherText="Sense Interiors with architecture excels in residential, commercial, industrial, and hotel space design. With the renowned and creative for our creative prowess, we've decorated India with prestigious projects. Our detailed sketches encompass furniture layouts, ceiling designs, electrical plans, woodwork, wall concepts, and flooring details, ensuring a thorough understanding."
      />

      <ClientsSection />

      <TestimonialsSection testimonials={testimonials} imageSrc="/img/image2-home2.webp" />

   
    </main>
  )
}
