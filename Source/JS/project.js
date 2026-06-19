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

const Tag = Object.freeze({});

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
 * @param {string} name 
 * @param {Date} date 
 * @param {Status} status 
 * @param {Format} format 
 * @param {Tag[]} tags 
 * @param {Skill[]} skills 
 * @param {string} description 
 * @param {string[]} images 
 * @param {string} link 
 * @param {number} grade 
 */
function Project(
    name,
    date,
    status,
    format,
    tags,
    skills,
    description,
    images,
    link = null,
    grade = null
) {

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

}