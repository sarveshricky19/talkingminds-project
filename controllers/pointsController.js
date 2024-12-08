const pool = require('../db/database');

exports.createPoint = async (req, res) => {
    const { name, description, coordinates } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO points (name, description, geometry) VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326)) RETURNING *`,
            [name, description, coordinates[0], coordinates[1]]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPoints = async (req, res) => {
    try {
        const result = await pool.query(`SELECT id, name, description, ST_AsGeoJSON(geometry) AS geometry FROM points`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePoint = async (req, res) => {
    const { id } = req.params;
    const { name, description, coordinates } = req.body;
    try {
        const result = await pool.query(
            `UPDATE points SET name = $1, description = $2, geometry = ST_SetSRID(ST_MakePoint($3, $4), 4326) WHERE id = $5 RETURNING *`,
            [name, description, coordinates[0], coordinates[1], id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
