import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/Cta";
import {
  getAllCompanions,
  getBookmarkedCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const companions = await getAllCompanions({ limit: 3 });
  const bookmarkedCompanions = await getBookmarkedCompanions(userId!);
  const recentSessionsCompanions = await getRecentSessions(10);
  /* eslint-disable no-param-reassign */
  companions.forEach((c) => {
    c.bookmarked = (bookmarkedCompanions ?? []).some(
      (item) => item.id === c.id
    );
  });
  /* eslint-enable no-param-reassign */
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
