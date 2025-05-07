<script>
    import Icon from "../icons/Icon.svelte";
    export let end=true;
    export let icon="envelope";
    
    function getPosition(){
        return end ? "timeline-end":"timeline-start";
    }

</script>
<li>
    <hr/>
    <div class="timeline-middle">
        <Icon name={icon}/>
    </div>
    <div class="{getPosition()}">
        <slot></slot>
    </div>
    <hr/>
</li>
