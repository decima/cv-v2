<script>
    export let study;
</script>

<div class="w-full">
    <h2 class="text-sm text-primary content-center font-bold">
        {study.title ?? ""}
    </h2>

    <div class="text-xs text-secondary flex gap-2">
        <div>
            <span class="material-symbols-outlined text-xs">calendar_month</span> {study.date}
        </div>
        <div>
            <span class="material-symbols-outlined text-xs">pin_drop</span> {study.school}
        </div>
    </div>

    <div class="text-xs">{study.description ?? ""}</div>
</div>