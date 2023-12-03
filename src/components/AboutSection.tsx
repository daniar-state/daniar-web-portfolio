import Image from "next/image"
import { Heading } from "./Heading"
import { socialLinks } from "@/data/socailLinksData"
import { CustomLink } from "./CustomLink"


export function AboutSection() {
    return (
        <section id="about" className="scroll-mt-28">
            <Heading title="Контактная информация" desc="Небольшое реадми обо мне :)" />

            <div className="flex gap-4 flex-col md:flex-row items-center">
                <div className="h-80 w-80 shrink-0 overflow-hidden rounded-full">
                    <Image 
                        src="/mylogo.jpg"
                        alt=""
                        width={600}
                        height={600}
                        className="w-full h-full object-top object-cover"
                    />
                </div>
                <div className="text-zinc-400">
                    <p className="text-zinc-200 text-xl">Привет, меня зовут Данияр Жабагин</p>
                    <p className="text-zinc-400">
                        Я занимаюсь разработкой веб-сайтов и программного обеспечения на базе 
                        Javascript (NodeJS, React), Python (Django, Flask, FastAPI). 
                        Я могу помочь, если вам нужен надежный разработчик и технический партнер 
                        для решения ваших бизнес-задач или вопросов. <br /><br />
                        В течение последних 6 лет я предоставляю следующие услуги:<br />
                        ✅ Разработка программного обеспечения<br />
                        ✅ Разработка веб-приложений<br />
                        ✅ Цифровая трансформация<br />
                        ✅ Разработка и интеграция API<br />
                        ✅ Разработка MVP<br />
                        ✅ Облачная разработка<br />
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