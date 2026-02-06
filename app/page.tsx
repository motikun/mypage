import Link from "next/link";
import { FaCss3Alt, FaDiscord, FaGithub, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

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
    <div className="border border-slate-400 rounded-md p-8 shadow-sm">
      <div className="flex">
        {icon}
        <h3 className="text-2xl text-black font-bold mx-1 mb-4">{title}</h3>
      </div>
      <div>
        <p className="text-md text-slate-600 whitespace-pre-wrap">
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
        <section className="flex flex-col items-center justify-center py-48 bg-white">
          <h1 className="text-black text-6xl font-black">My name is <span className="text-blue-500">Moti</span></h1>

          <div className="border border-slate-200 w-24 my-8" />

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
        </section>

        <section className="flex flex-col items-center justify-center py-20 bg-blue-50">
          <h2 className="text-4xl text-[#094067]">プロジェクト</h2>

          <div className="border border-slate-200 w-24 my-8" />

          <p className="text-slate-600">今は何もありません (´；ω；｀)</p>

          <div className="grid grid-cols-3 gap-20">
            {/* 今後プロジェクトを始めたらここに。 <ProjectCard title="" des="" /> */}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center lg:p-20 py-20 px-2 bg-white">
          <h2 className="text-4xl text-[#094067]">プログラミング言語</h2>

          <div className="border border-slate-200 w-24 my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-18 gap-4">
            <ProLangCard title="HTML" 
              des="この言語から始めました。
                    今はほとんど使い方をマスターし、使いこなしています。" 
              icon={<FaHtml5 size={32} />} />

            <ProLangCard title="CSS" 
              des="HTMLと同時期に始めました。
              これも、今はほとんど使い方をマスターし、使いこなしています。
              (最近はTaildwindを使っていますが)" 
            icon={<FaCss3Alt size={32} />} />
            
            <ProLangCard title="Python" 
              des="主に簡単なGUIソフトやDiscordBotの開発に使っています。
              ライブラリが豊富で、色々なところで活躍してくれます。" 
            icon={<FaPython size={32} />} />

            <ProLangCard title="Java" 
              des="MinecraftのMODやプラグインを開発するのに使っています。
              処理速度はC++に劣るものの、実行のしやすさや処理速度が早いので愛用しています。" 
            icon={<FaJava size={32} />} />
          
          </div>
        </section>

        <section className="flex flex-col items-center justify-center p-20 bg-[#094067]">
          <h2 className="text-4xl text-white mb-6">連絡先</h2>

          <div className="grid grid-cols-1 md:flex md:gap-4">
            <ContactCard title="Github" icon={<FaGithub size={32} />} url="https://github.com/motikun" />
            <ContactCard title="Twitter (X)" icon={<FaXTwitter size={32} />} url="https://x.com/motikun100" />
            <ContactCard title="Discord" icon={<FaDiscord size={32} />} url="https://discord.com/users/1162382859336683581" />
            <ContactCard title="Email" icon={<IoIosMail size={32} />} url="mailto:motikun070@gmail.com" />
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center bg-[#094067]">
        <span className="text-white my-4">&copy; 2026 Moti. All rights reserved.</span>
      </footer>
    </div>
  )
}