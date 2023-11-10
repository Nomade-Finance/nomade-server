/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if(!config.seedDB) {
        return Promise.resolve();
    }


    let promises = [];

    let thingPromise = Thing.find({}).remove()
        .then(() => Thing.create({
            name: 'BTC',
            info: 'bitcoin:BC1PC4D08ZQC9JE9H9ZPTXXMQQHM4RQ3XP53K3U72J2WTJH9EGJXCVTQ0E5N8D?label=Nomande%20BTC&message=Deposit'
                
        }, {
            name: 'ETH',
            info: ''
        }, {
            name: 'ETHL2',
            info: ' '
                  
        }, {
            name: 'CARDMOBILE',
            info: 'Paydunya'
        }, {
            name: 'Paypal',
            info: 'souleymanefall1998@gmail.com' // not included right now
        }, {
            name: 'DEX2DEX',
            info: '' // sf up comming strategies
        }))
        .then(() => console.log('finished populating things'))
        .catch(err => console.log('error populating things', err));
    promises.push(thingPromise);

    let userPromise = User.find({}).remove()
        .then(() => User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@example.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@example.com',
            password: 'admin'
        })
            .then(() => console.log('finished populating users'))
            .catch(err => console.log('error populating users', err)));
    promises.push(userPromise);

    return Promise.all(promises);
}
