const { query } = require('../config/db.config');

async function getPublications(req, res) {
    try {
        const publications = await query("SELECT * FROM research_publications");
        res.json(publications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch publications' });
    }
}

async function createPublication(req, res) {
    const { title, author, abstract, publication_date, status } = req.body;
    const filePath = req.file ? req.file.path : null; // Handle the file path from multer

    try {
        await query(
            "INSERT INTO research_publications (title, author, abstract, publication_date, status, file_path) VALUES (?, ?, ?, ?, ?, ?)", 
            [title, author, abstract, publication_date, status || 'defense_pending', filePath]
        );
        res.status(201).json({ message: 'Publication created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create publication' });
    }
}

async function updatePublication(req, res) {
    const { id } = req.params;
    const { title, author, abstract, publication_date, status, file_path } = req.body;

    // Set default values for optional fields if they are not provided
    const filePath = file_path || null;

    try {
        await query(
            "UPDATE research_publications SET title = ?, author = ?, abstract = ?, publication_date = ?, status = ?, file_path = ? WHERE id = ?", 
            [title, author, abstract, publication_date, status, filePath, id]
        );
        res.json({ message: 'Publication updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update publication' });
    }
}

async function deletePublication(req, res) {
    const { id } = req.params;
    try {
        await query("DELETE FROM research_publications WHERE id = ?", [id]);
        res.json({ message: 'Publication deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete publication' });
    }
}

module.exports = { getPublications, createPublication, updatePublication, deletePublication };
