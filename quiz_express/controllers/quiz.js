const {Quiz} = require("../models/index.js").models;
//var QuizzesView = require('../view/quizzes/index.ejs');
// Show all quizzes in DB including <id> and <author>
    //async function index(){

    //let quizzes = await Quiz.findAll(
      
    //);

    //}

    exports.index = async (req, res, next) => {
        //let quizzes = await Quiz.findAll(
      
        //    );
        //res.render(quizzes);

        try {
            const quizzes = await Quiz.findAll();
            //res.send(quizzes/index(quizzes));

            res.render('./quizzes/index', {quizzes: quizzes});

                    //Para efectos de depuracion
        console.log(`New Query of Quizzes`);

            //Para efectos de depuracion
            //console.log(`New Query of Quizzes`);
        } catch (err) {
            next(err);
        }

    };

