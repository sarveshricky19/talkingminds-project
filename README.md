Spatial Data API

Overview

The Spatial Data API is a backend service designed for storing, retrieving, and updating spatial data. It supports operations on both point and polygon datasets, providing RESTful endpoints for spatial data queries. The API is built using Node.js with a PostgreSQL database powered by the PostGIS extension for spatial data handling.

Features

Point Data Operations:
Store multiple spatial points.
Retrieve spatial points based on queries.
Update spatial point data.
Polygon Data Operations:
Store multiple spatial polygons.
Retrieve spatial polygons based on queries.
Update spatial polygon data.
Spatial Queries:
Perform operations such as proximity search, intersection, and containment.
PostGIS Integration:
Utilize PostgreSQL with the PostGIS extension to handle spatial data efficiently.
Technologies Used

Backend: Node.js, Express.js
Database: PostgreSQL with PostGIS
Spatial Data Standards: GeoJSON for point and polygon data
API Endpoints

Points API
Method	Endpoint	Description
POST	/api/points	Add new spatial points.
GET	/api/points	Retrieve spatial points.
PUT	/api/points/:id	Update a specific spatial point.

Polygons API
Method	Endpoint	Description
POST	/api/polygons	Add new spatial polygons.
GET	/api/polygons	Retrieve spatial polygons.
PUT	/api/polygons/:id	Update a specific spatial polygon.

Sample Response
{
  "id": 1,
  "name": "Point A",
  "coordinates": {
    "type": "Point",
    "coordinates": [12.4924, 41.8902]
  }
}
