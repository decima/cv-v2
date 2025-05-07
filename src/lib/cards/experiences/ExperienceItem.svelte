<script>
    import Badge from "../../components/Badge.svelte";
    import Calendar from "../../components/icons/Calendar.svelte";
    import { t } from "../../stores/translate.js";
    import { ymFormat } from "../../utils/date";

    function formatDate(date) {
        return ymFormat(date)
    }
    export let experience;
</script>

<div>
    <div class="subtitle">{$t(experience.title)}</div>
    <div class="text-xs uppercase font-semibold opacity-60">
        {$t(experience.company)}
    </div>
    <Calendar />
    {formatDate(experience.from)} -
    {#if experience.to}
        {formatDate(experience.to)}{:else}
        {$t("now")}{/if}
</div>
<div class=" text-xs opacity-60"></div>
<!-- <div>
    {#if experience.keywords}
        {#each experience.keywords as keyword}
            <Badge>{keyword}</Badge>
        {/each}
    {/if}
</div> -->
<div class="text-xs text-justify-start">{$t(experience.description)}</div>
