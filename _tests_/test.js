const { app } = require('../index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('get routes', () => {
    it('the chess player endpoint returns all players', async() => {
        const data = [
            {
                name: 'Magnus Carlsen',
                rating: 2847,
                worldChampion: true,
                country: 'Norway', 
                id: 1
            },
            {
                name: 'Fabiano Caruana',
                rating: 2820,
                worldChampion: false,
                country: 'USA', 
                id: 2
            },
            {
                name: 'Ding Liren',
                rating: 2791,
                worldChampion: false,
                country: 'China', 
                id: 3
            },
            {
                name: 'Ian Nepomniatchi',
                rating: 2789,
                worldChampion: false,
                country: 'Russia', 
                id: 4
            },
            {
                name: 'Levon Aronian',
                rating: 2781,
                worldChampion: false,
                country: 'Armenia', 
                id: 5
            }
        ];
        const response = await request.get('/chess-players')

        expect(response.body).toEqual(data)
    })
    it('return a single player', async() => {
        const data =  {
            name: 'Ian Nepomniatchi',
            rating: 2789,
            worldChampion: false,
            country: 'Russia', 
            id: 4
        };
        const response = await request.get('/chess-players/4')

        expect(response.body).toEqual(data)
    })
})