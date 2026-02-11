import Image from "next/image";

export const SKILLS = [
  {
    title: "HTML",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        alt="HTML"
        fill
        className="object-contain"
      />
    ),
    des: "この言語から始めました。基礎をマスターし、現在は様々なWebサイト制作に活用しています。"
  },
  {
    title: "CSS",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        alt="CSS"
        fill
        className="object-contain"
      />
    ),
    des: "HTMLと同時期に始めました。こちらも基礎をマスターし、活用しています。(最近はTailwindを使っていますが)"
  },
  {
    title: "Python",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="Python"
        fill
        className="object-contain"
      />
    ),
    des: "主に簡単なGUIソフトやDiscordBotの開発に使っています。ライブラリが豊富で重宝しています。"
  },
  {
    title: "Java",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        alt="Java"
        fill
        className="object-contain"
      />
    ),
    des: "MinecraftのMODやプラグインを開発するのに使っています。実行速度が速いので愛用しています。"
  }
];