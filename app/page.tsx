import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/Cta";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the explorer"
          topic="Neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
          bookmarked={false}
        />
        <CompanionCard
          id="456"
          name="Countsy the Number wizard"
          topic="Derivatives & integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
          bookmarked={false}
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Litrature"
          duration={30}
          color="#bde7ff"
          bookmarked={false}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Completed Companions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
