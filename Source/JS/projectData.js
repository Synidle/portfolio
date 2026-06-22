let projects = [];
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
    [],
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
)