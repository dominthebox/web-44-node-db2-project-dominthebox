// STRETCH
const cars = [
    {
        vin: '1234567891234',
        make: 'subaru',
        model: 'wrx',
        mileage: 59876,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '2345678912345',
        make: 'toyota',
        model: 'corolla',
        mileage: 69890,
        title: 'dirty',
        transmission: 'automatic',
    },
    {
        vin: '3456789123456',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}