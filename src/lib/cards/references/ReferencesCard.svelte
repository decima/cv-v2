<script>
    import Card from "../../components/items/Card.svelte";
    import { dataLoad } from "../../utils/dataLoad";
    import { t } from "../../stores/translate.js";

    let referencesPromise = dataLoad("references");
    function formatEmail(email) {
        if (!email) {
            return null;
        }
        return `<a target=blank href="mailto:${email}">${email}</a>`;
    }
    function formatPhone(phone) {
        if (!phone) {
            return null;
        }
        return `<a target=blank href="tel:${phone}">${phone}</a>`;
    }
</script>

<Card title={$t("title.references")}>
    {#await referencesPromise}
        <p>...loading</p>
    {:then references}
        <ul>
            {#each Object.values(references) as reference}
                <li>
                    <h2 class="subsubtitle">
                        {reference.name}
                        {#if reference.title}
                            - {reference.title}
                        {/if}
                    </h2>
                    {@html [
                        formatEmail(reference.email),
                        formatPhone(reference.phone),
                    ]
                        .filter((v) => v)
                        .join(" - ")}
                </li>
            {/each}
        </ul>
    {/await}
</Card>
