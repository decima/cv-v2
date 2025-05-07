<script>
    import { dataLoad } from "../../utils/dataLoad.js";
    import { t } from "../../stores/translate.js";
    import Card from "../../components/items/Card.svelte";

    import Badge from "../../components/Badge.svelte";

    let interestsPromise = dataLoad("interests");
</script>

<Card title={$t("title.interests")}>
    {#await interestsPromise}
        <p>...loading</p>
    {:then interests}
        <ul class="">
            {#each interests as interest}
                <li class="flex flex-col gap-0">
                    <div>
                        <h2 class="subsubtitle">{interest.title}</h2>
                    </div>

                    <div class="font-light">
                        {interest.description}
                    </div>
                </li>
            {/each}
        </ul>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</Card>
