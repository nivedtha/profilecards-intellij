Feature: Show Profile Card Details
	As a user 
	I want to be able to check a profile card details
	So that I can access all the details about a members' profile card

	Scenario Outline: Member Name Clicked
		Given I'm in the main page
		When the "<member_name>" is clicked
		Then I'm redirected to the "<member_name>" profile card

		Examples:
		  | member_name |
		  | Carlos Ferreira |
		  | João Silva |
		  | Nivedhita Gowthaman |
		  | Tiago Monteiro |

	Scenario Outline: Show Member Details
		Given I'm in the main page
		When the "<member_name>" is clicked
		Then I should be able to see the name "<name>"

		Examples:
			| member_name | name |
			| Carlos Ferreira | Carlos Ferreira |
			| João Silva | João Manuel Reis Belo Silva |
			| Nivedhita Gowthaman | Nivedhitha Malarvizhi.G |
			| Tiago Monteiro | Tiago Ferreira Monteiro |

	Scenario Outline: Show Member Details
		Given I'm in the main page
		When the "<member_name>" is clicked
		Then I should be able to see the short bio "<short_bio>"

		Examples:
			| member_name | short_bio |
			| Carlos Ferreira | Hi! My name is Carlos Ferreira. I'm enrolled in the master's degree in mobile computing of School of Technology and Management of Polytechnic Institute of Leiria and I'm working on a enterprise near of the School. |
			| João Silva | Hello! Right now, i'm on the first year of a master degree in Mobile Computing at Polytechnic Institute of Leiria. I also took my bachelor on this institute. If i could i would travel all around the world! |
			| Nivedhita Gowthaman | Fitsrly,I have done my Bachelor's in electronics engineer and Master of engineering in VLSI design (Electronics and comm engg)during bachelor studies i gained some knowledge about Java & other programming language like C,C++ which drives my interest made me doing current Master degree in the field of Mobile computing(MS in mobile computing) there by acquiring java,html,PHP and other programming skills. |
			| Tiago Monteiro | Hi there! I am currently studying to finish my Master in Mobile Computing at Instituto Politécnico de Leiria, where I also teach PHP to students from another course. In my free time, I like to play football and watch movies. |

	Scenario Outline: Show Member Details
		Given I'm in the main page
		When the "<member_name>" is clicked
		Then I should be able to see the email "<email>"

		Examples:
			| member_name | email |
			| Carlos Ferreira | 2162070@my.ipleiria.pt |
			| João Silva | 2162436@my.ipleiria.pt |
			| Nivedhita Gowthaman | gm.niveditha@gmail.com |
			| Tiago Monteiro | 2162061@my.ipleiria.pt |

	Scenario Outline: Show Member Details
		Given I'm in the main page
		When the "<member_name>" is clicked
		Then I should be able to see the education "<education>"

		Examples:
			| member_name | education |
			| Carlos Ferreira | Bachelor in Computer Science |
			| João Silva | Bachelor in Healthcare Informatics |
			| Nivedhita Gowthaman | Bachelor of Electronics & Communication Engineering(2008-2012) Master of Engineering in VLSI design (2012-2014) |
			| Tiago Monteiro | Bachelor in Computer Science (2012 - 2016) |

	Scenario Outline: Show Member Details
		Given I'm in the main page
		When the "<member_name>" is clicked
		Then I should be able to see the projects "<projects>"

		Examples:
			| member_name | projects |
			| Carlos Ferreira | I'm currently working in a business group of ten companies. Some of the companies are represented in geographically distant locations. This implies that the business group is connected through a WAN network. My professional projects are therefore related to all the computer aspects of the various companies. Thus my professional projects are related to the management of the computer network and to all the infomatic applications used in the Group. |
			| João Silva | While taking my bachelor, i worked in a lot projects because the subjects required so and due to working on a lot of projects I had contact with some programming languages like C#, Java, Android, HTML, CSS and PHP. I also had contact with a very well known project that consisted making a wheelchair electric and cheap. My take on this project was optimizing the existing source code while converting it to Java. |
			| Nivedhita Gowthaman | I have done projects on the field of embedded system named "Smart health-care system for elderly using Zig-Bee" and Mini project on sensor system as"Road- obstacle detection stick for Blind" and individual project in Master's(VLSI design) based on "A Power Efficient High Speed Parity CAM Checker Design"(Search Engine)that mainly descibes the power consumption of Search engine. |
			| Tiago Monteiro | While I was doing the Bachelor in Computer Science, most of the subjects required a project to be developed. Thereford, I had the opportunity to work in several programming languages like C, C#, Java, HTML, CSS, JavaScript and PHP. Up to date, the most relevant project I worked it is now under production and its objective is to help members of the coordination course to make schedules for students to attend classes while maintaining shifts balanced |