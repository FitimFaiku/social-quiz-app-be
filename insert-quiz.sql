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



INSERT INTO socialquizapp.fact(fact) VALUES
('In England findet jährlich ein großer Lügenwettbewerb statt, bei dem die Teilnehmer in fünf Minuten eine große erlogene Geschichte erzählen müssen. Politikern und Anwälten ist die Teilnahme jedoch untersagt, weil man „faire“ Bedingungen unter allen Teilnehmern schaffen möchte.'),
('Im Jahr 2010 machte das Unternehmen General Electric in den USA einen Gewinn von 14 Milliarden Dollar, musste aber keine Steuern zahlen.'),
('Das Wasser der Kokosnuss ist sowohl isotonisch als auch steril. Aus diesem Grund wird es in unentwickelten Ländern statt Kochsalzlösung als Infusion verwendet.'),
('In der Geschichte von Mexiko gab es einmal drei unterschiedliche Präsidenten an nur einem Tag.'),
('Es gibt insgesamt nur zwei Menschen, die das Rezept für Coca-Cola kennen, weshalb sie nicht gemeinsam reisen dürfen.'),
('Katzen besitzen 32 Muskeln, um ihre Ohren zu bewegen. Der Mensch besitzt zum Vergleich nur sechs Muskeln an seinen Ohren.'),
('In Indien tragen Waldarbeiter eine Maske mit einem menschlichen Gesicht auf dem Hinterkopf, um nicht von hinten durch einen Tiger angegriffen zu werden.'),
('Weibliche Stinktiere können die Entwicklung ihres Embryos aktiv beeinflussen, um bei fehlender Nahrung die Schwangerschaft zu verzögern.'),
('1990 organisierte die Polizei von Michigan eine Hochzeit zweier ihrer Undercover-Agenten. Dabei wurden zahlreiche Drogendealer eingeladen, die alle während der fingierten Hochzeitszeremonie festgenommen wurden.'),
('Zur Weltpremiere der „Neunten Symphonie“ von Beethoven war dieser bereits vollkommen taub und konnte sie nicht mehr hören.'),
('Der erste Autounfall der Welt mit Todesopfer geschah 1896 bei einer Geschwindigkeit von sechs Kilometern pro Stunde.'),
('Anstatt LOL sagt man in Frankreich MDR für „mort de rire“, was „totgelacht“ bedeutet.'),
('Wenn ein Mann sich niemals rasieren würde, wäre sein Bart zum Zeitpunkt seines Todes rund neun Meter lang.'),
('Montags passieren die meisten Arbeitsunfälle.'),
('Das Durchschnittsalter der Soldaten in Vietnam war 19. Im Zweiten Weltkrieg lag es noch bei 26 Jahren.'),
('Die Türme des World Trade Centers besaßen ihre eigene Postleitzahl: 10048 New York.'),
('Im Jahr 1867 kauften die USA Alaska von Russland für lediglich 7,2 Millionen Dollar ab.'),
('Am 1. Januar 1985 wurde das erste Handy-Gespräch der Welt geführt.'),
('Grauwale paaren sich ausschließlich zu dritt.'),
('Die Entwicklung von chemischen Drogen ist auf die Nazis zurückzuführen. Wissenschaftler des Dritten Reichs entdeckten beispielsweise einen Wirkstoff, der Menschen 90 Kilometer weit ohne Pause marschieren ließ.'),
('Das Ortseingangsschild der Geburtsstadt von Kurt Cobain zeigt die Phrase „Come as you are“.'),
('Korallen sind dem menschlichen Knochen chemisch so ähnlich, dass sie bereits zur Behandlung von Knochenbrüchen eingesetzt werden.'),
('Michael Jackson verhandelte über den Kauf von Marvel.'),
('Wer in Norwegen ein elektrisches Auto besitzt, darf überall kostenlos parken, muss für die Fähre kein Geld bezahlen und darf auf Busspuren fahren.'),
('Montags geschehen die meisten Selbstmorde.'),
('Die älteste noch bestehende Bar in Irland wurde nachweislich 900 Jahre vor Christus eröffnet.'),
('Statistisch gesehen werden die meisten Autos an Neujahr gestohlen.'),
('Ein Kilogramm Muskelmasse verbraucht pro Jahr 36.000 Kalorien.'),
('Im Durchschnitt lacht ein Mensch zehn Mal am Tag.'),
('Der Designer Ko Yang hat eine Milchverpackung entwickelt, die ihre Farbe verändert sobald die enthaltene Milch schlecht geworden ist.'),
('Die NASA plant den Anbau von Pflanzen auf dem Mond innerhalb der nächsten sechs Jahre.'),
('Pro Jahr sterben mehr Menschen durch Sektkorken als durch den Biss einer giftigen Spinne.');
