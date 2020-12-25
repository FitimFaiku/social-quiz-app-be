/** Create Database Entries for Quiz  */


INSERT INTO socialquizapp.quiz(quiz_title,quiz_description,is_active,is_private) VALUES
('Linux Quiz', 'Das ist ein Quiz, welches sich mit Linux Commandos auseinander setzt.',true, false);

INSERT INTO socialquizapp.question(quizId,question_number, question, question_type, duration_in_sec) VALUES
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Linux Quiz'), 1, 'Mit welchem Kommando wird ein neuer Ordner in Linux erstellt?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Linux Quiz'), 2, 'Mit welchem Kommando werden die Dateien im aktuellen Pfad aufgelistet?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Linux Quiz'), 3, 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?', 'sc', 30)

INSERT INTO socialquizapp.answer(questionId, answer, is_correct) VALUES
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird ein neuer Ordner in Linux erstellt?'), 'pwd',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird ein neuer Ordner in Linux erstellt?'), 'ls',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird ein neuer Ordner in Linux erstellt?'), 'touch',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird ein neuer Ordner in Linux erstellt?'), 'mkdir',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando werden die Dateien im aktuellen Pfad aufgelistet?'), 'pwd',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando werden die Dateien im aktuellen Pfad aufgelistet?'), 'ls',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando werden die Dateien im aktuellen Pfad aufgelistet?'), 'cd',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando werden die Dateien im aktuellen Pfad aufgelistet?'), 'echo',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?'), 'cd',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?'), 'ls',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?'), 'pwd',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?'), 'mkdir',false)
