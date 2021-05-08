const database = {
    entries: [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Happy"
        },
        {
            id: 2,
            date: "07/26/2025",
            concept: "Complex Flexbox",
            entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout.",
            mood: "Sad"
        }
    ]
}

const noteAboutToday = {
    id: 3,
    date: "04/27/2021",
    concept: "HTML & CSS",
    entry: "JS",
    mood: "sleepy"
}

database.entries.push(noteAboutToday)

console.log(database)


for (const noteObj of database.entries) {
    console.log(
        `Note ${noteObj.id}
        ${noteObj.date}
        I learned ${noteObj.concept}
        I felt  ${noteObj.sleepy}
        ---------
        `)
}

const searchTerm = "sleepy"
for (const noteObj of database.entries) {
    if (noteObj.mood===searchTerm) {
        console.log(
            `Note ${noteObj.id}
            ${noteObj.date}
            I learned ${noteObj.concept}
            I felt  ${noteObj.sleepy}
            ---------
            `)
    }

}

const createNote  = (noteObject) => {

        const lastIndex = database.entries.length - 1
        const currentLastNote = database.entries[lastIndex]
        const maxId = currentLastNote.id
        const idForNewNote = maxId + 1
        noteObject.id = idForNewNote

        database.entries.push(noteObject)
}

// Create a new note object
const moreNewerNote = {
    id: 4,
    date: "05/01/2021",
    concept: "Book2-Daily-Note",
    entry: "I learned more about JS",
    mood: "happy"
}

createNote(moreNewerNote)