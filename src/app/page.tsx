import NavBar from "@/app/components/NavBar";
import TopStories from "./components/TopStories";
import LatestNews from "./components/LatestNews";
import FirstNews from "./components/FirstNew";
import OtherNews from "./components/OtherNews";
import FeaturedStories from "./components/FeatureProduct";
import VideoNews from "./components/VideoNews";
import MissedStory from "./components/MissedStory";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
<NavBar/>
<TopStories/>
<LatestNews/>
<FirstNews/>
<OtherNews />
<OtherNews />
<OtherNews />
<FeaturedStories/>
<VideoNews />
<TopStories/>
<MissedStory/>
<Footer />
    </div>
  );
}
