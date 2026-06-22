/** @type {Project[]} */
let projects = [];
/** @type {ProjectPage[]} */
let projectPages = [];

//#region Feckless Fox

let projectFecklessFox = new Project(
    "Feckless Fox",
    2024,
    Status.DEMO,
    Format.VIDEOGAME,
    [
        Tag.PLATFORMER,
        Tag.THREE_D,
    ],
    [
        Skill.CS,
        Skill.GAME_DESIGN,
        Skill.LEVEL_DESIGN,
        Skill.MODELLING,
        Skill.PROGRAMMING,
        Skill.PROTOTYPING,
        Skill.SOUND_DESIGN,
        Skill.UNITY,
        Skill.UX,
    ],
    "Classically-inspired 3D platformer developed for a Unity interactive environment module.",
    [
        new ImageReference(
            "FecklessFox/image-00.png",
            "Screenshot of the fox atop a building, before a trail of coins."
        ),
        new ImageReference(
            "FecklessFox/image-01.png",
            "Screenshot of the fox scaling a building."
        ),
        new ImageReference(
            "FecklessFox/image-02.png",
            "Screenshot of the fox scaling some platforms, illuminated by a street light."
        ),
    ],
    [
        new Inspiration(
            "Rayman 2: The Great Escape",
            "Ubi Pictures",
            1999,
            "Theme"
        ),
        new Inspiration(
            "Sonic Adventure",
            "Sonic Team",
            1998,
            "Aesthetic, gameplay, level design"
        ),
        new Inspiration(
            "Sonic Unleashed",
            "Sonic Team",
            2008,
            "Aesthetic & level design"
        ),
        new Inspiration(
            "Demon's Souls",
            "FromSoftware",
            2009,
            "Level structure & progression"
        ),
        new Inspiration(
            "Bloodborne",
            "FromSoftware",
            2015,
            "Level design & aesthetic"
        ),
        new Inspiration(
            "Sonic Generations",
            "Sonic Team",
            2011,
            "Player moveset"
        ),
        new Inspiration(
            "Mario 64",
            "Nintendo",
            1996,
            "Progression"
        )
    ],
    "Sole designer & developer",
    "https://synidle.itch.io/feckless-fox-demo",
    91
);

//#endregion 

//#region The Tower
let projectTheTower = new Project(
    "The Tower",
    2026,
    Status.DEMO,
    Format.VIDEOGAME,
    [
        Tag.RPG,
        Tag.NARRATIVE,
        Tag.THREE_D,
        Tag.DUNGEON_CRAWLER
    ],
    [
        Skill.ANALYSIS,
        Skill.CS,
        Skill.GAME_DESIGN,
        Skill.GODOT,
        Skill.LEVEL_DESIGN,
        Skill.MODELLING,
        Skill.MUSIC_PRODUCTION,
        Skill.NARRATIVE_DESIGN,
        Skill.PLANNING,
        Skill.PRESENTATION,
        Skill.PROGRAMMING,
        Skill.PROTOTYPING,
        Skill.SOUND_DESIGN,
        Skill.UX,
        Skill.WRITING
    ],
    "An open-world action-RPG attempting to realise a sensation of the sublime.",
    [
        new ImageReference(
            "TheTower/image-00.jpg",
            "A screenshot of a town and an immense tower at sunset, visible across planes and a long bridge."
        ),
        new ImageReference(
            "TheTower/image-01.jpg",
            "A screenshot from within a dungeon, of a dragon breathing fire."
        ),
    ],
    [
        new Inspiration(
            "The Elder Scrolls III: Morrowind",
            "Bethesda Game Studios",
            2002,
            "Mechanics, quests, world design"
        ),
        new Inspiration(
            "Demon's Souls",
            "FromSoftware",
            2009,
            "Level design & aesthetics"
        ),
        new Inspiration(
            "Dark Souls",
            "FromSoftware",
            2011,
            "Mechanics & style"
        ),
        new Inspiration(
            "Bloodborne",
            "FromSoftware",
            2015,
            "World structure & theming"
        ),
        new Inspiration(
            "Elden Ring",
            "FromSoftware",
            2022,
            "World structure"
        ),
        new Inspiration(
            "The Elder Scrolls IV: Oblivion",
            "Bethesda Game Studios",
            2006,
            "Theming & open world"
        ),
        new Inspiration(
            "Shadow of the Colossus",
            "Sony Computer Entertainment Japan",
            2005,
            "Open world & aesthetics"
        ),
        new Inspiration(
            "Ico",
            "Sony Computer Entertainment Japan",
            2001,
            "Style"
        ),
        new Inspiration(
            "The Elder Scrolls V: Skyrim",
            "Bethesda Game Studios",
            2011,
            "Open world"
        ),
        new Inspiration(
            "King's Field",
            "FromSoftware",
            1994,
            "Quests"
        ),
        new Inspiration(
            "No Mastery Without Mystery: Dark Souls and the Ludic Sublime. In Game Studies, 15(1).",
            "Vella, D.",
            2015,
            "World & mechanics"
        ),
        new Inspiration(
            "The Pastoral and the Sublime in Elder Scrolls IV: Oblivion. In Game Studies, 11(3).",
            "Martin, P.",
            2011,
            "World & theming"
        ),
        new Inspiration(
            "A Philosophical Enquiry Into the Origin of Our Ideas of the Sublime and Beautiful",
            "Burke, E.",
            1757,
            "Everything"
        ),
        new Inspiration(
            "Analytic of the Sublime. In Critique of Judgement.",
            "Kant, I.",
            1790,
            "Everything"
        ),
        new Inspiration(
            "Reflections on the Revolution in France",
            "Burke, E.",
            "1790",
            "Theme"
        ),
        new Inspiration(
            "Critique of Practical Reason and other works on the theory of ethics",
            "Kant, I.",
            1788,
            "Mechanics"
        ),
    ],
    "Sole designer & developer"
);
//#endregion

//#region Digital Ghost Gate
let projectDigitalGhostGate = new Project(
    "Digital Ghost Gate",
    2024,
    Status.DEMO,
    Format.VIDEOGAME,
    [
        Tag.TWO_D,
        Tag.RPG,
    ],
    [
        Skill.GAME_DESIGN,
        Skill.JAVASCRIPT,
        Skill.PROGRAMMING,
        Skill.PROTOTYPING,
        Skill.SPRITEWORK,
        Skill.SOUND_DESIGN,
        Skill.UX
    ],
    "A small demonstration of a turn-based RPG with a Gameboy aesthetic and a unique and complex combat system.",
    [
        new ImageReference(
            "DigitalGhostGate/image-00.png",
            "Screenshot of the game start screen, with two characters visible, a door, and basic instructions."
        ),
        new ImageReference(
            "DigitalGhostGate/image-01.png",
            "Screenshot of a game location, with a path east into the forest, and a path north of lilipads across the lake."
        ),
        new ImageReference(
            "DigitalGhostGate/image-02.png",
            "Screenshot of the 'ghost' selection screen, displaying 'Andras', his sprite, and his basic attributes."
        ),
    ],
    [
        new Inspiration(
            "Persona 3",
            "Atlus",
            2006,
            "Gameplay"
        ),
        new Inspiration(
            "Pokémon Red and Blue",
            "Game Freak",
            1996,
            "Aesthetic"
        ),
    ],
    "Sole designer & developer",
    "https://synidle.itch.io/digital-ghost-gate",
    92
);
//#endregion

//#region PhraseDex
let projectPhraseDex = new Project(
    "PhraseDex",
    2025,
    Status.DEMO,
    Format.APPLICATION,
    [
        Tag.APPLICATION,
    ],
    [
        Skill.ACCESSIBILITY,
        Skill.ANDROID_STUDIO,
        Skill.KOTLIN,
        Skill.PROGRAMMING,
        Skill.PROTOTYPING,
        Skill.UX
    ],
    "Mobile application for travel, that contextually generates useful phrases using APIs.",
    [
        new ImageReference(
            "PhraseDex/image-00.jpg",
            "Screenshot of application, with a dialogue window asking for confirmation of the detected user location."
        ),
        new ImageReference(
            "PhraseDex/image-01.jpg",
            "Screenshot of category selection page for saved phrases."
        ),
        new ImageReference(
            "PhraseDex/image-02.jpg",
            "Screenshot of application, showing a foreign phrase appropriate to hot weather, with a dialogue window giving options for saving the phrase and changing the language."
        ),
        new ImageReference(
            "PhraseDex/image-03.jpg",
            "Screenshot of application, showing a list of contextually generated phrases on the left, the current translation in the middle, and a dropdown for changing the language in the top right."
        ),
    ],
    [],
    "Sole designer & developer"
);
//#endregion

//#region Unbounded Fault
let projectUnboundedFault = new Project(
    "Unbounded Fault",
    2025,
    Status.DEMO,
    Format.VIDEOGAME,
    [
        Tag.TWO_D,
        Tag.RPG,
        Tag.DUNGEON_CRAWLER
    ],
    [
        Skill.ACCESSIBILITY,
        Skill.ANALYSIS,
        Skill.CS,
        Skill.GAME_DESIGN,
        Skill.GAME_DESIGN,
        Skill.GROUPWORK,
        Skill.LEADERSHIP,
        Skill.NARRATIVE_DESIGN,
        Skill.PLANNING,
        Skill.PRESENTATION,
        Skill.PROGRAMMING,
        Skill.PROTOTYPING,
        Skill.UNITY,
        Skill.TESTING,
        Skill.UX
    ],
    "A retro dungeon-crawler rogue-like with arcade-oriented design and minor elements of randomisation.",
    [
        new ImageReference(
            "",
            ""
        ),
    ],
    [
        new Inspiration(
            "Adventure",
            "Atari",
            1980,
            "Mechanics"
        ),
        new Inspiration(
            "The Binding of Isaac",
            "McMillan",
            2011,
            "Mechanics & level design"
        ),
        new Inspiration(
            "The Legend of Zelda",
            "Nintendo",
            1986,
            "Level design"
        )
    ],
    "Project leader, design assistant, mechanics programmer",
);
//#endregion

projects = [
    projectFecklessFox,
    projectTheTower,
    projectDigitalGhostGate,
    projectPhraseDex,
    projectUnboundedFault
];
