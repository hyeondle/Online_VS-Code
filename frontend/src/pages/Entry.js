// ./src/pages/Entry.js
// unused page

import Component from "../core/Component.js";

export default class Entry extends Component {
    constructor(ObjectForDI) {
        super(ObjectForDI.$parent, ObjectForDI.setState, ObjectForDI.state);
    }

    template() {
        return `
            <div class="entry-container">
                <h1>Enter the Access Code</h1>
                <input type="text" class="entry-key-input" placeholder="Enter ENTRY_KEY" />
                <button class="entry-submit-btn">Submit</button>
            </div>
        `;
    }

    setEvent() {
        const entryButton = this.$parent.querySelector(".entry-submit-btn");
        if (entryButton) {
            entryButton.onclick = () => this.checkEntryKey();
        }
    }

    checkEntryKey() {
        const inputKey = this.$parent.querySelector(".entry-key-input").value;
        const entryKey = "test";

        if (inputKey === entryKey) {
            document.cookie = "entry=1; path=/"; // Set entry cookie
            this.setState({ entry: 1, locate: "/src/pages/Login" });
        } else {
            alert("Invalid Entry Key!");
        }
    }
}
