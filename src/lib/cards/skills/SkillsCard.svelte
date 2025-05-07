<script>
    import { dataLoad } from "../../utils/dataLoad.js";
    import { t } from "../../stores/translate.js";
    import Card from "../../components/items/Card.svelte";

    import Badge from "../../components/Badge.svelte";

    let skillsPromise = dataLoad("skills");
    export let cols = "1";
    /**
     * due to tailwind JIT compilation, I have to write somewhere every classes available.
     * columns-1 columns-2 columns-3 columns-4 columns-5 columns-6
     */
</script>

<Card title={$t("title.skills")}>
    {#await skillsPromise}
        <p>...loading</p>
    {:then skills}
        <div class="gap-1 columns-{cols}">
            {#each skills as category}
                <div class=" break-inside-avoid mb-1">
                    <div class="p-2">
                        <h2 class="subtitle">
                            {category.name ?? ""}
                        </h2>
                        <div>
                            {#each category.keywords as keyword}
                                <Badge>{keyword}</Badge>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</Card>
