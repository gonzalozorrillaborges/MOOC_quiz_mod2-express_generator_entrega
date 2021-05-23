const {Quiz} = require("../models/index.js").models;

    exports.index = async (req, res, next) => {

        try {

            //Se buscan todos los quizzes en el modelo QUIZ
            const quizzes = await Quiz.findAll();

            //Se renderizan usando la vista quizzes/index.ejs usando la data pasada quizzes y nombrandola quizzes...
            res.render('./quizzes/index', {quizzes: quizzes});

        } catch (err) {
            next(err);
        }

    };

