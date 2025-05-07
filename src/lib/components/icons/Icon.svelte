<script>
    import { brand, duotone, light, solid, thin } from "./icon";

    export let extra = "";
    export let name = "";
    export let alt = "";

    function calculateAlt() {
        switch (alt) {
            case brand:
                return "fa-brands";
            case thin:
                return "fa-sharp fa-thin";
            case light:
                return "fa-sharp fa-light";
            case solid:
                return "fa-sharp fa-solid";
            case duotone:
                return "fa-sharp fa-duotone";
        }
        return "fa-regular";
    }
</script>
<i class="{calculateAlt()} fa-{name} {extra} mx-1"></i>
