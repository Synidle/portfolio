/** @type {Project[]} */
let projects = [];
/** @type {ProjectPage[]} */
let projectPages = [];

let projectFecklessFox = new Project(
    "Feckless Fox",
    2025,
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
    "https://synidle.itch.io/feckless-fox-demo",
    91
);

let projectTheTower = new Project(
    "The Tower",
    2026,
    Status.DEMO,
    Format.VIDEOGAME,
    [
        Tag.RPG,
        Tag.NARRATIVE,
        Tag.THREE_D,
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
    ]
);

projects = [
    projectFecklessFox,
    projectTheTower
];
