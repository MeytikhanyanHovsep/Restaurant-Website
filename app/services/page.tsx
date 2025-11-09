import HeadMain from "@/components/pagesDetails/headMain";
import OurTeam from "@/components/pagesDetails/ourTeam";
import Services from "@/components/pagesDetails/services";

type Props = {};

export default function page({}: Props) {
    return (
        <>
            <HeadMain page="services" title="our services" />
            <Services full={true} />
            <OurTeam />
        </>
    );
}
