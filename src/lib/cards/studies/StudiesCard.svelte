<script>
    import { dataLoad } from "../../utils/dataLoad.js";
    import { t } from "../../stores/translate.js";
    import Card from "../../components/items/Card.svelte";

    import Icon from "../../components/icons/Icon.svelte";
    import { solid } from "../../components/icons/icon.js";

    let studiesPromise = dataLoad("studies");
</script>

<Card title={$t("title.studies")}>
    {#await studiesPromise}
        <p>...loading</p>
    {:then studies}
        <ul class="columns-2">
            {#each studies as study}
                {#if !study.hide}
                    <li class="break-inside-avoid flex flex-col gap-1">
                        <div class="mb-4 ml-4 mr-4">
                            <div class="subsubtitle uppercase">
                                <Icon
                                name={study.icon}
                                alt={study.iconAlt ?? solid}
                            />
                            {$t(study.title)}
                            </div>
                            <div class=" font-semibold opacity-60">{$t(study.date)} - {$t(study.school)}</div>
                        </div>
                    </li>
                {/if}
            {/each}
        </ul>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</Card>
