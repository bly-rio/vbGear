document.addEventListener('DOMContentLoaded', () => {
    // State
    let notes = [];
    let editingId = null;

    // Elements
    const notesList = document.getElementById('notes-list');
    const addBtn = document.getElementById('add-note-btn');
    const updateBtn = document.getElementById('update-note-btn');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const copyBtn = document.getElementById('copy-notes-btn');

    const titleInput = document.getElementById('note-title');
    const summaryInput = document.getElementById('note-summary');
    const contentInput = document.getElementById('new-note-content');
    const keywordsInput = document.getElementById('new-note-keywords');

    if (notesList) {
        // Event Listeners
        addBtn.addEventListener('click', addNote);
        updateBtn.addEventListener('click', updateNote);
        cancelBtn.addEventListener('click', cancelEdit);
        copyBtn.addEventListener('click', copyNotesToClipboard);

        // Initial Render
        renderNotes();
    }

    function addNote() {
        const content = contentInput.value.trim();
        const keywords = keywordsInput.value.trim();

        if (!content && !keywords) {
            alert('Please enter some content or keywords.');
            return;
        }

        const newNote = {
            id: Date.now(),
            content,
            keywords
        };

        notes.push(newNote);
        clearInputs();
        renderNotes();
    }

    function deleteNote(id) {
        if (confirm('Are you sure you want to delete this note?')) {
            notes = notes.filter(note => note.id !== id);
            renderNotes();

            // If we were editing this note, cancel edit
            if (editingId === id) {
                cancelEdit();
            }
        }
    }

    function editNote(id) {
        const note = notes.find(n => n.id === id);
        if (!note) return;

        editingId = id;
        contentInput.value = note.content;
        keywordsInput.value = note.keywords;

        // UI State
        addBtn.classList.add('hidden');
        updateBtn.classList.remove('hidden');
        cancelBtn.classList.remove('hidden');

        // Scroll to input
        contentInput.scrollIntoView({ behavior: 'smooth' });
        contentInput.focus();
    }

    function updateNote() {
        if (!editingId) return;

        const content = contentInput.value.trim();
        const keywords = keywordsInput.value.trim();

        if (!content && !keywords) {
            alert('Please enter some content or keywords.');
            return;
        }

        notes = notes.map(note => {
            if (note.id === editingId) {
                return { ...note, content, keywords };
            }
            return note;
        });

        cancelEdit(); // Resets UI
        renderNotes();
    }

    function cancelEdit() {
        editingId = null;
        clearInputs();
        addBtn.classList.remove('hidden');
        updateBtn.classList.add('hidden');
        cancelBtn.classList.add('hidden');
    }

    function clearInputs() {
        contentInput.value = '';
        keywordsInput.value = '';
    }

    function renderNotes() {
        notesList.innerHTML = '';

        if (notes.length === 0) {
            notesList.innerHTML = '<div class="empty-state">No notes added yet. Start typing above!</div>';
            return;
        }

        notes.forEach(note => {
            const item = document.createElement('div');
            item.className = 'note-item';

            // Format keywords
            let keywordsHtml = '';
            if (note.keywords) {
                const keywordsList = note.keywords.split(',').map(k => k.trim()).filter(k => k);
                if (keywordsList.length > 0) {
                    keywordsHtml = `
                        <div class="note-keywords-title">Keywords:</div>
                        <div class="note-keywords-list">
                            ${keywordsList.map(k => `<div>&gt; ${escapeHtml(k)}</div>`).join('')}
                        </div>
                    `;
                }
            }

            item.innerHTML = `
                <div class="note-item-keywords">
                    ${keywordsHtml}
                </div>
                <div class="note-item-content">${escapeHtml(note.content)}</div>
                <div class="note-actions-col">
                    <button class="btn-icon-sm" onclick="window.triggerEdit(${note.id})">Edit</button>
                    <button class="btn-icon-sm delete" onclick="window.triggerDelete(${note.id})">Delete</button>
                </div>
            `;
            notesList.appendChild(item);
        });
    }

    function copyNotesToClipboard() {
        const title = titleInput.value.trim() || 'Untitled Note';
        const summary = summaryInput.value.trim();

        let content = `< ${title} />\n\n`;

        if (notes.length > 0) {
            content += `Notes:\n\n`;

            notes.forEach((note) => {
                if (note.content) content += `[#] ${note.content}\n`;
                if (note.keywords) {
                    const keywordsList = note.keywords.split(',').map(k => k.trim()).filter(k => k);
                    content += `{${keywordsList.join('}, {')}}\n`;
                }
                content += `\n`;
            });
        }

        if (summary) {
            content += `/--------------------/\n\n`;
            content += `# ${summary}\n`;
        }

        navigator.clipboard.writeText(content).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            copyBtn.style.background = '#32cd32';
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy to clipboard');
        });
    }

    function escapeHtml(text) {
        if (!text) return '';
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Expose helpers to window for inline onclicks
    window.triggerDelete = deleteNote;
    window.triggerEdit = editNote;
});
