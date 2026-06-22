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
    PLATFORMER: "Platformer",
    RPG: "RPG",
    NARRATIVE: "Narrative",
});

const Skill = Object.freeze({
    PLANNING: "Project Planning",
    LEADERSHIP: "Leadership",
    GROUPWORK: "Groupwork",
    PRESENTATION: "Presenting",
    PROTOTYPING: "Prototyping",
    HTML: "HTML",
    CSS: "CSS",
    JAVASCRIPT: "JavaScript",
    CS: "C#",
    KOTLIN: "Kotlin",
    PROGRAMMING: "Programming",
    UX: "UX Design",
    ACCESSIBILITY: "Accessibility Design",
    UNITY: "Unity",
    ANDROID_STUDIO: "Android Studio",
    GODOT: "Godot Engine",
    GAME_DESIGN: "Game Design",
    NARRATIVE_DESIGN: "Narrative Design",
    LEVEL_DESIGN: "Level Design",
    SOUND_DESIGN: "Sound Design",
    MODELLING: "3D Modelling",
    PHOTOSHOP: "Photoshop",
    PREMIERE_PRO: "Premiere Pro",
    VIDEO_EDITING: "Video Editing",
    MUSIC_PRODUCTION: "Music Production",
    WRITING: "Writing",
    ANALYSIS: "Analysis"
});

/**
 * 
 * @param {string} link 
 * @param {string} alt 
 */
function ImageReference(
    link,
    alt
) {
    this.link = link;
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
 * @param {string} name 
 * @param {number} year 
 * @param {Status} status 
 * @param {Format} format 
 * @param {Tag[]} tags 
 * @param {Skill[]} skills 
 * @param {string} description 
 * @param {ImageReference[]} images 
 * @param {Inspiration[]} inspirations
 * @param {string} link 
 * @param {number} grade 
 */
function Project(
    name,
    year,
    status,
    format,
    tags,
    skills,
    description,
    images,
    inspirations,
    link = null,
    grade = null
) {
    this.name = name;
    this.year = year; 
    this.status = status;
    this.format = format;
    this.tags = tags;
    this.skills = skills;
    this.description = description;
    this.images = images;
    this.link = link;
    this.grade = grade; 
}

/**
 * 
 * @param {Project} project 
 * @param {string} content 
 * @param {string} style 
 */
function ProjectPage(
    project,
    content,
    style
) {
    this.project = project;
    this.content = content;
    this.style = style;
}