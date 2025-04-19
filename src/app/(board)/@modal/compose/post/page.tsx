"use client"

import Image from "@/components/image"
import { useRouter } from "next/navigation"

const PostModal = () => {

    const router = useRouter()

    const closeModal = () => {
        router.back()
    }

    return (
        <div className="fixed w-screen overflow-x-hidden h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
            <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
                {/* TOP */}
                <div className="flex items-center justify-between">
                    <div className="cursor-pointer" onClick={closeModal}>✖</div>
                    <div className="text-iconBlue font-bold">Drafts</div>
                </div>
                {/* CENTER */}
                <div className="py-8 flex gap-4">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                        <Image path="/general/user.png" alt="Ikmal fairuz" w={100} h={100} tr={true} />
                    </div>
                    <input className="flex-1 bg-transparent outline-none text-md" type="text" placeholder="What is happening?!" />

                </div>
                {/* BOTTOM */}
                <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
                    <div className="flex gap-4 flex-wrap">
                        <Image path="icons/image.svg" alt="" w={20} h={20} className="cursor-pointer" />
                        <Image path="icons/gif.svg" alt="" w={20} h={20} className="cursor-pointer" />
                        <Image path="icons/poll.svg" alt="" w={20} h={20} className="cursor-pointer" />
                        <Image path="icons/emoji.svg" alt="" w={20} h={20} className="cursor-pointer" />
                        <Image path="icons/schedule.svg" alt="" w={20} h={20} className="cursor-pointer" />
                        <Image path="icons/location.svg" alt="" w={20} h={20} className="cursor-pointer" /></div>
                    <button className="py-2 px-5 text-black bg-white rounded-full font-bold">Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostModal