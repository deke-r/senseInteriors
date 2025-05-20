export const metadata = {
  title: "Our Interior Design Projects | Sense Interiors",
  description:
    "Explore the portfolio of Sense Interiors showcasing our completed residential, commercial, and industrial interior design projects in Delhi NCR. Discover innovative and customized design solutions.",
  keywords: [
    "interior design projects Delhi",
    "residential interior projects",
    "commercial interior projects",
    "industrial interior design portfolio",
    "modern interior designs Delhi NCR",
    "completed interior projects Sense Interiors",
    "interior design case studies",
    "office interior design projects",
    "custom interior solutions",
    "best interior designers Delhi projects",
    "Sense Interiors portfolio"
  ],
  metadataBase: new URL("https://senseinteriors.in"),
  alternates: {
    canonical: "/our-projects",
    types: {
      "application/rss+xml": [
        {
          title: "Sense Interiors Project Updates » Feed",
          url: "https://senseinteriors.in/feed/",
        },
        {
          title: "Sense Interiors Project Comments » Comments Feed",
          url: "https://senseinteriors.in/comments/feed/",
        },
      ],
    },
  },
  openGraph: {
    title: "Our Interior Design Projects | Sense Interiors",
    description:
      "View Sense Interiors' portfolio of interior design projects across residential, commercial, and industrial sectors in Delhi NCR. Quality, creativity, and innovation in every project.",
    url: "https://senseinteriors.in/our-projects",
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




import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import PortfolioPage from "@/components/PortfolioSection";


export default function OurProjects() {
    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/img/bg-header.webp"
                    title="Our Projects"
                    pageName="Our Projects"
                />
                <Navbar />
            </div>
            <PortfolioPage />
        </>
    );
}
