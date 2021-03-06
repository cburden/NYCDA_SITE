// JavaScript Document

(function(){
	
	var app = angular.module('alumniData', []);
	
	app.factory('alumniList', function($http){
		
		return {
			'alumn' : function(){
				return [
					{
						"name" 	: "Shelley Hennig",
						"show" 	: ["When Beauty Meets Talent"],
						"pic" : "alumni_SH_thumb.jpg",
						"link" : "shennig.html",
						"bio"	: "New  Orleans native Shelley Hennig is widely famous for her status as Miss  Teen USA 2004. While her dazzling allure got her the crown, her passion  for acting and incredible  talent got her the ticket to the New York Conservatory for Dramatic  Arts. She learned here how to channel her undying love of acting and her  drive to become an actress and exploit efficiently her natural beauty.  This, with the help of our Artistic Director  Joan See, landed her the role of wild child &ldquo;Stephanie Johnson&rdquo; on the <em>Days of our Lives</em>,  for which she was nominated for a Daytime Emmy Award in 2010. A swiftly rising star, Shelley effortlessly transitioned to primetime as  &ldquo;Diana,&rdquo; the sweet-natured  coven leader determined to use her magic for good, in the new CW drama, <em>The Secret Circle</em>, which premiered on September 15th on the CW. </p><p><em>'NYCDA turned me into a confident, working actress, something I never thought was possible! Their amazing faculty gave me the tools, knowledge, and experience I needed to get out into the entertainment world and not just do well, but stand out. I truly believe I would not be where I am today without NYCDA'</em> &nbsp;Shelley Hennig"
					},
					{
						"name" 	: "Matthew Fox",
						"show" 	: ["Dr. Jack Shephard"],
						"pic" : "alumni_MFox_thumb.jpg",
						"link" : "mfox.html",
						"bio"	: "Fox played the role of the dedicated yet troubled surgeon, Dr. Jack Shephard, on <em>Lost</em>. Fox was nominated for a Golden Globe, won the 2005 Satellite Award, and shared the 2006 Screen Actors Guild Award for 'Outstanding Performance by an Ensemble in a Drama Series', for his role in <em>Lost</em>..."
					},
					{
						"name" 	: "Josh Sussman",
						"show" 	: ["Shining on 'Glee'"],
						"pic" : "alumni_JS_thumb.jpg",
						"link" : "jsussman.html",
						"bio"	: "Josh Sussman's career took off after his 2004 graduation from The New York Conservatory for Dramatic Arts..."
					},
					{
						"name" 	: "Scott Holroyd",
						"show" 	: ["A Series of Successes"],
						"pic" : "alumni_SHo_thumb.jpg",
						"link" : "sholroyd.html",
						"bio"	: "In July 2001, Scott was cast in the role of Paul Ryan in the CBS daytime soap opera As the World Turns. After two years, he left the show to pursue other opportunities and moved to Los Angeles a year later..."
					},
					{
						"name" 	: "David Del Rio",
						"show" 	: ["En route to stardom..."],
						"pic" : "alumni_DD_thumb.jpg",
						"link" : "ddelrio.html",
						"bio"	: "After starring in Nickelodeon's comedy series, The Troop, 2009 graduate David Del Rio hasn't forgotten his roots at the New York Conservatory for Dramatic Arts. He recently took time to dash off an update to us..."
					},
					{
						"name" 	: "Ser'Darius Blain",
						"show" 	: ["A bright star shines brighter"],
						"pic" : "alumni_SDB_thumb.jpg",
						"link" : "sdblain.html",
						"bio"	: "Ever since graduating NYCDA in 2009, Ser'Darius has put his talent to work. Within the span of 2 years, he has been featured in numerous print ads for Chevrolet & Verizon, booked commercials for Kodak and TIAA-CREF. He is starring in the 2011 remake of <em>Footloose</em> as Woody."
					},
					{
						"name" 	: "Gabriel Womack",
						"show" 	: ["From Montana to Hollywood"],
						"pic" : "alumni_GW_thumb.jpg",
						"link" : "gwomack.html",
						"bio"	: "Starred in feature film- <em>Copperhead</em> with Stephen Brand from Scorpio King (airing on TV 4-5 times a month). Future films that will be coming to theatre are <em>Hotel California</em> and <em>White Wall</em>."
					},
					{
						"name" 	: "Mike Havok",
						"show" 	: ["Hard Work and Success..."],
						"pic" : "alumni_MH_thumb.jpg",
						"link" : "mhavok.html",
						"bio"	: "Tucson native, Mike Havok, came to New York City to attend the New York Conservatory for Dramatic Arts to pursue his dreams of becoming an actor. While he was still studying here at NYCDA, Mike held internships at Stark Naked Productions and Joan Lynn Casting... "
					},
					{
						"name" 	: "Liz Nichols",
						"show" 	: ["Always in the News..."],
						"pic" : "alumni_LN_thumb.jpg",
						"link" : "lnichols.html",
						"bio"	: "Liz Nichols graduated from the NYCDA 2-Year Program in 2006. After graduation, she chose to go a different direction from acting, into broadcast news.... "
					},
					{
						"name" 	: "Anthony Reimer",
						"show" 	: [],
						"pic" : "alumni_AReimer.jpg",
						"bio"	: "Anthony just opened up West Florida's only professional theatre, the Pensacola Shakespeare Theatre, starring in <em>Much Ado About Nothing</em> and <em>The Complete Works of Williams Shakespeare (Abridged)</em>. He also filmed a commercial for the Long Island Power Authority, Refrigerator Recycling Program. He is currently rehearsing for Capital Reparatory Theatre's production of Abe Burrows' comedy, <em>Cactus Flower</em> which is slated for performance from October 14th-November 14th and will be directing the world premiere of Brian Watkins' <em>The Prairie Plays</em> for Wide Eyed Productions this Fall at the Under St. Mark's Theatre."
					},
					{
						"name" 	: "Bonnie Swencionis",
						"show" 	: [],
						"pic" : "alumni_BSwencionis.jpg",
						"bio"	: "2008 graduate Bonnie Swencionis guest-starred on the season 2 premiere of 'White Collar' on USA and starred in the teen.com series 'Haute & Bothered.'"
					},
					{
						"name" 	: "Daryl Williams",
						"show" 	: [],
						"pic" : "alumni_DWilliams.jpg",
						"bio"	: "Currently playing the role of David Brooks in HBO's <em>Treme</em> from the creator of <em>The Wire</em>. He also made several guest appearances in <em>Law & Order</em> and <em>Law & Order: Special Victims Unit</em>."
					},
					{
						"name" 	: "Titus Makin Jr.",
						"show" 	: [],
						"pic" : "alumni_titusmakin.jpg",
						"bio"	: "Titus is currently a recurring character (David) on Fox's hit show 'Glee.' He has acted on Nickelodeon's 'Victorious' and 'Gigantic', John Salley's, Biography Channel 'Celebrity Ghost Stories', and many short/ independent films. He also recently starred in an episode of the 'The Closer' on TNT."
					},
					{
						"name" 	: "Emma Bell",
						"show" 	: [],
						"pic" : "alumni_EBell.jpg",
						"bio"	: "Emma was considered one of the 55 faces of the future by Nylon Magazine's Young Hollywood Issue. She recently booked 4 episodes of the upcoming drama series <em>The Walking Dead</em> on AMC. She also played the lead female in the independent movie <em>Frozen</em> and made appearances in TNT's <em>Supernatural</em>, Fox's <em>Dollhouse</em> & CBS' <em>Ghost Whisperer</em>."
					},
					{
						"name" 	: "Eric Kolelas",
						"show" 	: [],
						"pic" : "alumni_EKolelas.jpg",
						"bio"	: "Eric must be our hardest working Summer Acting Training Program graduate. He has been featured in numerous commercials that include works for 'Guitar Hero - World Tour', KFC, Unison and a TV indent for BBC's <em>Grand National</em>. Earlier this year, he starred in the short film <em><a href='http://www.mosafilm.com' target='_blank'>Mosa</em> that received international acclaims and was selected in major film festivals. He recently got cast for the role of 'Duncan' in the indie film <em><a href='http://www.sparrowfilm.com' target='_blank'>Sparrow</em> which is set to open in October. Check out his <a href='http://www.youtube.com/watch?v=tXkQPZPENGk' target='_blank'>reel."
					},
					{
						"name" 	: "Clifford Rivera",
						"show" 	: [],
						"pic" : "alumni_CRivera.jpg",
						"bio"	: "Cliff plays opposite Larry David in an upcoming episode of <em>Curb your Enthusiasm</em> on the newest season on HBO. He is currently playing the role of 'Vasquez' for the Cape May Playhouse production of <em>The Dictator</em>. Clifford made numerous appearances on <em>As the World Turns</em>, <em>Nurse Jackie</em>, <em>Rescue Me</em>, <em>Mercy</em>, <em>Ugly Betty</em>, <em>Lipstick Jungle</em> and <em>All My Children</em>."
					},
					{
						"name" 	: "John-Paul Lavoisier",
						"show" 	: [],
						"pic" : "alumni_JPLavoisier.jpg",
						"bio"	: "Plays the role of 'Rex Balsom' in <em>One Life To Live</em> (536 episodes) and made appearances in <em>Gossip Girl</em>, <em>Sex And the City</em> & <em>All My Children</em>."
					},
					{
						"name" 	: "Jesse Malinowski",
						"show" 	: [],
						"pic" : "alumni_JMalinowski.jpg",
						"bio"	: "Jesse is currently shooting the new<em> American Pie</em> movie,<em> American Reunion</em>, starring Jason Biggs, Seann William Scott, Alyson Hannigan, Mena Suvari and Tara Reid. He also starred in a national Muscle Milk commercial and in the movie <em>Scare Zone</em> that will be available on DVD in July."
					},
					{
						"name" 	: "Brenton Duplessie",
						"show" 	: [],
						"pic" : "alumni_duplessie.jpg",
						"bio"	: "Brenton plays the leading role of <em>Scott</em> in the feature film <a href='http://www.privacythemovie.com'><em>Privacy</em></a> which will be released in the Fall 2011. He will also perform as <em>Chris</em> in the brand new Broadway play <em>US</em> from the producers of <em>Avenue Q</em> and <em>In the Heights</em> that is slated for 2012."
					},
					{
						"name" 	: "Chris Werkmeister",
						"show" 	: [],
						"pic" : "alumni_CWerkmeister.jpg",
						"bio"	: "Chris was cast as the lead in the new Denny's All-Nighter Commercial. He appeared as the lead rock star alongside friend Richard Jordan. See <a href='http://www.youtube.com/watch?v=38XkMNLxDDs' target='_blank'>commercial</a>"
					},
					{
						"name" 	: "Ryan Brannan",
						"show" 	: [],
						"pic" : "alumni_RBrannan.jpg",
						"bio"	: "Ryan booked a guest starring lead role on 'Law & Order' and performed in Woody Allen's 'Central Park West'. Ryan also can be seen playing Albert' on Guiding Light, 'Otto' on All My Children."
					},
					{
						"name" 	: "Emmanuel Akintunde",
						"show" 	: [],
						"pic" : "alumni_EAkitunde.jpg",
						"bio"	: "Currently in 'Silver Shores' at the Tristan Bates Theatre in London. Played the role of Inok in 'Another Biafra' at the Cockpit Theater in London. Featured in McDonald's Flurry commercial for the 2nd year in UK."
					},
					{
						"name" 	: "Julio Neira",
						"show" 	: [],
						"pic" : "alumni_JNeira.jpg",
						"bio"	: "Julio was featured in two big commercials for Hellman's Mayonnaise and Olive Garden. He is also appearing in the mini series <em>We Are New York</em>. Guest star roles on 'Law & Order S.V.U.', 'Jane Pauly Show', Co-Star on 'Curb Your Enthusiasm', 'Johnny Zero'"
					},
					{
						"name" 	: "Derek Stusynski",
						"show" 	: [],
						"pic" : "alumni_stusynski.jpg",
						"bio"	: "2010 graduate Derek Stusynski's film roles include <em>Path to Prologue</em> (Best Dramatic Short and Best Director, American International Film Festival), <em>I Am Julia, </em><em>The Casting Room</em>, <em>Secret  Life, Heavy Stone, Too Hot for Some, Henry, Tango, I Can't, Everything  That Dies, Russian Roulette, Open Assignment, Autumn Meanderings </em>and <em>Just Wanna Be Friends</em>. He can now be seen as<em>Josh </em>in <em><a href='http://watchtheras.com/index.html' target='_blank'>The RAs</em> a web tv series that premiered on September 8th, 2011."
					},
					{
						"name" 	: "Tania Pilar",
						"show" 	: [],
						"pic" : "alumni_TPilar.jpg",
						"bio"	: "Tania is thrilled to have booked a recurring role on the ABC Family Series <em>10 THINGS I HATE ABOUT YOU</em> as Sophia Lamersick."
					},
					{
						"name" 	: "John DiSciasco",
						"show" 	: [],
						"pic" : "alumni__JDisciasio.jpg",
						"bio"	: "John performed in the original Philadelphia cast of Chuckleball and landed another role in an off-Broadway show, called 'So what...I'm still Standing' by Author Yvonne Bridges. "
					},
					{
						"name" 	: "Amit Patel",
						"show" 	: [],
						"pic" : "alumni_APatel.jpg",
						"bio"	: "Amit starred in <em>Survivors</em> (director Soham Mehta) which appeared last year at The Austin Film Festival. Recently featured in a Nike ad campaign and Tremens."
					},
					{
						"name" 	: "Elena Eustache",
						"show" 	: [],
						"pic" : "alumni_EEustache.jpg",
						"bio"	: "Landed a role in <em>The Informant</em> with Matt Damon. She is working on her first feature film <em>Erzebeth</em> that she wrote. Elena will also be playing the lead in an upcoming feature <em>New York Kitties</em>."
					},
					{
						"name" 	: "Kevin O'Heron",
						"show" 	: [],
						"pic" : "alumni_KHeron.jpg",
						"bio"	: "Kevin shot a commercial for Crowne Plaza Hotel. He also landed a major supporting role in an independent feature <em>Cold Blue Eternal</em> which was released in July 2010."
					},
					{
						"name" 	: "Katy Kraus",
						"show" 	: [],
						"pic" : "alumni_KKraus.jpg",
						"bio"	: "Katy has become a series regular on the pilot '<em>You're So Dead</em>' for MTV alondside appearing in Multiple national commercials, including Time Warner Cable, Arby's, Cheetos, Honda. She was also featured in <em>Byron Phillips: Found</em>."
					},
					{
						"name" 	: "Patrick Stoffer",
						"show" 	: [],
						"pic" : "alumni_PStoffer.jpg",
						"bio"	: "Recently appeared in the off-broadway production of the <em>Columbine Project</em> as the character of Jake Webb and understudied the lead role of Eric Harris. "
					},
					{
						"name" 	: "Steven Tylor O'Connor",
						"show" 	: [],
						"pic" : "alumni_SOconnor.jpg",
						"bio"	: "Steven has been seen in the Off-Off Broadway Productions of <em>Bad Fish</em> and <em>Noise</em>. He also recently finished producing and directing a play he wrote entitled <em>Lifelong Lie</em>."
					},
					{
						"name" 	: "George Carpenter",
						"show" 	: [],
						"pic" : "alumni_GCarpenter.jpg",
						"bio"	: "George has been in the Off-Off Broadway play <em>Happy Hour</em> and his first SAG short film titled <em>Metal Gear</em> playing Jonathan Slater."
					},
					{
						"name" 	: "Amanda Elizabeth Sawyer",
						"show" 	: [],
						"pic" : "alumni_AESawyer.jpg",
						"bio"	: "Amanda was cast as the lead in the SAG Independent <em>Imprisoned</em>, and featured in the comedic short <em>Speedy Pantaloons</em> by award winning director Susan Burns. Amanda is also a writer and her work was recently produced and performed in <em>The Complete Mixed Bag Show</em> at The Richmond Shepard Theater."
					},
					{
						"name" 	: "Emily Rupp",
						"show" 	: [],
						"pic" : "alumni_ERupp.jpg",
						"bio"	: "She has just finished an Off Off Broadway production where she wrote 5 original pieces and we will  be performing at the United Nations for 'NYC Kids Speak Up for Children's Rights' in November 2009. "
					},
					{
						"name" 	: "Vanessa Hardy",
						"show" 	: [],
						"pic" : "alumni_VHardy.jpg",
						"bio"	: "Vanessa was in an indie feature called <em>Something Like Reality</em> and featured in a web commercial for SunTrust Banks."
					},
					{
						"name" 	: "Gabrielle Nevins",
						"show" 	: [],
						"pic" : "alumni_GNevins.jpg",
						"bio"	: "Gabrielle was featured in the first episode of  <em>Coming to Hollywood</em> that aired earlier this year. "
					},
					{
						"name" 	: "Jennifer Olivera",
						"show" 	: [],
						"pic" : "alumni_JOlivera.jpg",
						"bio"	: "Jennifer had her first art film called <em>Isle of The Dead</em> that was screened on Governors Island last year. She is also featured in <em>Step up 3D</em> which just got released."
					},
					{
						"name" 	: "Patti-Anne Ali",
						"show" 	: [],
						"pic" : "alumni_PattiAnne.jpg",
						"bio"	: "Patti-Anne co-directed a production of <em>The Tempest</em> for Ringplay Productions and filmed <em>Stay Alive(Tribes)</em> which aired on MTV. "
					},
					{
						"name" 	: "Quentin McCuiston",
						"show" 	: [],
						"pic" : "alumni_Quinetin.jpg",
						"bio"	: "Quentin filmed <em>Under Jakob's Ladder</em>, an independent project. He also has a comedic web-series at <a href='http://learningwithlawrence.com' target='_blank'>learningwithlawrence.com</a>"
					},
					{
						"name" 	: "Jayne Elaine Buelle",
						"show" 	: [],
						"pic" : "alumni_JBuelle.jpg",
						"bio"	: "Jayne worked on the  <em>The Ex-List</em>, <em>Fashion House</em>, and several MOWs.  She also worked on the pilot for the new FX series <em>Terries</em>."
					},
					{
						"name" 	: "Natalie Schneider",
						"show" 	: [],
						"pic" : "alumni_NSchneider.jpg",
						"bio"	: "Natalie recently shot <em>Differences Between Men And Women</em>, a short film that has been promoted at the major film festivals this year and was also a featured customer on a 'Subway' commercial."
					},
					{
						"name" 	: "Grant McGowen",
						"show" 	: [],
						"pic" : "alumni_GMcgowen.jpg",
						"bio"	: "Grant is currently in a show that has been chosen to feature at The One Act Play Strawberry Festival."
					},
					{
						"name" 	: "Ralph John Lucci",
						"show" 	: [],
						"pic" : "alumni_RJLucci.jpg",
						"bio"	: "R.J. booked his stage debut in <em>Too Much, Too Far, Too Soon</em> which won The Midtown International Theatre Festival 'Shorts Extension', has shot 2 short films, and is in the interactive web series <em>Lombardi Street</em> playing C.J. Lombardi. "
					},
					{
						"name" 	: "Joey Loomis",
						"show" 	: [],
						"pic" : "alumni_JLoomis.jpg",
						"bio"	: "Joey recently starred as in the feature <em>Hello My name is Linda</em>. He has previously been featured in <em>30 Rock</em>  and has appeared in a commercial for Optimum Online's 'Triple Play'"
					},
					{
						"name" 	: "Gregory Plunkett",
						"show" 	: [],
						"pic" : "alumni_GPlunkett.jpg",
						"bio"	: "Gregory shot a scene in the new Julia Roberts movie <em>Eat Pray Love</em>. He has been working on his first album with his band, The IntraWaves, as the Lead Singer and Lyricist and just finished touring with French band, Uniform Motion."
					},
					{
						"name" 	: "Stephen Hershey",
						"show" 	: [],
						"pic" : "alumni_SHershey.jpg",
						"bio"	: "Stephen performs internationally as a life-size 'Baby T-Rex' with the Advance Promo Unit of Global Creature's 'Walking With Dinosaurs'. He will also be working as an atristic director in a production of <em>Rent</em> alongside BTE and ColumbiaUuniversity."
					},
					{
						"name" 	: "Emilee Foster",
						"show" 	: [],
						"pic" : "alumni_EFoster.jpg",
						"bio"	: "Emiliee starred in  a short film entitled <em>Break Down</em> in conjunction with the Ignition Project (<a href='http://www.theignitionproject.com' target='_blank'>www.theignitionproject.com</a>) ."
					},
					{
						"name" 	: "Anne-Sophie Martin-Mondiere",
						"show" 	: [],
						"pic" : "alumni_ASMartin.jpg",
						"bio"	: "Anne-Sophie shot her short film <em>Where There is no Light</em>. She also booked a bilingual industrial for Gucci/SAI. She was also part of the Ensemble cast for Jean Genet's five hour play <em>The Screens</em> at Salem Art Works and shot her first feature film, David Winkfield's <em>Anatomy of the Lonely</em>."
					},
					{
						"name" 	: "Jennifer Spicer",
						"show" 	: [],
						"pic" : "alumni_JSpicer.jpg",
						"bio"	: "Jennifer filmed the feature <em>Asabiyyah</em> where she plays the lead character Mary."
					},
					{
						"name" 	: "Melissa Malone",
						"show" 	: [],
						"pic" : "alumni_MMalone.jpg",
						"bio"	: "Melissa was the voice of Duola in the animated series <em>Shanmao & Jimi Adventures</em> which won Best Animation in Spring of 2009 @ NYIIFVF and also as Lucy for Ride5 Media's <em>Superhero</em> animation shorts"
					},
					{
						"name" 	: "Don Money",
						"show" 	: [],
						"pic" : "alumni_DMoney.jpg",
						"bio"	: "Some of Don's feature film credits include starring roles in the indies <em>Dog and Butterfly</em> and <em>Dress Rehearsal</em>, <em>The Minority</em> with Billoah Greene and he appeared as Hank in <em>I Am Legend</em> with Will Smith. Don's commercials include AT&T wireless, The 2012 Olympics and a print campaign for <em>True Blood</em>."
					},
					{
					  "name"  : "Ray Martell Moore",
					  "show"  : [],
					  "pic" : "alumni_RMoore.jpg",

					  "bio" : "Played the lead role Faybien Allen in <em>Finding Me</em> and the sequel <em>Finding Me: Truth</em> which is set to release August 2010. <a href='http://findingmetruth.wordpress.com/' target='_blank'>www.findingmetruth.wordpress.com</a>"
					},
					{
						"name" 	: "Annemijn Nieuwkoop",
						"show" 	: [],
						"pic" : "",
						"bio"	: "directed her first feature film 'Where There Is No Light' and also starred as lead role in 'Love on Ice'"
					},
					{
						"name" 	: "Chris Van Kirk",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role in independent film 'Paint It The Color Envy'. Commercial for Kitano Hotel. "
					},
					{
						"name" 	: "Manish Dayal",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Starring in the Off-Broadway 'Rafta, Rafta...' winner of the Lawrence Olivier Award for best Comedy. "
					},
					{
						"name" 	: "Tessa Ghylin",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Class of 2000 Two Year Program Graduate. Series regular on NBC's 'Ed' and supporting in Bob Giraldi's film 'Diner Rush'. Guest star on NBC's 'Law and Order'"
					},
					{
						"name" 	: "Teddy Sears",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star in 'CSI:Miami,' 'Ugly Betty' and 'Las Vegas.'"
					},
					{
						"name" 	: "Megan Sikora",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Played Bambi Bernet along side David Hyde Pierce in 'Curtains' on Broadway.  Other Broadway credits include 'Dracula:  The Musical' and 'Wicked.'"
					},
					{
						"name" 	: "Onahoua Rodriguez",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest spots on 'ER,' 'Judging Amy,' 'Cold Case,' 'NYPD Blue,' 'The Sheild' and 'Weeds.'  Films include 'A Poor Kid's Guide to Success' and 'Pandemic.'"
					},
					{
						"name" 	: "Tania Pilar Ragland",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Booked her first audition for iCarly on Nickolodeon "
					},
					{
						"name" 	: "Michael Kevin Walker",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'As The World Turns'. Appearing in the film '4Chosen.' Yellow Book national commercial; two short films - 'The Attick' and 'Eddie'; industrial film for NASD."
					},
					{
						"name" 	: "Bethany 'Vanoy' Burnough",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Starred in 'Movin' In' with Estelle Harris."
					},
					{
						"name" 	: "Tony Bussio",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Booked national commercial for Fitness Depot running in October 08 on Canadian Television."
					},
					{
						"name" 	: "Stephen Hershey",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Plays 'Pete' in 'Treading Water'. Assistant Director of the Harmony Theater Company. "
					},
					{
						"name" 	: "Stu James",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Featured in the critcally acclaimed film 'Dreamgirls'. In the upcoming film 'Burning Sands.'  Benny in 'Rent' on Broadway."
					},
					{
						"name" 	: "Amy Tedesco",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest spot on NBC's 'Law & Order'"
					},
					{
						"name" 	: "Angelique Cabral",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Nationals for Toyota, Chase, national voiceovers for sobe and diet 7UP, and dayplayers on AMC, OLTL, and GL."
					},
					{
						"name" 	: "Jeremy Batiste",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In the films 'The Perfect Sleep' and 'Shadowboxing 2'. Also starring in the series 'Noah's Arc' and in the films 'Paranuae' and 'Guerilla'."
					},
					{
						"name" 	: "Ryan Hill",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Starring in 'The Horse, The Bird, The Monkey & The Dancer' at Red Eye Theater in Minneapolis."
					},
					{
						"name" 	: "Lillian Pennypacker",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Class of 2008. Booked a national commercial for McDonald's "
					},
					{
						"name" 	: "Samantha Leah Marulli",
						"show" 	: [],
						"pic" : "",
						"bio"	: "National commercial for Nike."
					},
					{
						"name" 	: "Donovan Sanders",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Booked a national tour with Theatreworks USA performing the children's musical 'Max and Ruby'. "
					},
					{
						"name" 	: "Tenisha Torres",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star in Law and Order SVU. Commercials for Dunkin Donuts and Ace Hardware. "
					},
					{
						"name" 	: "Don Money",
						"show" 	: [],
						"pic" : "",
						"bio"	: "2004 Graduate - Playing the character of Rob Emerson on CBS' 'As The World Turns'. You can also see him starring in the new series on fangoria.tv 'War of The Dead: Z.E.R.O.' Also appearing in the upcoming films 'The Adventures of Walter Bloom and Gallery of Fear.' Lead in the indie film 'Obsidian Mirrors.'"
					},
					{
						"name" 	: "Ashley-Brooke Silver",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Appearing in the film 'Absolute Trust.' Booked four days on 'One Life to Live' "
					},
					{
						"name" 	: "Landon LaVigne",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead in a film about the Citadel Military School called 'El Cid'. He also featured in the film 'On the Job Training'."
					},
					{
						"name" 	: "Marisa Vitali",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In You & I written and directed by Christopher J. Scott and an official selection of the Cannes Film Festival 2006."
					},
					{
						"name" 	: "Tonia-Marie Gallo",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Class of 2006 - Commercial for Chevy in the 2007 Superbowl"
					},
					{
						"name" 	: "Vicki Jeudy",
						"show" 	: [],
						"pic" : "",
						"bio"	: "(Class of 2007) In the critically-acclaimed Off-Broadway show 'Platanos and Collard Greens'. In the film 'Bottom Feeder.'"
					},
					{
						"name" 	: "Vance Bradford",
						"show" 	: [],
						"pic" : "",
						"bio"	: "(Class of 2005) - In the critically-acclaimed Off-Broadway show 'Platanos and Collard Greens'. In the film 'Bottom Feeder.'"
					},
					{
						"name" 	: "Anthony Bossio",
						"show" 	: [],
						"pic" : "",
						"bio"	: "(Class of 2000) - Played Joe Fantelli on CTV mini-series 'Would Be Kings'; National Commercials in USA & Canada for Casio Cameras & McCain's Self-Rising Pizza and for Tim Hortons; spot with Donnie Whalberg in a show called 'Runaway'.  'Instant Star' now in it's second season on CTV. Bollywood feature film called 'Look-Alike;' radio play for CBC Radio called Katy & Salvy; a play called 'Home of the Brave' at Teatron Theatre. "
					},
					{
						"name" 	: "Tony Sandrew",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Tony in 'Tony & Tina's Wedding' in Las Vegas"
					},
					{
						"name" 	: "Teddy Sears",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star in 'CSI:Miami'"
					},
					{
						"name" 	: "James Hunter",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'American Gangster' principle role"
					},
					{
						"name" 	: "Toney Chem",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'One Life to Live'; independent film 'At My Hope' "
					},
					{
						"name" 	: "Hilary Greer",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'All My Children'. Films include 'Death on Demand' and 'The Fantastic Two.'  Commercial for Capital District Physician's Health Plan, also recurring on All My Children, and Accident Investigator Under-5 for Discovery Channel, and featured in Rob Thomas Video-This is How a Heart Breaks."
					},
					{
						"name" 	: "Phillip Brock",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Off-Broadway 'Boys Just Wanna Have Fun'"
					},
					{
						"name" 	: "Lyndi Arns",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Booked a lead in an independent film 'Their Choice'; Byron LaRosa directs, Rome Productions produces "
					},
					{
						"name" 	: "Alvaro Sena",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In Cherish at Nicu's Spoon Theatre "
					},
					{
						"name" 	: "Craig DiFrancia",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Chappelle's Show' on Comedy Central, 'The Guiding Light,' 'One Life to Live' and 'Third Watch.'  Films include 'The Passionist,' 'Night Falls Fast,' 'They're Just My Friends' and 'Last Night.'"
					},
					{
						"name" 	: "Jackie Senatore",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Films:  'Corbis,' 'Get Rich or Die Tryin,' 'Sarah's Metaphor,' 'Best Regards, Love Angelina' and 'Vernerde Fiore!'  TV:  'All My Children.' "
					},
					{
						"name" 	: "Iris Almario",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'King of Queens,' 'Sex in the City,' 'Las Vegas,' 'The Young and the Restless' and 'General Hospital.'  Films include 'Smoke' and 'The Last Request.'"
					},
					{
						"name" 	: "Harrison Butler",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Playing the younger half in 'Tuesdays with Morrie' at the Processional Summer Theater there in Greeley, Colorado "
					},
					{
						"name" 	: "Mary Pat Dowhy",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Significant Others' on Bravo as well as guest spots on 'Las Vegas,' 'Scrubs,' 'Judging Amy' and '7th Heaven.'"
					},
					{
						"name" 	: "Keith Pillow",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star on 'Judging Amy,' 'The Shield,' 'Bones,' 'Dexter,' 'Nip/Tuck' and 'Terminator:  The Sarah Connor Chronicles.'"
					},
					{
						"name" 	: "Nancy Eng",
						"show" 	: [],
						"pic" : "",
						"bio"	: "TV appearances include 'Nights of Prosperity' and 'Law and Order:  SVU.' Bud Light National commercial. "
					},
					{
						"name" 	: "Marisa Vitali",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In You & I written and directed by Christopher J. Scott and an official selection of the Cannes Film Festival 2006"
					},
					{
						"name" 	: "Vivan Dugre",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Booked a 'CSI: NYC' as well as a three episode role on 'CSI:  Miami.'  She can also be seen in 'Conspiracy,' 'The Suzy Prophecy' and 'Kabluey.'"
					},
					{
						"name" 	: "Alejandra Ambrosi",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Just finished shooting 'Arriba' in Costa Rica with Joshua Marston, the director of the award-winning 'Maria Full of Grace' Halima Henderson and Mark Mallek in 'A Family's Play' with the Diversity Players of Harlem. Has also appeared in the films 'Eavesdrop' and 'Yeah No Definitely.'"
					},
					{
						"name" 	: "Yan Xi",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In the films 'Proving Ground:  From the Adventure of Captain Redlocks' and 'She's Out of My League.'  She has also appeared on 'The Wire' for HBO."
					},
					{
						"name" 	: "John Weigand",
						"show" 	: [],
						"pic" : "",
						"bio"	: "U/5 on CBS, As the World Turns, Beauty and the Beast, playing Maurice (the father & inventor) at the Broadway Palm Dinner Theatre-West in Arizona"
					},
					{
						"name" 	: "Frantz St. Louis",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Joined the Los Angeles theater production of 'Devil's Night' written by Marshall Allman (Prison Break) and Scott Haze. He will appear in the movie version of the play in 2009.  Frantz also played the role of 'Paperboy' in an episode of 'The Shield' (FX) entitled 'Rap Payback.' HBO original movie 'Everyday People' and Fox TV series 'Johnny Zero'"
					},
					{
						"name" 	: "Mike Bordwell",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In Joan's Voices at The Medicine Show Theate"
					},
					{
						"name" 	: "Megan Sikora",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In 'Curtains' starring David Hyde Pierce the Ahmonson in LA from July to September, coming to Broadway after that."
					},
					{
						"name" 	: "Ron Butler",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Television appearances include 'Dirty Sexy Money,' 'How I Met Your Mother,' 'Eli Stone,' 'Terminator:  The Sarah Connor Chronicles,' and 'Crossing Jordan.'  Films include 'True Jackson,' 'Rain' and 'Smother.' Costar 'Summerland'"
					},
					{
						"name" 	: "Brittany Palmer",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Will soon be seen in the films 'Stricken' and 'G.I. Joe:  Rise of Cobra.'  She has also been on a few episodes of 'The Guiding Light.' The role of Kerry on 'All My Children' on ABC"
					},
					{
						"name" 	: "Ashley-Brooke Silver",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Plays Rachel Marshall in the independent film 'Absolute Trust,' Harvey Mandlin, Director. "
					},
					{
						"name" 	: "James Rana",
						"show" 	: [],
						"pic" : "",
						"bio"	: "LOVES LABOUR'S LOST at The Shakespeare Theatre in D.C. the show will then  transfer to the Royal Shakespeare Company"
					},
					{
						"name" 	: "Anthony Bagnetto",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Shortly After Takeoff at Altered Stages. He will be seen in the film 'Spring in Her Step' in 2008."
					},
					{
						"name" 	: "Darbi D. Worley",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Will play the role of Jane in 'Breadcrumbs' directed by Mike Nichols.commercials for McDonalds, Verizon, Abbott Labs, zappos.com, Papa John's, Aveda, Dove Skincare; television series, 'Breaking Vegas' and 'Rescue Me.'  Most recently the new series, 'House Smarts.' Supporting role 'Breaking Vegas' for the History Channel"
					},
					{
						"name" 	: "Chris Bachman",
						"show" 	: [],
						"pic" : "",
						"bio"	: "TV debut on Love Monkey (CBS). He also appeared in the movie 'Snakes on a Plane.'"
					},
					{
						"name" 	: "Stephanie Darakjian",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest lead  on 'Conviction' (NBC). Films:  'The Time Machine' and 'Figment.'"
					},
					{
						"name" 	: "Robyn Gryphe",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Olive Oyl', lead in two 'Popeye' cartoon V/Os -- a radio spot and industrial for King Features, the original producers of 'Popeye'"
					},
					{
						"name" 	: "Trey Teufel",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Macduff in Macbeth at Utah Shakespeare Festival "
					},
					{
						"name" 	: "Christopher Villa",
						"show" 	: [],
						"pic" : "",
						"bio"	: "TV: Ballroom Bootcamp on The Learning Channel; Film 'BoysTown' and 'The Onion Movie.'"
					},
					{
						"name" 	: "Christian Kauffmann",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Jackson Hewitt commercial playing Frankenstein"
					},
					{
						"name" 	: "Brad Snedeker",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Starred in the film 'The Pink Conspiracy.' Guest Star on 'ER' and 'Reba.' "
					},
					{
						"name" 	: "Rachel Nau",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Needs to catch us up on two years of steady work since completing the conservatory. Commercials: 'This vote counts,' 'Church of Jesus Christ of Latter Day Saints,' two spots for TV Land, Comedy Central - 'Dave Attell Promo'; Internet: Host for a dating web site Zogo.com; Film: 'The Wicked,' 'Sanctified,' 'Affair Play,' 'The Recital,' 'The Best is Yet to Come'; Theatre: 'Untitled as of Yet'"
					},
					{
						"name" 	: "Todd Detwiler",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Recurring on All My Children as an orderly, two student films, one for Brooklyn College called 'Nevermore' and another for the New School called 'Laid'"
					},
					{
						"name" 	: "Brooke Blanchard",
						"show" 	: [],
						"pic" : "",
						"bio"	: "As 'Jill the Paramedic' on ABC's 'Grey's Anatomy"
					},
					{
						"name" 	: "Nadine Heimann",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Vanessa' a series regular on the HERE network's Dante's Cove"
					},
					{
						"name" 	: "Omar Mora",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Independent movie call East Side Story a lead character in a student film"
					},
					{
						"name" 	: "Greg Barkhamer",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Traffic.com commercial"
					},
					{
						"name" 	: "Archie McGregor",
						"show" 	: [],
						"pic" : "",
						"bio"	: "National spot for Pepperidge Farms Whim cookies"
					},
					{
						"name" 	: "Suzanne Johnson",
						"show" 	: [],
						"pic" : "",
						"bio"	: "The Food Network, Barclay's Bank,Dextrol (demo), TV Land/ Wendy's, National Cable Television Industry, Good House Keeping TV, The Show, The Vitamin Shoppe, Cinqular Wireless, Bluefly. Com, Bluefly.com (demo-radio), Ronald McDonald House."
					},
					{
						"name" 	: "Karen Craig",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Now a successful screenwriter 'Forbidden Secrets' for Lifetime"
					},
					{
						"name" 	: "Denis J. Lanza",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In a new play by Eugenia Macer-Story called 'Just 45 Minutes to Paradise;' also doing a one man show entitled 'The Knife Assassin' in conjunction with the La Muse Venale Acting Troupe at Where Eagles Dare Theatre and 'O'Connor the Dog' in the 13th Street Repertory Co.'s children's play 'Wiseacre farm.' Films include 'Fetish Mode.'"
					},
					{
						"name" 	: "Kevin Shea",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In two indie films 'Chaos Unlimited' and 'The Outcast.' Upcoming feature films include 'Banshee!!!' and 'Sasquatch Assault.'"
					},
					{
						"name" 	: "Lewis Gelb",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Robitussin national, MTV-bound music video, also 'The Sopranos' and 'Chappelle's Show.'"
					},
					{
						"name" 	: "Elise Rovinsky",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Two independent films - Sheriff Nickie Welles in 'Person of Interest' and one of the leads, Mary-Ellen, in 'Bear Women' "
					},
					{
						"name" 	: "Will Manning",
						"show" 	: [],
						"pic" : "",
						"bio"	: "in 'Trash' at Access Theater for FringeNYC."
					},
					{
						"name" 	: "Gillian Delgado",
						"show" 	: [],
						"pic" : "",
						"bio"	: "48-hour film competition, 'Without a Clue' playing Miss Scarlet as well as 'My Imaginary Friend Lars Stevens.' "
					},
					{
						"name" 	: "Paula Vogel's",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Script 'And Baby Makes Seven' was staged at Temporary Theatre Company"
					},
					{
						"name" 	: "Angel Cabral",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Booked Toyota national spot with Chad Pennington and Eli Manning; also did two SOBE voiceover national spots, is recurring as an Under-5 on All My Children, and also shot a National JP Morgan Chase commercial"
					},
					{
						"name" 	: "J. Teddy Garces",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Has been seen on 'One Life to Live,' and 'Cold Case.'  He was featured in the 2008 films 'Feed' and 'Mano.' Law and Order (Criminal Intent) on NBC, Sylvania Light Bulbs national commercial, industrial film 'Defense Contractor,' independent short films 'No One Will Ever Know' and 'Ignacio.'"
					},
					{
						"name" 	: "Jennifer Johnson",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Featured in the May issue of Fashion O (the Oprah Magazine)"
					},
					{
						"name" 	: "Travis Woods",
						"show" 	: [],
						"pic" : "",
						"bio"	: "As a redneck soldier in the feature film 'Spaghetti Park' "
					},
					{
						"name" 	: "Patricia Cajuste",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Promo for MTV video/music awards Robitussin national, MTV-bound music video, also 'The Sopranos' and 'Chappelle's Show'"
					},
					{
						"name" 	: "Jesse Bernstein",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Law and Order,' 'Days of Our Lives' and 'Veronica Mars.'"
					},
					{
						"name" 	: "Paul Gosselin",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'One Life to Live,' 'The Big Bad Swim' and 'Frozen Impact.'"
					},
					{
						"name" 	: "Jerry Broome",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'One Life to Live' and the feature film 'Death on Demand.'"
					},
					{
						"name" 	: "Marisol Lopehandia",
						"show" 	: [],
						"pic" : "",
						"bio"	: "One Life to Live and As the World Turns"
					},
					{
						"name" 	: "Alex Feldman",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Class of 1999, guest starred on 'CSI: Miami,' 'Cold Case' and 'Law and Order:  SVU.'  He can also be seen in the films 'The Midnight Man,' 'Kush,' 'Trespassers' and 'Suits on the Loose.' Film directed by James Toback 'When Will I Be Loved' which opened at the Cannes Film Festival, four independent films: 'Come Away With Me,' 'Trespassers,' 'Bible Boyz,' and 'The Final Patient,' National spot for Ford Trucks.  Voiceovers for national commercials for Chrysler, Motorola, & Starburst Candy"
					},
					{
						"name" 	: "Griffin Matthews",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star on 'Numb3rs' (CBS)  and 'Cashmere Mafia.' Commercials for Virgin Mobile and Dr. Scholl's, promo for Nickelodeon"
					},
					{
						"name" 	: "Stephen Ott",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In the Indie feature 'Homecoming.'"
					},
					{
						"name" 	: "Luis Pedron",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Films include 'Writer's Block,' 'American Adobo,' 'The Devil and Daniel Webster' and 'The Theif.'  He also directed and appeared in the short film 'Party Games.'"
					},
					{
						"name" 	: "Kevin Kilner",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star on Crossing Jordan, guest star on 'CSI:Miami'"
					},
					{
						"name" 	: "Sylvia Norman",
						"show" 	: [],
						"pic" : "",
						"bio"	: "National commercials for XM Radio, Home Depot, Sears, and an MTV Promo for 'Punked'"
					},
					{
						"name" 	: "Shellee Nicols",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Films include 'Petstory,' 'Death and Taxis' and 'Ellipsis.' and in the indie film 'Half In Love.'"
					},
					{
						"name" 	: "Florina Petcu",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In three independent features: 'Winter Solstice,' 'The Pied Piper of Manhattan,' and 'The Racket' also part of MacBeth.com multimedia project."
					},
					{
						"name" 	: "Peter Paulsen",
						"show" 	: [],
						"pic" : "",
						"bio"	: "BRAVO special '100 Scariest Movie Moments', independent features 'Hell's Half Acre,' 'Coconut,' and 'Dress Rehearsal'"
					},
					{
						"name" 	: "Dawnnie Mercado",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Two episodes of Judging Amy, CBS, 'Legacy,' 'Strong Medicine,' 'What About Brian', 'Consent.' and 'Third Watch' on NBC"
					},
					{
						"name" 	: "Damian Ladd",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead in the indie film 'Demon Resurrection.' Other films include 'Dress Rehearsal' and 'American Black Beauty.'"
					},
					{
						"name" 	: "Jessica Niles",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'One Life to Live' and 'American Heiress.'"
					},
					{
						"name" 	: "Naomi Kakuk",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Films:  'The Producers.'  Broadway:  'The Frogs' and 'The Producers.'"
					},
					{
						"name" 	: "Keisha Alfred",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Law and Order:  SVU,' 'Shark,' 'House M.D.' and 'Criminal Minds.'"
					},
					{
						"name" 	: "Jonathon Dickson",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role Breaking Vegas"
					},
					{
						"name" 	: "Brianna Shaughnessy",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Supporting role, 'Breaking Vegas' for the History Channel"
					},
					{
						"name" 	: "Kevin Shay",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role, 'Breaking Vegas' for the History Channel "
					},
					{
						"name" 	: "Sonya Rose",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Breaking Vegas' for the History Channel plus a starring role in the movie 'The C.O.R.P.S.'"
					},
					{
						"name" 	: "Mary Pat Dowhy",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Significant Others' on BRAVO in the role of Ginny and a film by Rodriguo Garcia called 'Nine Lives' starring Glenn Close, Holly Hunter and Sissy Spacek."
					},
					{
						"name" 	: "Travis Wood",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Has appeared on 'All My Children,' 'The Guiding Light' and 'As the World Turns.'  His film appearances include 'Zombie Strippers!' and 'The Slaughter.'"
					},
					{
						"name" 	: "Robyn Gryphe",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'I Love NY' spot O/C and lead character V/O, the role of Athena for the video game 'King of the Fighters - Maximum Impact'"
					},
					{
						"name" 	: "Langdon Bosarge",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Law and Order' and 'Ten Lives.' "
					},
					{
						"name" 	: "May Porter",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Indie films 'Cherry on Top' and 'Coochie' plus feature film 'Big Fish' "
					},
					{
						"name" 	: "Amy Herring",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Reoccurring role on 'All My Children.'  Films roles:  'Origin of Species' and 'Nina.'"
					},
					{
						"name" 	: "Carl Palmer",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'As the World Turns' on CBS and 'The Sopranos' on HBO Lena Georgas - 'Kingdom Hospital' on ABC.  Films such as 'The Pelican Brief' and 'We Pedal Uphill.'"
					},
					{
						"name" 	: "Emily Ann Turner",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Films include 'Cupidity' and 'The Winner is...'"
					},
					{
						"name" 	: "Justin Daniel",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest spots on 'Ed' and 'Strangers With Candy.'  Also appeared in the film 'The Good Shepherd.'"
					},
					{
						"name" 	: "Jena Girouard",
						"show" 	: [],
						"pic" : "",
						"bio"	: "National network commercial for Pier One and films such as 'Slow Jam King' and 'It's Just Coffee.'"
					},
					{
						"name" 	: "Keith Pillow",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star on 'Judging Amy'"
					},
					{
						"name" 	: "Melanie Crim",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Indie films 'Shooting Livien,' 'Talking in Black and White' and 'Central Park Jog.'"
					},
					{
						"name" 	: "Lisa Terezakis",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Midsummer Night's Dream' at Stratford Shakespeare Festival, commercial for Pilgrim's Pride and feature film 'Duane Incarnate'"
					},
					{
						"name" 	: "Stefanie Bari",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Recurring guest starring role on 'NYPD Blue', featured part on 'Law and Order: Criminal Intent' and a part in 'Tony and Tina's Wedding' Off Broadway"
					},
					{
						"name" 	: "Meridith Ross",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Indie films 'Cupidity', 'Momma's Boy' and 'Friends Like These'"
					},
					{
						"name" 	: "Arol Jahns",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Indie films 'Chessmates' and 'The New Resident' also supporting role in 'Ed' on NBC"
					},
					{
						"name" 	: "Anthony Bagnetto",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Combat Jump' on the History Channel, feature film 'Nothing Really Happens' and indie 'Hot Oral Hygiene'"
					},
					{
						"name" 	: "Jennifer Chambers",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Ulla in 'The Producers' on Broadway"
					},
					{
						"name" 	: "Pete Postiglione",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Films including 'Our Lady of Victory,' 'Winter of Frozen Dreams' and 'Senioritis.' "
					},
					{
						"name" 	: "Noelle Monteleone",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Love on the Rocks,' 'Baby Blues,' 'Simple Things' and 'The Year without a Santa Claus.'  Guest spot on 'Army Wives.'"
					},
					{
						"name" 	: "Christina Grandy",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'The Guardian' on CBS, 'The West Wing,' 'Third Watch' and 'The Evidence.'  Movies include 'Some Kinda Joke' and 'Bruce Almighty.' "
					},
					{
						"name" 	: "Jay Russell",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'The Play What I Wrote' at the Lyceum Theatre on Broadway.  Television roles include 'Spin City,' 'Law and Order' and 'The Sopranos.'"
					},
					{
						"name" 	: "Jennifer Boggs",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role in the feature horror film 'Jinininki' "
					},
					{
						"name" 	: "Joe Whelski",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role in the indie film 'Light Under the Rock', as well as appearances in 'Ghost Story' and 'Hung-Up.'"
					},
					{
						"name" 	: "Rob Masabny",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Can You Tell' on the Oxygen Network, as well as 'Harrison Macauley Is Going to Kill Me.'"
					},
					{
						"name" 	: "Erica Mansfield",
						"show" 	: [],
						"pic" : "",
						"bio"	: "National tour of 'Mama Mia'"
					},
					{
						"name" 	: "Stephanie Nasteff",
						"show" 	: [],
						"pic" : "",
						"bio"	: "National voice-over commercials for Arrid Total Deodorant, Dannon Lite-n-Fit Smoothie, Chapstick Lip-Moisturizer, Little Tikes Toys, and Southern Company"
					},
					{
						"name" 	: "John Weigand",
						"show" 	: [],
						"pic" : "",
						"bio"	: "MTV and NY Lottery commercial, 'Noise' an indie film, 'Spectropia' indie interactive film, 'Show Boat' at La Comedia Dinner Theatre  Spiro Papas - spot on 'The Real Food Show'"
					},
					{
						"name" 	: "Lena Georgas",
						"show" 	: [],
						"pic" : "",
						"bio"	: "TV shows include 'Nu3bers,' 'Kingdom Hospital' and 'Law and Order.'  She has also worked extensively in Off-Broadway theaters."
					},
					{
						"name" 	: "Eileen Hannah",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Indie film 'Shock Act,' student film 'Lost & Found' and 'Rounding Third.'  She has also appeared on 'All My Children' and 'Another World.'"
					},
					{
						"name" 	: "Ghislaine Rollins",
						"show" 	: [],
						"pic" : "",
						"bio"	: "NBC news promo and 'The Definition of Insanity.'"
					},
					{
						"name" 	: "Michelle Pawlina",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role in the indie film 'Yalita'"
					},
					{
						"name" 	: "Keith Camire",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Student film 'January 28th' and 'Beyond Recognition.'"
					},
					{
						"name" 	: "Herve Clermont",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead role in the feature film 'Friendly Fire' w/Gary Busey and Deborah Wilson"
					},
					{
						"name" 	: "Natalie Picow",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Feature films 'Nosey Parker' and 'Exiled.'  TV work includes 'Law and Order.' "
					},
					{
						"name" 	: "D'vorah Bailey",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Ed' on NBC and 'Heights.'"
					},
					{
						"name" 	: "Dawn Derow",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Lead singer for Cirque du Soleil"
					},
					{
						"name" 	: "Hilary Prentice",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Wedding Night' & 'Dangerous Liaisons' at The Abington Theatre & 'Bitch Macbeth' at The Kraine Theatre"
					},
					{
						"name" 	: "Deja Kreutzberg",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Law & Order' on NBC, 'Hope & Faith,' 'As the World Turns' and 'CSI:Miami.'  'The Tempest' at The Storm Theatre"
					},
					{
						"name" 	: "Craig DiFrancia",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Chappelle's Show' on Comedy Central & an indie film 'Technology vs. Man'"
					},
					{
						"name" 	: "Tamar Kagan",
						"show" 	: [],
						"pic" : "",
						"bio"	: "In the feature films 'Black Prince,' 'Good Luck in Her Eye' and 'Tiny Dancer.'"
					},
					{
						"name" 	: "Bryn Dowling",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'The Producers,' 'Chicago' and 'The Frogs' on Broadway.  Film:  'The Producers.'"
					},
					{
						"name" 	: "Joe O'Keefe",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Law & Order: Criminal Intent' on NBC"
					},
					{
						"name" 	: "Julia Pennington",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Guest star on 'JAG' and national commercials for Isuzu and UPS"
					},
					{
						"name" 	: "Michael Ariemma",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Off-Broadway productions of 'The Manchurian Candidate' & 'A Clockwork Orange.'  Films include 'East Broadway' and 'Big Apple.'"
					},
					{
						"name" 	: "Travis Wood",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Recurring role on 'All My Children'"
					},
					{
						"name" 	: "Rosanna Canonigo",
						"show" 	: [],
						"pic" : "",
						"bio"	: "'Play Ball!:  A Trilogy of Baseball Films,' and 'Truly, Madly, Deeply.'  Also 'Night of Ether' at the Center Stage Playhouse"
					},
					{
						"name" 	: "Maura Anderson",
						"show" 	: [],
						"pic" : "",
						"bio"	: "Maura now works as a Production Manager. She has worked for several major production companies and did the photography on a film directed by Max Winkler starring Uma Thurman, Michael Angarano, and Lee Pace."
					}
				];
			}
		};
	
	});

})();