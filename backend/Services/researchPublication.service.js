// const { query } = require('../config/db.config');
const { query } = require("../Config/db.config");

// Fetch all publications
async function getAllPublications() {
    try {
        return await query("SELECT * FROM research_publications");
    } catch (error) {
        console.error("Error fetching publications:", error);
        throw new Error('Failed to fetch publications');
    }
}

// Fetch a single publication by ID
async function getPublicationById(id) {
    try {
        return await query("SELECT * FROM research_publications WHERE id = ?", [id]);
    } catch (error) {
        console.error("Error fetching publication by ID:", error);
        throw new Error('Failed to fetch publication');
    }
}

// Create a new publication
async function createPublication({ title, author, abstract, publication_date, status, file_path }) {
    try {
        return await query(
            "INSERT INTO research_publications (title, author, abstract, publication_date, status, file_path) VALUES (?, ?, ?, ?, ?, ?)",
            [title, author, abstract, publication_date, status, file_path]
        );
    } catch (error) {
        console.error("Error creating publication:", error);
        throw new Error('Failed to create publication');
    }
}

// Update an existing publication
async function updatePublication(id, { title, author, abstract, publication_date, status, file_path }) {
    try {
        return await query(
            "UPDATE research_publications SET title = ?, author = ?, abstract = ?, publication_date = ?, status = ?, file_path = ? WHERE id = ?",
            [title, author, abstract, publication_date, status, file_path, id]
        );
    } catch (error) {
        console.error("Error updating publication:", error);
        throw new Error('Failed to update publication');
    }
}

// Delete a publication
async function deletePublication(id) {
    try {
        return await query("DELETE FROM research_publications WHERE id = ?", [id]);
    } catch (error) {
        console.error("Error deleting publication:", error);
        throw new Error('Failed to delete publication');
    }
}

module.exports = {
    getAllPublications,
    getPublicationById,
    createPublication,
    updatePublication,
    deletePublication
};
