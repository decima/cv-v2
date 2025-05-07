<script>
    export let title = null;
    export let avoidBreak=true;

    function avoidBreakClass(){
        if(avoidBreak){
            return "break-inside-avoid";
        }
        return "";
    }
</script>

<div
    class="card card-border {avoidBreakClass()} border-base-300 bg-base-100 card-sm"
>
    <div class="card-body">
        {#if title != null}
            <h2 class="title">{title}</h2>
        {/if}
        <slot></slot>
    </div>
</div>
