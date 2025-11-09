import HeadMain from "@/components/pagesDetails/headMain";
import About from "@/components/pagesDetails/about";
import OurTeam from "@/components/pagesDetails/ourTeam";

type Props = {};

export default function page({}: Props) {
    return (
        <>
            <HeadMain page="about" title="about us" />
            <About />
            <OurTeam />
        </>
    );
}
