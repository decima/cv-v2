<script>
    import { dataLoad } from "../../utils/dataLoad.js";
    import { t } from "../../stores/translate.js";
    import Card from "../../components/items/Card.svelte";

    import ExperienceItem from "./ExperienceItem.svelte";

    let experiencesPromise = dataLoad("experiences");
</script>

<Card title={$t("title.experiences")}>
    {#await experiencesPromise}
        <p>...loading</p>
    {:then experiences}
        <div class="columns-2">
            {#each Object.values(experiences) as experience}
                {#if experience.displayInResume}
                    <div class="mb-4 ml-4 mr-4">
                        <ExperienceItem {experience} />
                    </div>
                {/if}
            {/each}
                </div>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</Card>
