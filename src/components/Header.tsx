import Image from 'next/image';
import Link from 'next/link';

import styles from "./Header.module.scss"

const menus = [
  { link: "/service", text: "서비스 소개" },
  { link: "/faq", text: "자주 묻는 질문" },
  { link: "/notice", text: "새소식" },
  { link: "/contact", text: "상담문의" },
]

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/img/kia-biz-logo.svg" alt="KIA Biz Logo" width={140} height={80} priority />
          </Link>
        </div>

        <div className={styles.menuContainer}>
          {
            menus.map((menu) => (
              <Link href={menu.link} key={menu.link} className={styles.menu}>
                {menu.text}
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
