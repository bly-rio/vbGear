document.addEventListener('DOMContentLoaded', () => {
    // State
    let notes = [];
    let editingId = null;

    // Elements
    const notesListBody = document.getElementById('notes-list-body');
    const emptyStateMsg = document.getElementById('empty-state-msg');
    const addBtn = document.getElementById('add-note-btn');
    const updateBtn = document.getElementById('update-note-btn');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const copyBtn = document.getElementById('copy-notes-btn');
    const notesScrollArea = document.getElementById('notes-scroll-area');

    const titleInput = document.getElementById('note-title');
    const contentInput = document.getElementById('new-note-content');
    const keywordsInput = document.getElementById('new-note-keywords');

    if (notesListBody) {
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
        scrollToNewNote();
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

        // Focus input
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
        notesListBody.innerHTML = '';

        if (notes.length === 0) {
            emptyStateMsg.style.display = 'block';
            return;
        } else {
            emptyStateMsg.style.display = 'none';
        }

        notes.forEach(note => {
            const row = document.createElement('tr');
            row.className = 'note-row';

            // Format keywords
            let keywordsHtml = '';
            if (note.keywords) {
                const keywordsList = note.keywords.split(',').map(k => k.trim()).filter(k => k);
                if (keywordsList.length > 0) {
                    keywordsHtml = `
                        <div class="note-keywords-list">
                            ${keywordsList.map(k => `<div>&gt; ${escapeHtml(k)}</div>`).join('')}
                        </div>
                    `;
                }
            }

            row.innerHTML = `
                <td class="note-cell-keywords">
                    ${keywordsHtml}
                </td>
                <td class="note-cell-content">${escapeHtml(note.content)}</td>
                <td class="note-cell-actions">
                    <div class="action-buttons">
                        <button class="btn-icon-sm" onclick="window.triggerEdit(${note.id})" title="Edit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </button>
                        <button class="btn-icon-sm delete" onclick="window.triggerDelete(${note.id})" title="Delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                </td>
            `;
            notesListBody.appendChild(row);
        });
    }

    function scrollToNewNote() {
        // Scroll to the bottom of the scroll area
        if (notesScrollArea) {
            notesScrollArea.scrollTo({
                top: notesScrollArea.scrollHeight,
                behavior: 'smooth'
            });
        }
    }

    function copyNotesToClipboard() {
        const title = titleInput.value.trim() || 'Untitled Note';

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

        navigator.clipboard.writeText(content).then(() => {
            const originalContent = copyBtn.innerHTML;
            // Change icon to checkmark
            copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            copyBtn.style.color = '#39ff14';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalContent;
                copyBtn.style.color = '';
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
