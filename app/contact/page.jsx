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