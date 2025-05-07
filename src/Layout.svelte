<script>
    import "./app.css";
    import ExperiencesCard from "./lib/cards/experiences/ExperiencesCard.svelte";
    import InterestsCard from "./lib/cards/interests/InterestsCard.svelte";
    import ProfileCard from "./lib/cards/profile/ProfileCard.svelte";
    import RecommendationCard from "./lib/cards/references/ReferencesCard.svelte";
    import ProjectsCard from "./lib/cards/references/ReferencesCard.svelte";
    import SkillsCard from "./lib/cards/skills/SkillsCard.svelte";
    import SocialCard from "./lib/cards/socials/SocialCard.svelte";
    import StudiesCard from "./lib/cards/studies/StudiesCard.svelte";
    import Card from "./lib/components/items/Card.svelte";
    import CopyrightFooter from "./lib/CopyrightFooter.svelte";
</script>

<main class=" h-screen flex flex-col justify-between gradient-bg">
    <article class="max-w-3xl mx-auto print:max-w-none flex flex-col">
        <div class="grid grid-cols-3 gap-1 p-2">
            <div class="flex flex-col gap-1">
                <ProfileCard />
                <SkillsCard cols="1" />
                <SocialCard />
            </div>
            <div class="col-span-2 flex flex-col gap-1">
                <StudiesCard />
                <ExperiencesCard />
                <div class="grid grid-cols-2 gap-1">
                    <InterestsCard />
                    <RecommendationCard />
                </div>
            </div>
        </div>
    </article>
    <CopyrightFooter />
</main>
