<script>
    import Envelope from "../../components/icons/Envelope.svelte";
    import Location from "../../components/icons/Location.svelte";
    import Phone from "../../components/icons/Phone.svelte";
    import Card from "../../components/items/Card.svelte";
    import { t } from "../../stores/translate.js";
    import { dataLoad } from "../../utils/dataLoad.js";
    let identityPromise = dataLoad("identity");
    import profilePicture from "../../../assets/portrait.png";
</script>

<Card>
    {#await identityPromise then identity}
        <div class="flex flex-col text-center">
            <div class="avatar w-32 mx-auto">
                <img src={profilePicture} />
            </div>
            <h1 class="text-2xl uppercase font-bold">
                {identity.name.first}
                {identity.name.last}
            </h1>
            <p class="opacity-60 uppercase">{$t(identity.job.title)}</p>
            <p class="mt-4 mb-2">{$t(identity.description)}</p>
            <hr />
            <div class="chat">
                <div class="chat-bubble chat-bubble-primary">
                    <Location />
                    {identity.location}
                </div>
            </div>

            <div class="chat">
                <div class="chat-bubble chat-bubble-primary">
                    <Phone />
                    {identity.phone}
                </div>
            </div>

            <div class="chat">
                <div class="chat-bubble chat-bubble-primary">
                    <Envelope />
                    {identity.email}
                </div>
            </div>
        </div>
    {/await}
</Card>
