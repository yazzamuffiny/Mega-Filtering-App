



$(document).ready(function() {

    const books = [
        {
            id: 1,
            name: "Players Handbook",
            published: 2014,
            price: "$69.99",
            header: "Everything a player needs to create heroic characters for the world's greatest roleplaying game.",
            description: "The Player's Handbook is the essential reference for every Dungeons & Dragons roleplayer. It contains rules for character creation and advancement, backgrounds and skills, exploration and combat, equipment, spells, and much more. Use this book to create exciting characters from among the most iconic D&D races and classes. Dungeons & Dragons immerses you in a world of adventure. Explore ancient ruins and deadly dungeons. Battle monsters while searching for legendary treasures. Gain experience and power as you trek across uncharted lands with your companions. The world needs heroes. Will you answer the call?",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/phb1.webp",
            image2: "./img/phb2.webp",
            image3: "./img/phb3.webp",
        },
        {
            id: 2,
            name: "Dungeon Masters Guide",
            published: 2014,
            price: "$69.99",
            header: "Everything a Dungeon Master needs to weave legendary stories for the world’s greatest roleplaying game.",
            description: "The Dungeon Master's Guide provides the inspiration and the guidance you need to spark your imagination and create worlds of adventure for your players to explore and enjoy. Inside you'll find world-building tools, tips and tricks for creating memorable dungeons and adventures, optional game rules, hundreds of classic D&D magic items, and much more!",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/dmg1.webp",
            image2: "./img/dmg2.webp",
            image3: "./img/dmg3.webp",
        },
        {
            id: 3,
            name: "Monster Manual",
            published: 2014,
            price: "$69.99",
            header: "A menagerie of legendary monsters for the world's greatest roleplaying game.",
            description: "The Monster Manual presents a horde of classic Dungeons & Dragons creatures, including dragons, giants, mind flayers, and beholders—a monstrous feast for Dungeon Masters ready to challenge their players and populate their adventures. The monsters contained herein are culled from the D&D game's illustrious history, with easy-to-use game statistics and thrilling stories to feed your imagination.",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/mm1.webp",
            image2: "./img/mm2.webp",
            image3: "./img/mm3.webp",
        },
        {
            id: 4,
            name: "Sword Coast Adventurers Guide",
            published: 2015,
            price: "$59.99",
            header: "Explore the Sword Coast in this campaign sourcebook for the world's greatest roleplaying game.",
            description: "WELCOME TO THE SWORD COAST—a region of Faerûn that comprises shining paragons of civilization and culture, perilous locales fraught with dread and evil, and encompassing them all, a wilderness that offers every explorer vast opportunity and simultaneously promises great danger. While the Sword Coast Adventurer's Guide is a valuable resource for Dungeon Masters, it was crafted with players and their characters foremost in mind. There is a plethora of new character options to intrigue and inspire every member of the adventuring party.",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/scag1.webp",
            image2: "./img/scag2.webp",
            image3: "./img/scag.webp",
        },
        {
            id: 5,
            name: "Volo's Guide to Monsters",
            published: 2016,
            price: "$69.99",
            header: "Immerse yourself in monster lore for the world's greatest roleplaying game.",
            description: "Explore the breadth of D&D's monsters in this immersive 224-page volume filled with beautiful illustrations and in-depth lore. Volo's Guide to Monsters provides something exciting for players and Dungeon Masters everywhere! The esteemed loremaster Volothamp Geddarm is back and he's written a fantastical dissertation, covering some of the most iconic monsters in the Forgotten Realms. Unfortunately, the Sage of Shadowdale himself, Elminster, doesn't believe Volo gets some of the important details quite right. Don't miss out as Volo and Elminster square off (academically speaking of course) to illuminate the uninitiated on creatures both common and obscure. Uncover the machinations of the mysterious Kraken Society, what is the origin of the bizarre froghemoth, or how to avoid participating in the ghastly reproductive cycle of the grotesque vargouille.",
            type: "Source Book",
            classification: "Legacy",
            image1: "./img/vgtm1.webp",
            image2: "./img/vgtm2.webp",
            image3: "./img/vgtm.webp",
        },
        {
            id: 6,
            name: "Xanathars Guide to Everything",
            published: 2017,
            price: "$69.99",
            header: "Explore a wealth of new rules options for both players and Dungeon Masters in this supplement for the world's greatest roleplaying game.",
            description: "The beholder Xanathar—Waterdeep's most infamous crime lord—is known to hoard information on friend and foe alike. The beholder catalogs lore about adventurers and ponders methods to thwart them. Its twisted mind imagines that it can eventually record everything! Xanathar's Guide to Everything is the first major expansion for fifth edition Dungeons & Dragons, offering new rules and story options.",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/xgte1.webp",
            image2: "./img/xgte.webp",
            image3: "./img/xgte.webp",
        },
        {
            id: 7,
            name: "Curse of Strahd Revamped",
            published: 2020,
            price: "$139.99",
            header: "Unravel the mysteries of Ravenloft in this dread adventure for the world's greatest roleplaying game.",
            description: "Under raging storm clouds, the vampire Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft. Rumbling thunder pounds the castle spires. The wind's howling increases as he turns his gaze down toward the village of Barovia. Far below, yet not beyond his keen eyesight, a party of adventurers has just entered his domain. Strahd's face forms the barest hint of a smile as his dark plan unfolds. He knew they were coming, and he knows why they came—all according to his plan. A lightning flash rips through the darkness, but Strahd is gone. Only the howling of the wind fills the midnight air. The master of Castle Ravenloft is having guests for dinner. And you are invited.",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/cos1.webp",
            image2: "./img/cos2.webp",
            image3: "./img/cos3.webp",
        },
        {
            id: 8,
            name: "Critical Role: Call of the Netherdeep",
            published: 2022,
            price: "$69.99",
            header: "An epic Critical Role campaign for the world's greatest roleplaying game.",
            description: "The greed of mortals has awakened a powerful entity long thought destroyed. For eons, this mighty champion of the gods has been imprisoned in the darkest depths of Exandria. His name has been forgotten, as have his heroic deeds. Languishing in despair, he calls out for new heroes to save him. Inspired by the campaigns of the hit series Critical Role, this adventure begins in the Wastes of Xhorhas and leads to the glimmering oasis-city of Ank'Harel on the continent of Marquet, and from there into a sunken realm of gloom, corruption, and sorrow known as the Netherdeep. Above it all, the red moon of Ruidus watches, twisting the fates of those who have the power to shape the course of history. Critical Role: Call of the Netherdeep contains seven chapters of thrilling adventure, new creatures and magic items, and a poster map of Ank'Harel.",
            type: "Adventure",
            classification: "3rd Party",
            image1: "./img/crcotnd1.webp",
            image2: "./img/crcotnd2.webp",
            image3: "./img/crcotnd3.webp",
        },
        {
            id: 9,
            name: "Waterdeep: Dungeon of the Mad Mage",
            published: 2018,
            price: "$69.99",
            header: "Explore the mega-dungeon of Undermountain in this adventure for the world's greatest roleplaying game.",
            description: "In the city of Waterdeep rests a tavern called the Yawning Portal, named after the gaping pit in its common room. At the bottom of this crumbling shaft is a labyrinthine dungeon shunned by all but the most daring adventurers. Known as Undermountain, this dungeon is the domain of the mad wizard Halaster Blackcloak. Long has the Mad Mage dwelt in these forlorn depths, seeding his lair with monsters, traps, and mysteries—to what end is a constant source of speculation and concern.",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/dotmm1.webp",
            image2: "./img/dotmm2.webp",
            image3: "./img/dotmm3.webp",
        },
        {
            id: 10,
            name: "Waterdeep: Dragon Heist",
            published: 2018,
            price: "$69.99",
            header: "A fantastic treasure trove is yours for the taking in this adventure for the world's greatest roleplaying game.",
            description: "Famed explorer Volothamp Geddarm needs you to complete a simple quest. Thus begins a mad romp through the wards of Waterdeep as you uncover a villainous plot involving some of the city's most influential figures. A grand urban caper awaits you. Pit your skill and bravado against villains the likes of which you've never faced before, and let the dragon hunt begin!",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/wdh1.webp",
            image2: "./img/wdh2.webp",
            image3: "./img/wdh3.webp",
        },
        {
            id: 11,
            name: "Fizban's Treasury of Dragons",
            published: 2021,
            price: "$69.99",
            header: "Discover how dragons embody magic across the worlds of D&D and how you can bring them to life at your table in this quintessential reference guide for the world's greatest roleplaying game.",
            description: "Meet Fizban the Fabulous: doddering archmage, unlikely hero of the War of the Lance, divine avatar of a dragon-god—and your guide to the mysteries of dragonkind in the worlds of Dungeons & Dragons. What is the difference between a red dragon and a gold dragon? What is dragonsight? How does the magic that suffuses dragons impact the world around them? Here is your comprehensive guide to dragons, filled with the tips and tools Dungeon Masters and players need for their encounters with these dangerous magical creatures.",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/ftod1.webp",
            image2: "./img/ftod2.webp",
            image3: "./img/ftod3.webp",
        },
        {
            id: 12,
            name: "Mythic Odysseys of Theros",
            published: 2020,
            price: "$69.99",
            header: "Clash with the gods of Theros in this campaign sourcebook for the world's greatest roleplaying game.",
            description: "The world's most popular roleplaying game meets the world's most popular trading card game in this campaign sourcebook, detailing the Magic: The Gathering world of Theros for use in Dungeons & Dragons.nLegends walk the lands of Theros, a realm shaped by deities and the deeds of heroes. From the temples of omen-speaking oracles to the five realms of the Underworld, the champions of the gods vie for immortal favor and a place among the world's living myths. Choose a supernatural gift that sets you on the path of destiny, align yourself with one of Theros's fifteen gods, then carve a tale of odysseys and ordeals across the domains of mortals, gods, and the dead.",
            type: "Source Book",
            classification: "Magic the Gathering",
            image1: "./img/moot1.webp",
            image2: "./img/moot2.webp",
            image3: "./img/moot3.webp",
        },
        {
            id: 13,
            name: "Mordenkainen's Tome of Foes",
            published: 2018,
            price: "$69.99",
            header: "Discover the truth about the great conflicts of the D&D multiverse in this supplement for the world's greatest roleplaying game.",
            description: "This tome is built on the writings of the renowned wizard from the world of Greyhawk, gathered over a lifetime of research and scholarship. In his travels to other realms and other planes of existence, he has made many friends, and has risked his life an equal number of times, to amass the knowledge contained herein. In addition to Mordenkainen's musings on the endless wars of the multiverse, the book contains game statistics for dozens of monsters: new demons and devils, several varieties of elves and duergar, and a vast array of other creatures from throughout the planes of existence.",
            type: "Source Book",
            classification: "Legacy",
            image1: "./img/mtof1.webp",
            image2: "./img/mtof2.webp",
            image3: "./img/mtof.webp",
        },
        {
            id: 14,
            name: "Out of the Abyss",
            published: 2015,
            price: "$69.99",
            header: "Dare to descend into the Underdark in this adventure for the world's greatest roleplaying game!",
            description: "The Underdark is a subterranean wonderland, a vast and twisted labyrinth where fear reigns. It is the home of horrific monsters that have never seen the light of day. It is here that the dark elf Gromph Baenre, Archmage of Menzoberranzan, casts a foul spell meant to ignite a magical energy that suffuses the Underdark and tears open portals to the demonic Abyss. What steps through surprises even him, and from that moment on, the insanity that pervades the Underdark escalates and threatens to shake the Forgotten Realms to its foundations. Stop the madness before it consumes you!",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/oota1.webp",
            image2: "./img/oota2.webp",
            image3: "./img/oota3.webp",
        },
        {
            id: 10,
            name: "",
            published: 2018,
            price: "$69.99",
            header: "",
            description: "",
            type: "Source Book / Adventure",
            classification: "Core DnD / Legacy / 3rd Party",
            image1: "./img/ .webp",
            image2: "./img/ .webp",
            image3: "./img/ .webp",
        },
        {
            id: 10,
            name: "",
            published: 2018,
            price: "$69.99",
            header: "",
            description: "",
            type: "Source Book / Adventure",
            classification: "Core DnD / Legacy / 3rd Party",
            image1: "./img/ .webp",
            image2: "./img/ .webp",
            image3: "./img/ .webp",
        },
        {
            id: 10,
            name: "",
            published: 2018,
            price: "$69.99",
            header: "",
            description: "",
            type: "Source Book / Adventure",
            classification: "Core DnD / Legacy / 3rd Party",
            image1: "./img/ .webp",
            image2: "./img/ .webp",
            image3: "./img/ .webp",
        },
        {
            id: 10,
            name: "",
            published: 2018,
            price: "$69.99",
            header: "",
            description: "",
            type: "Source Book / Adventure",
            classification: "Core DnD / Legacy / 3rd Party",
            image1: "./img/ .webp",
            image2: "./img/ .webp",
            image3: "./img/ .webp",
        }
    ]
    

//mapbox initialize
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [174.7762, -41.2865],
    zoom: 13
});






//initialize swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


})





