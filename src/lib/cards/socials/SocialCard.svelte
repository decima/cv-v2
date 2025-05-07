<script>
    import Icon from "../../components/icons/Icon.svelte";
    import Card from "../../components/items/Card.svelte";
    import { t } from "../../stores/translate.js";
    import { dataLoad } from "../../utils/dataLoad.js";
    let identityPromise = dataLoad("identity");
</script>

<Card>
    <div class="flex gap-2">
        {#await identityPromise then identity}
            {#each Object.entries(identity.socials) as [social, url]}
                <a href={url} target="_blank" class="text-xl">
                    <Icon name={social} alt="brand" />
                </a>
            {/each}
        {/await}
    </div>
</Card>
