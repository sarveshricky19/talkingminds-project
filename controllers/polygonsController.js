const pool = require('../db/database');

exports.createPolygon = async (req, res) => {
    const { name, description, coordinates } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO polygons (name, description, geometry) VALUES ($1, $2, ST_SetSRID(ST_MakePolygon(ST_GeomFromText($3)), 4326)) RETURNING *`,
            [name, description, `POLYGON((${coordinates.join(',')}))`]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPolygons = async (req, res) => {
    try {
        const result = await pool.query(`SELECT id, name, description, ST_AsGeoJSON(geometry) AS geometry FROM polygons`);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePolygon = async (req, res) => {
    const { id } = req.params;
    const { name, description, coordinates } = req.body;
    try {
        const result = await pool.query(
            `UPDATE polygons SET name = $1, description = $2, geometry = ST_SetSRID(ST_GeomFromText($3), 4326) WHERE id = $4 RETURNING *`,
            [name, description, `POLYGON((${coordinates.join(',')}))`, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
