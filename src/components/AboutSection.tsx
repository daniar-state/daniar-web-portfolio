import Image from "next/image"
import { Heading } from "./Heading"
import { socialLinks } from "@/data/socailLinksData"
import { CustomLink } from "./CustomLink"


export function AboutSection() {
    return (
        <section id="about" className="scroll-mt-28">
            <Heading title="Обо мне" desc="Немного о себе" />

            <div className="flex gap-4 flex-col md:flex-row items-center">
                <div className="h-80 w-80 shrink-0 overflow-hidden rounded-full">
                    <Image 
                        src="/vercel.svg"
                        alt=""
                        width={600}
                        height={600}
                        className="w-full h-full object-top object-cover"
                    />
                </div>
                <div className="text-zinc-400">
                    <p>Привет, я Данияр Жабагин</p>
                    <p className="text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quibusdam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quibusdam. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quibusdam.
                    </p>
                    <ul className="flex gap-2 mt-4">
                        {socialLinks.map(({ icon: IconBase, href }, index) => {
                            return (
                                <li key={index}>
                                    <CustomLink href={href} linkType="secondary" className="w-10 h-10 p-0 rounded-full flex justify-center items-center">
                                        <IconBase className="text-xl shrink-0" />
                                    </CustomLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}