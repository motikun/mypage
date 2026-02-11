'use client'

import Link from "next/link";
import { FaDiscord, FaGithub, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import { SKILLS } from "./components/Skills";
import Image from "next/image";

function ProjectCard(
  { title, des }:
  { title: string, des: string }
) {
  return (
    <div className="min-w-xs p-10 bg-white">
      <h3 className="text-black text-2xl mb-4">{title}</h3>
      <p className="text-md text-slate-600">{des}</p>
    </div>
  )
}

function ProLangCard(
  { title, des, icon }:
  { title: string, des: string, icon: React.ReactNode }
) {
  return (
    <div className="bg-white dark:bg-neutral-800 border border-slate-400 rounded-md p-8 shadow-sm dark:shadow-xl">
      <div className="flex">
        <div className="relative w-8 h-8 items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl text-black font-bold mx-1 mb-4 dark:text-white">{title}</h3>
      </div>
      <div>
        <p className="text-md text-slate-700 whitespace-pre-wrap dark:text-slate-300">
          {des}
        </p>
      </div>
    </div>
  )
}

function ContactCard(
  { title, icon, url }:
  { title: string, icon: React.ReactNode, url: string }
) {
  return (
    <Link href={url}>
      <div className="flex items-center justify-center p-4 group">
        <div className="text-white group-hover:text-blue-500 transition">
          {icon}
        </div>
        <h3 className="text-3xl text-white mx-2 font-bold underline cursor-pointer group-hover:text-blue-500 transition">{title}</h3>
      </div>
    </Link>

  )
}

export default function HomePage() {
  return (
    <div>
      <main>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-48 bg-white dark:bg-neutral-800">

          <h1 className="text-black text-6xl font-black dark:text-white">My name is <span className="text-blue-500">Moti</span></h1>
          <span className="text-slate-400 text-2xl my-4">I'm developer</span>

          <div className="border border-slate-200 w-24 mb-8" />

          <div className="flex gap-6">
            <Link href={"https://github.com/motikun"}>
              <FaGithub size={32} />
            </Link>

            <Link href={"https://x.com/motikun100"}>
              <FaXTwitter size={32} />
            </Link>
    
            <Link href={"https://discord.com/users/1162382859336683581"}>
              <FaDiscord size={32} />
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} 
          className="flex flex-col items-center justify-center pb-20 bg-white dark:bg-neutral-800">

          <h2 className="text-4xl text-[#094067] dark:text-white">私について</h2>
          <div className="border border-slate-200 w-24 my-8" />

          <div className="mx-6 max-w-2xl text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="mb-4">
              こんにちは、motiです。プログラミングやインターネットが大好きな中学生です。
            </p>
            <p className="mb-4">
              趣味でプログラミングを始めて約1年になります。最初はHTMLから入り、今ではWeb開発やネイティブアプリ開発など、興味の向くままにコードを書いています。将来はエンジニア（プログラマー）に就きたいです。
            </p>

            <h3 className="text-xl font-bold mt-8 mb-2 text-[#094067] dark:text-white">好きなこと</h3>
            <p className="mb-4">
              技術でアイデアを形にすることが好きです。
              最近は、電子工作に興味が湧きつつあります。
            </p>

            <h3 className="text-xl font-bold mt-8 mb-2 text-[#094067] dark:text-white">制作スタイル</h3>
            <p className="mb-4">
              「作りたい！」と思った瞬間に手を動かすのがモットーです。
              現在はNext.jsを使ったWeb制作や、MinecraftのMOD・プラグイン開発を中心に活動しています。
            </p>

            <h3 className="text-xl font-bold mt-8 mb-2 text-[#094067] dark:text-white">ゲーム</h3>
            <p className="mb-4">
              <strong>Minecraft:</strong> MODや外部サーバーで遊んでいます。遊ぶだけでなく開発側（MOD開発やプラグイン開発）としても楽しんでいます。<br />
              <strong>VALORANT:</strong> 最高ランクはゴールド。楽しみつつ上を目指してプレイしています。
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} 
          className="flex flex-col items-center justify-center py-20 bg-blue-50 dark:bg-neutral-700">

          <h2 className="text-4xl text-[#094067] dark:text-white">プロジェクト</h2>
          <div className="border border-slate-200 w-24 my-8" />

          <p className="text-slate-700 dark:text-slate-300">今は何もありません (´；ω；｀)</p>

          <div className="grid grid-cols-3 gap-20">
            {/* 今後プロジェクトを始めたらここに。 <ProjectCard title="" des="" /> */}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} 
          className="flex flex-col items-center justify-center lg:p-20 py-20 px-2 bg-white dark:bg-neutral-800">

          <h2 className="text-4xl text-[#094067] dark:text-white">プログラミング</h2>

          <div className="flex flex-col items-center justify-center my-8">
            <div className="border border-slate-400 w-full absolute" />
            <h3 className="text-2xl text-slate-700 bg-white z-50 px-10">言語</h3>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-18 gap-4">
            {SKILLS.map((skill) => (
              <ProLangCard 
                key={skill.title}
                title={skill.title}
                des={skill.des}
                icon={skill.icon}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center my-8">
            <div className="border border-slate-400 w-full absolute" />
            <h3 className="text-2xl text-slate-700 bg-white z-50 px-10">フレームワーク・ライブラリ</h3>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-18 gap-4">
            <ProLangCard title="React" 
              des="JSのライブラリです。最近、興味が湧き始めたので使っています。まだまだ歴は浅いですがある程度のことならできるようになってきました。
              このサイトもReactを使用しています。"
              icon={<FaReact size={32} />} />

            <ProLangCard title="Next.js"
              des="Reactのフレームワークです。これも、最近興味が湧き始めたので使っています。Reactと一緒に使い始めたので歴は浅いです。
              これも、ある程度のことならできるようになってきました。React同様、このサイトもNext.jsを使っています。"
              icon={<RiNextjsFill size={32} />} />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} 
          className="flex flex-col items-center justify-center p-20 bg-[#094067] dark:bg-gray-800">

          <h2 className="text-4xl text-white mb-6">連絡先</h2>

          <div className="grid grid-cols-1 md:flex md:gap-4">
            <ContactCard title="Github" icon={<FaGithub size={32} />} url="https://github.com/motikun" />
            <ContactCard title="Twitter (X)" icon={<FaXTwitter size={32} />} url="https://x.com/motikun100" />
            <ContactCard title="Discord" icon={<FaDiscord size={32} />} url="https://discord.com/users/1162382859336683581" />
            <ContactCard title="Email" icon={<IoIosMail size={32} />} url="mailto:motikun070@gmail.com" />
          </div>
        </motion.section>
      </main>

      <footer className="flex items-center justify-center bg-[#094067] dark:bg-gray-800">
        <span className="text-white my-4">&copy; 2026 Moti. All rights reserved.</span>
      </footer>
    </div>
  )
}