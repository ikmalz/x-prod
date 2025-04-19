import Link from "next/link"
import PopularTags from "./PopularTags"
import Recommendations from "./Recommendations"
import Search from "./Search"

const RightBar = () => {
    return (
        <div className="pt-4 flex-col flex gap-4 sticky top-0 h-max">
            <Search/>
            <PopularTags/>
            <Recommendations/>
            <div className="text-textGray flex text-sm gap-x-4 flex-wrap">
                <Link href="/">Terms of Services</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Cookie Policy</Link>
                <Link href="/">Accessibility</Link>
                <Link href="/">Ads Info</Link>
                <span>o 2025 i Corp.</span>
            </div>
        </div>
    )
}

export default RightBar