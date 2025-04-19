import Link from "next/link"
import Image from "./image"

const PopularTags = () => {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
            <h1 className="text-xl text-textGrayLight font-bold">{"what's"} Happening</h1>
            {/* TREND EVENT*/}
            <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                    <Image path="general/post.jpeg" alt="vibes" w={120} h={120} tr={true} />
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-textGrayLight">Montain View</h2>
                    <span className="text-sm text-textGray">Last Night</span>
                </div>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray  text-xs">Technology • Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
                </div>
                <div className="">
                    <h2 className="text-textGrayLight font-bold">OpenAi</h2>
                    <span className="text-textGray text-sm">20K posts</span>
                </div>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray  text-xs">Technology • Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
                </div>
                <div className="">
                    <h2 className="text-textGrayLight font-bold">OpenAi</h2>
                    <span className="text-textGray text-sm">20K posts</span>
                </div>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray  text-xs">Technology • Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
                </div>
                <div className="">
                    <h2 className="text-textGrayLight font-bold">OpenAi</h2>
                    <span className="text-textGray text-sm">20K posts</span>
                </div>
            </div>
            {/* TOPICS */}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-textGray  text-xs">Technology • Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
                </div>
                <div className="">
                    <h2 className="text-textGrayLight font-bold text-sm">OpenAi</h2>
                    <span className="text-textGray text-sm">20K posts</span>
                </div>
            </div>
            <Link href="/" className="text-iconBlue text-sm">Show more</Link>
        </div>
    )
}

export default PopularTags