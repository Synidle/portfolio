const Status = Object.freeze({
    PROTOTYPE: "Prototype",
    DEMO: "Demo",
    CONCEPT: "Concept",
    COMPLETE: "Complete",
});

const Format = Object.freeze({
    VIDEOGAME: "Videogame",
    WEBSITE: "Website",
    APPLICATION: "Application",
    FILM: "Film",
    ESSAY: "Essay",
});

const Tag = Object.freeze({
    THREE_D: "3D",
    TWO_D: "2D",
    PLATFORMER: "Platformer",
    RPG: "RPG",
    DUNGEON_CRAWLER: "Dungeon Crawler",
    ACTION: "Action",
    NARRATIVE: "Narrative",
    APPLICATION: "Application",
    VR: "Virtual Reality"
});

const Skill = Object.freeze({
    GAME_DESIGN: "Game Design",
    NARRATIVE_DESIGN: "Narrative Design",
    LEVEL_DESIGN: "Level Design",
    PLANNING: "Project Planning",
    LEADERSHIP: "Leadership",
    GROUPWORK: "Groupwork",
    PROTOTYPING: "Prototyping",
    PRESENTATION: "Presenting",
    PROGRAMMING: "Programming",
    ACCESSIBILITY: "Accessibility Design",
    GODOT: "Godot Engine",
    UNITY: "Unity",
    UX: "UX Design",
    CS: "C#",
    HTML: "HTML",
    CSS: "CSS",
    JAVASCRIPT: "JavaScript",
    KOTLIN: "Kotlin",
    ANDROID_STUDIO: "Android Studio",
    VR_DESIGN: "Design for VR",
    SOUND_DESIGN: "Sound Design",
    MODELLING: "3D Modelling",
    SPRITEWORK: "Spritework",
    PHOTOSHOP: "Photoshop",
    PREMIERE_PRO: "Premiere Pro",
    AFTER_EFFECTS: "After Effects",
    VIDEO_EDITING: "Video Editing",
    MUSIC_PRODUCTION: "Music Production",
    TESTING: "Testing",
    WRITING: "Writing",
    ANALYSIS: "Analysis"
});

/**
 * 
 * @param {string} source 
 * @param {string} alt 
 */
function ImageReference(
    source,
    alt
) {
    this.source = source;
    this.alt = alt;
}

/**
 * 
 * @param {string} name 
 * @param {string} author 
 * @param {number} year 
 * @param {string} description 
 */
function Inspiration(
    name,
    author,
    year,
    description
) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.description = description;
}

/**
 * 
 * @param {string} id
 * @param {string} name 
 * @param {number} year 
 * @param {Status} status 
 * @param {Format} format 
 * @param {Tag[]} tags 
 * @param {Skill[]} skills 
 * @param {string} description 
 * @param {ImageReference[]} images 
 * @param {Inspiration[]} inspirations
 * @param {string} role
 * @param {string} link 
 * @param {number} grade 
 */
function Project(
    id,
    name,
    year,
    status,
    format,
    tags,
    skills,
    description,
    images,
    inspirations,
    role,
    link = null,
    grade = null
) {
    this.id = id;
    this.name = name;
    this.year = year; 
    this.status = status;
    this.format = format;
    this.tags = tags;
    this.skills = skills;
    this.description = description;
    this.images = images;
    this.inspirations = inspirations;
    this.role = role
    this.link = link;
    this.grade = grade; 
}

/**
 * 
 * @param {string} projectID
 * @param {Project} project 
 * @param {string} content 
 * @param {string} style 
 */
function ProjectPage(
    projectID,
    project,
    content,
    styleSheet = null
) {
    this.projectID = projectID;
    this.project = project;
    this.content = content;
    this.styleSheet = styleSheet;
}