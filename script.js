$(document).ready(function () {

    const books = [{
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
            image3: "./img/scag3.webp",
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
            image3: "./img/vgtm3.webp",
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
            image2: "./img/xgte2.webp",
            image3: "./img/xgte3.webp",
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
            classification: "3rd Party",
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
            image3: "./img/mtof3.webp",
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
            id: 15,
            name: "Princes of the Apocalypse",
            published: 2015,
            price: "$69.99",
            header: "Abolish an ancient evil threatening devastation in this adventure for the world's greatest roleplaying game!",
            description: "Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms.",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/pota1.webp",
            image2: "./img/pota2.webp",
            image3: "./img/pota3.webp",
        },
        {
            id: 16,
            name: "Storm Kings Thunder",
            published: 2016,
            price: "$69.99",
            header: "Stand with or against the giants in this adventure for the world's greatest roleplaying game.",
            description: "This 256-page adventure provides everything a Dungeon Master needs to create an exciting and memorable play experience for the Storm King's Thunder story, including rune magic items, a new treasure option for characters. Giants have emerged from their strongholds to threaten civilization as never before. Hill giants are stealing all the grain and livestock they can, while stone giants have been scouring settlements that have been around forever. Fire giants are press-ganging the small folk into the desert, while frost giant longships have been pillaging along the Sword Coast. Even the elusive cloud giants have been witnessed, their wondrous floating cities appearing above Waterdeep and Baldur's Gate. Where is the storm giant King Hekaton, who is tasked with keeping order among the giants?",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/skt1.webp",
            image2: "./img/skt2.webp",
            image3: "./img/skt3.webp",
        },
        {
            id: 17,
            name: "Tasha's Cauldron of Everything",
            published: 2020,
            price: "$69.99",
            header: "A magical mixture of rules options for the world's greatest roleplaying game.",
            description: "The wizard Tasha, whose great works include the spell Tasha's hideous laughter, has gathered bits and bobs of precious lore during her illustrious career as an adventurer. Her enemies wouldn't want these treasured secrets scattered across the multiverse, so in defiance, she has collected and codified these tidbits for the enrichment of all. Full of expanded content for players and Dungeon Masters alike, this book is a great addition to the Player's Handbook and the Dungeon Master's Guide. Baked in you'll find more rule options for all the character classes in the Player's Handbook, including more subclass options. Thrown in for good measure is the artificer class, a master of magical invention. And this witch's brew wouldn't be complete without a dash of added artifacts, spellbook options, spells for both player characters and monsters, magical tattoos, group patrons, and other tasty goodies.",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/tcoe1.webp",
            image2: "./img/tcoe2.webp",
            image3: "./img/tcoe3.webp",
        },
        {
            id: 18,
            name: "Tales from the Yawning Portal",
            published: 2017,
            price: "$69.99",
            header: "Dread tales told in the dead of night!",
            description: "When the shadows grow long in Waterdeep and the fireplace in the taproom of the Yawning Portal dims to a deep crimson glow, adventurers from across the Forgotten Realms, and even from other worlds, spin tales and spread rumors of dark dungeons and lost treasures. Some of the yarns overheard by Durnan, the barkeep of the Yawning Portal, are inspired by places and events in far-flung lands from across the D&D multiverse, and these tales have been collected into a single volume. Within this tome are seven of the most compelling dungeons from the 40+ year history of Dungeons & Dragons. Some are classics that have hosted an untold number of adventurers, while others are some of the most popular adventures ever printed.",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/tftyp1.webp",
            image2: "./img/tftyp2.webp",
            image3: "./img/tftyp3.webp",
        },
        {
            id: 19,
            name: "Tyranny of Dragons",
            published: 2023,
            price: "$79.99",
            header: "Defy the Queen of Evil Dragons in this adventure for the world's greatest roleplaying game.",
            description: "For years, the evil Cult of the Dragon has devoted itself to creating undead dragons in a vain attempt to fulfill an ancient prophecy. However, the cultists were misguided. They misunderstood. But now, under new leadership, the cult believes that the prophecy does not speak of undead dragons, but of a dragon empire that's been extinct for 25,000 years. Tiamat, the queen of evil dragons, has languished in the Nine Hells for millennia. The cult believes that the time of her return is at hand. The cult has a new face and a new mission. It seeks to free Tiamat from the Nine Hells and bring her into the Forgotten Realms. To accomplish its goal, the cult needs five ancient dragon masks and the support of evil dragons everywhere. The cult leaders—each one a \"dragon whisperer\"—have reached out to the evil dragons of the Sword Coast and earned their allegiance.",
            type: "Adventure",
            classification: "Core DnD",
            image1: "./img/tod1.webp",
            image2: "./img/tod2.webp",
            image3: "./img/tod3.webp",
        },
        {
            id: 20,
            name: "Van Richten's Guide to Ravenloft",
            published: 2021,
            price: "$69.99",
            header: "Unleash the horrors of Ravenloft in this campaign sourcebook for the world's greatest roleplaying game.",
            description: "Terror stalks the nightmare realms of Ravenloft. No one knows this better than monster scholar Rudolph Van Richten. To arm a new generation against the creatures of the night, Van Richten has compiled his correspondence and case files into this tome of eerie tales and chilling truths. Discover the mysteries of Ravenloft, mist-shrouded lands where infamous Darklords lurk among ageless vampires, zombie hordes, cosmic terrors, and worse. Then make your choice. Will you create your own Domains of Dread, settings to host endless terrifying adventures? Or will you join the ranks of haunted heroes who embrace macabre lineages, dual-edged Dark Gifts, haunted subclasses, and other forbidden powers?",
            type: "Source Book",
            classification: "Core DnD",
            image1: "./img/vrgtr1.webp",
            image2: "./img/vrgtr2.webp",
            image3: "./img/vrgtr3.webp",
        }
    ]
    // -------------------------- end array for books

    //-----------------locations array
    const locations = [
    {
        name: "Bea DnD Games",
        address: "199 Jackson Street, Petone, Lower Hutt",
        long: "174.87889008105387",
        lat: "-41.22510851332964"
    },
    {
        name: "Goblin Games NZ",
        address: "155 Karori Road, Karori, Wellington",
        long: "174.7455664098929",
        lat: "-41.28241866192481"
    },
    {
        name: "Caffeinated Dragon Games",
        address: "70 Victoria Street, Wellington Central, Wellington",
        long: "174.77609515407144",
        lat: "-41.287989599685886"
    },
    {
        name: "Cerberus Games",
        address: "66 Dixon Street, Te Aro, Wellington",
        long: "174.77599399640036",
        lat: "-41.2912844199473"
    }
    ]

    // ------------------------- on change for each filter
    $("#date").change(function () {
        //filter and populate here
        filterAndPopulateResults();
    });

    $("#type").change(function () {
        filterAndPopulateResults();
    });

    $("#classification").change(function () {
        filterAndPopulateResults();
    });
    // ----------------------------- end on change


    // ----------------------------- on clicks for sorting
    //on click high to low sort
    $("#priceHighToLow").click(function () {
        const filteredBooks = filterBooks();
        const sortedBooks = sortBooksPriceHighToLow(filteredBooks);
        populateResults(sortedBooks);
    });

    //on click low to high sort
    $("#priceLowToHigh").click(function () {
        const filteredBooks = filterBooks();
        const sortedBooks = sortBooksPriceLowToHigh(filteredBooks);
        populateResults(sortedBooks);
    });

    //on click old to new sort
    $("#dateOldToNew").click(function () {
        const filteredBooks = filterBooks();
        const sortedBooks = sortBooksByDateOldToNew(filteredBooks);
        populateResults(sortedBooks);
    });

    //on click new to old sort
    $("#dateNewToOld").click(function () {
        const filteredBooks = filterBooks();
        const sortedBooks = sortBooksByDateNewToOld(filteredBooks);
        populateResults(sortedBooks);
    });

    //on click alphabetically

    $("#alphabetically").click(function () {
        const filteredBooks = filterBooks();
        const sortedBooks = sortBooksAlphabetically(filteredBooks);
        populateResults(sortedBooks);
    })


    // ----------------------------- end on clicks for sorting


    // ---------------------------------- filtering fuctions

    function filterBooks() {
        const filteredBooks = books.filter(book => {
            //filter creates array

            //check if date matches
            if ($("#date").val() && parseInt(book.published) < parseInt($("#date").val()) || $("#date").val() && parseInt(book.published) > parseInt($("#date").val())) {
                return false;
            }

            //checks if type matches
            const bookType = book.type.toLowerCase();
            const bookTypeFilter = $("#type").val().toLowerCase()
            if (bookTypeFilter && !bookType.includes(bookTypeFilter)) {
                return false;
            }

            //checks if classification matches
            const bookClassification = book.classification.toLowerCase();
            const bookClassificationFilter = $("#classification").val().toLowerCase()
            if (bookClassificationFilter && !bookClassification.includes(bookClassificationFilter)) {
                return false;
            }


            return true
        });

        return filteredBooks;
    }
    // -------------------------- end filtering functions

    // -------------------------- sorting fuctions

    //sort books by price high to low
    function sortBooksPriceHighToLow(books) {
        return books.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceB - priceA;
        });
    }
    //sort books by price low to high
    function sortBooksPriceLowToHigh(books) {
        return books.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceA - priceB;
        });
    }

    //sort books by pub date old to new
    function sortBooksByDateOldToNew(books) {
        return books.sort((a, b) => {
            const dateA = parseInt(a.published);
            const dateB = parseInt(b.published);
            return dateA - dateB;
        });
    }

    //sort books by pub date old to new
    function sortBooksByDateNewToOld(books) {
        return books.sort((a, b) => {
            const dateA = parseInt(a.published);
            const dateB = parseInt(b.published);
            return dateB - dateA;
        });
    }

    //sort books alphabetically
    function sortBooksAlphabetically(books) {
        return books.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        })
    }


    // -------------------------- end sorting fuctions

    // -------------------------- populate card functions

    // filter and populate results
    function filterAndPopulateResults() {
        const filteredBooks = filterBooks();
        populateResults(filteredBooks);
    }

    //initial population of cards
    filterAndPopulateResults();
    //populate card function


    function populateResults(filteredResults) {
        //clear results div
        $("#results").html("");

        //check filtered properties is empty
        if (filteredResults.length === 0) {
            $("#results").append(`<p class="no-results"> No Results </p>`);
        } else {
            filteredResults.forEach(book => {

                const card = `
                <div class="flip-container" id="flip-container-${book.id}">
                    <div class="flipper">
                        <div class="front">
                            <div class="swiper">
                                <!-- Additional required wrapper -->
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide"><img src="${book.image1}" alt="${book.name} image 1" class="book-image" value=${book.id}></div>
                                    <div class="swiper-slide"><img src="${book.image2}" alt="${book.name} image 2" class="book-image" value=${book.id}></div>
                                    <div class="swiper-slide"><img src="${book.image3}" alt="${book.name} image 3" class="book-image" value=${book.id}></div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                            <div class="book-details">
                                <h2>${book.name}</h2>
                                <p>${book.header}</p>
                            </div>
                            <div class="more-details">
                                <div class="book-extras">
                                    <p>${book.published}</p>
                                    <p>${book.type}</p>
                                    <p>${book.classification}</p>
                                </div>
                                <h4>${book.price}</h4>
                            </div>
                        </div>
                        <div class="back">
                            <div class="book-details-back">
                                <h2>${book.name}</h2>
                                <h4>${book.header}</h4>
                                <p class="description">${book.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

                $("#results").append(card);

                // Initialize Swiper
                const swiper = new Swiper(`#flip-container-${book.id} .swiper`, {
                    direction: 'horizontal',
                    loop: true,
                    pagination: {
                        el: `#flip-container-${book.id} .swiper-pagination`,
                        clickable: true,
                    },
                });

                // Click event to flip the card
                $(`#flip-container-${book.id}`).click(function () {
                    $(this).toggleClass('hover');
                });
            });
        }
    }





    //mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

    //initialize the map
    const map = new mapboxgl.Map({
        container: 'map', //where to put the map
        style: 'mapbox://styles/mapbox/streets-v11', // style URL - set up in dashboard (street version)
        center: [174.80607878446475, -41.252153264804065], // starting position [lng, lat], get cords from google, remember they give the cords reversed to what we want
        zoom:  10,// starting zoom
    });

    //map tokens
    locations.forEach(location => {
        const marker = new mapboxgl.Marker()
            .setLngLat([location.long, location.lat])
            .setPopup(new mapboxgl.Popup({ offset: 25})
            .setHTML(`<h3>${location.name}</h3><p>${location.address}</p>`))
            .addTo(map);
    });
    
//fly to
    const buttonsContainer = document.querySelector('.buttons');

    locations.forEach((location, index) => {
    const button = document.createElement('button'); 
    button.className = 'button';
    button.textContent = location.name;
    //onclick to do the fly to
    button.addEventListener('click', function() {
        map.flyTo({
            center: [location.long, location.lat],
            essential: true,
            zoom: 15
        }); //end of fly to
    }); //end of onclick
    //append button to container
    buttonsContainer.appendChild(button);
});


    //initialize swiper js
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });











    //end of jquery
});