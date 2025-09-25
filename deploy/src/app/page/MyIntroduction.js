import Link from "next/link";
import styles from "../css/profile.module.css";
import Image from "next/image";

const getMyIntro = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/stayonasDev/practice-linux/refs/heads/main/deploy/service/resume_general_info_service.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getTeamIntro = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/stayonasDev/practice-linux/refs/heads/main/deploy/service/resume_portfolio_service.json'
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function MyIntroduction() {
  const data = await getMyIntro();
  const teamData = await getTeamIntro();

  return (
    // card
    <div className={`${styles.card}`}>
      <Image
        src="/영지&유진.jpg"
        alt="Vercel logomark"
        width={305}
        height={300}
      />
      <div>
        {/* myIntro */}
      <div className={`${styles.myIntro}`}>
        <div className={`${styles.introItem}`}>이름: {data.name}</div>
        <div className={`${styles.introItem}`}>Git Hub ID: {data.github}</div>
        <div className={`${styles.introItem}`}>My Introduction: {data.intro}</div>
      </div>
    {/* myIntro */}


    <div className={`${styles.myIntro}`}>
      <div className={`${styles.introItem}`}>Project Name: {teamData.projectName}</div>
      <div className={`${styles.introItem}`}>Taem Intro: {teamData.projectIntro}</div>
      <div className={`${styles.introItem}`}>URL: <Link href={teamData.url}>클릭 시 팀 프로젝트 이동!</Link></div>
    </div>

    </div>
    </div>
    // card
  );
}
