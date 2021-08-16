create DATABASE ForumQuestions;

create table QuestionTags(
	tag_id SERIAL PRIMARY KEY, 
	tag_name VARCHAR(50) NOT NULL,
	description VARCHAR(800) NOT NULL
);

create table Questions(
	question_id SERIAL PRIMARY KEY,
	question_title VARCHAR(300) NOT NULL,
	description VARCHAR(800) NOT NULL,
	tags integer[]
	);
	
insert into QuestionTags (tag_name, description) values
('javascript', 'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question; e.g., [node.js], [jquery], [json], [reactjs], [angular], [vue.js], [typescript], [svelte] etc.'),
('java', 'Java is a high-level programming language. Use this tag when you are having problems using or understanding the language itself.'),
('python', 'Python is a multi-paradigm, dynamically typed, multipurpose programming language.'),
('html', 'HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.');


insert into Questions (question_title, description, tags) values
('pandas create new dataframe based on return dict from apply function', 'Here is a lambda function : def gen_data(a, b, c, _date): ret = { "Date": _date, "a" : foo(a), "b" : foo(b), "c" : foo(c),', '{1,2}'),
('Coursera issue for me', 'Please help me, i doing an online course and i was asked this question The fractional_part function divides the numerator by the denominator, and returns just the fractional part', '{3,1}'),
('Refactoring React code so that DOM elements are added & removed using CSS instead of ternary statements of JSX', 'I am working on a React project and am trying to adjust the nav bar for mobile users. Normally - the nav bar spans the width of the screen horizontally, but when on mobile I want the items to stack vertically (which they do in my code currently).', '{4, 1}');
('VSCode Error', 'My VSCode is giving error that I do not understand.', '{1,2}');



create table Trainee(
	trainee_id SERIAL PRIMARY KEY, 
	trainee_email VARCHAR(50) NOT NULL,
    trainee_password VARCHAR(25) NOT NULL,
    trainee_firstname VARCHAR(20) NOT NULL,
    trainee_lastname VARCHAR(20) NOT NULL
);

insert into Trainee (trainee_email, trainee_password, trainee_firstname, trainee_lastname) VALUES ('peter.mason@amalitech.org', '234erdfte', 'Peter', 'Mason'), ('anita.ankrah@amalitech.org', 'Anikra98', 'Anita', 'Ankrah'), ('james.rusty@amalitech.org', 'rusja676', 'James', 'Rusty'), ('hello.word@amalitech.org', 'hes8989', 'Hello', 'World'), ('daniel.peters@amalitech.org', '234ettte', 'Daniel', 'Peters');