import { Header, Navbar } from "@/features/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      { (
        <>
          <div id="contact-root" />
          <div id="video-root" />
          <Header
            page={"design" }
            color={
               "--ez-orange" 
            }
          />
          <Navbar />
        </>
      ) }
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className={styles.main}
          transition={{
            duration: 0.5,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
