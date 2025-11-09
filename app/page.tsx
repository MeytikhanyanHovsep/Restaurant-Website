import About from "@/components/pagesDetails/about";
import Categories from "@/components/product/categories";
import Main from "@/components/pagesDetails/main";
import OurTeam from "@/components/pagesDetails/ourTeam";
import Services from "@/components/pagesDetails/services";

export default function page() {
    return (
        <>
            <Main />
            <Categories />
            <About />
            <Services />
            <OurTeam />
        </>
    );
}
