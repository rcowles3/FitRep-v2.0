let express = require('express');
let app = express();
let userRouter = express.Router();

let CreateUser = require('../models/CreateUser');

userRouter.route('/create').post((req, res) => {
    let user = new CreateUser(req.body);
    user.save()
        .then(user => {
            res.status(200).json({ CreateUser: 'User Successfully Created' });
        })
        .catch(err => {
            res.status(400).send("Sorry, please try again, unable to create new user.")
        });
});

userRouter.route('/all').get((req, res) => {
    CreateUser.find((err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
});

module.exports = userRouter;