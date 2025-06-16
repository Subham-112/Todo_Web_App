import Footer from "./Footer";
import LandingPageHero from "./Hero";
import Navbar from "./Navbar";
import '../Style/Landing_Page/LandingPage.css';

export default function LandingPage() {
    return (
        <div id="ln">
            <div className="ln-nav box"><Navbar /></div>
            <div className="ln-hero box"><LandingPageHero /></div>
            <div className="ln-foot box"><Footer /></div>
        </div>
    )
}