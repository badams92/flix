// import 
const movies = [
    {
        "movie_id": "tt0111161",
        "title": "The Shawshank Redemption",
        "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
        "release_date": "1994-09-23",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        "directors": "Frank Darabont"
    },
    {
        "movie_id": "tt0068646",
        "title": "The Godfather",
        "description": "The Godfather \"Don\" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
        "release_date": "1972-03-24",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
        "directors": "Francis Ford Coppola"
    },
    {
        "movie_id": "tt0071562",
        "title": "The Godfather: Part II",
        "description": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "release_date": "1974-12-18",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton",
        "directors": "Francis Ford Coppola"
    },
    {
        "movie_id": "tt0468569",
        "title": "The Dark Knight",
        "description": "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as \"The Joker\" appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.",
        "release_date": "2008-07-16",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0050083",
        "title": "12 Angry Men",
        "description": "The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.",
        "release_date": "1957-04-10",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Henry Fonda, Lee J. Cobb, Martin Balsam, John Fiedler",
        "directors": "Sidney Lumet"
    },
    {
        "movie_id": "tt0108052",
        "title": "Schindler's List",
        "description": "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
        "release_date": "1993-12-15",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            }
        ],
        "actors": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall",
        "directors": "Steven Spielberg"
    },
    {
        "movie_id": "tt0167260",
        "title": "The Lord of the Rings: The Return of the King",
        "description": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
        "release_date": "2003-12-17",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
        "directors": "Peter Jackson"
    },
    {
        "movie_id": "tt0110912",
        "title": "Pulp Fiction",
        "description": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
        "release_date": "1994-09-10",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
        "directors": "Quentin Tarantino"
    },
    {
        "movie_id": "tt0060196",
        "title": "The Good, the Bad and the Ugly",
        "description": "Blondie (The Good) (Clint Eastwood) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) (Lee Van Cleef) is a hitman who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) (Eli Wallach) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off of Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor, Bill Carson (Antonio Casale), that he and a few other men have buried a stash of gold in a cemetery. Unfortunately, Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows ...",
        "release_date": "1966-12-23",
        "genres": [
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Clint Eastwood, Eli Wallach, Lee Van Cleef, Aldo Giuffrè",
        "directors": "Sergio Leone"
    },
    {
        "movie_id": "tt0120737",
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "description": "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
        "release_date": "2001-12-19",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean",
        "directors": "Peter Jackson"
    },
    {
        "movie_id": "tt0137523",
        "title": "Fight Club",
        "description": "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
        "release_date": "1999-10-15",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Brad Pitt, Edward Norton, Meat Loaf, Zach Grenier",
        "directors": "David Fincher"
    },
    {
        "movie_id": "tt0109830",
        "title": "Forrest Gump",
        "description": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
        "release_date": "1994-06-23",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
        "directors": "Robert Zemeckis"
    },
    {
        "movie_id": "tt1375666",
        "title": "Inception",
        "description": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb&#39;s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
        "release_date": "2010-07-29",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0167261",
        "title": "The Lord of the Rings: The Two Towers",
        "description": "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
        "release_date": "2002-12-18",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
        "directors": "Peter Jackson"
    },
    {
        "movie_id": "tt0080684",
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "description": "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi Master's help will Luke survive when the Dark Side of the Force beckons him into the ultimate duel with Darth Vader.",
        "release_date": "1980-05-21",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "directors": "Irvin Kershner"
    },
    {
        "movie_id": "tt0133093",
        "title": "The Matrix",
        "description": "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.",
        "release_date": "1999-03-31",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
        "directors": "Lana Wachowski, Lilly Wachowski"
    },
    {
        "movie_id": "tt0099685",
        "title": "Goodfellas",
        "description": "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?",
        "release_date": "1990-09-12",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt0073486",
        "title": "One Flew Over the Cuckoo's Nest",
        "description": "McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.",
        "release_date": "1975-11-19",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Jack Nicholson, Louise Fletcher, Michael Berryman, Peter Brocco",
        "directors": "Milos Forman"
    },
    {
        "movie_id": "tt0047478",
        "title": "Seven Samurai",
        "description": "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.",
        "release_date": "1954-04-26",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt0114369",
        "title": "Se7en",
        "description": "A film about two homicide detectives' (Morgan Freeman and Brad Pitt) desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic \"John Doe\" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer...",
        "release_date": "1995-09-22",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Morgan Freeman, Brad Pitt, Kevin Spacey, Andrew Kevin Walker",
        "directors": "David Fincher"
    },
    {
        "movie_id": "tt0102926",
        "title": "The Silence of the Lambs",
        "description": "F.B.I. trainee Clarice Starling (Jodie Foster) works hard to advance her career, while trying to hide or put behind her West Virginia roots, of which if some knew, would automatically classify her as being backward or white trash. After graduation, she aspires to work in the agency's Behavioral Science Unit under the leadership of Jack Crawford (Scott Glenn). While she is still a trainee, Crawford asks her to question Dr. Hannibal Lecter (Sir Anthony Hopkins), a psychiatrist imprisoned, thus far, for eight years in maximum security isolation for being a serial killer who cannibalized his victims. Clarice is able to figure out the assignment is to pick Lecter's brains to help them solve another serial murder case, that of someone coined by the media as \"Buffalo Bill\" (Ted Levine), who has so far killed five victims, all located in the eastern U.S., all young women, who are slightly overweight (especially around the hips), all who were drowned in natural bodies of water, and all who ...",
        "release_date": "1991-02-14",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, Kasi Lemmons",
        "directors": "Jonathan Demme"
    },
    {
        "movie_id": "tt0317248",
        "title": "City of God",
        "description": "Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970s: Li'l Zé has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Bené is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. he keeps getting swept up in the madness. All he wants to do is take pictures. 1980s: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God.",
        "release_date": "2002-08-30",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele, Phellipe Haagensen",
        "directors": "Fernando Meirelles, Kátia Lund"
    },
    {
        "movie_id": "tt0118799",
        "title": "Life Is Beautiful",
        "description": "In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.",
        "release_date": "1997-12-20",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini, Giustino Durano",
        "directors": "Roberto Benigni"
    },
    {
        "movie_id": "tt0038650",
        "title": "It's a Wonderful Life",
        "description": "George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that prevents him from doing so is George's modest building and loan company, which was founded by his generous father. But on Christmas Eve, George's Uncle Billy loses the business's $8,000 while intending to deposit it in the bank. Potter finds the misplaced money and hides it from Billy. When the bank examiner discovers the shortage later that night, George realizes that he will be held responsible and sent to jail and the company will collapse, finally allowing Potter to take over the town. Thinking of his wife, their young children, and others he loves will be better off with him dead, he contemplates suicide. But the prayers of his loved ones result in a gentle angel named Clarence coming to earth to help George, with the promise of earning his ...",
        "release_date": "1947-01-07",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "James Stewart, Donna Reed, Lionel Barrymore, Thomas Mitchell",
        "directors": "Frank Capra"
    },
    {
        "movie_id": "tt0120815",
        "title": "Saving Private Ryan",
        "description": "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...",
        "release_date": "1998-07-24",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns",
        "directors": "Steven Spielberg"
    },
    {
        "movie_id": "tt0076759",
        "title": "Star Wars: Episode IV - A New Hope",
        "description": "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",
        "release_date": "1977-05-25",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness",
        "directors": "George Lucas"
    },
    {
        "movie_id": "tt0816692",
        "title": "Interstellar",
        "description": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
        "release_date": "2014-11-05",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0245429",
        "title": "Spirited Away",
        "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse ...",
        "release_date": "2001-07-20",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Daveigh Chase, Suzanne Pleshette, Miyu Irino, Rumi Hiiragi",
        "directors": "Hayao Miyazaki"
    },
    {
        "movie_id": "tt0120689",
        "title": "The Green Mile",
        "description": "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.",
        "release_date": "1999-12-10",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Tom Hanks, Michael Clarke Duncan, David Morse, Bonnie Hunt",
        "directors": "Frank Darabont"
    },
    {
        "movie_id": "tt6751668",
        "title": "Parasite",
        "description": "The Kims - mother and father Chung-sook and Ki-taek, and their young adult offspring, son Ki-woo and daughter Ki-jung - are a poor family living in a shabby and cramped half basement apartment in a busy lower working class commercial district of Seoul. Without even knowing it, they, especially Mr. and Mrs. Kim, literally smell of poverty. Often as a collective, they perpetrate minor scams to get by, and even when they have jobs, they do the minimum work required. Ki-woo is the one who has dreams of getting out of poverty by one day going to university. Despite not having that university education, Ki-woo is chosen by his university student friend Min, who is leaving to go to school, to take over his tutoring job to Park Da-hye, who Min plans to date once he returns to Seoul and she herself is in university. The Parks are a wealthy family who for four years have lived in their modernistic house designed by and the former residence of famed architect Namgoong. While Mr. and Mrs. Park ...",
        "release_date": "2019-05-30",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho, Woo-sik Choi",
        "directors": "Bong Joon Ho"
    },
    {
        "movie_id": "tt0110413",
        "title": "Léon: The Professional",
        "description": "After her father, step-mother, step-sister and little brother are killed by her father's employers, the 12-year-old daughter of an abject drug dealer manages to take refuge in the apartment of a professional hitman who at her request teaches her the methods of his job so she can take her revenge on the corrupt DEA agent who ruined her life by killing her beloved brother.",
        "release_date": "1994-09-14",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
        "directors": "Luc Besson"
    },
    {
        "movie_id": "tt0056058",
        "title": "Hara-Kiri",
        "description": "Peace in 17th-century Japan causes the Shogunate's breakup of warrior clans, throwing thousands of samurai out of work and into poverty. An honorable end to such fate under the samurai code is ritual suicide, or hara-kiri (self-inflicted disembowelment). An elder warrior, Hanshiro Tsugumo (Tatsuya Nakadai) seeks admittance to the house of a feudal lord to commit the act. There, he learns of the fate of his son-in-law, a young samurai who sought work at the house but was instead barbarically forced to commit traditional hara-kiri in an excruciating manner with a dull bamboo blade. In flashbacks the samurai tells the tragic story of his son-in-law, and how he was forced to sell his real sword to support his sick wife and child. Tsugumo thus sets in motion a tense showdown of revenge against the house.",
        "release_date": "1962-09-16",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita, Tetsurô Tanba",
        "directors": "Masaki Kobayashi"
    },
    {
        "movie_id": "tt0253474",
        "title": "The Pianist",
        "description": "In this adaptation of the autobiography \"The Pianist: The Extraordinary True Story of One Man's Survival in Warsaw, 1939-1945,\" Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.",
        "release_date": "2002-09-25",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Music",
                "value": "Music"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Adrien Brody, Thomas Kretschmann, Frank Finlay, Emilia Fox",
        "directors": "Roman Polanski"
    },
    {
        "movie_id": "tt0103064",
        "title": "Terminator 2: Judgment Day",
        "description": "Over 10 years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John. The man who will become the future leader of the human resistance against the Machines is now a healthy young boy. However, another Terminator, called the T-1000, is sent back through time by the supercomputer Skynet. This new Terminator is more advanced and more powerful than its predecessor and its mission is to kill John Connor when he's still a child. However, in the Internet and John do not have to face the threat of the T-1000 alone. Another Terminator (identical to the same model that tried and failed to kill Sarah Connor in 1984) is also sent back through time to protect them. Now, the battle for tomorrow has begun.",
        "release_date": "1991-07-03",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
        "directors": "James Cameron"
    },
    {
        "movie_id": "tt0088763",
        "title": "Back to the Future",
        "description": "Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean \"time machine\" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.",
        "release_date": "1985-07-03",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
        "directors": "Robert Zemeckis"
    },
    {
        "movie_id": "tt0114814",
        "title": "The Usual Suspects",
        "description": "Following a truck hijack in New York, five criminals are arrested and brought together for questioning. As none of them are guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser Söze is felt. It becomes clear that each one of them has wronged Söze at some point and must pay back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now: Who actually is Keyser Söze?",
        "release_date": "1995-07-19",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Kevin Spacey, Gabriel Byrne, Chazz Palminteri, Stephen Baldwin",
        "directors": "Bryan Singer"
    },
    {
        "movie_id": "tt0054215",
        "title": "Psycho",
        "description": "Phoenix office worker Marion Crane is fed up with the way life has treated her. She has to meet her lover Sam in lunch breaks, and they cannot get married because Sam has to give most of his money away in alimony. One Friday, Marion is trusted to bank forty thousand dollars by her employer. Seeing the opportunity to take the money and start a new life, Marion leaves town and heads towards Sam's California store. Tired after the long drive and caught in a storm, she gets off the main highway and pulls into the Bates Motel. The motel is managed by a quiet young man called Norman who seems to be dominated by his mother.",
        "release_date": "1960-08-17",
        "genres": [
            {
                "key": "Horror",
                "value": "Horror"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Anthony Perkins, Janet Leigh, Vera Miles, John Gavin",
        "directors": "Alfred Hitchcock"
    },
    {
        "movie_id": "tt0110357",
        "title": "The Lion King",
        "description": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
        "release_date": "1994-06-23",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Musical",
                "value": "Musical"
            }
        ],
        "actors": "Matthew Broderick, Jeremy Irons, James Earl Jones, Whoopi Goldberg",
        "directors": "Roger Allers, Rob Minkoff"
    },
    {
        "movie_id": "tt0027977",
        "title": "Modern Times",
        "description": "Chaplin's last 'silent' film, filled with sound effects, was made when everyone else was making talkies. Charlie turns against modern society, the machine age, (The use of sound in films ?) and progress. Firstly we see him frantically trying to keep up with a production line, tightening bolts. He is selected for an experiment with an automatic feeding machine, but various mishaps leads his boss to believe he has gone mad, and Charlie is sent to a mental hospital - When he gets out, he is mistaken for a communist while waving a red flag, sent to jail, foils a jailbreak, and is let out again. We follow Charlie through many more escapades before the film is out.",
        "release_date": "1936-02-11",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Charles Chaplin, Paulette Goddard, Henry Bergman, Tiny Sandford",
        "directors": "Charles Chaplin"
    },
    {
        "movie_id": "tt0120586",
        "title": "American History X",
        "description": "Derek Vineyard is paroled after serving 3 years in prison for brutally killing two black men who tried to break into/steal his truck. Through his brother's, Danny Vineyard, narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
        "release_date": "1998-07-01",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
        "directors": "Tony Kaye"
    },
    {
        "movie_id": "tt0095327",
        "title": "Grave of the Fireflies",
        "description": "The story of Seita and Setsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival.",
        "release_date": "1988-04-16",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi, Yoshiko Shinohara",
        "directors": "Isao Takahata"
    },
    {
        "movie_id": "tt0021749",
        "title": "City Lights",
        "description": "A tramp falls in love with a beautiful blind girl. Her family is in financial trouble. The tramp's on-and-off friendship with a wealthy man allows him to be the girl's benefactor and suitor.",
        "release_date": "1931-03-07",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Charles Chaplin, Virginia Cherrill, Florence Lee, Harry Myers",
        "directors": "Charles Chaplin"
    },
    {
        "movie_id": "tt2582802",
        "title": "Whiplash",
        "description": "Nineteen year old Andrew Niemann wants to be the greatest jazz drummer in the world, in a league with Buddy Rich. This goal is despite not coming from a pedigree of greatest, musical or otherwise, with Jim, his high school teacher father, being a failed writer. Andrew is starting his first year at Shaffer Conservatory of Music, the best music school in the United States. At Shaffer, being the best means being accepted to study under Terence Fletcher and being asked to play in his studio band, which represents the school at jazz competitions. Based on their less than positive first meeting, Andrew is surprised that Fletcher asks him to join the band, albeit in the alternate drummer position which he is more than happy to do initially. Andrew quickly learns that Fletcher operates on fear and intimidation, never settling for what he considers less than the best each and every time. Being the best in Fletcher's mind does not only entail playing well, but knowing that you're playing well ...",
        "release_date": "2014-10-15",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Music",
                "value": "Music"
            }
        ],
        "actors": "Miles Teller, J.K. Simmons, Melissa Benoist, Paul Reiser",
        "directors": "Damien Chazelle"
    },
    {
        "movie_id": "tt0172495",
        "title": "Gladiator",
        "description": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.",
        "release_date": "2000-05-04",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
        "directors": "Ridley Scott"
    },
    {
        "movie_id": "tt0407887",
        "title": "The Departed",
        "description": "In this crime-action tour de force, the South Boston state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover?",
        "release_date": "2006-10-04",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt1675434",
        "title": "The Intouchables",
        "description": "In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.",
        "release_date": "2011-11-02",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
        "directors": "Olivier Nakache, Éric Toledano"
    },
    {
        "movie_id": "tt0482571",
        "title": "The Prestige",
        "description": "In the end of the nineteenth century, in London, Robert Angier, his beloved wife Julia McCullough, and Alfred Borden are friends and assistants of a magician. When Julia accidentally dies during a performance, Robert blames Alfred for her death, and they become enemies. Both become famous and rival magicians, sabotaging the performance of the other on the stage. When Alfred performs a successful trick, Robert becomes obsessed trying to disclose the secret of his competitor with tragic consequences.",
        "release_date": "2006-10-19",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Christian Bale, Hugh Jackman, Scarlett Johansson, Michael Caine",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0034583",
        "title": "Casablanca",
        "description": "The story of Rick Blaine, a cynical world-weary ex-patriate who runs a nightclub in Casablanca, Morocco during the early stages of WWII. Despite the pressure he constantly receives from the local authorities, Rick's cafe has become a kind of haven for refugees seeking to obtain illicit letters that will help them escape to America. But when Ilsa, a former lover of Rick's, and her husband, show up to his cafe one day, Rick faces a tough challenge which will bring up unforeseen complications, heartbreak and ultimately an excruciating decision to make.",
        "release_date": "1943-01-23",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
        "directors": "Michael Curtiz"
    },
    {
        "movie_id": "tt0064116",
        "title": "Once Upon a Time in the West",
        "description": "Jill McBain travels to the wild frontier; Utah - where she and her new husband planned to settle down. Upon arrival, she finds him and his children dead. There's a lot of land, and potential, but there's those who want to take it - at any cost. Even if it means killing a man and his kids.",
        "release_date": "1968-12-21",
        "genres": [
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Henry Fonda, Charles Bronson, Claudia Cardinale, Jason Robards",
        "directors": "Sergio Leone"
    },
    {
        "movie_id": "tt0047396",
        "title": "Rear Window",
        "description": "Professional photographer L.B. \"Jeff\" Jefferies breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate.",
        "release_date": "1954-09-01",
        "genres": [
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
        "directors": "Alfred Hitchcock"
    },
    {
        "movie_id": "tt0095765",
        "title": "Cinema Paradiso",
        "description": "A boy who grew up in a native Sicilian Village returns home as a famous director after receiving news about the death of an old friend. Told in a flashback, Salvatore reminiscences about his childhood and his relationship with Alfredo, a projectionist at Cinema Paradiso. Under the fatherly influence of Alfredo, Salvatore fell in love with film making, with the duo spending many hours discussing about films and Alfredo painstakingly teaching Salvatore the skills that became a stepping stone for the young boy into the world of film making. The film brings the audience through the changes in cinema and the dying trade of traditional film making, editing and screening. It also explores a young boy's dream of leaving his little town to foray into the world outside.",
        "release_date": "1988-11-17",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Philippe Noiret, Enzo Cannavale, Antonella Attili, Isa Danieli",
        "directors": "Giuseppe Tornatore"
    },
    {
        "movie_id": "tt0078748",
        "title": "Alien",
        "description": "In the distant future, the crew of the commercial spaceship Nostromo are on their way home when they pick up a distress call from a distant moon. The crew are under obligation to investigate and the spaceship descends on the moon afterwards. After a rough landing, three crew members leave the spaceship to explore the area on the moon. At the same time as they discover a hive colony of some unknown creature, the ship's computer deciphers the message to be a warning, not a distress call. When one of the eggs is disturbed, the crew realizes that they are not alone on the spaceship and they must deal with the consequences.",
        "release_date": "1979-05-28",
        "genres": [
            {
                "key": "Horror",
                "value": "Horror"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Sigourney Weaver, Tom Skerritt, John Hurt, Veronica Cartwright",
        "directors": "Ridley Scott"
    },
    {
        "movie_id": "tt0078788",
        "title": "Apocalypse Now",
        "description": "It is the height of the war in Vietnam, and U.S. Army Captain Willard is sent by Colonel Lucas and a General to carry out a mission that, officially, 'does not exist - nor will it ever exist'. The mission: To seek out a mysterious Green Beret Colonel, Walter Kurtz, whose army has crossed the border into Cambodia and is conducting hit-and-run missions against the Viet Cong and NVA. The army believes Kurtz has gone completely insane and Willard's job is to eliminate him. Willard, sent up the Nung River on a U.S. Navy patrol boat, discovers that his target is one of the most decorated officers in the U.S. Army. His crew meets up with surfer-type Lt-Colonel Kilgore, head of a U.S Army helicopter cavalry group which eliminates a Viet Cong outpost to provide an entry point into the Nung River. After some hair-raising encounters, in which some of his crew are killed, Willard, Lance and Chef reach Colonel Kurtz's outpost, beyond the Do Lung Bridge. Now, after becoming prisoners of Kurtz, will...",
        "release_date": "1979-08-15",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Martin Sheen, Marlon Brando, Robert Duvall, Frederic Forrest",
        "directors": "Francis Ford Coppola"
    },
    {
        "movie_id": "tt0209144",
        "title": "Memento",
        "description": "Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time.",
        "release_date": "2000-10-11",
        "genres": [
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0082971",
        "title": "Indiana Jones and the Raiders of the Lost Ark",
        "description": "The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it.",
        "release_date": "1981-06-12",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            }
        ],
        "actors": "Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies",
        "directors": "Steven Spielberg"
    },
    {
        "movie_id": "tt0032553",
        "title": "The Great Dictator",
        "description": "20 years after the end of WWI, in which the nation of Tomainia was on the losing side, Adenoid Hynkel has risen to power as the ruthless dictator of the country. He believes in a pure Aryan state and the decimation of the Jews. This situation is unknown to a simple Jewish Tomainian barber who has been hospitalized since a WWI battle. Upon his release the barber, who had been suffering from memory loss about the war, is shown the new persecuted life of the Jews by many living in the Jewish ghetto, including a washerwoman named Hannah with whom he begins a relationship. The barber is ultimately spared such persecution by Commander Schultz, whom he saved in that WWI battle. The lives of all Jews in Tomainia are eventually spared with a policy shift by Hynkel himself, who is doing so for ulterior motives. But those motives include a desire for world domination, starting with the invasion of neighboring Osterlich, which may be threatened by Benzino Napaloni, the dictator of neighboring ...",
        "release_date": "1941-01-01",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Charles Chaplin, Paulette Goddard, Jack Oakie, Reginald Gardiner",
        "directors": "Charles Chaplin"
    },
    {
        "movie_id": "tt1853728",
        "title": "Django Unchained",
        "description": "In 1858, a bounty-hunter named King Schultz seeks out a slave named Django and buys him because he needs him to find some men he is looking for. After finding them, Django wants to find his wife, Broomhilda, who along with him were sold separately by his former owner for trying to escape. Schultz offers to help him if he chooses to stay with him and be his partner. Eventually they learn that she was sold to a plantation in Mississippi. Knowing they can't just go in and say they want her, they come up with a plan so that the owner will welcome them into his home and they can find a way.",
        "release_date": "2012-12-25",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
        "directors": "Quentin Tarantino"
    },
    {
        "movie_id": "tt0405094",
        "title": "The Lives of Others",
        "description": "Gerd Wiesler is an officer with the Stasi, the East German secret police. The film begins in 1984 when Wiesler attends a play written by Georg Dreyman, who is considered by many to be the ultimate example of the loyal citizen. Wiesler has a gut feeling that Dreyman can't be as ideal as he seems, and believes surveillance is called for. The Minister of Culture agrees but only later does Wiesler learn that the Minister sees Dreyman as a rival and lusts after his partner Christa-Maria. The more time he spends listening in on them, the more he comes to care about them. The once rigid Stasi officer begins to intervene in their lives, in a positive way, protecting them whenever possible. Eventually, Wiesler's activities catch up to him and while there is no proof of wrongdoing, he finds himself in menial jobs - until the unbelievable happens.",
        "release_date": "2006-03-23",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Ulrich Mühe, Martina Gedeck, Sebastian Koch, Ulrich Tukur",
        "directors": "Florian Henckel von Donnersmarck"
    },
    {
        "movie_id": "tt0050825",
        "title": "Paths of Glory",
        "description": "The futility and irony of the war in the trenches in WWI is shown as a unit commander in the French army must deal with the mutiny of his men and a glory-seeking general after part of his force falls back under fire in an impossible attack.",
        "release_date": "1957-10-25",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Kirk Douglas, Ralph Meeker, Adolphe Menjou, George Macready",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt0043014",
        "title": "Sunset Blvd.",
        "description": "In Hollywood of the 50's, the obscure screenplay writer Joe Gillis is not able to sell his work to the studios, is full of debts and is thinking in returning to his hometown to work in an office. While trying to escape from his creditors, he has a flat tire and parks his car in a decadent mansion in Sunset Boulevard. He meets the owner and former silent-movie star Norma Desmond, who lives alone with her butler and driver Max Von Mayerling. Norma is demented and believes she will return to the cinema industry, and is protected and isolated from the world by Max, who was her director and husband in the past and still loves her. Norma proposes Joe to move to the mansion and help her in writing a screenplay for her comeback to the cinema, and the small-time writer becomes her lover and gigolo. When Joe falls in love for the young aspirant writer Betty Schaefer, Norma becomes jealous and completely insane and her madness leads to a tragic end.",
        "release_date": "1950-09-29",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Film-Noir",
                "value": "Film-Noir"
            }
        ],
        "actors": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
        "directors": "Billy Wilder"
    },
    {
        "movie_id": "tt0910970",
        "title": "WALL·E",
        "description": "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her \"directive\", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, ...",
        "release_date": "2008-06-26",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
        "directors": "Andrew Stanton"
    },
    {
        "movie_id": "tt4154756",
        "title": "Avengers: Infinity War",
        "description": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.",
        "release_date": "2018-04-25",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
        "directors": "Anthony Russo, Joe Russo"
    },
    {
        "movie_id": "tt0051201",
        "title": "Witness for the Prosecution",
        "description": "Ailing barrister Sir Wilfrid Robarts is thrust back into the courtroom in what becomes one of the most unusual and eventful murder case of the lawyer's career when he finds himself defending Leonard Vole, a man being tried for the murder of a wealthy woman. With Robarts choosing to represent him, the two find themselves up against Leonard's cold-hearted wife, Christine - who, in a surprising turn of events, chooses to appear in court against her husband.",
        "release_date": "1958-02-06",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Tyrone Power, Marlene Dietrich, Charles Laughton, Elsa Lanchester",
        "directors": "Billy Wilder"
    },
    {
        "movie_id": "tt0081505",
        "title": "The Shining",
        "description": "Haunted by a persistent writer's block, the aspiring author and recovering alcoholic, Jack Torrance, drags his wife, Wendy, and his gifted son, Danny, up snow-capped Colorado's secluded Overlook Hotel after taking up a job as an off-season caretaker. As the cavernous hotel shuts down for the season, the manager gives Jack a grand tour, and the facility's chef, the ageing Mr Hallorann, has a fascinating chat with Danny about a rare psychic gift called \"The Shining\", making sure to warn him about the hotel's abandoned rooms, and, in particular, the off-limits Room 237. However, instead of overcoming the dismal creative rut, little by little, Jack starts losing his mind, trapped in an unforgiving environment of seemingly endless snowstorms, and a gargantuan silent prison riddled with strange occurrences and eerie visions. Now, the incessant voices inside Jack's head demand sacrifice. Is Jack capable of murder?",
        "release_date": "1980-06-13",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Horror",
                "value": "Horror"
            }
        ],
        "actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt4633694",
        "title": "Spider-Man: Into the Spider-Verse",
        "description": "Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that's the first of its kind. \"Spider-Man(TM): Into the Spider-Verse\" introduces Brooklyn teen Miles Morales (Shameik Moore), and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.",
        "release_date": "2018-12-12",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
        "directors": "Bob Persichetti, Peter Ramsey, Rodney Rothman"
    },
    {
        "movie_id": "tt0057012",
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "description": "Paranoid Brigadier General Jack D. Ripper of Burpelson Air Force Base, believing that fluoridation of the American water supply is a Soviet plot to poison the U.S. populace, is able to deploy through a back door mechanism a nuclear attack on the Soviet Union without the knowledge of his superiors, including the Chair of the Joint Chiefs of Staff, General Buck Turgidson, and President Merkin Muffley. Only Ripper knows the code to recall the B-52 bombers and he has shut down communication in and out of Burpelson as a measure to protect this attack. Ripper's executive officer, RAF Group Captain Lionel Mandrake (on exchange from Britain), who is being held at Burpelson by Ripper, believes he knows the recall codes if he can only get a message to the outside world. Meanwhile at the Pentagon War Room, key persons including Muffley, Turgidson and nuclear scientist and adviser, a former Nazi named Dr. Strangelove, are discussing measures to stop the attack or mitigate its blow-up into an all ...",
        "release_date": "1964-01-29",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            }
        ],
        "actors": "Peter Sellers, George C. Scott, Sterling Hayden, Keenan Wynn",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt0119698",
        "title": "Princess Mononoke",
        "description": "While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met by animosity by both sides as they each see him as supporting the enemy.",
        "release_date": "1997-07-12",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Yôji Matsuda, Yuriko Ishida, Yûko Tanaka, Billy Crudup",
        "directors": "Hayao Miyazaki"
    },
    {
        "movie_id": "tt0364569",
        "title": "Oldboy",
        "description": "Abducted on a rainy night in 1988, the obnoxious drunk, Oh Dae-Su, much to his surprise, wakes up locked in a windowless and dilapidated hotel room, for an unknown reason. There, his invisible and pitiless captors will feed him, clothe him, and sedate him to avert a desperate suicide--and as his only companion and a window to the world is the TV in his stark cell--the only thing that helps Oh Dae-Su keep going is his daily journal. Then, unexpectedly, after fifteen long years in captivity, the perplexed prisoner is deliberately released, encouraged to track down his tormentor to finally get his retribution. However, who would hate Oh Dae-Su so much he would deny him of a quick and clean death?",
        "release_date": "2003-11-21",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Choi Min-sik, Yoo Ji-Tae, Kang Hye-jeong, Kim Byeong-Ok",
        "directors": "Chan-wook Park"
    },
    {
        "movie_id": "tt7286456",
        "title": "Joker",
        "description": "Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.",
        "release_date": "2019-10-01",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
        "directors": "Todd Phillips"
    },
    {
        "movie_id": "tt5311514",
        "title": "Your Name.",
        "description": "Mitsuha is the daughter of the mayor of a small mountain town. She's a straightforward high school girl who lives with her sister and her grandmother and has no qualms about letting it be known that she's uninterested in Shinto rituals or helping her father's electoral campaign. Instead she dreams of leaving the boring town and trying her luck in Tokyo. Taki is a high school boy in Tokyo who works part-time in an Italian restaurant and aspires to become an architect or an artist. Every night he has a strange dream where he becomes...a high school girl in a small mountain town.",
        "release_date": "2016-08-26",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Ryûnosuke Kamiki, Mone Kamishiraishi, Ryô Narita, Aoi Yûki",
        "directors": "Makoto Shinkai"
    },
    {
        "movie_id": "tt2380307",
        "title": "Coco",
        "description": "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        "release_date": "2017-10-27",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Music",
                "value": "Music"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt, Alanna Ubach",
        "directors": "Lee Unkrich, Adrian Molina"
    },
    {
        "movie_id": "tt1345836",
        "title": "The Dark Knight Rises",
        "description": "Despite his tarnished reputation after the events of The Dark Knight (2008), in which he took the rap for Dent's crimes, Batman feels compelled to intervene to assist the city and its Police force, which is struggling to cope with Bane's plans to destroy the city.",
        "release_date": "2012-07-19",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            }
        ],
        "actors": "Christian Bale, Tom Hardy, Anne Hathaway, Gary Oldman",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0090605",
        "title": "Aliens",
        "description": "57 years after Ellen Ripley had a close encounter with the reptilian alien creature from the first movie, she is called back, this time, to help a group of highly trained colonial marines fight off against the sinister extraterrestrials. But this time, the aliens have taken over a space colony on the moon LV-426. When the colonial marines are called upon to search the deserted space colony, they later find out that they are up against more than what they bargained for. Using specially modified machine guns and enough firepower, it's either fight or die as the space marines battle against the aliens. As the Marines do their best to defend themselves, Ripley must attempt to protect a young girl who is the sole survivor of the nearly wiped out space colony.",
        "release_date": "1986-07-18",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Sigourney Weaver, Michael Biehn, Carrie Henn, Paul Reiser",
        "directors": "James Cameron"
    },
    {
        "movie_id": "tt0087843",
        "title": "Once Upon a Time in America",
        "description": "With the vivid memory of his long-gone childhood friends, Max, Patsy, and Cockeye, etched in his mind, his ferociously loyal partners-in-crime during their rise to prominence in New York's Prohibition-era Lower East Side, the defeated, penniless, and guilt-ridden former gangster, David \"Noodles\" Aaronson, returns to Manhattan. Not knowing what to expect, while on a mission to shed light on his opaque past, grizzled Noodles reunites with his only living friend, Fat Moe, after thirty-five haunted years of self-exile. However, the relentless, piercing sound of culpability stands in the way of finding closure, as the inscrutable content of a well-worn leather suitcase further complicates matters. And now, against the backdrop of a torn conscience, the sad and bittersweet recollections of more than fifty years of love, death, and everything in between, become inextricably intertwined, leading to even more puzzling questions. But, what are a man's options when he is left with nothing?",
        "release_date": "1984-05-23",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Robert De Niro, James Woods, Elizabeth McGovern, Treat Williams",
        "directors": "Sergio Leone"
    },
    {
        "movie_id": "tt4154796",
        "title": "Avengers: Endgame",
        "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
        "release_date": "2019-04-24",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "directors": "Anthony Russo, Joe Russo"
    },
    {
        "movie_id": "tt8267604",
        "title": "Capernaum",
        "description": "Capernaüm (\"Chaos\") tells the story of Zain (Zain al-Rafeea), a Lebanese boy who sues his parents for the \"crime\" of giving him life. The film follows Zain as he journeys from gutsy, streetwise child to hardened 12-year-old \"adult\" fleeing his negligent parents, surviving through his wits on the streets, where he meets Ethiopian migrant worker Rahil, who provides him with shelter and food, as Zain takes care of her baby son Yonas in return. Zain later gets jailed for committing a violent crime, and finally seeks justice in a courtroom.",
        "release_date": "2018-09-20",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Zain Al Rafeea, Yordanos Shiferaw, Boluwatife Treasure Bankole, Kawsar Al Haddad",
        "directors": "Nadine Labaki"
    },
    {
        "movie_id": "tt0082096",
        "title": "Das Boot",
        "description": "It is 1942 and the German submarine fleet is heavily engaged in the so-called \"Battle of the Atlantic\" to harass and destroy British shipping. With better escorts of the destroyer class, however, German U-boats have begun to take heavy losses. \"Das Boot\" is the story of the crew of one such U-Boat, with the film examining how these submariners maintained their professionalism as soldiers and attempted to accomplish impossible missions, all the while attempting to understand and obey the ideology of the government under which they served.",
        "release_date": "1981-09-17",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann, Hubertus Bengsch",
        "directors": "Wolfgang Petersen"
    },
    {
        "movie_id": "tt0057565",
        "title": "High and Low",
        "description": "A wealthy businessman is told his son has been kidnapped and he will have to pay a very large sum for him to be returned safely. It is then discovered that his son is safe at home: the kidnapper took his chauffeur's son by accident. The kidnapper says this makes no difference: pay up or the child dies. This leaves him with a moral dilemma, as he really needs the money to conclude a very important business deal.",
        "release_date": "1963-03-01",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Toshirô Mifune, Yutaka Sada, Tatsuya Nakadai, Kyôko Kagawa",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt1187043",
        "title": "3 Idiots",
        "description": "Farhan Qureshi and Raju Rastogi want to re-unite with their fellow collegian, Rancho, after faking a stroke aboard an Air India plane, and excusing himself from his wife - trouser less - respectively. Enroute, they encounter another student, Chatur Ramalingam, now a successful businessman, who reminds them of a bet they had undertaken 10 years ago. The trio, while recollecting hilarious antics, including their run-ins with the Dean of Delhi's Imperial College of Engineering, Viru Sahastrabudhe, race to locate Rancho, at his last known address - little knowing the secret that was kept from them all this time.",
        "release_date": "2009-12-25",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Aamir Khan, Madhavan, Mona Singh",
        "directors": "Rajkumar Hirani"
    },
    {
        "movie_id": "tt0114709",
        "title": "Toy Story",
        "description": "A little boy named Andy loves to be in his room, playing with his toys, especially his doll named \"Woody\". But, what do the toys do when Andy is not with them, they come to life. Woody believes that his life (as a toy) is good. However, he must worry about Andy's family moving, and what Woody does not know is about Andy's birthday party. Woody does not realize that Andy's mother gave him an action figure known as Buzz Lightyear, who does not believe that he is a toy, and quickly becomes Andy's new favorite toy. Woody, who is now consumed with jealousy, tries to get rid of Buzz. Then, both Woody and Buzz are now lost. They must find a way to get back to Andy before he moves without them, but they will have to pass through a ruthless toy killer, Sid Phillips.",
        "release_date": "1995-11-22",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Tom Hanks, Tim Allen, Don Rickles, Jim Varney",
        "directors": "John Lasseter"
    },
    {
        "movie_id": "tt0169547",
        "title": "American Beauty",
        "description": "After his death sometime in his forty-third year, suburbanite Lester Burnham tells of the last few weeks of his life, during which he had no idea of his imminent passing. He is a husband to real estate agent Carolyn Burnham and father to high school student Janie Burnham. Although Lester and Carolyn once loved each other, they now merely tolerate each other. Typical wallflower Janie too hates both her parents, the three who suffer individually in silence in their home life. Janie tries to steer clear of both her parents. Carolyn, relatively new to the real estate business, wants to create the persona of success to further her career, she aspiring to the professional life of Buddy Kane, the king of the real estate business in their neighborhood. Lester merely walks mindlessly through life, including at his job in advertising. His company is downsizing, and he, like all the other employees, has to justify his position to the newly hired efficiency expert to keep his job. Things change ...",
        "release_date": "1999-10-01",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
        "directors": "Sam Mendes"
    },
    {
        "movie_id": "tt0086879",
        "title": "Amadeus",
        "description": "Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety. He's also content as the respected, financially well-off, court composer of Austrian Emperor Joseph II. But he's shocked to learn that Mozart is such a vulgar creature, and can't understand why God favored Mozart to be his instrument. Salieri's envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrity.",
        "release_date": "1984-09-19",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "Music",
                "value": "Music"
            }
        ],
        "actors": "F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice",
        "directors": "Milos Forman"
    },
    {
        "movie_id": "tt0112573",
        "title": "Braveheart",
        "description": "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce.",
        "release_date": "1995-05-24",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Mel Gibson, Sophie Marceau, Patrick McGoohan, Angus Macfadyen",
        "directors": "Mel Gibson"
    },
    {
        "movie_id": "tt0361748",
        "title": "Inglourious Basterds",
        "description": "In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick Zoller takes a rapid interest in her and arranges an illustrious movie premiere at the theater she now runs. With the promise of every major Nazi officer in attendance, the event catches the attention of the \"Basterds\", a group of Jewish-American guerrilla soldiers led by the ruthless Lt. Aldo Raine. As the relentless executioners advance and the conspiring young girl's plans are set in motion, their paths will cross for a fateful evening that will shake the very annals of history.",
        "release_date": "2009-08-19",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Brad Pitt, Diane Kruger, Eli Roth, Mélanie Laurent",
        "directors": "Quentin Tarantino"
    },
    {
        "movie_id": "tt8503618",
        "title": "Hamilton",
        "description": "\"Hamilton\" is the story of America then, told by America now. Featuring a score that blends hip-hop, jazz, R&B, and show tunes, \"Hamilton\" has taken the story of American founding father Alexander Hamilton and created a revolutionary moment in theater--a musical that has had a profound impact on culture, politics, and education. Captured at the Richard Rodgers Theater on Broadway in June 2016, the film transports its audience into the world of the Broadway show in a uniquely intimate way.",
        "release_date": "2020-07-02",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            }
        ],
        "actors": "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.",
        "directors": "Thomas Kail"
    },
    {
        "movie_id": "tt0119217",
        "title": "Good Will Hunting",
        "description": "A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.",
        "release_date": "1998-01-09",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Robin Williams, Matt Damon, Ben Affleck, Stellan Skarsgård",
        "directors": "Gus Van Sant"
    },
    {
        "movie_id": "tt0086190",
        "title": "Star Wars: Episode VI - Return of the Jedi",
        "description": "Luke Skywalker battles Jabba the Hutt and Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love, and team with Chewbacca, Lando Calrissian, the Ewoks, and droids C-3PO and R2-D2 to aid in the disruption of the Dark Side, and the defeat of the evil emperor.",
        "release_date": "1983-05-25",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "directors": "Richard Marquand"
    },
    {
        "movie_id": "tt0062622",
        "title": "2001: A Space Odyssey",
        "description": "\"2001\" is a story of evolution. Sometime in the distant past, someone or something nudged evolution by placing a monolith on Earth (presumably elsewhere throughout the universe as well). Evolution then enabled humankind to reach the moon's surface, where yet another monolith is found, one that signals the monolith placers that humankind has evolved that far. Now a race begins between computers (HAL) and human (Bowman) to reach the monolith placers. The winner will achieve the next step in evolution, whatever that may be.",
        "release_date": "1968-04-11",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt0105236",
        "title": "Reservoir Dogs",
        "description": "Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop.",
        "release_date": "1992-09-02",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
        "directors": "Quentin Tarantino"
    },
    {
        "movie_id": "tt0091251",
        "title": "Come and See",
        "description": "The feature film directed by Elem Klimov, shot in the genre of military drama. The action takes place on the territory of Belarus in 1943. In the center of the story is a Belarusian boy, who witnesses the horrors of the Nazi punitive action, turning from a cheerful teenager into a gray-haired old man for two days.",
        "release_date": "1985-10-17",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Aleksey Kravchenko, Olga Mironova, Liubomiras Laucevicius, Vladas Bagdonas",
        "directors": "Elem Klimov"
    },
    {
        "movie_id": "tt0022100",
        "title": "M",
        "description": "In Germany, Hans Beckert is an unknown killer of girls. He whistles Edvard Grieg's 'In The Hall of the Mountain King', from the 'Peer Gynt' Suite I Op. 46 while attracting the little girls for death. The police force pressed by the Minister give its best effort trying unsuccessfully to arrest the serial killer. The organized crime has great losses due to the intense search and siege of the police and decides to chase the murderer, with the support of the beggars association. They catch Hans and briefly judge him.",
        "release_date": "1931-08-31",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Peter Lorre, Ellen Widmann, Inge Landgut, Otto Wernicke",
        "directors": "Fritz Lang"
    },
    {
        "movie_id": "tt0986264",
        "title": "Like Stars on Earth",
        "description": "Ishaan Awasthi is an eight-year-old child whose world is filled with wonders that no one else seems to appretiate are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself.",
        "release_date": "2007-12-21",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Darsheel Safary, Aamir Khan, Tisca Chopra, Vipin Sharma",
        "directors": "Aamir Khan, Amole Gupte"
    },
    {
        "movie_id": "tt0052357",
        "title": "Vertigo",
        "description": "Following his early retirement as a detective from the San Francisco Police Department, John Ferguson - Scottie to his friends - becomes obsessed with two women in succession, those obsessions which trouble his long time friend and former fiancée, Midge Wood, a designer of women's undergarments. The first is wealthy and elegant platinum blonde Madeleine Elster, the wife of his college acquaintance Gavin Elster, who hires John to follow her in Gavin's belief that she may be a danger to herself in thinking that she has recently been possessed by the spirit of Carlotta Valdes, Madeleine's great-grandmother who she knows nothing about, but who Gavin knows committed suicide in being mentally unbalanced when she was twenty-six, Madeleine's current age. The second is Judy Barton, who John spots on the street one day. Judy is a working class girl, but what makes John obsessed with her is that, despite her working class style and her brunette hair, she is the spitting image of Madeleine, into ...",
        "release_date": "1958-05-22",
        "genres": [
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "James Stewart, Kim Novak, Barbara Bel Geddes, Tom Helmore",
        "directors": "Alfred Hitchcock"
    },
    {
        "movie_id": "tt0033467",
        "title": "Citizen Kane",
        "description": "A group of reporters are trying to decipher the last word ever spoken by Charles Foster Kane, the millionaire newspaper tycoon: \"Rosebud\". The film begins with a news reel detailing Kane's life for the masses, and then from there, we are shown flashbacks from Kane's life. As the reporters investigate further, the viewers see a display of a fascinating man's rise to fame, and how he eventually fell off the top of the world.",
        "release_date": "1941-06-06",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Orson Welles, Joseph Cotten, Dorothy Comingore, Agnes Moorehead",
        "directors": "Orson Welles"
    },
    {
        "movie_id": "tt2106476",
        "title": "The Hunt",
        "description": "Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good.",
        "release_date": "2012-10-25",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp, Lasse Fogelstrøm",
        "directors": "Thomas Vinterberg"
    },
    {
        "movie_id": "tt0180093",
        "title": "Requiem for a Dream",
        "description": "Sara Goldfarb (Ellen Burstyn) is a retired widow, living in a small apartment. She spends most of her time watching TV, especially a particular self-help show. She has delusions of rising above her current dull existence by being a guest on that show. Her son, Harry (Jared Leto) is a junkie but along with his friend Tyrone (Marlon Wayans) has visions of making it big by becoming a drug dealer. Harry's girlfriend Marion (Jennifer Connelly) could be fashion designer or artist but is swept along in Harry's drug-centric world. Meanwhile Sara has developed an addiction of her own. She desperately wants to lose weight and so goes on a crash course involving popping pills, pills which turn out to be very addictive and harmful to her mental state.",
        "release_date": "2000-11-03",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
        "directors": "Darren Aronofsky"
    },
    {
        "movie_id": "tt0045152",
        "title": "Singin' in the Rain",
        "description": "1927 Hollywood. Monumental Pictures' biggest stars, glamorous on-screen couple Lina Lamont and Don Lockwood, are also an off-screen couple if the trade papers and gossip columns are to be believed. Both perpetuate the public perception if only to please their adoring fans and bring people into the movie theaters. In reality, Don barely tolerates her, while Lina, despite thinking Don beneath her, simplemindedly believes what she sees on screen in order to bolster her own stardom and sense of self-importance. R.F. Simpson, Monumental's head, dismisses what he thinks is a flash in the pan: talking pictures. It isn't until The Jazz Singer (1927) becomes a bona fide hit which results in all the movie theaters installing sound equipment that R.F. knows Monumental, most specifically in the form of Don and Lina, have to jump on the talking picture bandwagon, despite no one at the studio knowing anything about the technology. Musician Cosmo Brown, Don's best friend, gets hired as Monumental's ...",
        "release_date": "1952-04-11",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Musical",
                "value": "Musical"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Gene Kelly, Donald O'Connor, Debbie Reynolds, Jean Hagen",
        "directors": "Stanley Donen, Gene Kelly"
    },
    {
        "movie_id": "tt0053125",
        "title": "North by Northwest",
        "description": "Madison Avenue advertising man Roger Thornhill finds himself thrust into the world of spies when he is mistaken for a man by the name of George Kaplan. Foreign spy Philip Vandamm and his henchman Leonard try to eliminate him but when Thornhill tries to make sense of the case, he is framed for murder. Now on the run from the police, he manages to board the 20th Century Limited bound for Chicago where he meets a beautiful blond, Eve Kendall, who helps him to evade the authorities. His world is turned upside down yet again when he learns that Eve isn't the innocent bystander he thought she was. Not all is as it seems however, leading to a dramatic rescue and escape at the top of Mt. Rushmore.",
        "release_date": "1959-09-08",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
        "directors": "Alfred Hitchcock"
    },
    {
        "movie_id": "tt0338013",
        "title": "Eternal Sunshine of the Spotless Mind",
        "description": "Much to his surprise, timid Joel Barish is shocked to discover that the love of his life, sparky Clementine, has had him erased from her memory. To pay her back in the same coin, poor Joel summons up the courage to undergo a painless but intricate medical procedure to do the same, utterly unaware that darkness is an essential part of the light. Now, as hurt and angry Joel's ugly recollections of Clementine gradually fade away, giving way to a soulless black void, suddenly, he begins having second thoughts, toying with the idea of stopping the irreversible process. In the end, is ignorance really bliss?",
        "release_date": "2004-03-19",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Jim Carrey, Kate Winslet, Tom Wilkinson, Gerry Robert Byrne",
        "directors": "Michel Gondry"
    },
    {
        "movie_id": "tt0044741",
        "title": "Ikiru",
        "description": "Kanji Watanabe is a civil servant. He has worked in the same department for 30 years. His life is pretty boring and monotonous, though he once used to have passion and drive. Then one day he discovers that he has stomach cancer and has less than a year to live. After the initial depression he sets about living for the first time in over 20 years. Then he realises that his limited time left is not just for living life to the full but to leave something meaningful behind...",
        "release_date": "1952-10-09",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Takashi Shimura, Nobuo Kaneko, Shin'ichi Himori, Haruo Tanaka",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt0040522",
        "title": "Bicycle Thieves",
        "description": "Ricci, an unemployed man in the depressed post-WWII economy of Italy, gets at last a good job - for which he needs a bike - hanging up posters. But soon his bicycle is stolen. He and his son walk the streets of Rome, looking for the bicycle. Ricci finally manages to locate the thief but with no proof, he has to abandon his cause. But he and his son know perfectly well that without a bike, Ricci won't be able to keep his job.",
        "release_date": "1948-11-24",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Lamberto Maggiorani, Enzo Staiola, Lianella Carell, Elena Altieri",
        "directors": "Vittorio De Sica"
    },
    {
        "movie_id": "tt0056172",
        "title": "Lawrence of Arabia",
        "description": "Due to his knowledge of the native Bedouin tribes, British Lieutenant T.E. Lawrence is sent to Arabia to find Prince Faisal and serve as a liaison between the Arabs and the British in their fight against the Turks. With the aid of native Sherif Ali, Lawrence rebels against the orders of his superior officer and strikes out on a daring camel journey across the harsh desert to attack a well-guarded Turkish port.",
        "release_date": "1962-12-11",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Peter O'Toole, Alec Guinness, Anthony Quinn, Jack Hawkins",
        "directors": "David Lean"
    },
    {
        "movie_id": "tt0012349",
        "title": "The Kid",
        "description": "The opening title reads: \"A comedy with a smile--and perhaps a tear\". As she leaves the charity hospital and passes a church wedding, Edna deposits her new baby with a pleading note in a limousine and goes off to commit suicide. The limo is stolen by thieves who dump the baby by a garbage can. Charlie the Tramp finds the baby and makes a home for him. Five years later Edna has become an opera star but does charity work for slum youngsters in hope of finding her boy. A doctor called by Edna discovers the note with the truth about the Kid and reports it to the authorities who come to take him away from Charlie. Before he arrives at the Orphan Asylum Charlie steals him back and takes him to a flophouse. The proprietor reads of a reward for the Kid and takes him to Edna. Charlie is later awakened by a kind policeman who reunites him with the Kid at Edna's mansion.",
        "release_date": "1921-02-06",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Charles Chaplin, Edna Purviance, Jackie Coogan, Carl Miller",
        "directors": "Charles Chaplin"
    },
    {
        "movie_id": "tt0093058",
        "title": "Full Metal Jacket",
        "description": "A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive.",
        "release_date": "1987-06-26",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Matthew Modine, R. Lee Ermey, Vincent D'Onofrio, Adam Baldwin",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt5074352",
        "title": "Dangal",
        "description": "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (51 kg).",
        "release_date": "2016-12-21",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
        "directors": "Nitesh Tiwari"
    },
    {
        "movie_id": "tt0053604",
        "title": "The Apartment",
        "description": "As of November 1, 1959, mild mannered C.C. Baxter has been working at Consolidated Life, an insurance company, for close to four years, and is one of close to thirty-two thousand employees located in their Manhattan head office. To distinguish himself from all the other lowly cogs in the company in the hopes of moving up the corporate ladder, he often works late, but only because he can't get into his apartment, located off of Central Park West, since he has provided it to a handful of company executives - Mssrs. Dobisch, Kirkeby, Vanderhoff and Eichelberger - on a rotating basis for their extramarital liaisons in return for a good word to the personnel director, Jeff D. Sheldrake. When Baxter is called into Sheldrake's office for the first time, he learns that it isn't just to be promoted as he expects, but also to add married Sheldrake to the list to who he will lend his apartment. Dobisch, Kirkeby, Vanderhoff and Eichelberger are now feeling neglected as Baxter no longer needs ...",
        "release_date": "1960-06-29",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Jack Lemmon, Shirley MacLaine, Fred MacMurray, Ray Walston",
        "directors": "Billy Wilder"
    },
    {
        "movie_id": "tt1255953",
        "title": "Incendies",
        "description": "A mother's last wishes send twins Jeanne and Simon on a journey to the Middle East in search of their tangled roots. Adapted from Wajdi Mouawad's acclaimed play, Incendies tells the powerful and moving tale of two young adults' voyage to the core of deep-rooted hatred, never-ending wars and enduring love.",
        "release_date": "2011-01-12",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Lubna Azabal, Mélissa Désormeaux-Poulin, Maxim Gaudette, Mustafa Kamel",
        "directors": "Denis Villeneuve"
    },
    {
        "movie_id": "tt10272386",
        "title": "The Father",
        "description": "Having just scared off his recent caregiver, Anthony, an ailing, octogenarian Londoner gradually succumbing to dementia, feels abandoned when concerned Anne, his daughter, tells him she's moving to Paris. Confused and upset, against the backdrop of a warped perspective and his rapid, heart-rending mental decline, Anthony is starting to lose his grip on reality, struggling to navigate the opaque landscape of present and past. Now, as faded memories and glimpses of lucidity trigger sudden mood swings, dear ones, Anthony's surroundings, and even time itself become distorted. Why has his younger daughter stopped visiting? Who are the strangers that burst in on Anthony?",
        "release_date": "2021-02-25",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Anthony Hopkins, Olivia Colman, Mark Gatiss",
        "directors": "Florian Zeller"
    },
    {
        "movie_id": "tt0017136",
        "title": "Metropolis",
        "description": "Sometime in the future, the city of Metropolis is home to a Utopian society where its wealthy residents live a carefree life. One of those is Freder Fredersen. One day, he spots a beautiful woman with a group of children, she and the children quickly disappear. Trying to follow her, he is horrified to find an underground world of workers who apparently run the machinery that keeps the Utopian world above ground functioning. One of the few people above ground who knows about the world below is Freder's father, John Fredersen, who is the founder and master of Metropolis. Freder learns that the woman is called Maria, who espouses the need to join the \"hands\" - the workers - to the \"head\" - those in power above - by a mediator who will act as the \"heart\". Freder wants to help the plight of the workers in their struggle for a better life. But when John learns of what Maria is advocating and that Freder has joined their cause, with the assistance of an old colleague. an inventor called ...",
        "release_date": "1927-02-06",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Brigitte Helm, Alfred Abel, Gustav Fröhlich, Rudolf Klein-Rogge",
        "directors": "Fritz Lang"
    },
    {
        "movie_id": "tt0036775",
        "title": "Double Indemnity",
        "description": "In 1938, Walter Neff, an experienced salesman of the Pacific All Risk Insurance Co., meets the seductive wife of one of his clients, Phyllis Dietrichson, and they have an affair. Phyllis proposes to kill her husband to receive the proceeds of an accident insurance policy and Walter devises a scheme to receive twice the amount based on a double indemnity clause. When Mr. Dietrichson is found dead on a train track, the police accept the determination of accidental death. However, the insurance analyst and Walter's best friend Barton Keyes does not buy the story and suspects that Phyllis has murdered her husband with the help of another man.",
        "release_date": "1944-04-24",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Film-Noir",
                "value": "Film-Noir"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Fred MacMurray, Barbara Stanwyck, Edward G. Robinson, Byron Barr",
        "directors": "Billy Wilder"
    },
    {
        "movie_id": "tt0066921",
        "title": "A Clockwork Orange",
        "description": "Protagonist Alex DeLarge is an \"ultraviolent\" youth in futuristic Britain. As with all luck, his eventually runs out and he's arrested and convicted of murder. While in prison, Alex learns of an experimental program in which convicts are programmed to detest violence. If he goes through the program, his sentence will be reduced and he will be back on the streets sooner than expected. But Alex's ordeals are far from over once he hits the streets of Britain..",
        "release_date": "1972-01-13",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Malcolm McDowell, Patrick Magee, Michael Bates, Warren Clarke",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt0075314",
        "title": "Taxi Driver",
        "description": "Travis Bickle is an ex-Marine and Vietnam War veteran living in New York City. As he suffers from insomnia, he spends his time working as a taxi driver at night, watching porn movies at seedy cinemas during the day, or thinking about how the world, New York in particular, has deteriorated into a cesspool. He's a loner who has strong opinions about what is right and wrong with mankind. For him, the one bright spot in New York humanity is Betsy, a worker on the presidential nomination campaign of Senator Charles Palantine. He becomes obsessed with her. After an incident with her, he believes he has to do whatever he needs to make the world a better place in his opinion. One of his priorities is to be the savior for Iris, a twelve-year-old runaway and prostitute who he believes wants out of the profession and under the thumb of her pimp and lover Matthew.",
        "release_date": "1976-02-08",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Robert De Niro, Jodie Foster, Cybill Shepherd, Albert Brooks",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt1832382",
        "title": "A Separation",
        "description": "Nader (Payman Maadi) and Simin (Leila Hatami) argue about living abroad. Simin prefers to live abroad to provide better opportunities for their only daughter, Termeh. However, Nader refuses to go because he thinks he must stay in Iran and take care of his father (Ali-Asghar Shahbazi), who suffers from Alzheimers. However, Simin is determined to get a divorce and leave the country with her daughter.",
        "release_date": "2011-03-16",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Payman Maadi, Leila Hatami, Sareh Bayat, Shahab Hosseini",
        "directors": "Asghar Farhadi"
    },
    {
        "movie_id": "tt0070735",
        "title": "The Sting",
        "description": "Johnny Hooker, a small time grifter, unknowingly steals from Doyle Lonnegan, a big time crime boss, when he pulls a standard street con. Lonnegan demands satisfaction for the insult. After his partner, Luther, is killed, Hooker flees, and seeks the help of Henry Gondorff, one of Luther's contacts, who is a master of the long con. Hooker wants to use Gondorff's expertise to take Lonnegan for an enormous sum of money to even the score, since he admits he \"doesn't know enough about killing to kill him.\" They devise a complicated scheme and amass a talented group of other con artists who want their share of the reparations. The stakes are high in this game, and our heroes must not only deal with Lonnegan's murderous tendencies, but also other side players who want a piece of the action. To win, Hooker and Gondorff will need all their skills...and a fair amount of confidence.",
        "release_date": "1973-12-25",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Paul Newman, Robert Redford, Robert Shaw, Charles Durning",
        "directors": "George Roy Hill"
    },
    {
        "movie_id": "tt0086250",
        "title": "Scarface",
        "description": "Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp but his friend Manny has a way out for them: undertake a contract killing and arrangements will be made to get a green card. He's soon working for drug dealer Frank Lopez and shows his mettle when a deal with Colombian drug dealers goes bad. He also brings a new level of violence to Miami. Tony is protective of his younger sister but his mother knows what he does for a living and disowns him. Tony is impatient and wants it all however, including Frank's empire and his mistress Elvira Hancock. Once at the top however, Tony's outrageous actions make him a target and everything comes crumbling down.",
        "release_date": "1983-12-09",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Al Pacino, Michelle Pfeiffer, Steven Bauer, Mary Elizabeth Mastrantonio",
        "directors": "Brian De Palma"
    },
    {
        "movie_id": "tt0048473",
        "title": "Pather Panchali",
        "description": "The story of a young boy, Apu, and life in his small Indian village. His parents are quite poor - his father Harihar, a writer and poet, gave away the family's fruit orchard to settle his brother's debts. His sister Durga and an old aunt also still lives with them. His mother Sarbojaya bears the brunt of the family's situation. She scrapes by and sells her personal possessions to put food on the table and has to bear the taunts of her neighbors as Durga is always stealing fruit from their orchard. Things get worse when Harihar disappears for five months and Durga falls ill. Even after Harihar returns, the family is left with few alternatives.",
        "release_date": "1955-08-26",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Kanu Bannerjee, Karuna Bannerjee, Subir Banerjee, Chunibala Devi",
        "directors": "Satyajit Ray"
    },
    {
        "movie_id": "tt0208092",
        "title": "Snatch",
        "description": "Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Mickey, a 'pikey' ( slang for an Irish Gypsy)- who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off the Irish Gypsies. They then try to convince Mickey not only to fight for them, but to lose for them too. Whilst all this is going on, a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade', 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, the guns, and the damned dog.",
        "release_date": "2000-09-01",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            }
        ],
        "actors": "Jason Statham, Brad Pitt, Benicio Del Toro, Dennis Farina",
        "directors": "Guy Ritchie"
    },
    {
        "movie_id": "tt8579674",
        "title": "1917",
        "description": "April 1917, the Western Front. Two British soldiers are sent to deliver an urgent message to an isolated regiment. If the message is not received in time the regiment will walk into a trap and be massacred. To get to the regiment they will need to cross through enemy territory. Time is of the essence and the journey will be fraught with danger.",
        "release_date": "2020-01-02",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
        "directors": "Sam Mendes"
    },
    {
        "movie_id": "tt0211915",
        "title": "Amélie",
        "description": "Amélie is a story about a girl named Amélie whose childhood was suppressed by her Father's mistaken concerns of a heart defect. With these concerns Amélie gets hardly any real life contact with other people. This leads Amélie to resort to her own fantastical world and dreams of love and beauty. She later on becomes a young woman and moves to the central part of Paris as a waitress. After finding a lost treasure belonging to the former occupant of her apartment, she decides to return it to him. After seeing his reaction and his new found perspective - she decides to devote her life to the people around her. Such as, her father who is obsessed with his garden-gnome, a failed writer, a hypochondriac, a man who stalks his ex girlfriends, the \"ghost\", a suppressed young soul, the love of her life and a man whose bones are as brittle as glass. But after consuming herself with these escapades - she finds out that she is disregarding her own life and damaging her quest for love. Amélie then ...",
        "release_date": "2001-04-25",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Audrey Tautou, Mathieu Kassovitz, Rufus, Lorella Cravotta",
        "directors": "Jean-Pierre Jeunet"
    },
    {
        "movie_id": "tt0056592",
        "title": "To Kill a Mockingbird",
        "description": "Small-town Alabama, 1932. Atticus Finch (played by Gregory Peck) is a lawyer and a widower. He has two young children, Jem and Scout. Atticus Finch is currently defending Tom Robinson, a black man accused of raping a white woman. Meanwhile, Jem and Scout are intrigued by their neighbours, the Radleys, and the mysterious, seldom-seen Boo Radley in particular.",
        "release_date": "1962-12-20",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Gregory Peck, John Megna, Frank Overton, Rosemary Murphy",
        "directors": "Robert Mulligan"
    },
    {
        "movie_id": "tt0435761",
        "title": "Toy Story 3",
        "description": "Woody, Buzz and the whole gang are back. As their owner Andy prepares to depart for college, his loyal toys find themselves in daycare where untamed tots with their sticky little fingers do not play nice. So, it's all for one and one for all as they join Barbie's counterpart Ken, a thespian hedgehog named Mr. Pricklepants and a pink, strawberry-scented teddy bear called Lots-o'-Huggin' Bear to plan their great escape.",
        "release_date": "2010-06-16",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Tom Hanks, Tim Allen, Joan Cusack, Ned Beatty",
        "directors": "Lee Unkrich"
    },
    {
        "movie_id": "tt0059578",
        "title": "For a Few Dollars More",
        "description": "Drifting from town to town, the poncho-clad Man with No Name and the lightning-fast right hand rides into the town of El Paso, in search of the maniacal escaped convict, El Indio. It's been eighteen short months since the deadly confrontation in A Fistful of Dollars (1964), and this time, the solitary stranger, now a professional bounty hunter, will have to go against his beliefs and do the unthinkable: join forces with the hawk-eyed marksman, Colonel Douglas Mortimer, to collect the hefty reward. Now, as El Indio and his cut-throats have already set their sights on robbing the crammed-with-cash Bank of El Paso, the stage is set for a bloody showdown at high noon, against the backdrop of silent double-crosses and fragile allegiances. But, is it worth dicing with death for a few dollars more?",
        "release_date": "1965-12-20",
        "genres": [
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Clint Eastwood, Lee Van Cleef, Gian Maria Volontè, Mara Krupp",
        "directors": "Sergio Leone"
    },
    {
        "movie_id": "tt1049413",
        "title": "Up",
        "description": "As a boy, Carl Fredricksen wanted to explore South America and find the forbidden Paradise Falls. About 64 years later he gets to begin his journey along with Boy Scout Russell by lifting his house with thousands of balloons. On their journey, they make many new friends including a talking dog, and figure out that someone has evil plans. Carl soon realizes that this evildoer is his childhood idol.",
        "release_date": "2009-05-28",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Edward Asner, Jordan Nagai, John Ratzenberger, Christopher Plummer",
        "directors": "Pete Docter, Bob Peterson"
    },
    {
        "movie_id": "tt0097576",
        "title": "Indiana Jones and the Last Crusade",
        "description": "An art collector appeals to Indiana Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure of heart.",
        "release_date": "1989-05-24",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            }
        ],
        "actors": "Harrison Ford, Sean Connery, Alison Doody, Denholm Elliott",
        "directors": "Steven Spielberg"
    },
    {
        "movie_id": "tt0113277",
        "title": "Heat",
        "description": "Hunters and their prey--Neil and his professional criminal crew hunt to score big money targets (banks, vaults, armored cars) and are, in turn, hunted by Lt. Vincent Hanna and his team of cops in the Robbery/Homicide police division. A botched job puts Hanna onto their trail while they regroup and try to put together one last big 'retirement' score. Neil and Vincent are similar in many ways, including their troubled personal lives. At a crucial moment in his life, Neil disobeys the dictum taught to him long ago by his criminal mentor--'Never have anything in your life that you can't walk out on in thirty seconds flat, if you spot the heat coming around the corner'--as he falls in love. Thus the stage is set for the suspenseful ending....",
        "release_date": "1995-12-15",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Al Pacino, Robert De Niro, Val Kilmer, Jon Voight",
        "directors": "Michael Mann"
    },
    {
        "movie_id": "tt0119488",
        "title": "L.A. Confidential",
        "description": "1950's Los Angeles is the seedy backdrop for this intricate noir-ish tale of police corruption and Hollywood sleaze. Three very different cops are all after the truth, each in their own style: Ed Exley, the golden boy of the police force, willing to do almost anything to get ahead, except sell out; Bud White, ready to break the rules to seek justice, but barely able to keep his raging violence under control; and Jack Vincennes, always looking for celebrity and a quick buck until his conscience drives him to join Exley and White down the one-way path to find the truth behind the dark world of L.A. crime.",
        "release_date": "1997-09-19",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Kevin Spacey, Russell Crowe, Guy Pearce, Kim Basinger",
        "directors": "Curtis Hanson"
    },
    {
        "movie_id": "tt0055630",
        "title": "Yojimbo",
        "description": "Sanjuro, a wandering samurai enters a rural town in nineteenth century Japan. After learning from the innkeeper that the town is divided between two gangsters, he plays one side off against the other. His efforts are complicated by the arrival of the wily Unosuke, the son of one of the gangsters, who owns a revolver. Unosuke has Sanjuro beaten after he reunites an abducted woman with her husband and son, then massacres his father's opponents. During the slaughter, the samurai escapes with the help of the innkeeper; but while recuperating at a nearby temple, he learns of innkeeper's abduction by Unosuke, and returns to the town to confront him.",
        "release_date": "1961-04-25",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Toshirô Mifune, Eijirô Tôno, Tatsuya Nakadai, Yôko Tsukasa",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt0089881",
        "title": "Ran",
        "description": "Japanese warlord Hidetori Ichimonji decides the time has come to retire and divide his fiefdom among his three sons. His eldest and middle sons - Taro and Jiro - agree with his decision and promise to support him for his remaining days. The youngest son Saburo disagrees with all of them arguing that there is little likelihood the three brothers will remain united. Insulted by his son's brashness, the warlord banishes Saburo. As the warlord begins his retirement, he quickly realizes that his two eldest sons selfish and have no intention of keeping their promises. It leads to war and only banished Saburo can possibly save him.",
        "release_date": "1985-06-01",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Tatsuya Nakadai, Akira Terao, Jinpachi Nezu, Daisuke Ryû",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt0095016",
        "title": "Die Hard",
        "description": "NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands.",
        "release_date": "1988-07-20",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson",
        "directors": "John McTiernan"
    },
    {
        "movie_id": "tt0042876",
        "title": "Rashomon",
        "description": "A priest, a woodcutter and another man are taking refuge from a rainstorm in the shell of a former gatehouse called Rashômon. The priest and the woodcutter are recounting the story of a murdered samurai whose body the woodcutter discovered three days earlier in a forest grove. Both were summoned to testify at the murder trial, the priest who ran into the samurai and his wife traveling through the forest just before the murder occurred. Three other people who testified at the trial are supposedly the only direct witnesses: a notorious bandit named Tajômaru, who allegedly murdered the samurai and raped his wife; the white veil cloaked wife of the samurai; and the samurai himself who testifies through the use of a medium. The three tell a similarly structured story - that Tajômaru kidnapped and bound the samurai so that he could rape the wife - but which ultimately contradict each other, the motivations and the actual killing being what differ. The woodcutter reveals at Rashômon that he ...",
        "release_date": "1950-08-26",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Toshirô Mifune, Machiko Kyô, Masayuki Mori, Takashi Shimura",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt15097216",
        "title": "Jai Bhim",
        "description": "",
        "release_date": "",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Suriya, Rajisha Vijayan, Prakash Raj",
        "directors": "T.J. Gnanavel"
    },
    {
        "movie_id": "tt6966692",
        "title": "Green Book",
        "description": "In 1962, Tony \"Tony Lip\" Vallelonga, a tough bouncer, is looking for work when his nightclub is closed for renovations. The most promising offer turns out to be the driver for the African-American classical pianist Don Shirley for a concert tour into the Deep South states. Although hardly enthused at working for a black man, Tony accepts the job and they begin their trek armed with The Negro Motorist Green Book, a travel guide for safe travel through America's racial segregation. Together, the snobbishly erudite pianist and the crudely practical bouncer can barely get along with their clashing attitudes to life and ideals. However, as the disparate pair witness and endure America's appalling injustices on the road, they find a newfound respect for each other's talents and start to face them together. In doing so, they would nurture a friendship and understanding that would change both their lives.",
        "release_date": "2018-11-16",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Music",
                "value": "Music"
            }
        ],
        "actors": "Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco",
        "directors": "Peter Farrelly"
    },
    {
        "movie_id": "tt0363163",
        "title": "Downfall",
        "description": "In April of 1945, Germany stands at the brink of defeat with the Soviet Armies closing in from the west and south. In Berlin, capital of the Third Reich, Adolf Hitler proclaims that Germany will still achieve victory and orders his Generals and advisers to fight to the last man. \"Downfall\" explores these final days of the Reich, where senior German leaders (such as Himmler and Goring) began defecting from their beloved Fuhrer, in an effort to save their own lives, while still others (Joseph Goebbels) pledge to die with Hitler. Hitler, himself, degenerates into a paranoid shell of a man, full of optimism one moment and suicidal depression the next. When the end finally does comes, and Hitler lies dead by his own hand, what is left of his military must find a way to end the killing that is the Battle of Berlin, and lay down their arms in surrender.",
        "release_date": "2004-09-16",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Bruno Ganz, Alexandra Maria Lara, Ulrich Matthes, Juliane Köhler",
        "directors": "Oliver Hirschbiegel"
    },
    {
        "movie_id": "tt0071853",
        "title": "Monty Python and the Holy Grail",
        "description": "History is turned on its comic head when, in tenth-century England, King Arthur travels the countryside to find knights who will join him at the Round Table in Camelot. Gathering up the men is a tale in itself but after a bit of a party at Camelot, many decide to leave only to be stopped by God, who sends them on a quest: to find the Holy Grail. After a series of individual adventures, the knights are reunited but must face a wizard named Tim the Enchanter, killer rabbits and lessons in the use of holy hand grenades. Their quest comes to an end however when the Police intervene - just what you would expect in a Monty Python movie.",
        "release_date": "1975-05-25",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Graham Chapman, John Cleese, Eric Idle, Terry Gilliam",
        "directors": "Terry Gilliam, Terry Jones"
    },
    {
        "movie_id": "tt0042192",
        "title": "All About Eve",
        "description": "Eve Harrington (Anne Baxter) is waiting backstage to meet her idol, talented but aging Broadway star Margo Channing (Bette Davis). It seems innocent enough as Eve explains that she has seen Margo in EVERY performance of her current play. Margo and her friends take Eve under their wing but only theatre critic Addison DeWitt (George Sanders) sees through Eve's evil plan, which is to take Margo's parts and her fiancé, Bill Simpson (Gary Merrill) too.",
        "release_date": "1950-10-27",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Bette Davis, Anne Baxter, George Sanders, Celeste Holm",
        "directors": "Joseph L. Mankiewicz"
    },
    {
        "movie_id": "tt0053291",
        "title": "Some Like It Hot",
        "description": "After two Chicago musicians, Joe and Jerry, witness the the St. Valentine's Day massacre, they want to get out of town and get away from the gangster responsible, Spats Colombo. They're desperate to get a gig out of town but the only job they know of is in an all-girl band heading to Florida. They show up at the train station as Josephine and Daphne, the replacement saxophone and bass players. They certainly enjoy being around the girls, especially Sugar Kane Kowalczyk who sings and plays the ukulele. Joe in particular sets out to woo her while Jerry/Daphne is wooed by a millionaire, Osgood Fielding III. Mayhem ensues as the two men try to keep their true identities hidden and Spats Colombo and his crew show up for a meeting with several other crime lords.",
        "release_date": "1959-03-19",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Music",
                "value": "Music"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Marilyn Monroe, Tony Curtis, Jack Lemmon, George Raft",
        "directors": "Billy Wilder"
    },
    {
        "movie_id": "tt0372784",
        "title": "Batman Begins",
        "description": "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as \"Batman\". But it doesn't stay quiet for long.",
        "release_date": "2005-06-15",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            }
        ],
        "actors": "Christian Bale, Michael Caine, Ken Watanabe, Liam Neeson",
        "directors": "Christopher Nolan"
    },
    {
        "movie_id": "tt0105695",
        "title": "Unforgiven",
        "description": "After escaping death by the skin of her teeth, the horribly disfigured prostitute, Delilah Fitzgerald, and her appalled and equally furious co-workers summon up the courage to seek retribution in 1880s Wyoming's dangerous town of Big Whiskey. With a hefty bounty on the perpetrators' heads, triggered by the tough Sheriff \"Little Bill\" Daggett's insufficient sense of justice, the infamous former outlaw and now destitute Kansas hog farmer, William Munny, embarks on a murderous last mission to find the men behind the hideous crime. Along with his old partner-in-crime, Ned Logan, and the brash but inexperienced young gunman, the \"Schofield Kid\", Munny enters a perilous world he has renounced many years ago, knowing that he walks right into a deadly trap; however, he still needs to find a way to raise his motherless children. Now, blood demands blood. Who is the hero, and who is the villain?",
        "release_date": "1992-08-07",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Clint Eastwood, Gene Hackman, Morgan Freeman, Richard Harris",
        "directors": "Clint Eastwood"
    },
    {
        "movie_id": "tt0118849",
        "title": "Children of Heaven",
        "description": "Zahra's shoes are gone; her older brother Ali lost them. They are poor, there are no shoes for Zahra until they come up with an idea: they will share one pair of shoes, Ali's. School awaits. Will the plan succeed?",
        "release_date": "1999-01-22",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Mohammad Amir Naji, Amir Farrokh Hashemian, Bahare Seddiqi, Nafise Jafar-Mohammadi",
        "directors": "Majid Majidi"
    },
    {
        "movie_id": "tt0347149",
        "title": "Howl's Moving Castle",
        "description": "A love story between an 18-year-old girl named Sophie, cursed by a witch into an old woman's body, and a magician named Howl. Under the curse, Sophie sets out to seek her fortune, which takes her to Howl's strange moving castle. In the castle, Sophie meets Howl's fire demon, named Karishifâ. Seeing that she is under a curse, the demon makes a deal with Sophie--if she breaks the contract he is under with Howl, then Karushifâ will lift the curse that Sophie is under, and she will return to her 18-year-old shape.",
        "release_date": "2004-11-20",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Chieko Baishô, Takuya Kimura, Tatsuya Gashûin, Akihiro Miwa",
        "directors": "Hayao Miyazaki"
    },
    {
        "movie_id": "tt0993846",
        "title": "The Wolf of Wall Street",
        "description": "In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades. That ultimately leads to Belfort featured on the cover of Forbes Magazine, being called \"The Wolf Of Wall St.\". With the FBI onto Belfort's trading schemes, he devises new ways to cover his tracks and watch his fortune grow. Belfort ultimately comes up with a scheme to stash their cash in a European bank. But with the FBI watching him like a hawk, how long will Belfort and Azoff be able to maintain their elaborate wealth and luxurious lifestyles?",
        "release_date": "2013-12-25",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt0055031",
        "title": "Judgment at Nuremberg",
        "description": "It has been three years since the most important Nazi leaders had already been tried. This trial is about 4 judges who used their offices to conduct Nazi sterilization and cleansing policies. Retired American judge, Dan Haywood has a daunting task ahead of him. The Cold War is heating up and no one wants any more trials as Germany, and Allied governments, want to forget the past. But is that the right thing to do is the question that the tribunal must decide.",
        "release_date": "1961-12-18",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Spencer Tracy, Burt Lancaster, Richard Widmark, Marlene Dietrich",
        "directors": "Stanley Kramer"
    },
    {
        "movie_id": "tt0057115",
        "title": "The Great Escape",
        "description": "Based on a true story, a group of allied escape artist-type prisoners-of-war are all put in an \"escape proof\" camp. Their leader decides to try to take out several hundred all at once. The first half of the movie is played for comedy, as the prisoners mostly outwit their jailers to dig the escape tunnel. The second half is high adventure as they use planes, trains, and boats to get out of occupied Europe.",
        "release_date": "1963-07-04",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Steve McQueen, James Garner, Richard Attenborough, Charles Bronson",
        "directors": "John Sturges"
    },
    {
        "movie_id": "tt0469494",
        "title": "There Will Be Blood",
        "description": "The intersecting life stories of Daniel Plainview and Eli Sunday in early twentieth century California is presented. Miner turn oilman Daniel Plainview is a driven man who will do whatever it takes to achieve his goals. He works hard but he also takes advantage of those around him at their expense if need be. His business partner is his son H.W., who in reality he \"acquired\" when H.W.'s biological single father, who worked on one of Daniel's rigs, got killed in a workplace accident. Daniel is deeply protective of H.W. if only for what H.W. brings to the partnership. Eli Sunday is one in a pair of twins, whose family farm Daniel purchases for the major oil deposit located on it. Eli, the local preacher and a self-proclaimed faith healer, wants the money from the sale of the property to finance his own church. The lives of the two competitive men often clash as Daniel pumps oil off the property and tries to acquire all the surrounding land at bargain prices to be able to build a ...",
        "release_date": "2008-01-25",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Daniel Day-Lewis, Paul Dano, Ciarán Hinds, Martin Stringer",
        "directors": "Paul Thomas Anderson"
    },
    {
        "movie_id": "tt0112641",
        "title": "Casino",
        "description": "This Martin Scorsese film depicts the Janus-like quality of Las Vegas--it has a glittering, glamorous face, as well as a brutal, cruel one. Ace Rothstein and Nicky Santoro, mobsters who move to Las Vegas to make their mark, live and work in this paradoxical world. Seen through their eyes, each as a foil to the other, the details of mob involvement in the casinos of the 1970s and '80s are revealed. Ace is the smooth operator of the Tangiers casino, while Nicky is his boyhood friend and tough strongman, robbing and shaking down the locals. However, they each have a tragic flaw--Ace falls in love with a hustler, Ginger, and Nicky falls into an ever-deepening spiral of drugs and violence.",
        "release_date": "1995-11-22",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Robert De Niro, Sharon Stone, Joe Pesci, James Woods",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt0040897",
        "title": "The Treasure of the Sierra Madre",
        "description": "Fred C. Dobbs and Bob Curtin, both down on their luck in Tampico, Mexico in 1925, meet up with a grizzled prospector named Howard and decide to join with him in search of gold in the wilds of central Mexico. Through enormous difficulties, they eventually succeed in finding gold, but bandits, the elements, and most especially greed threaten to turn their success into disaster.",
        "release_date": "1948-01-24",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Humphrey Bogart, Walter Huston, Tim Holt, Bruce Bennett",
        "directors": "John Huston"
    },
    {
        "movie_id": "tt0457430",
        "title": "Pan's Labyrinth",
        "description": "In 1944 Falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the true princess and will never see her real father, the king, again.",
        "release_date": "2006-10-11",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Ivana Baquero, Ariadna Gil, Sergi López, Maribel Verdú",
        "directors": "Guillermo del Toro"
    },
    {
        "movie_id": "tt0268978",
        "title": "A Beautiful Mind",
        "description": "From the heights of notoriety to the depths of depravity, John Forbes Nash, Jr. experienced it all. A mathematical genius, he made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a painful and harrowing journey of self-discovery. After many years of struggle, he eventually triumphed over his tragedy, and finally - late in life - received the Nobel Prize.",
        "release_date": "2002-01-04",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Russell Crowe, Ed Harris, Jennifer Connelly, Christopher Plummer",
        "directors": "Ron Howard"
    },
    {
        "movie_id": "tt1305806",
        "title": "The Secret in Their Eyes",
        "description": "In 1999, retired Argentinian federal justice agent Benjamín Espósito is writing a novel, using an old closed case as the source material. That case is the brutal rape and murder of Liliana Coloto. In addition to seeing the extreme grief of the victim's husband Ricardo Morales, Benjamín, his assistant Pablo Sandoval, and newly hired department chief Irene Menéndez-Hastings were personally affected by the case as Benjamín and Pablo tracked the killer, hence the reason why the unsatisfactory ending to the case has always bothered him. Despite the department already having two other suspects, Benjamín and Pablo ultimately were certain that a man named Isidoro Gómez is the real killer. Although he is aware that historical accuracy is not paramount for the novel, the process of revisiting the case is more an issue of closure for him. He tries to speak to the key players in the case, most specifically Irene, who still works in the justice department and who he has always been attracted to ...",
        "release_date": "2009-08-13",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Ricardo Darín, Soledad Villamil, Pablo Rago, Carla Quevedo",
        "directors": "Juan José Campanella"
    },
    {
        "movie_id": "tt0081398",
        "title": "Raging Bull",
        "description": "When Jake LaMotta steps into a boxing ring and obliterates his opponent, he's a prizefighter. But when he treats his family and friends the same way, he's a ticking time bomb, ready to go off at any moment. Though LaMotta wants his family's love, something always seems to come between them. Perhaps it's his violent bouts of paranoia and jealousy. This kind of rage helped make him a champ, but in real life, he winds up in the ring alone.",
        "release_date": "1980-12-19",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Robert De Niro, Cathy Moriarty, Joe Pesci, Frank Vincent",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt0071411",
        "title": "Dersu Uzala",
        "description": "A Russian army explorer who is rescued in Siberia by a rugged Asian hunter renews his friendship with the woodsman years later when he returns as the head of a larger expedition. The hunter finds that all of his nature lore is of no help when he accompanies the explorer back to civilization.",
        "release_date": "1975-08-02",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Maksim Munzuk, Yuriy Solomin, Mikhail Bychkov, Vladimir Khrulyov",
        "directors": "Akira Kurosawa"
    },
    {
        "movie_id": "tt0071315",
        "title": "Chinatown",
        "description": "In 1937 Los Angeles, private investigator Jake 'J.J.' Gittes specializes in cheating-spouse cases. His current target is Hollis Mulwray, high-profile chief engineer for the Los Angeles Department of Water and Power, whose wife suspects him of infidelity. In following Mulwray, Gittes witnesses some usual business dealings, such as a public meeting for construction of a new dam to create additional water supply for Los Angeles, as fresh water is vital to the growing community during the chronic drought; Mulwray opposes the dam. Eventually Gittes sees Mulwray meeting with an unknown young woman who isn't his wife. Once news of the supposed tryst between Mulwray and this woman hits the media, additional information comes to light that makes Gittes believe that Mulwray is being framed for something and that he himself is being set up. In his investigation of the issue behind Mulwray's framing and his own setup, Gittes is assisted by Mulwray's wife Evelyn, but he thinks she isn't being ...",
        "release_date": "1974-06-20",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
        "directors": "Roman Polanski"
    },
    {
        "movie_id": "tt0096283",
        "title": "My Neighbor Totoro",
        "description": "Two young girls, 10-year-old Satsuki and her 4-year-old sister Mei, move into a house in the country with their father to be closer to their hospitalized mother. Satsuki and Mei discover that the nearby forest is inhabited by magical creatures called Totoros (pronounced toe-toe-ro). They soon befriend these Totoros, and have several magical adventures.",
        "release_date": "1988-04-16",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Hitoshi Takagi, Noriko Hidaka, Chika Sakamoto, Shigesato Itoi",
        "directors": "Hayao Miyazaki"
    },
    {
        "movie_id": "tt0120735",
        "title": "Lock, Stock and Two Smoking Barrels",
        "description": "Four Jack-the-lads find themselves heavily - seriously heavily - in debt to an East End hard man and his enforcers after a crooked card game. Overhearing their neighbours in the next flat plotting to hold up a group of out-of-their-depth drug growers, our heros decide to stitch up the robbers in turn. In a way the confusion really starts when a pair of antique double-barrelled shotguns go missing in a completely different scam.",
        "release_date": "1998-08-28",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            }
        ],
        "actors": "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
        "directors": "Guy Ritchie"
    },
    {
        "movie_id": "tt1130884",
        "title": "Shutter Island",
        "description": "In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals \"escape\" in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity.",
        "release_date": "2010-02-18",
        "genres": [
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo, Ben Kingsley",
        "directors": "Martin Scorsese"
    },
    {
        "movie_id": "tt0477348",
        "title": "No Country for Old Men",
        "description": "In rural Texas, welder and hunter Llewelyn Moss (Josh Brolin) discovers the remains of several drug runners who have all killed each other in an exchange gone violently wrong. Rather than report the discovery to the police, Moss decides to simply take the two million dollars present for himself. This puts the psychopathic killer, Anton Chigurh (Javier Bardem), on his trail as he dispassionately murders nearly every rival, bystander and even employer in his pursuit of his quarry and the money. As Moss desperately attempts to keep one step ahead, the blood from this hunt begins to flow behind him with relentlessly growing intensity as Chigurh closes in. Meanwhile, the laconic Sheriff Ed Tom Bell (Tommy Lee Jones) blithely oversees the investigation even as he struggles to face the sheer enormity of the crimes he is attempting to thwart.",
        "release_date": "2007-11-21",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
        "directors": "Ethan Coen, Joel Coen"
    },
    {
        "movie_id": "tt0015864",
        "title": "The Gold Rush",
        "description": "A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.",
        "release_date": "1925-07-13",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Western",
                "value": "Western"
            }
        ],
        "actors": "Charles Chaplin, Mack Swain, Tom Murray, Henry Bergman",
        "directors": "Charles Chaplin"
    },
    {
        "movie_id": "tt0046912",
        "title": "Dial M for Murder",
        "description": "In London, wealthy Margot Mary Wendice had a brief love affair with the American writer Mark Halliday while her husband and professional tennis player Tony Wendice was on a tennis tour. Tony quits playing to dedicate to his wife and finds a regular job. She decides to give him a second chance for their marriage. When Mark arrives from America to visit the couple, Margot tells him that she had destroyed all his letters but one that was stolen. Subsequently she was blackmailed, but she had never retrieved the stolen letter. Tony arrives home, claims that he needs to work and asks Margot to go with Mark to the theater. Meanwhile Tony calls Captain Lesgate (aka Charles Alexander Swann who studied with him at college) and blackmails him to murder his wife, so that he can inherit her fortune. But there is no perfect crime, and things do not work as planned.",
        "release_date": "1954-05-29",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Ray Milland, Grace Kelly, Robert Cummings, John Williams",
        "directors": "Alfred Hitchcock"
    },
    {
        "movie_id": "tt0084787",
        "title": "The Thing",
        "description": "A US research station, Antarctica, early-winter 1982. The base is suddenly buzzed by a helicopter from the nearby Norwegian research station. They are trying to kill a dog that has escaped from their base. After the destruction of the Norwegian chopper the members of the US team fly to the Norwegian base, only to discover them all dead or missing. They do find the remains of a strange creature the Norwegians burned. The Americans take it to their base and deduce that it is an alien life form. After a while it is apparent that the alien can take over and assimilate into other life forms, including humans, and can spread like a virus. This means that anyone at the base could be inhabited by The Thing, and tensions escalate.",
        "release_date": "1982-06-25",
        "genres": [
            {
                "key": "Horror",
                "value": "Horror"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Kurt Russell, Wilford Brimley, Keith David, Richard Masur",
        "directors": "John Carpenter"
    },
    {
        "movie_id": "tt0050976",
        "title": "The Seventh Seal",
        "description": "A Knight and his squire are home from the crusades. Black Death is sweeping their country. As they approach home, Death appears to the knight and tells him it is his time. The knight challenges Death to a chess game for his life. The Knight and Death play as the cultural turmoil envelopes the people around them as they try, in different ways, to deal with the upheaval the plague has caused.",
        "release_date": "1957-02-16",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Max von Sydow, Gunnar Björnstrand, Bengt Ekerot, Nils Poppe",
        "directors": "Ingmar Bergman"
    },
    {
        "movie_id": "tt5027774",
        "title": "Three Billboards Outside Ebbing, Missouri",
        "description": "THREE BILLBOARDS OUTSIDE EBBING, MISSOURI is a darkly comic drama from Academy Award nominee Martin McDonagh (In Bruges). After months have passed without a culprit in her daughter's murder case, Mildred Hayes (Academy Award winner Frances McDormand) makes a bold move, painting three signs leading into her town with a controversial message directed at William Willoughby (Academy Award nominee Woody Harrelson), the town's revered chief of police. When his second-in-command Officer Dixon (Academy Award winner Sam Rockwell), an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
        "release_date": "2017-12-01",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Frances McDormand, Woody Harrelson, Sam Rockwell, Caleb Landry Jones",
        "directors": "Martin McDonagh"
    },
    {
        "movie_id": "tt4729430",
        "title": "Klaus",
        "description": "When Jesper (Jason Schwartzman) distinguishes himself as the postal academy's worst student, he is stationed on a frozen island above the Arctic Circle, where the feuding locals hardly exchange words let alone letters. Jesper is about to give up when he finds an ally in local teacher Alva (Rashida Jones), and discovers Klaus (Oscar® winner J.K. Simmons), a mysterious carpenter who lives alone in a cabin full of handmade toys. These unlikely friendships return laughter to Smeerensburg, forging a new legacy of generous neighbors, magical lore and stockings hung by the chimney with care. An animated Christmas comedy directed by Despicable Me co-creator Sergio Pablos, KLAUS co-stars Rashida Jones, Jason Schwartzman and JK Simmons.",
        "release_date": "2019-11-08",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Jason Schwartzman, J.K. Simmons, Rashida Jones, Will Sasso",
        "directors": "Sergio Pablos, Carlos Martínez López"
    },
    {
        "movie_id": "tt0080678",
        "title": "The Elephant Man",
        "description": "In Victorian London, Dr. Frederick Treves with the London Hospital comes across a circus sideshow attraction run by a man named Bytes called \"The Elephant Man\". In actuality, the creature on display is indeed a man, twenty-one-year-old Joseph \"John\" Merrick, who has several physical deformities, including an oversized and disfigured skull, and an oversized and disfigured right shoulder. Brutish Bytes, his \"owner\", only wants whatever he can get economically by presenting Merrick as a freak. Treves manages to bring Merrick under his care at the hospital, not without several of its own obstacles, including being questioned by those in authority since Merrick cannot be cured. Treves initially believes Bytes' assertion that mute Merrick is an imbecile, but ultimately learns that Merrick can speak and is a well-read and articulate man. As news of Merrick hits the London newspapers, he becomes a celebrated curiosity amongst London's upper class, including with Mrs. Kendal, a famed actress. ...",
        "release_date": "1980-10-10",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Anthony Hopkins, John Hurt, Anne Bancroft, John Gielgud",
        "directors": "David Lynch"
    },
    {
        "movie_id": "tt0167404",
        "title": "The Sixth Sense",
        "description": "Malcom Crowe (Bruce Willis) is a child psychologist who receives an award on the same night that he is visited by a very unhappy ex-patient. After this encounter, Crowe takes on the task of curing a young boy with the same ills as the ex-patient (Donnie Wahlberg) . This boy \"sees dead people\". Crowe spends a lot of time with the boy much to the dismay of his wife (Olivia Williams). Cole's mom (Toni Collette) is at her wit's end with what to do about her son's increasing problems. Crowe is the boy's only hope.",
        "release_date": "1999-08-06",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Bruce Willis, Haley Joel Osment, Toni Collette, Olivia Williams",
        "directors": "M. Night Shyamalan"
    },
    {
        "movie_id": "tt0050986",
        "title": "Wild Strawberries",
        "description": "With the exception of his elderly housekeeper Miss Agda who he treats almost like a surrogate platonic wife, widowed seventy-eight year old Dr. Isak Borg, a former medical doctor and professor, has retreated from any human contact, partly his own want but partly the decision of others who do not want to spend time with him because of his cold demeanor. He is traveling from his home in Stockholm to Lund to accept an honorary degree. Instead of flying as was the original plan, he decides to take the day long drive instead. Along for the ride is his daughter-in-law Marianne, who had been staying with him for the month but has now decided to go home. The many stops and encounters along the way make him reminisce about various parts of his life. Those stops which make him reminisce directly are at his childhood summer home, at the home of his equally emotionally cold mother, and at a gas station where the attendants praise him as a man for his work. But the lives of other people they ...",
        "release_date": "1957-12-26",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Victor Sjöström, Bibi Andersson, Ingrid Thulin, Gunnar Björnstrand",
        "directors": "Ingmar Bergman"
    },
    {
        "movie_id": "tt0120382",
        "title": "The Truman Show",
        "description": "Since birth, a big fat lie defines the well-organised but humdrum life of the kind-hearted insurance salesman and ambitious explorer, Truman Burbank. Utterly unaware of the thousands of cleverly hidden cameras watching his every move, for nearly three decades, Truman's entire existence pivots around the will and the wild imagination of the ruthlessly manipulative television producer, Christof--the all-powerful TV-God of an extreme 24/7 reality show: The Truman Show. As a result, Truman's picturesque neighbourhood with the manicured lawns and the uncannily perfect residents is nothing but an elaborate state-of-the-art set, and the only truth he knows is what the worldwide television network and its deep financial interests dictate. Do lab rats know they are forever imprisoned?",
        "release_date": "1998-06-05",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Jim Carrey, Ed Harris, Laura Linney, Noah Emmerich",
        "directors": "Peter Weir"
    },
    {
        "movie_id": "tt0107290",
        "title": "Jurassic Park",
        "description": "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island.",
        "release_date": "1993-06-11",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
        "directors": "Steven Spielberg"
    },
    {
        "movie_id": "tt0041959",
        "title": "The Third Man",
        "description": "An out of work pulp fiction novelist, Holly Martins, arrives in a post war Vienna divided into sectors by the victorious allies, and where a shortage of supplies has led to a flourishing black market. He arrives at the invitation of an ex-school friend, Harry Lime, who has offered him a job, only to discover that Lime has recently died in a peculiar traffic accident. From talking to Lime's friends and associates Martins soon notices that some of the stories are inconsistent, and determines to discover what really happened to Harry Lime.",
        "release_date": "1949-10-12",
        "genres": [
            {
                "key": "Film-Noir",
                "value": "Film-Noir"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Orson Welles, Joseph Cotten, Alida Valli, Trevor Howard",
        "directors": "Carol Reed"
    },
    {
        "movie_id": "tt0353969",
        "title": "Memories of Murder",
        "description": "In 1986, in the province of Gyunggi, in South Korea, a second young and beautiful woman is found dead, raped and tied and gagged with her underwear. Detective Park Doo-Man and Detective Cho Yong-koo, two brutal and stupid local detectives without any technique, investigate the murder using brutality and torturing the suspects, without any practical result. The Detective Seo Tae-Yoon from Seoul comes to the country to help the investigations and is convinced that a serial-killer is killing the women. When a third woman is found dead in the same \"modus-operandi\", the detectives find leads of the assassin.",
        "release_date": "2003-05-02",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Kang-ho Song, Kim Sang-kyung, Roe-ha Kim, Jae-ho Song",
        "directors": "Bong Joon Ho"
    },
    {
        "movie_id": "tt0434409",
        "title": "V for Vendetta",
        "description": "In the distant future, Evey Hammond is an average citizen of the United Kingdom, which is under the rule of the fascist and tyrannical Norsefire Party. She is an employee of the state-run British Television Network, but soon, she becomes the number one enemy of the state together with an enigmatic and larger-than-life freedom fighter known only by the letter \"V\". V informs Evey that she must hide in his underground lair for at least one year, and while she is reluctant to the idea at first, a bond soon forms between the two individuals. In the meanwhile, the mysterious past of V is gradually revealed to the police inspector tasked with capturing him, Eric Finch, and it is not long until he starts questioning everything his government stands for.",
        "release_date": "2006-03-15",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Hugo Weaving, Natalie Portman, Rupert Graves, Stephen Rea",
        "directors": "James McTeigue"
    },
    {
        "movie_id": "tt1160419",
        "title": "Dune",
        "description": "A mythic and emotionally charged hero's journey, \"Dune\" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
        "release_date": "2021-09-16",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Timothée Chalamet, Rebecca Ferguson, Zendaya",
        "directors": "Denis Villeneuve"
    },
    {
        "movie_id": "tt0083658",
        "title": "Blade Runner",
        "description": "In the early twenty-first century, the Tyrell Corporation, during what was called the Nexus phase, developed robots, called \"replicants\", that were supposed to aid society, the replicants which looked and acted like humans. When the superhuman generation Nexus 6 replicants, used for dangerous off-Earth endeavors, began a mutiny on an off-Earth colony, replicants became illegal on Earth. Police units, called \"blade runners\", have the job of destroying - or in their parlance \"retiring\" - any replicant that makes its way back to or created on Earth, with anyone convicted of aiding or assisting a replicant being sentenced to death. It's now November, 2019 in Los Angeles, California. Rick Deckard, a former blade runner, is called out of retirement when four known replicants, most combat models, have made their way back to Earth, with their leader being Roy Batty. One, Leon Kowalski, tried to infiltrate his way into the Tyrell Corporation as an employee, but has since been able to escape. ...",
        "release_date": "1982-06-25",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
        "directors": "Ridley Scott"
    },
    {
        "movie_id": "tt0117951",
        "title": "Trainspotting",
        "description": "A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud, psycho Begbie, 14-year-old girlfriend Diane, and clean-cut athlete Tommy, who's never touched drugs but can't help being curious about them...",
        "release_date": "1996-02-23",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd",
        "directors": "Danny Boyle"
    },
    {
        "movie_id": "tt2096673",
        "title": "Inside Out",
        "description": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
        "release_date": "2015-06-17",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Amy Poehler, Bill Hader, Lewis Black, Mindy Kaling",
        "directors": "Pete Docter, Ronnie Del Carmen"
    },
    {
        "movie_id": "tt0050212",
        "title": "The Bridge on the River Kwai",
        "description": "During WW II, allied POWs in a Japanese internment camp are ordered to build a bridge to accommodate the Burma-Siam railway. Their instinct is to sabotage the bridge, but under the leadership of Colonel Nicholson they're persuaded the bridge should be built to help morale, spirit. At first, the prisoners admire Nicholson when he bravely endures torture rather than compromise his principles for the benefit of Japanese Commandant Colonel Saito, but soon they realise it's a monument to Nicholson, himself, as well as a form of collaboration with the enemy.",
        "release_date": "1957-10-11",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "William Holden, Alec Guinness, Jack Hawkins, Sessue Hayakawa",
        "directors": "David Lean"
    },
    {
        "movie_id": "tt0116282",
        "title": "Fargo",
        "description": "Jerry works in his father-in-law's car dealership and has gotten himself in financial problems. He tries various schemes to come up with money needed for a reason that is never really explained. It has to be assumed that his huge embezzlement of money from the dealership is about to be discovered by father-in-law. When all else falls through, plans he set in motion earlier for two men to kidnap his wife for ransom to be paid by her wealthy father (who doesn't seem to have the time of day for son-in-law). From the moment of the kidnapping, things go wrong and what was supposed to be a non-violent affair turns bloody with more blood added by the minute. Jerry is upset at the bloodshed, which turns loose a pregnant sheriff from Brainerd, MN who is tenacious in attempting to solve the three murders in her jurisdiction.",
        "release_date": "1996-04-05",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "William H. Macy, Frances McDormand, Steve Buscemi, Peter Stormare",
        "directors": "Joel Coen, Ethan Coen"
    },
    {
        "movie_id": "tt1291584",
        "title": "Warrior",
        "description": "Two brothers face the fight of a lifetime - and the wreckage of their broken family - within the brutal, high-stakes world of Mixed Martial Arts (MMA) fighting in Lionsgate's action/drama, WARRIOR. A former Marine, haunted by a tragic past, Tommy Riordan returns to his hometown of Pittsburgh and enlists his father, a recovered alcoholic and his former coach, to train him for an MMA tournament awarding the biggest purse in the history of the sport. As Tommy blazes a violent path towards the title prize, his brother, Brendan, a former MMA fighter unable to make ends meet as a public school teacher, returns to the amateur ring to provide for his family. Even though years have passed, recriminations and past betrayals keep Brendan bitterly estranged from both Tommy and his father. But when Brendan's unlikely rise as an underdog sets him on a collision course with Tommy, the two brothers must finally confront the forces that tore them apart, all the while waging the most intense, ...",
        "release_date": "2011-09-09",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Tom Hardy, Nick Nolte, Joel Edgerton, Jennifer Morrison",
        "directors": "Gavin O'Connor"
    },
    {
        "movie_id": "tt0266543",
        "title": "Finding Nemo",
        "description": "A clown fish named Marlin lives in the Great Barrier Reef and loses his son, Nemo, after he ventures into the open sea, despite his father's constant warnings about many of the ocean's dangers. Nemo is abducted by a boat and netted up and sent to a dentist's office in Sydney. While Marlin ventures off to try to retrieve Nemo, Marlin meets a fish named Dory, a blue tang suffering from short-term memory loss. The companions travel a great distance, encountering various dangerous sea creatures such as sharks, anglerfish and jellyfish, in order to rescue Nemo from the dentist's office, which is situated by Sydney Harbour. While the two are searching the ocean far and wide, Nemo and the other sea animals in the dentist's fish tank plot a way to return to the sea to live their lives free again.",
        "release_date": "2003-05-30",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe",
        "directors": "Andrew Stanton, Lee Unkrich"
    },
    {
        "movie_id": "tt0266697",
        "title": "Kill Bill: Volume 1",
        "description": "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal was gunned down by an angry and jealous Bill (with the assistance of the Deadly Viper Assassination Squad). Four years later, 'The Bride' wakes from a coma, and discovers her baby is gone. She, then, decides to seek revenge upon the five people who destroyed her life and killed her baby. The saga of Kill Bill Volume I begins.",
        "release_date": "2003-10-10",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Uma Thurman, David Carradine, Daryl Hannah, Michael Madsen",
        "directors": "Quentin Tarantino"
    },
    {
        "movie_id": "tt0031381",
        "title": "Gone with the Wind",
        "description": "Scarlett is a woman who can deal with a nation at war, Atlanta burning, the Union Army carrying off everything from her beloved Tara, the carpetbaggers who arrive after the war. Scarlett is beautiful. She has vitality. But Ashley, the man she has wanted for so long, is going to marry his placid cousin, Melanie. Mammy warns Scarlett to behave herself at the party at Twelve Oaks. There is a new man there that day, the day the Civil War begins. Rhett Butler. Scarlett does not know he is in the room when she pleads with Ashley to choose her instead of Melanie.",
        "release_date": "1940-01-17",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Clark Gable, Vivien Leigh, Thomas Mitchell, Barbara O'Neil",
        "directors": "Victor Fleming, George Cukor, Sam Wood"
    },
    {
        "movie_id": "tt0046438",
        "title": "Tokyo Story",
        "description": "Elderly couple Shukishi and Tomi Hirayama live in the small coastal village of Onomichi, Japan with their youngest daughter, schoolteacher Kyoko Hirayama. Their other three surviving adult children, who they have not seen in quite some time, live either in Tokyo or Osaka. As such, Shukishi and Tomi make the unilateral decision to have an extended visit in Tokyo with their children, pediatrician Koichi Hirayama and beautician Shige Kaneko, and their respective families (which includes two grandchildren). In transit, they make an unexpected stop in Osaka and stay with their other son, Keiso Hirayama. All of their children treat the visit more as an obligation than a want, each trying to figure out what to do with their parents while they continue on with their own daily lives. At one point, they even decide to ship their parents off to an inexpensive resort at Atami Hot Springs rather than spend time with them. The only offspring who makes a concerted effort on this trip is Noriko ...",
        "release_date": "1953-11-03",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Chishû Ryû, Chieko Higashiyama, Sô Yamamura, Setsuko Hara",
        "directors": "Yasujirô Ozu"
    },
    {
        "movie_id": "tt0047296",
        "title": "On the Waterfront",
        "description": "Terry Malloy dreams about being a prize fighter, while tending his pigeons and running errands at the docks for Johnny Friendly, the corrupt boss of the dockers union. Terry witnesses a murder by two of Johnny's thugs, and later meets the dead man's sister and feels responsible for his death. She introduces him to Father Barry, who tries to force him to provide information for the courts that will smash the dock racketeers.",
        "release_date": "1954-06-22",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Marlon Brando, Karl Malden, Lee J. Cobb, Rod Steiger",
        "directors": "Elia Kazan"
    },
    {
        "movie_id": "tt0476735",
        "title": "My Father and My Son",
        "description": "Sadik is one of the rebellious youth who has been politically active as a university student and became a left-wing journalist in the 70's, despite his father's expectations of him becoming an agricultural engineer and taking control of their family farm in an Aegean village. On the dawn of September 12, 1980, when a merciless military coup hits the country, they cannot find access to any hospital or a doctor and his wife dies while giving birth to their only child, Deniz. After a long-lasting period of torture, trials, and jail time, Sadik returns to his village with 7-8 years old Deniz, knowing that it will be hard to correct things with his father, Huseyin.",
        "release_date": "2005-11-18",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Eser Sariyar, Çetin Tekindor, Fikret Kuskan, Hümeyra",
        "directors": "Çagan Irmak"
    },
    {
        "movie_id": "tt3011894",
        "title": "Wild Tales",
        "description": "The film is divided into six segments. (1) \"Pasternak\": While being on a plane, a model and a music critic realise they have a common acquaintance called Pasternak. Soon they discover that every passenger and crew member on board know Pasternak. Is this coincidence? (2) \"The Rats\": A waitress recognizes her client - it's the loan shark who caused a tragedy in her family. The cook suggests mixing rat poison with his food, but the waitress refuses. The stubborn cook, however, decides to proceed with her plan. (3) \"The Strongest\": Two drivers on a lone highway have an argument with tragic consequences. (4) \"Little Bomb\": A demolition engineer has his car towed by a truck for parking in a wrong place and he has an argument with the employee of the towing company. This event destroys his private and professional life, and he plots revenge against the corrupt towing company and the city hall. (5) \"The Proposal\": A reckless son of a wealthy family has an overnight hit-and-run accident, in ...",
        "release_date": "2014-08-21",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Darío Grandinetti, María Marull, Mónica Villa, Diego Starosta",
        "directors": "Damián Szifron"
    },
    {
        "movie_id": "tt0079944",
        "title": "Stalker",
        "description": "In a small, unnamed country there is an area called the Zone. It is apparently inhabited by aliens and contains the Room, where in it is believed wishes are granted. The government has declared The Zone a no-go area and have sealed off the area with barbed wire and border guards. However, this has not stopped people from attempting to enter the Zone. We follow one such party, made up of a writer, who wants to use the experience as inspiration for his writing, and a professor, who wants to research the Zone for scientific purposes. Their guide is a man to whom the Zone is everything, the Stalker.",
        "release_date": "1980-04-17",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Alisa Freyndlikh, Aleksandr Kaydanovskiy, Anatoliy Solonitsyn, Nikolay Grinko",
        "directors": "Andrei Tarkovsky"
    },
    {
        "movie_id": "tt0077416",
        "title": "The Deer Hunter",
        "description": "Michael, Steven and Nicky are 3 best friends who enjoy going deer hunting quite often. These men get enlisted to head to Vietnam to fight for their country and celebrate with a farewell party, as well as Steven marrying a pregnant woman named \"Angela.\" After the horrors during the war and edge-grabbing games of Russian Roulette that these men are forced to play, Michael returns home and realizes that his deer hunting outings aren't the same as they used to be, because of the war and he eventually finds out that Steven is handicapped and Nicky hasn't returned from Vietnam, and in response, he heads back to Vietnam to rescue him.",
        "release_date": "1979-02-22",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Robert De Niro, Christopher Walken, John Cazale, John Savage",
        "directors": "Michael Cimino"
    },
    {
        "movie_id": "tt1392214",
        "title": "Prisoners",
        "description": "How far would you go to protect your family? Keller Dover is facing every parent's worst nightmare. His six-year-old daughter, Anna, is missing, together with her young friend, Joy, and as minutes turn to hours, panic sets in. The only lead is a dilapidated RV that had earlier been parked on their street. Heading the investigation, Detective Loki arrests its driver, Alex Jones, but a lack of evidence forces his release. As the police pursue multiple leads and pressure mounts, knowing his child's life is at stake the frantic Dover decides he has no choice but to take matters into his own hands. But just how far will this desperate father go to protect his family?",
        "release_date": "2013-09-19",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis, Melissa Leo",
        "directors": "Denis Villeneuve"
    },
    {
        "movie_id": "tt2278388",
        "title": "The Grand Budapest Hotel",
        "description": "This movie recounts the adventures of M. Gustave (Ralph Fiennes), a legendary concierge at a famous European hotel between the wars, and Zero Moustafa (Tony Revolori), the lobby boy who becomes his most trusted friend. The story involves the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune - all against the backdrop of a suddenly and dramatically changing continent.",
        "release_date": "2014-02-26",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            }
        ],
        "actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
        "directors": "Wes Anderson"
    },
    {
        "movie_id": "tt0065234",
        "title": "Z",
        "description": "In a mid-sized metropolis (population 500,000) in a right-wing military led country, a pacifist organization, which supports the opposition party in the government, is planning on holding an anti-military, nuclear disarmament rally. The organization's charismatic leader - the deputy - is scheduled to arrive in the town from the capital the day of the rally. Beyond the problems arranging the rally due to the probable incitement of violence at such a rally, the organization learns of an unconfirmed report that there will be an attempt on the deputy's life. The rally does happen, after which a three-wheeled kamikaze runs over the deputy, who eventually passes away from his injuries. The official report is that the incident was a drunken accident. In reality, the deputy's death was murder orchestrated by the secret police, the general for who likens the pacifist organization to mildew killing off agricultural crops. A magistrate is assigned to the case. Although he does have political ...",
        "release_date": "1969-02-26",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Yves Montand, Irene Papas, Jean-Louis Trintignant, François Périer",
        "directors": "Costa-Gavras"
    },
    {
        "movie_id": "tt0017925",
        "title": "The General",
        "description": "Johnnie loves his train (\"The General\") and Annabelle Lee. When the Civil War begins he is turned down for service because he's more valuable as an engineer. Annabelle thinks it's because he's a coward. Union spies capture The General with Annabelle on board. Johnnie must rescue both his loves.",
        "release_date": "1927-01-02",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Buster Keaton, Marion Mack, Glen Cavender, Jim Farley",
        "directors": "Clyde Bruckman, Buster Keaton"
    },
    {
        "movie_id": "tt0015324",
        "title": "Sherlock Jr.",
        "description": "A meek and mild projectionist, who also cleans up after screenings, would like nothing better than to be a private detective. He becomes engaged to a pretty girl but a ladies man known as the Sheik vies for her affection. He gets rid of the projectionist by stealing a pocket watch belonging to the girl's father - which he pawns to buy her an expensive box of candy. He then slips the pawn ticket into the projectionist's pocket and subsequently is found by the police. He doesn't have much luck but in his dreams, he the debonair and renowned detective Sherlock Jr. who faces danger and solves the crime. In real life, the girl solves crimes quickly.",
        "release_date": "1924-05-11",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Buster Keaton, Kathryn McGuire, Joe Keaton, Erwin Connelly",
        "directors": "Buster Keaton"
    },
    {
        "movie_id": "tt1205489",
        "title": "Gran Torino",
        "description": "Walt Kowalski (Clint Eastwood) is a widower who holds onto his prejudices despite the changes in his Michigan neighborhood and the world around him. Kowalski is a grumpy, tough-minded, unhappy old man who can't get along with either his kids or his neighbors. He is a Korean War veteran whose prize possession is a 1972 Gran Torino he keeps in mint condition. When his neighbor Thao Lor (Bee Vang), a young Hmong teenager under pressure from his gang member cousin, tries to steal his Gran Torino, Kowalski sets out to reform the youth. Drawn against his will into the life of Thao's family, Kowalski is soon taking steps to protect them from the gangs that infest their neighborhood.",
        "release_date": "2009-01-09",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Clint Eastwood, Bee Vang, Christopher Carley, Ahney Her",
        "directors": "Clint Eastwood"
    },
    {
        "movie_id": "tt0060827",
        "title": "Persona",
        "description": "A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer. Alma eventually confesses her secrets to a seemingly sympathetic Elisabeth and finds that her own personality is being submerged into Elisabeth's persona.",
        "release_date": "1966-10-18",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Bibi Andersson, Liv Ullmann, Margaretha Krook, Gunnar Björnstrand",
        "directors": "Ingmar Bergman"
    },
    {
        "movie_id": "tt0112471",
        "title": "Before Sunrise",
        "description": "American tourist Jesse and French student Celine meet by chance on the train from Budapest to Vienna. Sensing that they are developing a connection, Jesse asks Celine to spend the day with him in Vienna, and she agrees. So they pass the time before his scheduled flight the next morning together. How do two perfect strangers connect so intimately over the course of a single day? What is that special thing that bonds two people so strongly? As their bond turns to love, what will happen to them the next morning when Jesse flies away?",
        "release_date": "1995-01-27",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
        "directors": "Richard Linklater"
    },
    {
        "movie_id": "tt0978762",
        "title": "Mary and Max",
        "description": "In the mid-1970's, a homely, friendless Australian girl of 8 picks a name out of a Manhattan phone book and writes to him; she includes a chocolate bar. She's Mary Dinkle, the only child of an alcoholic mother and a distracted father. He's Max Horowitz, an overweight man with Asperger's, living alone in New York. He writes back, with chocolate. Thus begins a 20-year correspondence, interrupted by a stay in an asylum and a few misunderstandings. Mary falls in love with a neighbor, saves money to have a birthmark removed and deals with loss. Max has a friendship with a neighbor, tries to control his weight, and finally gets the dream job. Will the two ever meet face to face?",
        "release_date": "2009-04-09",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Toni Collette, Philip Seymour Hoffman, Eric Bana, Barry Humphries",
        "directors": "Adam Elliot"
    },
    {
        "movie_id": "tt0264464",
        "title": "Catch Me If You Can",
        "description": "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
        "release_date": "2002-12-25",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
        "directors": "Steven Spielberg"
    },
    {
        "movie_id": "tt0031679",
        "title": "Mr. Smith Goes to Washington",
        "description": "Naive and idealistic Jefferson Smith, leader of the Boy Rangers, is appointed on a lark by the spineless governor of his state. He is reunited with the state's senior senator--presidential hopeful and childhood hero, Senator Joseph Paine. In Washington, however, Smith discovers many of the shortcomings of the political process as his earnest goal of a national boys' camp leads to a conflict with the state political boss, Jim Taylor. Taylor first tries to corrupt Smith and then later attempts to destroy Smith through a scandal.",
        "release_date": "1939-10-19",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "James Stewart, Jean Arthur, Claude Rains, Edward Arnold",
        "directors": "Frank Capra"
    },
    {
        "movie_id": "tt0107207",
        "title": "In the Name of the Father",
        "description": "Young Belfastian Gerry Conlon (Daniel Day-Lewis) admits that he was in London at the time of the incident. He also admits that he is not a model citizen, having committed a petty robbery while in London. He does however profess his innocence when it comes to the bombing of the Guildford Pub in London in 1974, the event which killed several people inside. A self-professed non-political person, he and his three co-accused, dubbed the Guildford Four, are thought to be provisional members of the I.R.A. Their self-professed innocence is despite each having signed a statement of guilt which they claim were signed under duress. Their case includes having provable alibis for the time frame of the bombing. And eventually, Joe McAndrew (Don Baker), a known I.R.A. member, admits to the bombing. Dubbed the Maguire Seven, seven others, primarily members of Gerry's extended family including his father Giuseppe (Pete Postlethwaite), are accused of being accessories to the bombing. Following on the ...",
        "release_date": "1993-12-27",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Daniel Day-Lewis, Pete Postlethwaite, Alison Crosbie, Philip King",
        "directors": "Jim Sheridan"
    },
    {
        "movie_id": "tt0072684",
        "title": "Barry Lyndon",
        "description": "In the eighteenth century, in a small village in Ireland, Redmond Barry (Ryan O'Neal) is a young farm boy in love with his cousin Nora Brady (Gay Hamilton). When Nora gets engaged to British Captain John Quin (Leonard Rossiter), Barry challenges him to a duel of pistols. He wins and escapes to Dublin, but is robbed on the road. Without an alternative, Barry joins the British Army to fight in the Seven Years War. He deserts and is forced to join the Prussian Army, where he saves the life of his Captain and becomes his protégé and spy of Irish gambler Chevalier de Balibari (Patrick Magee). He helps Chevalier and becomes his associate until he decides to marry the wealthy Lady Lyndon (Marisa Berenson). They move to England and Barry, in his obsession of nobility, dissipates her fortune and makes a dangerous and revengeful enemy.",
        "release_date": "1975-12-18",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Ryan O'Neal, Marisa Berenson, Patrick Magee, Hardy Krüger",
        "directors": "Stanley Kubrick"
    },
    {
        "movie_id": "tt3170832",
        "title": "Room",
        "description": "ROOM tells the extraordinary story of Jack, a spirited 5-year-old who is looked after by his loving and devoted mother. Like any good mother, Ma dedicates herself to keeping Jack happy and safe, nurturing him with warmth and love and doing typical things like playing games and telling stories. Their life, however, is anything but typical--they are trapped--confined to a 10-by-10-foot space that Ma has euphemistically named Room. Ma has created a whole universe for Jack within Room, and she will stop at nothing to ensure that, even in this treacherous environment, Jack is able to live a complete and fulfilling life. But as Jack's curiosity about their situation grows, and Ma's resilience reaches its breaking point, they enact a risky plan to escape, ultimately bringing them face-to-face with what may turn out to be the scariest thing yet: the real world.",
        "release_date": "2015-12-10",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Brie Larson, Jacob Tremblay, Sean Bridgers, Wendy Crewson",
        "directors": "Lenny Abrahamson"
    },
    {
        "movie_id": "tt2267998",
        "title": "Gone Girl",
        "description": "On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. Under pressure from the police and a growing media frenzy, Nick's portrait of a blissful union begins to crumble. Soon his lies, deceits and strange behavior have everyone asking the same dark question: Did Nick Dunne kill his wife?",
        "release_date": "2014-10-01",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Ben Affleck, Rosamund Pike, Neil Patrick Harris, Tyler Perry",
        "directors": "David Fincher"
    },
    {
        "movie_id": "tt2119532",
        "title": "Hacksaw Ridge",
        "description": "The true story of Desmond T. Doss, the conscientious objector who, at the Battle of Okinawa, was awarded the Medal of Honor for his incredible bravery and regard for his fellow soldiers. We see his upbringing and how this shaped his views, especially his religious view and anti-killing stance. We see Doss's trials and tribulations after enlisting in the US Army and trying to become a medic. Finally, we see the hell on Earth that was Hacksaw Ridge.",
        "release_date": "2016-11-03",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Andrew Garfield, Sam Worthington, Luke Bracey, Teresa Palmer",
        "directors": "Mel Gibson"
    },
    {
        "movie_id": "tt0019254",
        "title": "The Passion of Joan of Arc",
        "description": "Giovanna is taken to the Inquisition court. . After the accusation of blasphemy continues to pray in ecstasy . A friar thinks that Giovanna is a saint, but is taken away by the soldiers. Giovanna sees a cross in the shadow and feels comforted. She is not considered a daughter of God but a daughter of the devil and is sentenced to torture. Giovanna D 'Arco says that even if she dies she will not deny anything. The eyes are twisted by terror in front of the torture wheel and faint. Giovanna is taken to a bed where they are bleeding. Giovanna feels that she is about to die and asks to be buried in a consecrated area. Giovanna burns at the stake while devoted ladies cry.",
        "release_date": "1928-04-21",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            }
        ],
        "actors": "Maria Falconetti, Eugene Silvain, André Berley, Maurice Schutz",
        "directors": "Carl Theodor Dreyer"
    },
    {
        "movie_id": "tt8108198",
        "title": "Andhadhun",
        "description": "Akash a blind pianist is preparing for a London concert.Sophie's scooter bumps into Akash and upon finding he a pianist she takes him to her restaurant Franco's run by her father and offers him a job.Akash meets 70s actor Pramod Sinha at the restaurant who asks him to do a private concert of his songs at his residence to surprise his wife Simi. Next Day upon reaching his house a shocking surprise is waiting for Akash.",
        "release_date": "2018-10-04",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Music",
                "value": "Music"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Ayushmann Khurrana, Tabu, Radhika Apte, Anil Dhawan",
        "directors": "Sriram Raghavan"
    },
    {
        "movie_id": "tt1950186",
        "title": "Ford v Ferrari",
        "description": "As Enzo Ferrari's fast Rosso-Corsa racing cars dominate the mid-1960s motorsport world, the American car designer, Carroll Shelby, is forced to retire after winning the demanding 1959 '24 Hours of Le Mans' endurance race. But, before long, an unexpected proposition by the Vice President of Henry Ford's motor company, Lee Iacocca, will offer an opportunity to beat the Italians at their own game. Now, under those pressing circumstances, the British sports car driver and racing engineer, Ken Miles, reluctantly agrees to lend a hand and improve the firm's image, as Ford's race team has less than ninety days to rewrite history. As a result, the non-conformist duo comes up with the mighty Ford GT40 Mk I high-performance racing car. Can Shelby and Miles break Ferrari's streak?",
        "release_date": "2019-11-13",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe",
        "directors": "James Mangold"
    },
    {
        "movie_id": "tt2024544",
        "title": "12 Years a Slave",
        "description": "Based on an incredible true story of one man's fight for survival and freedom. In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty personified by a malevolent slave owner, as well as unexpected kindnesses, Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon's chance meeting with a Canadian abolitionist will forever alter his life.",
        "release_date": "2013-11-08",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            }
        ],
        "actors": "Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender, Brad Pitt",
        "directors": "Steve McQueen"
    },
    {
        "movie_id": "tt0035446",
        "title": "To Be or Not to Be",
        "description": "Joseph and Maria Tura operate and star in their own theater company in Warsaw. Maria has many admirers including a young lieutenant in the Polish air force, Stanislav Sobinski. When the Nazis invade Poland to start World War II, Sobinski and his colleagues flee to England while the Turas find themselves now having to operate under severe restrictions, including shelving a comical play they had written about Adolf Hitler. In England meanwhile, Sobinski and his friends give Professor Siletski - who is about to return to Poland - the names and addresses of their closest relatives so the professor can carry messages for them. When it's learned that Siletski is really a German spy, Sobinski parachutes into Poland and enlists the aid of the Turas and their fellow actors to get that list back.",
        "release_date": "1942-03-06",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Carole Lombard, Jack Benny, Robert Stack, Felix Bressart",
        "directors": "Ernst Lubitsch"
    },
    {
        "movie_id": "tt0118715",
        "title": "The Big Lebowski",
        "description": "When \"the dude\" Lebowski is mistaken for a millionaire Lebowski, two thugs urinate on his rug to coerce him into paying a debt he knows nothing about. While attempting to gain recompense for the ruined rug from his wealthy counterpart, he accepts a one-time job with high pay-off. He enlists the help of his bowling buddy, Walter, a gun-toting Jewish-convert with anger issues. Deception leads to more trouble, and it soon seems that everyone from porn empire tycoons to nihilists want something from The Dude.",
        "release_date": "1998-03-06",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi",
        "directors": "Joel Coen, Ethan Coen"
    },
    {
        "movie_id": "tt0097165",
        "title": "Dead Poets Society",
        "description": "Painfully shy Todd Anderson has been sent to the school where his popular older brother was valedictorian. His roommate, Neil Perry, although exceedingly bright and popular, is very much under the thumb of his overbearing father. The two, along with their other friends, meet Professor Keating, their new English teacher, who tells them of the Dead Poets Society, and encourages them to go against the status quo. Each does so in his own way, and is changed for life.",
        "release_date": "1989-06-09",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Robin Williams, Robert Sean Leonard, Ethan Hawke, Josh Charles",
        "directors": "Peter Weir"
    },
    {
        "movie_id": "tt0077711",
        "title": "Autumn Sonata",
        "description": "After having neglected her children for many years, world famous pianist Charlotte visits her daughter Eva in her home. To her surprise she finds her other daughter, Helena, there as well. Helena is mentally disabled, and Eva has taken Helena out of the institution where their mother had placed her. The tension between Charlotte and Eva only builds up slowly, until a nightly conversation releases all the things they have wanted to tell each other.",
        "release_date": "1978-10-08",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Music",
                "value": "Music"
            }
        ],
        "actors": "Ingrid Bergman, Liv Ullmann, Lena Nyman, Halvar Björk",
        "directors": "Ingmar Bergman"
    },
    {
        "movie_id": "tt0892769",
        "title": "How to Train Your Dragon",
        "description": "Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.",
        "release_date": "2010-03-18",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse, Craig Ferguson",
        "directors": "Dean DeBlois, Chris Sanders"
    },
    {
        "movie_id": "tt1392190",
        "title": "Mad Max: Fury Road",
        "description": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
        "release_date": "2015-05-13",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz",
        "directors": "George Miller"
    },
    {
        "movie_id": "tt0052618",
        "title": "Ben-Hur",
        "description": "Judah Ben-Hur lives as a rich Jewish prince and merchant in Jerusalem at the beginning of the 1st century. Together with the new governor his old friend Messala arrives as commanding officer of the Roman legions. At first they are happy to meet after a long time but their different politic views separate them. During the welcome parade a roof tile falls down from Judah's house and injures the governor. Although Messala knows they are not guilty, he sends Judah to the galleys and throws his mother and sister into prison. But Judah swears to come back and take revenge.",
        "release_date": "1959-11-18",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            }
        ],
        "actors": "Charlton Heston, Jack Hawkins, Stephen Boyd, Haya Harareet",
        "directors": "William Wyler"
    },
    {
        "movie_id": "tt1201607",
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "description": "Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) continue their quest of finding and destroying Voldemort's (Ralph Fiennes') three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins, and life as they know it will never be the same again.",
        "release_date": "2011-07-12",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            }
        ],
        "actors": "Daniel Radcliffe, Emma Watson, Rupert Grint, Michael Gambon",
        "directors": "David Yates"
    },
    {
        "movie_id": "tt0405159",
        "title": "Million Dollar Baby",
        "description": "Wanting to learn from the best, aspiring boxer Maggie Fitzgerald (Hilary Swank) wants Frankie Dunn (Clint Eastwood) to train her. At the outset, he flatly refuses saying he has no interest in training a girl. Frankie leads a lonely existence, alienated from his only daughter and having few friends. Maggie's rough around the edges, but shows a lot of grit in the ring and he eventually relents. Maggie not only proves to be the boxer he always dreamed of having under his wing, but a friend who fills the great void he's had in his life. Maggie's career skyrockets, but an accident in the ring leads her to ask Frankie for one last favor.",
        "release_date": "2004-12-15",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Hilary Swank, Clint Eastwood, Morgan Freeman, Jay Baruchel",
        "directors": "Clint Eastwood"
    },
    {
        "movie_id": "tt0046268",
        "title": "The Wages of Fear",
        "description": "In the Central American jungle supplies of nitroglycerin are needed at a remote oil field. The oil company pays four men to deliver the supplies in two trucks. A tense rivalry develops between the two sets of drivers and on the rough remote roads the slightest jolt can result in death.",
        "release_date": "1953-04-22",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Yves Montand, Charles Vanel, Peter van Eyck, Folco Lulli",
        "directors": "Henri-Georges Clouzot"
    },
    {
        "movie_id": "tt4016934",
        "title": "The Handmaiden",
        "description": "1930s Korea, in the period of Japanese occupation, a new girl (Sookee) is hired as a handmaiden to a Japanese heiress (Hideko) who lives a secluded life on a large countryside estate with her domineering Uncle (Kouzuki). But the maid has a secret. She is a pickpocket recruited by a swindler posing as a Japanese Count to help him seduce the Lady to elope with him, rob her of her fortune, and lock her up in a madhouse. The plan seems to proceed according to plan until Sookee and Hideko discover some unexpected emotions.",
        "release_date": "2016-06-01",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Kim Min-hee, Jung-woo Ha, Cho Jin-woong, Moon So-ri",
        "directors": "Chan-wook Park"
    },
    {
        "movie_id": "tt0092005",
        "title": "Stand by Me",
        "description": "It's the summer of 1959 in Castlerock, Maine and four 12 year-old boys - Gordie, Chris, Teddy and Vern - are fast friends. After learning of the general location of the body of a local boy who has been missing for several days, they set off into woods to see it. Along the way, they learn about themselves, the meaning of friendship and the need to stand up for what is right.",
        "release_date": "1986-08-22",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Wil Wheaton, River Phoenix, Corey Feldman, Jerry O'Connell",
        "directors": "Rob Reiner"
    },
    {
        "movie_id": "tt0074958",
        "title": "Network",
        "description": "In the 1970s, terrorist violence is the stuff of networks' nightly news programming and the corporate structure of the UBS Television Network is changing. Meanwhile, Howard Beale, the aging UBS news anchor, has lost his once strong ratings share and so the network fires him. Beale reacts in an unexpected way. We then see how this affects the fortunes of Beale, his coworkers (Max Schumacher and Diana Christensen), and the network.",
        "release_date": "1976-11-27",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Faye Dunaway, William Holden, Peter Finch, Robert Duvall",
        "directors": "Sidney Lumet"
    },
    {
        "movie_id": "tt3315342",
        "title": "Logan",
        "description": "In 2029 the mutant population has shrunken significantly due to genetically modified plants designed to reduce mutant powers and the X-Men have disbanded. Logan, whose power to self-heal is dwindling, has surrendered himself to alcohol and now earns a living as a chauffeur. He takes care of the ailing old Professor X whom he keeps hidden away. One day, a female stranger asks Logan to drive a girl named Laura to the Canadian border. At first he refuses, but the Professor has been waiting for a long time for her to appear. Laura possesses an extraordinary fighting prowess and is in many ways like Wolverine. She is pursued by sinister figures working for a powerful corporation; this is because they made her, with Logan's DNA. A decrepit Logan is forced to ask himself if he can or even wants to put his remaining powers to good use. It would appear that in the near-future, the times in which they were able put the world to rights with razor sharp claws and telepathic powers are now over.",
        "release_date": "2017-02-28",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
        "directors": "James Mangold"
    },
    {
        "movie_id": "tt1954470",
        "title": "Gangs of Wasseypur",
        "description": "Shahid Khan is exiled after impersonating the legendary Sultana Daku in order to rob British trains. Now outcast, Shahid becomes a worker at Ramadhir Singh's colliery, only to spur a revenge battle that passes on to generations. At the turn of the decade, Shahid's son, the philandering Sardar Khan vows to get his father's honor back, becoming the most feared man of Wasseypur.",
        "release_date": "2012-06-22",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Manoj Bajpayee, Richa Chadha, Nawazuddin Siddiqui, Tigmanshu Dhulia",
        "directors": "Anurag Kashyap"
    },
    {
        "movie_id": "tt0061512",
        "title": "Cool Hand Luke",
        "description": "Luke Jackson is a cool, gutsy prisoner in a Southern chain gang, who, while refusing to buckle under to authority, keeps escaping and being recaptured. The prisoners admire Luke because, as Dragline explains it, \"You're an original, that's what you are!\" Nevertheless, the camp staff actively works to crush Luke until he finally breaks.",
        "release_date": "1967-11-01",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Paul Newman, George Kennedy, Strother Martin, J.D. Cannon",
        "directors": "Stuart Rosenberg"
    },
    {
        "movie_id": "tt1028532",
        "title": "Hachi: A Dog's Tale",
        "description": "Commuting by train, music professor Parker Wilson finds an Akita puppy, whose cage broke unnoticed during shipping, leaving his destination unknown, and since the station can't care for it and the dog catcher warns even such cute ones may not be adopted in the two weeks allowed, he kindly takes it home. His bossy, jealous wife Cate initially makes Parker swear it won't stay, but by the time its' clear nobody will claim him and an adoption candidate is found, she agrees to keep the dog, who won over their daughter Andy and her fiance Michael at first sight. Parker's Japanese college friend Ken inspires naming the pup Hachi(ko), and is pleasantly surprised when Parker successfully tackles the challenge to get it to fetch, which Akitas don't usually do. Hachi makes a habit of waiting for his equally doting master at the station every evening, but after a cardiac crisis, Parker dies. Hachi refuses to accept this, being moved to Michael's home as Cate moves out, waiting for a master who ...",
        "release_date": "2009-08-08",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Family",
                "value": "Family"
            }
        ],
        "actors": "Richard Gere, Joan Allen, Cary-Hiroyuki Tagawa, Sarah Roemer",
        "directors": "Lasse Hallström"
    },
    {
        "movie_id": "tt0113247",
        "title": "La Haine",
        "description": "The film follows three young men and their time spent in the French suburban \"ghetto,\" over a span of twenty-four hours. Vinz, a Jew, Saïd, an Arab, and Hubert, a black boxer, have grown up in these French suburbs where high levels of diversity coupled with the racist and oppressive police force have raised tensions to a critical breaking point. During the riots that took place a night before, a police officer lost his handgun in the ensuing madness, only to leave it for Vinz to find. Now, with a newfound means to gain the respect he deserves, Vinz vows to kill a cop if his friend Abdel dies in the hospital, due the beating he received while in police custody.",
        "release_date": "1995-05-31",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Vincent Cassel, Hubert Koundé, Saïd Taghmaoui, Abdel Ahmed Ghili",
        "directors": "Mathieu Kassovitz"
    },
    {
        "movie_id": "tt0053198",
        "title": "The 400 Blows",
        "description": "Seemingly in constant trouble at school, 14-year-old Antoine Doinel returns at the end of every day to a drab, unhappy home life. His parents have little money and he sleeps on a couch that's been pushed into the kitchen. His parents bicker constantly and he knows his mother is having an affair. He decides to skip school and begins a downward spiral of lies and theft. His parents are at their wits' end, and after he's stopped by the police, they decide the best thing would be to let Antoine face the consequences. He's sent to a juvenile detention facility where he doesn't do much better. He does manage to escape however.",
        "release_date": "1959-06-03",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Jean-Pierre Léaud, Albert Rémy, Claire Maurier, Guy Decomble",
        "directors": "François Truffaut"
    },
    {
        "movie_id": "tt5323662",
        "title": "A Silent Voice: The Movie",
        "description": "The story revolves around Shôko Nishimiya, a grade school student who has impaired hearing. She transfers into a new school, where she is bullied by her classmates, especially Shôya Ishida. It gets to the point where she transfers to another school and as a result, Shôya is ostracized and bullied himself, with no friends to speak to and no plans for the future. Years later, he epicly sets himself on a path to redemption.",
        "release_date": "2016-09-16",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Miyu Irino, Saori Hayami, Aoi Yûki",
        "directors": "Naoko Yamada"
    },
    {
        "movie_id": "tt0091763",
        "title": "Platoon",
        "description": "Chris Taylor is a young, naive American who gives up college and volunteers for combat in Vietnam. Upon arrival, he quickly discovers that his presence is quite nonessential, and is considered insignificant to the other soldiers, as he has not fought for as long as the rest of them and felt the effects of combat. Chris has two non-commissioned officers, the ill-tempered and indestructible Staff Sergeant Robert Barnes and the more pleasant and cooperative Sergeant Elias Grodin. A line is drawn between the two NCOs and a number of men in the platoon when an illegal killing occurs during a village raid. As the war continues, Chris himself draws towards psychological meltdown. And as he struggles for survival, he soon realizes he is fighting two battles, the conflict with the enemy and the conflict between the men within his platoon.",
        "release_date": "1987-02-06",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Charlie Sheen, Tom Berenger, Willem Dafoe, Keith David",
        "directors": "Oliver Stone"
    },
    {
        "movie_id": "tt1895587",
        "title": "Spotlight",
        "description": "When the Boston Globe's tenacious \"Spotlight\" team of reporters delves into allegations of abuse in the Catholic Church, their year-long investigation uncovers a decades-long cover-up at the highest levels of Boston's religious, legal, and government establishment, touching off a wave of revelations around the world.",
        "release_date": "2015-11-20",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
        "directors": "Tom McCarthy"
    },
    {
        "movie_id": "tt0198781",
        "title": "Monsters, Inc.",
        "description": "A city of monsters with no humans called Monstropolis centers around the city's power company, Monsters, Inc. The lovable, confident, tough, furry blue behemoth-like giant monster named James P. Sullivan (better known as Sulley) and his wisecracking best friend, short, green cyclops monster Mike Wazowski, discover what happens when the real world interacts with theirs in the form of a 2-year-old baby girl dubbed \"Boo,\" who accidentally sneaks into the monster world with Sulley one night. And now it's up to Sulley and Mike to send Boo back in her door before anybody finds out, especially two evil villains such as Sulley's main rival as a scarer, chameleon-like Randall (a monster that Boo is very afraid of), who possesses the ability to change the color of his skin, and Mike and Sulley's boss Mr. Waternoose, the chairman and chief executive officer of Monsters, Inc.",
        "release_date": "2001-11-02",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            }
        ],
        "actors": "Billy Crystal, John Goodman, Mary Gibbs, Steve Buscemi",
        "directors": "Pete Docter, David Silverman, Lee Unkrich"
    },
    {
        "movie_id": "tt0032976",
        "title": "Rebecca",
        "description": "A shy lady's companion, staying in Monte Carlo with her stuffy employer, meets the wealthy Maxim de Winter (Sir Laurence Olivier). She and Max fall in love, marry, and return to Manderley, his large country estate in Cornwall. Max is still troubled by the death of his first wife, Rebecca, in a boating accident the year before. The second Mrs. de Winter (Joan Fontaine) clashes with the housekeeper, Mrs. Danvers (Dame Judith Anderson), and discovers that Rebecca still has a strange hold on everyone at Manderley.",
        "release_date": "1940-04-12",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Romance",
                "value": "Romance"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Laurence Olivier, Joan Fontaine, George Sanders, Judith Anderson",
        "directors": "Alfred Hitchcock"
    },
    {
        "movie_id": "tt0079470",
        "title": "Monty Python's Life of Brian",
        "description": "The story of Brian of Nazareth (Graham Chapman), born on the same day as Jesus of Nazareth, who takes a different path in life that leads to the same conclusion. Brian joins a political resistance movement aiming to get the Romans out of Judea. Brian scores a victory of sorts when he manages to paint political slogans on an entire wall in the city of Jerusalem. The movement is not very effective but somehow Brian becomes a prophet and gathers his own following. His fate is sealed however and he lives a very short life.",
        "release_date": "1979-08-17",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            }
        ],
        "actors": "Graham Chapman, John Cleese, Michael Palin, Terry Gilliam",
        "directors": "Terry Jones"
    },
    {
        "movie_id": "tt0395169",
        "title": "Hotel Rwanda",
        "description": "1994. In Rwanda, the classification of the native population into Hutus and Tutsis, arbitrarily done by the colonial Belgians, is now ingrained within Rwandan mentality despite the Rwandan independence. Despite the Belgians having placed the Tutsis in a higher position during the Belgian rule, they have placed the majority Hutus in power after independence. Paul Rusesabagina, a Hutu married to a Tutsi, Tatiana Rusesabagina, is the House Manager of the Hotel Des Milles Collines in Kigali. The Milles Collines, owned by Sabena (the national airline of Belgium), is a four-star hotel catering primarily to wealthy white westerners. Paul, who knows how to work the system to run the hotel effectively for its guests and for Sabena, is proud that most of the Caucasians who he meets in this professional capacity treat him with respect. After a specific incident, the relative calm between the Tutsi guerrillas and government-backed Hutu militia takes a turn. Paul's thought that the native ...",
        "release_date": "2005-01-20",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Don Cheadle, Sophie Okonedo, Joaquin Phoenix, Xolani Mali",
        "directors": "Terry George"
    },
    {
        "movie_id": "tt0116231",
        "title": "The Bandit",
        "description": "The epic adventures of the legendary Baran the Bandit following his release from prison. After serving 35 years, it is no surprise that the world has changed dramatically. Still, Baran can't help but be shocked to discover that his home village is now underwater thanks to the construction of a new dam. He then heads for Istanbul to get revenge upon his former best friend, the man who snitched on him and stole his lover Keje. Along the way, Baran teams up with Cumali, a tough young punk who finds the thief's old-fashioned ways rather quaint. When Cumali gets into deep trouble with a crime boss, Baran adds another vengeful task to his roster.",
        "release_date": "1996-11-29",
        "genres": [
            {
                "key": "Crime",
                "value": "Crime"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Sener Sen, Ugur Yücel, Sermin Hürmeriç, Yesim Salkim",
        "directors": "Yavuz Turgul"
    },
    {
        "movie_id": "tt0118694",
        "title": "In the Mood for Love",
        "description": "Set in Hong Kong, 1962, Chow Mo-Wan is a newspaper editor who moves into a new building with his wife. At the same time, Su Li-zhen, a beautiful secretary and her executive husband also move in to the crowded building. With their spouses often away, Chow and Li-zhen spend most of their time together as friends. They have everything in common from noodle shops to martial arts. Soon, they are shocked to discover that their spouses are having an affair. Hurt and angry, they find comfort in their growing friendship even as they resolve not to be like their unfaithful mates.",
        "release_date": "2000-09-29",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Tony Chiu-Wai Leung, Maggie Cheung, Ping Lam Siu, Tung Cho 'Joe' Cheung",
        "directors": "Kar-Wai Wong"
    },
    {
        "movie_id": "tt1979320",
        "title": "Rush",
        "description": "Set against the sexy, glamorous golden age of Formula 1 racing in the 1970s, the film is based on the true story of a great sporting rivalry between handsome English playboy James Hunt (Hemsworth), and his methodical, brilliant opponent, Austrian driver Niki Lauda (Bruhl). The story follows their distinctly different personal styles on and off the track, their loves and the astonishing 1976 season in which both drivers were willing to risk everything to become world champion in a sport with no margin for error: if you make a mistake, you die.",
        "release_date": "2013-09-12",
        "genres": [
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Daniel Brühl, Chris Hemsworth, Olivia Wilde, Alexandra Maria Lara",
        "directors": "Ron Howard"
    },
    {
        "movie_id": "tt0758758",
        "title": "Into the Wild",
        "description": "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        "release_date": "2007-09-28",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Emile Hirsch, Vince Vaughn, Catherine Keener, Marcia Gay Harden",
        "directors": "Sean Penn"
    },
    {
        "movie_id": "tt0075148",
        "title": "Rocky",
        "description": "Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance. When heavyweight champion Apollo Creed visits Philadelphia, his managers want to set up an exhibition match between Creed and a struggling boxer, touting the fight as a chance for a \"nobody\" to become a \"somebody\". The match is supposed to be easily won by Creed, but someone forgot to tell Rocky, who sees this as his only shot at the big time.",
        "release_date": "1976-12-03",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Sport",
                "value": "Sport"
            }
        ],
        "actors": "Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
        "directors": "John G. Avildsen"
    },
    {
        "movie_id": "tt0245712",
        "title": "Amores Perros",
        "description": "On the brink of the new Millennium in the bustling City of Mexico, one horrible car accident intertwines inextricably the lives of three perfect strangers. Octavio, a rebellious adolescent who is secretly in love with his sister-in-law, dreams of escaping his miserable life, and for this reason, he enters reluctantly the obscure world of dog fighting with his lethal dog Cofi. And then unexpectedly, Valeria, a stunning woman and famous supermodel, will cross paths with Octavio, while in the meantime, her pampered little dog Richie manages to vanish into thin air in the confined space of her apartment. Lastly, Chivo, an ex-guerrilla vagabond, after abandoning his little daughter, unable to make up for lost time, he channels his love to the city's strays and a mortally wounded Rottweiler. In the end, even though all the weary characters, men and beasts, wish for a bright future, in this life-changing journey in the pursuit of love, sometimes infidelity, sin and death can get in the way.",
        "release_date": "2000-06-16",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Thriller",
                "value": "Thriller"
            }
        ],
        "actors": "Emilio Echevarría, Gael García Bernal, Goya Toledo, Álvaro Guerrero",
        "directors": "Alejandro G. Iñárritu"
    },
    {
        "movie_id": "tt0087544",
        "title": "Nausicaä of the Valley of the Wind",
        "description": "An animated fantasy-adventure. Set one thousand years from now, the Earth is ravaged by pollution and war. In the Valley of the Wind lives Nausicaä, Princess of her people. Their land borders on a toxic jungle, filled with dangerous over-sized insects. Meanwhile, two nearby nations are bitterly engaged in a war and the Valley of the Wind is stuck in the middle.",
        "release_date": "1984-03-11",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Sumi Shimamoto, Mahito Tsujimura, Hisako Kyôda, Gorô Naya",
        "directors": "Hayao Miyazaki"
    },
    {
        "movie_id": "tt0060107",
        "title": "Andrei Rublev",
        "description": "Andreiv Rublev charts the life of the great icon painter through a turbulent period of 15th Century Russian history, a period marked by endless fighting between rival Princes and by Tatar invasions.",
        "release_date": "1971-12-24",
        "genres": [
            {
                "key": "Biography",
                "value": "Biography"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "History",
                "value": "History"
            }
        ],
        "actors": "Anatoliy Solonitsyn, Ivan Lapikov, Nikolay Grinko, Nikolay Sergeev",
        "directors": "Andrei Tarkovsky"
    },
    {
        "movie_id": "tt0025316",
        "title": "It Happened One Night",
        "description": "Ellie Andrews has just tied the knot with society aviator King Westley when she is whisked away to her father's yacht and out of King's clutches. Ellie jumps ship and eventually winds up on a bus headed back to her husband. Reluctantly she must accept the help of out-of- work reporter Peter Warne. Actually, Warne doesn't give her any choice: either she sticks with him until he gets her back to her husband, or he'll blow the whistle on Ellie to her father. Either way, Peter gets what (he thinks!) he wants .... a really juicy newspaper story.",
        "release_date": "1934-02-22",
        "genres": [
            {
                "key": "Comedy",
                "value": "Comedy"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Clark Gable, Claudette Colbert, Walter Connolly, Roscoe Karns",
        "directors": "Frank Capra"
    },
    {
        "movie_id": "tt0381681",
        "title": "Before Sunset",
        "description": "Early thirty-something American Jesse Wallace is in a Paris bookstore, the last stop on a tour to promote his best selling book, This Time. Although he is vague to reporters about the source material for the book, it is about his chance encounter nine years earlier on June 15-16, 1994 with a Parisienne named Celine, and the memorable and romantic day and evening they spent together in Vienna. At the end of their encounter at the Vienna train station, which is also how the book ends, they, not providing contact information to the other, vowed to meet each other again in exactly six months at that very spot. As the media scrum at the bookstore nears its conclusion, Jesse spots Celine in the crowd, she who only found out about the book when she earlier saw his photograph promoting this public appearance. Much like their previous encounter, Jesse and Celine, who is now an environmental activist, decide to spend time together until he is supposed to catch his flight back to New York, this ...",
        "release_date": "2004-06-17",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Ethan Hawke, Julie Delpy, Vernon Dobtcheff, Louise Lemoine Torrès",
        "directors": "Richard Linklater"
    },
    {
        "movie_id": "tt0169858",
        "title": "Neon Genesis Evangelion: The End of Evangelion",
        "description": "After the defeat of the final Angel, Shinji Ikari falls into a deep depression. When SEELE orders the JSSDF to make a surprise attack on NERV's headquarters, Gendo Ikari retreats down into Terminal Dogma along with Rei Ayanami, where he begins to advance his own plans for the Human Instrumentality Project. Eventually, Shinji is pushed to the limits of his sanity as he is forced to decide the fate of humanity.",
        "release_date": "2019-06-21",
        "genres": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Action",
                "value": "Action"
            },
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Sci-Fi",
                "value": "Sci-Fi"
            }
        ],
        "actors": "Megumi Ogata, Megumi Hayashibara, Yûko Miyamura, Kotono Mitsuishi",
        "directors": "Hideaki Anno, Kazuya Tsurumaki"
    },
    {
        "movie_id": "tt0083922",
        "title": "Fanny and Alexander",
        "description": "It's the early twentieth century Sweden. Adolescent siblings Alexander and Fanny Ekdahl lead a relatively joyous and exuberant life with their well-off extended paternal family, led by the family matriarch, their grandmother, Helena Ekdahl. The openness of the family culture is exemplified by Helena's now deceased husband ending up becoming best friends with one of her lovers, a Jewish puppet maker named Isak Jacobi, and their Uncle Gustav Adolf's open liaison with one of the family maids, Maj, who everyone in the family adores, even Gustav Adolf's wife, Alma. Between the siblings, Alexander in particular has inherited the family's love of storytelling, his parents and his grandmother who are actors and who manage their own theater. Things change for Alexander and Fanny when their father, Oscar, dies shortly after Christmas 1907. Although she truly does believe she loves him, the children's mother, Emilie, decides to marry Bishop Edvard Vergérus, who she first met as the officiate at ...",
        "release_date": "1982-12-17",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Bertil Guve, Pernilla Allwin, Kristina Adolphson, Börje Ahlstedt",
        "directors": "Ingmar Bergman"
    },
    {
        "movie_id": "tt0058946",
        "title": "The Battle of Algiers",
        "description": "A film commissioned by the Algerian government that shows the Algerian revolution from both sides. The French foreign legion has left Vietnam in defeat and has something to prove. The Algerians are seeking independence. The two clash. The torture used by the French is contrasted with the Algerian's use of bombs in soda shops. A look at war as a nasty thing that harms and sullies everyone who participates in it.",
        "release_date": "1966-09-09",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "War",
                "value": "War"
            }
        ],
        "actors": "Brahim Hadjadj, Jean Martin, Yacef Saadi, Samia Kerbash",
        "directors": "Gillo Pontecorvo"
    },
    {
        "movie_id": "tt0050783",
        "title": "Nights of Cabiria",
        "description": "Practising the world's oldest profession in the archaeological walk of Rome's Parco di Porta Capena, the trusting and stubbornly optimistic streetwalker, Cabiria, refuses to lose faith in love. After escaping death by the skin of her teeth, hurt, and momentarily disenchanted Cabiria continues to confront life with a mixture of naivety and arrogance, and one evening, she ventures into the elegant Via Veneto and gets picked up by the suave movie star, Alberto Lazzari. Now, once more, disappointment awaits, and as poor Cabiria preys to Virgin Mary for guidance and a blessing, the man of her prayers, Oscar D'Onofrio, barges into her life after a chance encounter at a vaudeville theatre. But do miracles happen?",
        "release_date": "1957-09-13",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Giulietta Masina, François Périer, Franca Marzi, Dorian Gray",
        "directors": "Federico Fellini"
    },
    {
        "movie_id": "tt0093779",
        "title": "The Princess Bride",
        "description": "An elderly man reads the book \"The Princess Bride\" to his sick and thus currently bedridden adolescent grandson, the reading of the book which has been passed down within the family for generations. The grandson is sure he won't like the story, with a romance at its core, he prefers something with lots of action and \"no kissing\", but he lets grandfather continue, because he doesn't want to hurt his feelings. The story centers on Buttercup, a former farm girl who has been chosen as the princess bride to Prince Humperdinck of Florian. Buttercup does not love him, she who still laments the death of her one true love, Westley, five years ago. Westley was a hired hand on the farm, his stock answer of \"as you wish\" to any request she made of him which she came to understand was his way of saying that he loved her. But Westley went away to sea, only to be killed by the Dread Pirate Roberts. On a horse ride to clear her mind of her upcoming predicament of marriage, Buttercup is kidnapped by a...",
        "release_date": "1987-10-09",
        "genres": [
            {
                "key": "Adventure",
                "value": "Adventure"
            },
            {
                "key": "Family",
                "value": "Family"
            },
            {
                "key": "Fantasy",
                "value": "Fantasy"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Cary Elwes, Mandy Patinkin, Robin Wright, Chris Sarandon",
        "directors": "Rob Reiner"
    },
    {
        "movie_id": "tt0087884",
        "title": "Paris, Texas",
        "description": "A man wanders out of the desert after a four year absence. His brother finds him, and together they return to L.A. to reunite the man with his young son. Soon after, he and the boy set out to locate the mother of the child, who left shortly after the man disappeared.",
        "release_date": "1984-08-23",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            }
        ],
        "actors": "Harry Dean Stanton, Nastassja Kinski, Dean Stockwell, Sam Berry",
        "directors": "Wim Wenders"
    },
    {
        "movie_id": "tt0111495",
        "title": "Three Colors: Red",
        "description": "Valentine is a young model living in Geneva. Because of a dog she ran over, she meets a retired judge who spies his neighbours' phone calls, not for money but to feed his cynicism. The film is the story of relationships between some human beings, Valentine and the judge, but also other people who may not be aware of the relationship they have with Valentine or/and the old judge. Redemption, forgiveness and compassion...",
        "release_date": "1994-11-22",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Mystery",
                "value": "Mystery"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Irène Jacob, Jean-Louis Trintignant, Frédérique Feder",
        "directors": "Krzysztof Kieslowski"
    },
    {
        "movie_id": "tt7019842",
        "title": "96",
        "description": "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
        "release_date": "2018-10-03",
        "genres": [
            {
                "key": "Drama",
                "value": "Drama"
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "actors": "Vijay Sethupathi, Adithya Bhaskar, Trisha Krishnan, Gouri Kishan",
        "directors": "C. Prem Kumar"
    }
]

const trailers = [
    {
        "movie_id": "tt0111161",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3877612057/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0068646",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1348706585/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTY5OTE4MDM5N15BMl5BanBnXkFtZTcwNDAyMDg0Nw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0071562",
        "trailer_url": "https://www.imdb.com/video/imdb/vi696162841/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNWE4YzY4OGMtZDM5YS00YWVkLTgwMDktNzVmOGU3NjEwMjNlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0468569",
        "trailer_url": "https://www.imdb.com/video/imdb/vi324468761/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNWJkYWJlOWMtY2ZhZi00YWM0LTliZDktYmRiMGYwNzczMTZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0050083",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3452609817/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjE3MWNhZDYtYjFlMS00MzM4LTg5M2YtYTAwMGY2ZDg0OGY0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0108052",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1158527769/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTIxMTUzMmUtODU2MS00MDhjLTlmMGQtMzNhZTFhOTI5ZjE5XkEyXkFqcGdeQXRoaXJkLXBhcnR5LXZpZGVvLXVwZGF0ZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt0167260",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2073101337/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODk1MzkwNTA4N15BMl5BanBnXkFtZTgwOTU1ODY3MjI@._V1_.jpg"
    },
    {
        "movie_id": "tt0110912",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2620371481/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjI5MzgxMTQ4M15BMl5BanBnXkFtZTgwNjczMTk0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0060196",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2789278233/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzMzMDAxZDAtYTBkNy00NjMwLWIyYzctODA1YzE0MzUwMTI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0120737",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2073101337/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODk1MzkwNTA4N15BMl5BanBnXkFtZTgwOTU1ODY3MjI@._V1_.jpg"
    },
    {
        "movie_id": "tt0137523",
        "trailer_url": "https://www.imdb.com/video/imdb/vi781228825/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTNmYzllNWYtYzU1Yi00YWFmLTgwMzMtZmY4OGE3NzExNzEzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0109830",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3567517977/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzQyMWQ1ODMtZGE2OS00YzQyLWE2OWYtZmU5OGFiMWMwYmIyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1375666",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2959588889/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg"
    },
    {
        "movie_id": "tt0167261",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2073101337/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODk1MzkwNTA4N15BMl5BanBnXkFtZTgwOTU1ODY3MjI@._V1_.jpg"
    },
    {
        "movie_id": "tt0080684",
        "trailer_url": "https://www.imdb.com/video/imdb/vi221753881/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjMzOTU0NzAwMV5BMl5BanBnXkFtZTgwODAwNzU0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0133093",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1032782617/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDQ4NTRmN2ItYjgzMS00MzY3LWEwNmYtYmE2ODllZDdhNGI1XkEyXkFqcGdeQXdvbmtpbQ@@._V1_.jpg"
    },
    {
        "movie_id": "tt0099685",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2673654553/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODA1ZTkyYTctNTk1YS00ODcxLWEyNmItZWIyMWJlMzliNTc3XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0073486",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3943282969/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BM2NhZWYwOWEtNmRjMC00YTVjLWIxZjYtNWY2OGIwZTM5OTdlXkEyXkFqcGdeQXVyMjM4OTI2MTU@._V1_.jpg"
    },
    {
        "movie_id": "tt0047478",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0114369",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2508831257/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZmMxNmJiYzctNGRkZC00YzcxLTgyNjMtMmIxZWVlNDA4ZWRjXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0102926",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3377380121/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2ZiYzIyMWQtNDUyNy00YmExLWIwNmMtN2FhNzFiODgyYmU4XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0317248",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1783208985/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNTQzY2M4ZTctZWRjZS00NzlmLWI4YzgtMDUzZGU5YjlmYzkxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0118799",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2332801561/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMWZjZGZiNjktZjk4MS00ODVmLWFhNzQtMWE4MThhOWNkOGZlXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0038650",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1101988121/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmUyMzVmNjgtMWQ1MS00OTkwLWEzMTktOTFlYmRiNmE1MWZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0120815",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1701906201/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZjExYjU4OTAtMWM3NS00YzJkLWIzYjQtNTUxMWE5ZWY3MmVkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0076759",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1317709849/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTUzNDY0NjY4Nl5BMl5BanBnXkFtZTgwNjY4MTQ0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0816692",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1586278169/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_.jpg"
    },
    {
        "movie_id": "tt0245429",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3619684633/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMzZjOWEyNTEtNjhmMC00YmZlLTkyMzAtM2Y5MzFjYmJlODIzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0120689",
        "trailer_url": "https://www.imdb.com/video/imdb/vi552796441/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODU4NmYyMzEtNzkwNy00NmFlLTk3YWItM2I5NDk3YTUyODFhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt6751668",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1015463705/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWJjNWYzMzItYmEyNC00ODdmLWJmOGEtMWY0N2E2NGJlNTY0XkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    {
        "movie_id": "tt0110413",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2744254745/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZjlkOWI0YzUtYmI1OS00M2ZkLTgwYjAtNjc3MzhjMGY3ODQ5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0056058",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0253474",
        "trailer_url": "https://www.imdb.com/video/imdb/vi988938521/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmQ4MWQzNDEtYmI4Zi00NmY0LWEwYTEtZTg4MmQ3MDM2YmJlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0103064",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2748889369/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjI0OTJlNTQtMzYyZi00MTBkLWEyMzItNWQwYWFhOWU1NDczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        "movie_id": "tt0088763",
        "trailer_url": "https://www.imdb.com/video/imdb/vi252380953/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTE2MTY1MjktZTFmMS00MjI1LWFjYzUtNTVlZDVkZDNhMWEyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0114814",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2717188377/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYmI2NTk3ODQtYWFiNC00NDgxLTkxY2UtYTNhNTI3YTNkNzdmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0054215",
        "trailer_url": "https://www.imdb.com/video/imdb/vi607099161/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZGQwMDQyZGQtMWI5ZC00ZjgyLWE3Y2MtMjZjZjQ4MDk4ZDNkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0110357",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3764362265/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTU1MzkwNDI5OV5BMl5BanBnXkFtZTgwODU2MTkwMDI@._V1_.jpg"
    },
    {
        "movie_id": "tt0027977",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0120586",
        "trailer_url": "https://www.imdb.com/video/imdb/vi854001177/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmU3MDg5YWItMGMwYi00NGVmLWJhNGQtZmJhNDczMTZkYmM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0095327",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1377679385/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTNmNWM4OWUtMTcxZi00ODA1LWE1NWMtOTk3Mjg3ZDIyYWI0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0021749",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt2582802",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4006456345/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjMxNzAzMjY0NF5BMl5BanBnXkFtZTgwOTE4NTgyMjE@._V1_.jpg"
    },
    {
        "movie_id": "tt0172495",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2628367897/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTU1NTQ0OTkyNF5BMl5BanBnXkFtZTgwMTQzMjIwMDI@._V1_.jpg"
    },
    {
        "movie_id": "tt0407887",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2760573209/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzgwYWQ4NWItZjc3MC00Y2YyLWI2ZDgtMWE3ZjQxZDA2NzMyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1675434",
        "trailer_url": "https://www.imdb.com/video/imdb/vi59285529/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjk3MDQyMjk4NV5BMl5BanBnXkFtZTgwNTIxNjU0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0482571",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2885334553/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTkzMzMyNzE0NV5BMl5BanBnXkFtZTgwMDU4NDM0MDI@._V1_.jpg"
    },
    {
        "movie_id": "tt0034583",
        "trailer_url": "https://www.imdb.com/video/imdb/vi6095897/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzU0NDI1NjA1MF5BMl5BanBnXkFtZTcwMzM1MTgyMw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0064116",
        "trailer_url": "https://www.imdb.com/video/imdb/vi239075865/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmE1YzU4MTUtZmVmNS00ODZlLTk1YTQtZDU4NWQ3MDliOTZiXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0047396",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0095765",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2800655897/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZDU5YmU2MjgtMGU1OS00YWE0LWE2NGEtZmVmZTM1YjQzNjY2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0078748",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1497801241/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTc4OTYzNjc2MV5BMl5BanBnXkFtZTgwNDA2MzIzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0078788",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3543773721/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZDBmNDMwNjctODIzNS00MzgxLThhYmItNjcyNzQ0ZjI3NzE3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0209144",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1368785177/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNGRiZjk4YTEtYzgwYi00NTU2LWJjMjktMmQ0MjJjNGYzODMyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0082971",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3747396377/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOGFhNTAyYjMtNGJlNi00NWFmLTllNTgtYzdhZjE5NmU4MTQ4XkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg"
    },
    {
        "movie_id": "tt0032553",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3851590681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzFmNDRjZjAtN2M4NS00NGNmLTkxZTItZGE4Mzc2YWI5Y2U0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1853728",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2291574553/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzU5NzM4OTQxNV5BMl5BanBnXkFtZTgwOTQ5NjU0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0405094",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0050825",
        "trailer_url": "https://www.imdb.com/video/imdb/vi763627801/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzY3ODE0ZmQtNTE3OS00NmNjLTg5MmMtNDI0Y2VlNTUxYjU3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0043014",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2388460569/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjIwMTI5Nzc2M15BMl5BanBnXkFtZTgwODcyMDczMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0910970",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2192703769/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTc2Njc2MTYyN15BMl5BanBnXkFtZTgwMzcwNTczMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt4154756",
        "trailer_url": "https://www.imdb.com/video/imdb/vi528070681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjJiZTcxYzEtODFlZi00M2UzLTg5NTgtYWMxMGNkMWJiNmRjXkEyXkFqcGdeQXBrZWVzZXk@._V1_.jpg"
    },
    {
        "movie_id": "tt0051201",
        "trailer_url": "https://www.imdb.com/video/imdb/vi421183001/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNTM2MjYzMjAtZjI5MC00YTI1LWI2MzAtMWFlNDc2OTU1MTRiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0081505",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1476002073/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMGUxZWVmODQtZTRlOS00ZjM0LTkxZDUtZTQxYTBmYzAxNWU3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt4633694",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1489877529/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZmNmMjk4NGMtMWY1Mi00ZjM5LWIxNzMtNDg2YjUxYWRmNTNmXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg"
    },
    {
        "movie_id": "tt0057012",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3114467609/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjY2ZjExZDMtYjk0Zi00MmNmLWFlZTAtZmZjYzBlOTk0YjRlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0119698",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2563293465/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTY3NTdhYmMtNzYwMC00Mzg0LTk3YjYtZmZkZWQxNDkxYjY2XkEyXkFqcGdeQXN3aWZ0dw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0364569",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3130917145/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTNmNTZjMDgtYWMzMC00ZWUyLTk4ODYtMTA5NTYwNjU5ZmEwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt7286456",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1723318041/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTU0ZGVmY2MtMTM1OS00YmNlLWE1NGUtMGYyMjI1MjY1NWUzXkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    {
        "movie_id": "tt5311514",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1705097753/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTU2ZTAwZDctZjFkMy00ZGM0LTgzMDUtMGFkMDJmZjM1OTliXkEyXkFqcGdeQXRoaXJkLXBhcnR5LXZpZGVvLXVwZGF0ZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt2380307",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4249729305/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZmVmZWZiZDktYWViMS00MzM4LWFjYWQtYjU1ODgwNGQzNWVjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        "movie_id": "tt1345836",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2376312089/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTM2MjAxODE2MV5BMl5BanBnXkFtZTcwMDQ3ODgwOA@@._V1_.jpg"
    },
    {
        "movie_id": "tt0090605",
        "trailer_url": "https://www.imdb.com/video/imdb/vi368744473/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTUxNTQ1YzItYzVmNS00YWEzLTljNTEtYWJkZTVlMjJlZmQ4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0087843",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2777395225/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BM2FkYzkxNDctNTFhZi00M2Y2LTg1MzUtYTFlMTU2NzVmMmJlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt4154796",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2163260441/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOThlNjdhZmQtNzlkOS00M2VjLWI0ZjUtZDExZDI1MjRhZGFkXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt8267604",
        "trailer_url": "https://www.imdb.com/video/imdb/vi234273305/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDUwZWI4NzgtMGMwYi00NWQ5LWI0MTgtYTU0MGZjODljYTliXkEyXkFqcGdeQXRoaXJkLXBhcnR5LXZpZGVvLXVwZGF0ZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt0082096",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2055707673/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzBiOWYyYmItNGYzNC00MDljLWExZDYtZDAzM2U3YTZmZDE2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0057565",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2921184793/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDhkZmQ2YjYtZmVlOS00Njk3LWIzMjItM2M1ZWZjYmZmZjhmXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt1187043",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3086596889/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTVmZDgxYjQtODk5Ni00OTJlLTgxZjItZGNjNDFmOTYzYzNlXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0114709",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2052129305/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjAwOTYzODExMF5BMl5BanBnXkFtZTcwNDYyNjc4Mg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0169547",
        "trailer_url": "https://www.imdb.com/video/imdb/vi788506137/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTU5NDcyNTgzNl5BMl5BanBnXkFtZTgwNTMwNzU0NzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0086879",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2535496985/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDJiOTBmMTctNGRkYS00MjJjLWFlZTAtNTg4MjRiZDQ4ZWY1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0112573",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2874063641/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZmIyZmUwMjgtMjU4OC00MDgxLWIxZWEtODM4NjcwZTJjYTVkXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0361748",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3738173977/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTY2MzMzMTMyOF5BMl5BanBnXkFtZTgwNzA3MTEyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt8503618",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3591880217/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTg4ZDllYWUtYzJkMS00OWYxLWE2ZTMtODcyM2VlN2U5ZmQ5XkEyXkFqcGdeQWpnYW1i._V1_.jpg"
    },
    {
        "movie_id": "tt0119217",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1575984665/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzA4ZTY4YWItY2JkMS00NjQ1LTg4MDQtM2NkNWQ2ZTU5YmYxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0086190",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2297825561/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWU5ODdhZjItZGE3NC00ZjliLThiYWYtMDgyZGU2YjU0MDhkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0062622",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2674767897/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZGJiOGEyYWQtNWYyMC00MWRiLWIzMzMtNTMxNjVlMGEwZWM3XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0105236",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3028484377/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjQxMDNkYTEtNzNlYi00OTU2LTg3ODMtMjg1MDUxZmIxYTFjXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0091251",
        "trailer_url": "https://www.imdb.com/video/imdb/vi129958169/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMzk2ZTJiYTUtYTA0My00ZTQzLWI3ZDUtYWI1OTVjNjU4OTcwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0022100",
        "trailer_url": "https://www.imdb.com/video/imdb/vi605863449/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTQzYjRhZGYtYmJiYi00Njg1LWJmOTctOGM0OTcyNTZmOTBiXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0986264",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1834943001/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZjU1NThkYzgtNDFiNy00YmJjLWI4NGQtNmM2YjA3ZTRhM2VlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0052357",
        "trailer_url": "https://www.imdb.com/video/imdb/vi216072473/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDZkMDVhYTMtNzZiZS00YTYwLTk5ZmEtNmJmNGVjZDg2ZWM5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0033467",
        "trailer_url": "https://www.imdb.com/video/imdb/vi568630553/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTc1NDczMzc0MV5BMl5BanBnXkFtZTgwMDAyNTkyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt2106476",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2244519449/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjIxNTk2MTU1OV5BMl5BanBnXkFtZTgwMjY0MDAzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0180093",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2156069145/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzFmMzRmMjQtOGNiZS00YjdjLThhNTUtM2M1YzI0NDQ1ZTcyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0045152",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2086470681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjE2Mjc0OTI3NV5BMl5BanBnXkFtZTcwNTYxMjgyMw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0053125",
        "trailer_url": "https://www.imdb.com/video/imdb/vi473956889/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYmVkYmFiYzgtYzgzNi00MDJjLWE4NTMtNjFjMjU4YzQ2OTE1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0338013",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2292515097/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTA4YjQ5ZjEtMGQ4Mi00NWExLTkxMGQtNzAwYzVmNTU1ODJjXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0044741",
        "trailer_url": "https://www.imdb.com/video/imdb/vi626900505/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTg4OWJkNjMtM2Y0Mi00MzQ5LTk3Y2YtZWMwNGUyOTIyNGVjXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0040522",
        "trailer_url": "https://www.imdb.com/video/imdb/vi36354073/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOWE4NmZlMDAtNTBjZi00NDc0LTkyN2UtYTcwZmViYTFmNTEwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0056172",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1481310233/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjEyNDY4OTA5Nl5BMl5BanBnXkFtZTgwODg3MjQyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0012349",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0093058",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3225663513/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNGU0ZmYwNmUtMzc2Mi00ZjYxLWE2MjctY2Q1NjE1NmZiOTJiXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt5074352",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2094904857/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTk1Nzg3OTI3OF5BMl5BanBnXkFtZTgwNTMyNzI3MDI@._V1_.jpg"
    },
    {
        "movie_id": "tt0053604",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt1255953",
        "trailer_url": "https://www.imdb.com/video/imdb/vi722049561/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTczNDY5MDU5MF5BMl5BanBnXkFtZTgwNTM0NjkyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt10272386",
        "trailer_url": "https://www.imdb.com/video/imdb/vi279101721/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDA5MmY1NDQtYzM5Ni00OTFlLWFlMjAtNzkxZDdlMTY3ZTUzXkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    {
        "movie_id": "tt0017136",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1050609177/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODU3NjA0NDk0N15BMl5BanBnXkFtZTcwNjg2MTU2Mw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0036775",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2244780569/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjY0YzAzMTktNTIxOS00MGNkLWI0MGEtOWQ3OTRmNDY1Y2FmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0066921",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4030506521/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTI1OTgxOWQtYjFiMS00MDkxLWI4ZGItN2Q0ZWM3ZTNhZmIxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0075314",
        "trailer_url": "https://www.imdb.com/video/imdb/vi474987289/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMzJhZTNmOTQtN2E5Yy00OTc3LTg2ZjctNGQxNjRkMTZmZTRkXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt1832382",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2758057497/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDMzODU0MjAyM15BMl5BanBnXkFtZTgwNjAwMDQzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0070735",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2717122841/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjM5ZDllM2QtZjg2MS00NjA1LWE2ZTEtNmU2MTBkM2U2MDNhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0086250",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3939802137/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZmJlYTQ1YWEtNGRkOS00NmZmLTkyNDItN2JkMWUzMGZkYzVhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0048473",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3114774553/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTg1OTg5NTYxN15BMl5BanBnXkFtZTgwNDA4MjY1NTE@._V1_.jpg"
    },
    {
        "movie_id": "tt0208092",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1558577433/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOGU4YzdkNmQtMjJjMS00MDA4LTkwYWUtYjNiNDNhMDMzZDcwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt8579674",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4095655705/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMGQ0N2Y3MzQtNWVhYi00OWYwLWFlZmQtYTkyOTliYzI4YzJmXkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    {
        "movie_id": "tt0211915",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1406515737/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTc2ODQwNTEtNjk1ZS00Y2MwLTk4OWQtZWQ1OGYxYjI0MmM3XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0056592",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1222941977/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODU2MTIxNTE0NF5BMl5BanBnXkFtZTcwMjI2NzM4NA@@._V1_.jpg"
    },
    {
        "movie_id": "tt0435761",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3676898329/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTAyNDYwMjU3NTVeQTJeQWpwZ15BbWU4MDY5NDcwMjMx._V1_.jpg"
    },
    {
        "movie_id": "tt0059578",
        "trailer_url": "https://www.imdb.com/video/imdb/vi773831705/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTkyNjZlNDctYjFmZS00ZjkxLWJjMjctYWQyMDI1NzNmZDYxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt1049413",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2557280793/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjE4NTQ0MTM3M15BMl5BanBnXkFtZTgwMDY1NDgyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0097576",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2007669529/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjA0OTY4N2ItMGRlMi00MTNiLWE2NmMtM2VmYjExYzcwMTFhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0113277",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0119488",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1124073497/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2VlMDk1OTQtODY4Ny00ZGMzLWI4MWUtZWMwOTBmZjE2YTdhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0055630",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0089881",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3567629593/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmVjY2Q5YjctYzg4NS00N2JhLTk2ZmItZWQwZDhjODViNWU3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0095016",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3895704089/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZDViZDAzMjAtY2E1YS00OThkLWE2YTMtYzBmYWRjMWY0MDhkXkEyXkFqcGdeQXRzdGFzaWVr._V1_.jpg"
    },
    {
        "movie_id": "tt0042876",
        "trailer_url": "https://www.imdb.com/video/imdb/vi240959001/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjQ0ZThkZDAtM2Y3Ny00ZDNlLWI3NDktOWJkNDNiOTJhMTgzXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt15097216",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt6966692",
        "trailer_url": "https://www.imdb.com/video/imdb/vi824752921/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZDY3Y2FlZjUtOTE0Yi00NmM4LTg2ZDMtMGE5YWI4NjY1ZWNlXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt0363163",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0071853",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3159408409/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjg0NzFhY2UtNmRjMS00OGIwLTg1OTAtNjZkMDY3ZDFkZmU1XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0042192",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2863989017/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2U4MzM3ODItN2EzMi00NTY5LTgyYWUtYWQyZmViNDI2Y2IyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0053291",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2371683353/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTQyNjEzMzIzOV5BMl5BanBnXkFtZTgwNzE0MzQzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0372784",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2992219161/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDNjZDgzMmUtYTJkNS00ZDRlLWI5ZWUtNWJiYmEwNjFjZjc4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0105695",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3445406489/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTRmNmQ1ZDQtNWJjZC00ZWFiLWE3OGEtNTQwMjVkMmRjNjYyXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0118849",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2901319193/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTZhZjE2MjMtOTMwOC00NTNmLWFjMzAtYjM1ZjJmNThkMjFjXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0347149",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3502817561/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BM2YwMDUwOTQtOGViMS00NDRiLTk4YWQtMzdjNzk0MTQyY2M4XkEyXkFqcGdeQXN3aWZ0dw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0993846",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2312218649/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjE1OTQ5NTA4NV5BMl5BanBnXkFtZTgwODI5NTI1MDE@._V1_.jpg"
    },
    {
        "movie_id": "tt0055031",
        "trailer_url": "https://www.imdb.com/video/imdb/vi296224025/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjFjMGQ4MjQtYTI5YS00NjczLTliMTAtMzBjMTA0MTRkYjg1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0057115",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1130535193/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmIyZWRiY2ItNWRiNi00YTdjLTk4MGUtMjAxOGNhMzFmMmMyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0469494",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1341980953/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmRhOWY5N2EtYzk0NS00ZTFlLTk4MTktMzdhYWM5OGFmMDM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0112641",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1035796761/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDc2ZmYxZjYtMzZjYi00Y2U2LWE0MzMtZjkwMTQ1OTlkMTgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0040897",
        "trailer_url": "https://www.imdb.com/video/imdb/vi567346201/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2Y3YTdlYjEtMzM0ZC00ODZkLWEzODgtYWNiNjU4M2IzOTk3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0457430",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1876343321/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWQzZWZkMGYtNGZkOC00YzlkLTk5MTEtYjQzNzJmY2NkMGRjXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0268978",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1801239321/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTNkYzBiMTgtOTRkOS00ZTAyLTkyZjItMWY0YjE5MjJhYzRiXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt1305806",
        "trailer_url": "https://www.imdb.com/video/imdb/vi100645401/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmY2NmFhYWMtMThmYi00ZjExLWI5NGItOWEwOThkMjAwYmNmXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0081398",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3633616921/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDY4ODAyNjgtMWY1OC00NzgwLWJjYmItYmY4NzVkYzE0MDA0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0071411",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3516989721/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODdmYTM1MjctYTg0Mi00MGUxLTk5MDUtOWM4MjM4MGY3MTY1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0071315",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1220411673/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZjY0NzViNDYtMzQ1My00NTlhLWJjYzEtNTNhNjZiZDczN2VlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0096283",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3871916313/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzcwY2E2YTItMjFkZS00OTdjLTkyZTQtOTMxYzc3MGYyNmFkXkEyXkFqcGdeQXN3aWZ0dw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0120735",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2274558233/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTYyMzdmNTUtMmMxMS00NTFmLWFjNzItMzAxNDVlZThkZGEwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1130884",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4064281/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjAzMTg4NTU2N15BMl5BanBnXkFtZTgwNjEwOTYzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0477348",
        "trailer_url": "https://www.imdb.com/video/imdb/vi145883417/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTc3ODk1NTY3NV5BMl5BanBnXkFtZTgwODE3NzIyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0015864",
        "trailer_url": "https://www.imdb.com/video/imdb/vi70820889/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNGRlYWIwZDItNzRjZC00MTk1LWEyM2YtNTIxYmE4OWI3MzcxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0046912",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3634430233/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTU3NDc3NDUtNDhkOS00ZGMyLTg3MTktYzE4MGVhNWVkMDU5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0084787",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2298151193/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzBhZmNmYzgtMmZkMC00ODYxLWJiYjctOGFkOTYwMWZhZDk4XkEyXkFqcGdeQWpvaG5oYXJ0._V1_.jpg"
    },
    {
        "movie_id": "tt0050976",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt5027774",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3585980441/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTUxMzJjNDEtNzI3MS00OWFkLTliZjYtYjc3ZTZiMDc2YWZhXkEyXkFqcGdeQXVyNzQ0MDUyMzg@._V1_.jpg"
    },
    {
        "movie_id": "tt4729430",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3213606681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOWYxMTJkYTUtOTVhZi00OTM0LTg3YjctNDIxMmI4ZTAyNjA1XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0080678",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1763229209/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjYyMzMwMmMtZTI1My00NGFmLTllMmEtNTRjOGFmNzJmZGY3XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0167404",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1906613529/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOGViM2JkYTItZGU2ZC00ZGFlLWJlNDEtNDg5MTMzODBmZjZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0050986",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0120382",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1878327577/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNjc5MGY5MTctNDE3OS00OWQ4LWFhYWQtNDc0NTBmYjFiNDM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0107290",
        "trailer_url": "https://www.imdb.com/video/imdb/vi177055257/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjE2NzI2MTg2Ml5BMl5BanBnXkFtZTgwMzc2MzIyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0041959",
        "trailer_url": "https://www.imdb.com/video/imdb/vi992655385/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMWUxNTQxYzAtMWFiMC00YTFiLTlmZTgtNzBmMjhmNjg5OWI3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0353969",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1302834713/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDA2NzUxOTI4M15BMl5BanBnXkFtZTgwOTA5MzM3MzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0434409",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4276093209/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZWVkNmQ2ZjktZTU1My00ZTIyLWIzMTctZmEzNjQ0NTM5YzM2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1160419",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3049046297/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWEwOGM1M2YtZmRiYi00MzAzLTg2NGYtOTU3NDYxNjE3YjZkXkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    {
        "movie_id": "tt0083658",
        "trailer_url": "https://www.imdb.com/video/imdb/vi531759385/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjQwOTM1Mjk2OF5BMl5BanBnXkFtZTgwODc5NzY3MjI@._V1_.jpg"
    },
    {
        "movie_id": "tt0117951",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2148899865/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOGRmMWQxNTItNGQ5NC00OTY4LTgzZWUtNDEyMmY4OTFhM2EyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt2096673",
        "trailer_url": "https://www.imdb.com/video/imdb/vi203730969/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjAyNDg5MjEwMl5BMl5BanBnXkFtZTgwODQyNDM5NTE@._V1_.jpg"
    },
    {
        "movie_id": "tt0050212",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1900740633/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTEzMTU0NTUwMl5BMl5BanBnXkFtZTgwNDM0MzczMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0116282",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2228618777/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZmExN2VjZTMtMzhlNi00NDRiLWE0YzAtNDFiNjc2ZTUyZTRkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1291584",
        "trailer_url": "https://www.imdb.com/video/imdb/vi339320089/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTgzMDY4MTU4MV5BMl5BanBnXkFtZTgwMDg3NjEzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0266543",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3857627673/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYTU5OTQ3Y2MtZWVlNS00MDFkLWI0MWEtOWU3YzdhZmMyN2JiXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0266697",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3102711321/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDFjYTYwNmMtY2YwMi00YmVhLTlhOTItMWE1MmQ2N2MyMDgwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0031381",
        "trailer_url": "https://www.imdb.com/video/imdb/vi581873433/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjRjOTQ5NjYtOGM0Mi00MDBkLWE1N2MtZTRhNzg4Mzk1YjQ1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0046438",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2320022553/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTIxNGEwMTctYjgwZC00ZTMyLTk4MTMtNjA5MjQwNWMxMDM2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0047296",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1817421337/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMzQ4ODRkNTMtNWRhMC00NjhhLTlhZTMtYzFjZmI2YzZlNmZkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0476735",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt3011894",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3112877081/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTlmMDU3NWYtMGVlYS00ZDYzLWIzZjAtMWY2N2QxYTdmYTA2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0079944",
        "trailer_url": "https://www.imdb.com/video/imdb/vi370851353/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmZiMjUzN2MtZmMwZC00Mjg4LWFhMTktMjEyOWY5N2UzNWI5XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0077416",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3045785881/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmUzNDllZDctZTQxYy00NDVlLWJlYjAtOGUwNmY4OTIxOGVhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1392214",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3294275865/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTAxMDA2NTcwNjdeQTJeQWpwZ15BbWU4MDkxODg3MjAx._V1_.jpg"
    },
    {
        "movie_id": "tt2278388",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1157933593/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTgxODI4OTU3N15BMl5BanBnXkFtZTgwODgzNDMzMTE@._V1_.jpg"
    },
    {
        "movie_id": "tt0065234",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0017925",
        "trailer_url": "https://www.imdb.com/video/imdb/vi534623769/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODFmY2IzYjItMTA2NS00ZDNmLTk4MjEtMDlhYjljNDgyNjljXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0015324",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2465709081/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNGJkYTIxNmEtYjUxMC00NTA5LTg5ZTgtMjhiYmZlYzY0N2IyXkEyXkFqcGdeQWdhbWF6b2E@._V1_.jpg"
    },
    {
        "movie_id": "tt1205489",
        "trailer_url": "https://www.imdb.com/video/imdb/vi517604121/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE5MjQyM15BMl5BanBnXkFtZTgwNTc5ODIyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0060827",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1884797977/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZTIxNjBiZGYtNWE4MC00MThhLWE1ZGItMDIyMzA2MTYxNzM1XkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg"
    },
    {
        "movie_id": "tt0112471",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2797142297/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMzQ3ZTRjNGItNjFmMC00YjNhLWE5NDYtNGNjNjUwNmZiYTA1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0978762",
        "trailer_url": "https://www.imdb.com/video/imdb/vi784205081/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTk1NDgwMzk5NV5BMl5BanBnXkFtZTcwNjc0ODM5Mg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0264464",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1220346137/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZWQxM2UxZTUtMzFlZS00YTVjLWFkNzctZjQzZjMwN2ZlNTllXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0031679",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1789722905/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODk2OWM4YmQtNmU1Ny00N2ZkLThjMzctYTI0Mzc1M2UyYTUyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0107207",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0072684",
        "trailer_url": "https://www.imdb.com/video/imdb/vi247005465/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmY4ZjQ3ZGQtNDZlYS00NzhhLThhZTktN2FjNThmZDUxNzU5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt3170832",
        "trailer_url": "https://www.imdb.com/video/imdb/vi321566745/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNmY4YTFlZjktNWM0Yi00NmQ1LTg5MjQtNWQzNmRjYjdjMWZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt2267998",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1298770969/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNDMwOTk3MDI1MV5BMl5BanBnXkFtZTgwNTYzOTM1MjE@._V1_.jpg"
    },
    {
        "movie_id": "tt2119532",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2608248601/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjAzNTI5MzQ1OF5BMl5BanBnXkFtZTgwOTc3OTY1OTE@._V1_.jpg"
    },
    {
        "movie_id": "tt0019254",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2052570137/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZjk2YjJmNWQtMjVmNC00YzdmLThiNzctN2FjZDdhMWE2MzA5XkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg"
    },
    {
        "movie_id": "tt8108198",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3468409369/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BY2JlNjExYWQtODQyYi00YmFmLWFiN2UtNTJlYTkwMzNhOTBmXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt1950186",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1737539353/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZDJiMTY5MmYtOGE4NC00Mzk1LWE0NTQtM2NjY2FkZDU5ZjY4XkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    {
        "movie_id": "tt2024544",
        "trailer_url": "https://www.imdb.com/video/imdb/vi302032921/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MjI1OTI2Nl5BMl5BanBnXkFtZTgwNDMwODQ3MDE@._V1_.jpg"
    },
    {
        "movie_id": "tt0035446",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0118715",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4018733337/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZWE4NDhjMzItM2RhNC00Njk5LWEyZjQtMGY0MjEyYWQ1NGFlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0097165",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0077711",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0892769",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1158218777/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2FiZDUxZTMtMzUxMi00NzYxLTg0NzEtNzViYTY4N2Y2MWFjXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt1392190",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3047862297/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTU4MzkxNTU0OF5BMl5BanBnXkFtZTgwNzQzMTc1NTE@._V1_.jpg"
    },
    {
        "movie_id": "tt0052618",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1269283609/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOGEwNjM3NDktYjEyMS00NTVmLThlMDktN2Y2ZmNkODYwZjJjXkEyXkFqcGdeQXRoaXJkLXBhcnR5LXZpZGVvLXVwZGF0ZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt1201607",
        "trailer_url": "https://www.imdb.com/video/imdb/vi128621593/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODcwODM5NTcxOV5BMl5BanBnXkFtZTgwNjA4MTMyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0405159",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4217158425/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2UxNmVkMzQtZGMyNS00N2VkLWJlZGItOWJiOTNkZWY3MDNkXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    },
    {
        "movie_id": "tt0046268",
        "trailer_url": "https://www.imdb.com/video/imdb/vi508608281/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNWU5Zjk4MDAtZDM1Ni00YzJmLTkyZTUtYjVhN2VjNzZmOGVhXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt4016934",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3452614681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOWI2NDk5ODktNWQ3Zi00N2RkLWEwZWYtYTMyYWNmOGIyN2FkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0092005",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2284829721/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzY1NmQ5YWUtMmU2OC00MzQ0LWE4YmYtYTFmNWM2ZmUxYWY3XkEyXkFqcGdeQXRoaXJkLXBhcnR5LXZpZGVvLXVwZGF0ZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt0074958",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2333982233/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNGZhZWE0MWUtMWVkZS00YWJjLWIzZGItNzNlNjY4M2JlMzhmXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt3315342",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1946727961/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNzU3NmY1NTktOTY5NC00NzY0LTk1YzUtYzBmYWFhNDhiMDM2XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
    },
    {
        "movie_id": "tt1954470",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1754775321/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMzYxZTFkOWEtZGJiMy00MDcwLTk0OWMtYmUzNGFjNmMxMTQyXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0061512",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3936093721/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWI1N2MwOTQtNmYyMC00ZDQ0LThjMWYtOTE4ZTI4YzZmZTNiXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1028532",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2296906777/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMWM0YmRjMjMtNzRhMS00ZDhjLWJmZDMtMWM0OWU4YTI3Yzc5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0113247",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1231338009/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYzhmYTNlMTctZDE2Ny00OGMxLTgzNzctZDNiYzY5ODNiMjU5XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0053198",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt5323662",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2075180825/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODk3ODE3MjAtMDAzZS00YjIyLWE1ZTAtYjU1NjE4ZGU2ZTc3XkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg"
    },
    {
        "movie_id": "tt0091763",
        "trailer_url": "https://www.imdb.com/video/imdb/vi212245529/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMDAxOWViMmYtMmI2ZC00YTA0LWIxMzAtNjBmMjgzMTAxN2ViXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1895587",
        "trailer_url": "https://www.imdb.com/video/imdb/vi4025725465/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTc2ODAxMzQzOV5BMl5BanBnXkFtZTgwNjA4NjkyNzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0198781",
        "trailer_url": "https://www.imdb.com/video/imdb/vi518890521/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BODc5NTE4OTI3OF5BMl5BanBnXkFtZTgwNDQ4NjMyMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0032976",
        "trailer_url": "https://www.imdb.com/video/imdb/vi110100761/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZDhmZGQ3NzMtNDgyYy00NDQ5LTk0MzUtMDc5OGY3NGEyYjFhXkEyXkFqcGdeQWptYw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0079470",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3075522329/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjVhZDNmN2UtMWRkOC00Y2NlLWEyNjktYzE5OGRjNTZiZGFjXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0395169",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0116231",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0118694",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2535307289/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BN2NjNjYyMzYtOGNkYy00YjRkLThiN2QtNGIyYmQyNGVlMWU1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt1979320",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1998301465/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTUyNzA0MzkyNl5BMl5BanBnXkFtZTgwODQxNjAzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0758758",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1051656473/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTViZjU2OTUtOWQwNS00NGY3LTljMjMtZjZjZDgxYmE1MGFmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0075148",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2997093657/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYjdiMDY4MjAtZTMzZi00NjIyLTk4N2MtN2I0ZTNjZTk3MjZlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0245712",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2171189785/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BZGI5M2EzNDMtYmQ1My00ZDBmLWFiODEtYWZiOTkyOWVkM2UwXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0087544",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3336503577/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTU2Yzk4ZGEtNzIwMi00NDU0LTk4NTMtYjcxOTNkOWE0N2NmXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0060107",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2806824473/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNTkyNTE5ODctZTYyMy00MmQzLThiNmYtNzQxZTBiODI4N2Y2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0025316",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3410886681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTc1NTEzMjI5MF5BMl5BanBnXkFtZTgwMTM4ODYzMzE@._V1_.jpg"
    },
    {
        "movie_id": "tt0381681",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2813919513/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOWVkNDNiNzMtN2VkNS00YjAwLTgzZjEtMTM4NmRkNTEyMTU5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0169858",
        "trailer_url": "https://www.imdb.com/video/imdb/vi883818777/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNWNlMjdmZDQtZjg3ZC00YmI3LTg5ZGUtMTU2YjM2NDNiNGEyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0083922",
        "trailer_url": null,
        "thumbnailUrl": null
    },
    {
        "movie_id": "tt0058946",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1365680665/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMTQxNTQwOTMzOV5BMl5BanBnXkFtZTcwMzQxOTI5Nw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0050783",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1789181465/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMmJlNDAyYjYtM2MwMC00MmJjLTgyNWEtM2YwM2VjYmI2N2NlXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
    },
    {
        "movie_id": "tt0093779",
        "trailer_url": "https://www.imdb.com/video/imdb/vi1571095833/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWYwM2IwMDEtZTgxOS00N2JhLWIzMmMtOTBiZTlhZGFhZjgxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0087884",
        "trailer_url": "https://www.imdb.com/video/imdb/vi2557478681/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMWM1YzNhZTktNjliZS00YzNkLThjM2YtMzk5NmViMTQyMmZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt0111495",
        "trailer_url": "https://www.imdb.com/video/imdb/vi3436160025/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNTBhODI2MTQtY2MyMi00NDY5LWI3YjYtODk3NjJhMmNkOTQ2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
    },
    {
        "movie_id": "tt7019842",
        "trailer_url": "https://www.imdb.com/video/imdb/vi639417113/imdb/embed",
        "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNWVlODk4M2MtZjdiOC00NWZhLThjOGMtZWYzMjQzMzQ0NTkwXkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
    }
]

const newMovies = movies.map((movie, i) => {
    if(movie.movie_id === trailers[i].movie_id) {
        return Object.assign(movie, trailers[i])
    } 
    return movie;
})
export default newMovies;
// console.log(newMovies);




