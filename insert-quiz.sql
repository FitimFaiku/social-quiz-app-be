/** Create Database Entries for Quiz  */


INSERT INTO socialquizapp.quiz(quiz_title,quiz_description,is_active,is_private) VALUES
('Linux Quiz', 'Das ist ein Quiz, welches sich mit Linux Commandos auseinander setzt.',true, false);

INSERT INTO socialquizapp.question(quizId,question_number, question, question_type, duration_in_sec) VALUES
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Linux Quiz'), 1, 'Mit welchem Kommando wird ein neuer Ordner in Linux erstellt?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Linux Quiz'), 2, 'Mit welchem Kommando werden die Dateien im aktuellen Pfad aufgelistet?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Linux Quiz'), 3, 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?', 'sc', 30);

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
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Mit welchem Kommando wird in einem anderen Ordner gewechselt?'), 'mkdir',false);

-- Quiz über Hauptstädte


INSERT INTO socialquizapp.quiz(quiz_title,quiz_description,is_active,is_private) VALUES
('Städte Quiz', 'Das ist ein Quiz, welches sich mit den Hauptstädten auseinander setzt.',true, false);

INSERT INTO socialquizapp.question(quizId,question_number, question, question_type, duration_in_sec) VALUES
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Städte Quiz'), 1, 'Wie heißt die Türkische Hauptstadt?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Städte Quiz'), 2, 'Wie heißt die Australische Hauptstadt?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Städte Quiz'), 3, 'Wie heißt die Hauptstadt der USA?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Städte Quiz'), 3, 'Wie heißt die Hauptstadt von Kanada?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Städte Quiz'), 3, 'Wie heißt die Hauptstadt von China?', 'sc', 30),
((SELECT id FROM socialquizapp.quiz WHERE quiz_title LIKE 'Städte Quiz'), 3, 'Wie heißt die Hauptstadt von Russland?', 'sc', 30);

INSERT INTO socialquizapp.answer(questionId, answer, is_correct) VALUES
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Türkische Hauptstadt?'), 'Istanbul',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Türkische Hauptstadt?'), 'Izmir',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Türkische Hauptstadt?'), 'Ankara',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Türkische Hauptstadt?'), 'Samsun',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Australische Hauptstadt?'), 'Sydney',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Australische Hauptstadt?'), 'Melbourne',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Australische Hauptstadt?'), 'Canberra',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Australische Hauptstadt?'), 'Brisbane',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt der USA?'), 'New York',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt der USA?'), 'Chicago',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt der USA?'), 'Los Angeles',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt der USA?'), 'Washington D.C.',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Kanada?'), 'Toronto',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Kanada?'), 'Montreal',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Kanada?'), 'Ottawa',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Kanada?'), 'Vancouver',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von China?'), 'Wuhan',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von China?'), 'Peking',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von China?'), 'Shanghai',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von China?'), 'Shenzhen',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Russland?'), 'Sankt Petersburg',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Russland?'), 'Moscow',true),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Russland?'), 'Kazan',false),
((SELECT id FROM socialquizapp.question WHERE question LIKE 'Wie heißt die Hauptstadt von Russland?'), 'Sochi',false);
