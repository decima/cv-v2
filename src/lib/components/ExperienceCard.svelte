<script>
    import Badge from "./Badge.svelte";

    const options = {
        year: 'numeric',
        month: 'short',
    };

    export let experience;

    function formatDate(date) {
        const event = new Date(date);

        return event.toLocaleDateString('fr-FR', options);
    }
</script>

<div>
    <h2 class=" text-primary content-center font-bold">
        <span class="material-symbols-outlined text-lg mr-0.5">{experience.icon}</span>
                {experience.title ?? ""} - {experience.company ?? ""}
    </h2>

    <div class=" text-sm text-secondary">
        <span class="text-sm material-symbols-outlined">calendar_month</span>
        <span class="capitalize">{formatDate(experience.from)}</span> -
        {#if experience.to } <span class="capitalize">{formatDate(experience.to)}</span> {:else} Aujourd'hui{/if}
    </div>

    {#each experience.descriptions as description }
        <div class="text-xs">{description ?? ""}</div>
    {/each}

    {#if experience.keywords}
        {#each experience.keywords as keyword }
                <Badge>{keyword}</Badge>
        {/each}
    {/if}
</div>