/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const noteObj of entries) {
        allEntriesAsHTML += `<li>
        ${noteObj.concept} <br>
        ${noteObj.entry}<br>
        ${noteObj.date}<br>
        </li>`
    }

    return allEntriesAsHTML
}