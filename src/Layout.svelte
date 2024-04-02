<script>
    import IdentityHeader from "./lib/components/IdentityHeader.svelte";
    import Experiences from "./lib/components/Experiences.svelte";
    import Skills from "./lib/components/Skills.svelte";
    import Studies from "./lib/components/Studies.svelte";
    import Interests from "./lib/components/Interests.svelte";
    import Footer from "./lib/components/Footer.svelte";
</script>

<main class="flex flex-col min-h-screen">
    <header>
        <IdentityHeader/>
    </header>

    <div class="flex-1 flex flex-col align-middle justify-center px-8 container mx-auto gap-4">
        <Skills/>
        <Experiences/>
        <div class="grid grid-cols-2 gap-2">
            <Studies/>
            <Interests/>
        </div>
    </div>
    <Footer/>
</main>



