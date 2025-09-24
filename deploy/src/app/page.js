import Image from "next/image";
import MyIntroduction from "./page/MyIntroduction";
import styles from './css/container.module.css';


export default function Home() {
  return (
    <div className={`${styles.container}`}>

            <MyIntroduction />
      </div>
  );
}
