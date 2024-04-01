<script>
    import {t} from "../stores/translate.js";
    import {dataLoad} from "../utils/dataLoad.js";
    import Badge from "./Badge.svelte";
    import StudyCard from "./StudyCard.svelte";

    let interestsPromise = dataLoad("interests");
</script>
<div>
    <h1 class="title text-right">{$t("title.interests")}</h1>

    {#await interestsPromise}
        <p>...loading</p>
    {:then interests}
        <div class="text-xs flex flex-col">
            {#each interests as interest}
                <div class="inline-flex flex-row justify-end gap-1 content-center">
                    <span class="material-symbols-outlined text-primary text-sm">{interest.icon}</span>
                    <span class="text-primary font-bold content-center">{interest.title}</span>
                    <span class="font-light content-center">{interest.description}</span>
                </div>
            {/each}

        </div>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</div>