export const metadata = {
  title: "Contact Sense Interiors | Interior Design Consultant Delhi NCR",
  description:
    "Get in touch with Sense Interiors for expert interior design consultancy services in Delhi NCR. Contact us for residential, commercial, and industrial interior design projects.",
  keywords: [
    "contact interior designer Delhi",
    "interior design consultancy contact",
    "interior designer phone number Delhi",
    "office interior design contact",
    "residential interior design inquiry",
    "commercial interior design contact Delhi NCR",
    "interior design consultation Delhi",
    "Sense Interiors contact details",
    "best interior design consultant Delhi",
    "interior design help Delhi NCR",
    "reach Sense Interiors"
  ],
  metadataBase: new URL("https://senseinteriors.in"),
  alternates: {
    canonical: "/contact",
    types: {
      "application/rss+xml": [
        {
          title: "Sense Interiors Contact Updates » Feed",
          url: "https://senseinteriors.in/feed/",
        },
        {
          title: "Sense Interiors Contact Comments » Comments Feed",
          url: "https://senseinteriors.in/comments/feed/",
        },
      ],
    },
  },
  openGraph: {
    title: "Contact Sense Interiors | Interior Design Consultant Delhi NCR",
    description:
      "Reach out to Sense Interiors for professional interior design services across residential, commercial, and industrial sectors in Delhi NCR. We’re here to help!",
    url: "https://senseinteriors.in/contact",
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




import ContactSection from "@/components/Contact-section";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";

export default function Contact() {
    return (
        <>
             <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="Contact Us"
                    pageName="Contact"
                />
                <Navbar />
            </div>
            <ContactSection/>
        </>
    );
}