const URL = process.env.REACT_APP_BE_URL || 'http://localhost:4000';

export default {
    async handleGeneralGetRequests () {
        const data = await fetch(URL);
        const JSONData = await data.json();
        return JSONData
    },
    async handleSpecificGetRequests (index) {
        const data = await fetch(`${URL}/${index}`);
        const JSONData = await data.json();
        return JSONData
    },
    async handleEditRequest (index, payload) {
        const data = await fetch(`${URL}/${index}`, {
            body: JSON.stringify(payload),
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return data
    },
    async handleCreateRequest (newAnimal) {
        const data = await fetch(`${URL}/new`, {
            body: JSON.stringify(newAnimal),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return data
    },
    async handleDeleteRequest (index) {
        const data = await fetch(`${URL}/${index}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return data
    }
} 