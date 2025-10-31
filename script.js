function generateName() {
       const theme = document.getElementById("themeInput").value.toLowerCase();
       
       const names = {
        space: ["CosmoPaws", "StarWhiskers", "LunaTail", "OrbitWiggle", "CometSprinkle", "MoonMuffin", "RocketBean", "AstroBop", "MeteorToot", "GalaxyBean"],
        cute: ["SnuggleBug", "FluffyMuffin", "CuddleSprout", "WiggleBean", "PuffSprinkle", "BumbleBoo", "TwinkleToot", "GigglePop","FluffWink", "DoodleSnug"],
        wild: ["RoarBean", "FangSnuggle", "PouncePop", "WhiskerZoom", "SnuggleFang", "TwinkleSnap", "BumbleDash", "WiggleBlaze", "PuffRumble", "Fizz Whisk"],
        earth: ["Pebblepup", "CloverPuff", "PebbleWink", "MossPuff", "PebblePaws", "SageSprinkle", "MossMuffin", "DuneDoodle", "CloverCloud", "TwigTickle"],
        magical: ["SnickerSpark", "WiggleFang", "TwinkleZoom", "BumbleBlink", "NoodleSnap", "PuffSwoop", "ZippyNudge", "GiggleDash", "DoodlePounce", "TwinkleSnap"]
       };

       const options = names[theme] || ["MysteryPaw", "UnknownWhisker"];
       const randomName = options[Math.floor(Math.random() * options.length)];
       document.getElementById("result").innerText = `Your pet name suggestin is: ${randomName}`;
    }

    console.group("Button clicked!");