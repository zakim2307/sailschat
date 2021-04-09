/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
    user: [
        {
            name: 'Bruce Wayne',
            email: 'IamBatman@DCEU.com',
            avatar: 'images/the-batman.webp',
            location: 'Gotham',
            bio: 'Billionaire at day vigilante at night'
        },
        {
            name: 'Harley Quinn',
            email: 'IamHarley@DCEU.com',
            avatar: 'https://randomuser.me/api/portraits/women/94.jpg',
            location: 'Gotham',
            bio: 'Crazy at day supercrazy at night'
        },
        {
            name: 'Raphael Varane',
            email: 'raphsmadrid@gmail.com',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            location: 'Gotham',
            bio: 'citylights'
        }
    ]
}
