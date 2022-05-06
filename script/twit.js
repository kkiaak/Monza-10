var Twit = require('twit');
const fs = require('fs');

exports.getTweet = () => {
    var T = new Twit({
        consumer_key: '00lhjyZmYIVFhxzLRXPxBYjTy',
        consumer_secret: 'wUhm4jXlbRfza3KXisdYMRNrJOwKh8Q72rAddLMIvnr6z7AXjG',
        app_only_auth: true,    
    });

    T.get('search/tweets', { q: 'agesci', count: 3 }, function (err, data, response) {
        fs.writeFile(__dirname + '/json/twittAgesci.json', JSON.stringify(data), 'utf8', (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Json Tweet -agesci- Saved")
            }
        });
    });
};
