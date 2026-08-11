import { Container } from "@/components/ui/Container";
import { PersistentSidebar } from "@/components/home/PersistentSidebar/PersistentSidebar";
import { HomePageSections } from "@/components/home/HomePageSections/HomePageSections";
import styles from "./HomeContentLayout.module.css";

export function HomeContentLayout() {
  return (
    <section className={styles.shell} id="home-content">
      <Container className={styles.layout}>
        <PersistentSidebar />
        <div className={styles.contentColumn}>
          <HomePageSections />
        </div>
      </Container>
    </section>
  );
}
