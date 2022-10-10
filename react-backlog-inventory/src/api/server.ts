let token = '27868eecc7ac978dcd73121d448f85bd3f6eb1d4190012d9';
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://backlog-tracker-adam.herokuapp.com/api/games`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to Fetch data from server')
        }

        return await response.json();
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://backlog-tracker-adam.herokuapp.com/api/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://backlog-tracker-adam.herokuapp.com/api/games/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://backlog-tracker-adam.herokuapp.com/api/games/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
}