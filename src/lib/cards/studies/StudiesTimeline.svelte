<script>
    import { dataLoad } from "../../utils/dataLoad.js";
    import { t } from "../../stores/translate.js";
    import Card from "../../components/items/Card.svelte";

    import Location from "../../components/icons/Location.svelte";
    import Calendar from "../../components/icons/Calendar.svelte";
    import Timeline from "../../components/timeline/Timeline.svelte";
    import Timepoint from "../../components/timeline/Timepoint.svelte";

    let studiesPromise = dataLoad("studies");
</script>

<Card title={$t("title.studies")}>
    {#await studiesPromise}
        <p>...loading</p>
    {:then studies}
        <Timeline>
            {#each studies as study, index}
                <Timepoint end={index%2==0} icon={"laptop"}>
                    <h3 class="text-sm text-primary content-center font-bold">
                        {study.title ?? ""}
                    </h3>

                    <div class=" flex flex-col">
                        <div class="flex gap-1">
                            <Calendar />
                            {study.date}
                        </div>
                        <div class="flex gap-1">
                            <Location />
                            {study.school}
                        </div>
                    </div>

                    <div class="text-xs">{study.description ?? ""}</div>
                </Timepoint>
            {/each}
        </Timeline>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</Card>
