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
