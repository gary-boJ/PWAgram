/*
public class MyData {

    public static int numberOfStationsToLoad = 34;

    public static String[] nameArray = {
        "Gather",
        "Feet",
        "Passover",
        "Body",
        "Blood",
        "Instruction",
        "Paraclete",
        "Hymn",
        "Valley",
        "Pray",
        "Agony",
        "Alone",
        "Betrayed",
        "Abandoned",
        "Denied",
        "Questioned and Beaten",
        "Tried",
        "Accused",
        "Mocked",
        "Judged",
        "Condemned",
        "Flogged",
        "Lead-out",
        "Bearing the Cross",
        "Onlookers",
        "Jeered",
        "Crusified",
        "Ridiculed",
        "Forgiveness",
        "Darkness",
        "My God!",
        "Thirst",
        "Pierced",
        "Buried",
        "",
        "",
        "",
        "",
        "",
        ""
    };

    public static String[] headingArray = {
        "Gathering for the Passover",
        "Jesus washes his Disciples' Feet",
        "One of you will betray me",
        "This is my body",
        "This is my blood",
        "Final Instruction",
        "Paraclete",
        "After the sang a hymn",
        "Across the valley",
        "Pray with me",
        "Agony",
        "Alone",
        "Betrayed",
        "Abandoned",
        "Denied",
        "False Testimony",
        "Tried",
        "Accused",
        "Mocked",
        "Judged",
        "Condemned",
        "Flogged",
        "Lead-out",
        "Bearing the Cross",
        "Onlookers",
        "Jeered",
        "Crucified",
        "Ridiculed",
        "Forgiveness",
        "Darkness",
        "My God!",
        "Thirst",
        "Water and Blood",
        "Buried",
        "",
        "",
        "",
        "",
        "",
        ""
    };

    public static String[] prayerTitleArray = {
        "Gathering for the Passover",
        "Jesus washes his Disciples' Feet",
        "One of you will betray me",
        "This is my body",
        "This is my blood",
        "Final Instruction",
        "Paraclete",
        "After the sang a hymn",
        "Across the valley",
        "Pray with me",
        " A/gony",
        "Alone",
        "Betrayed",
        "Abandoned",
        "Denied",
        "False Testimony",
        "Tried",
        "Accused",
        "Mocked",
        "Judged",
        "Condemned",
        "Flogged",
        "Lead-out",
        "Bearing the Cross",
        "Onlookers",
        "Jeered",
        "Crucified",
        "Ridiculed",
        "Forgiveness",
        "Darkness",
        "My God!",
        "Thirst",
        "Water and Blood",
        "Buried",
        "",
        "",
        "",
        "",
        "",
        ""
    };

    public static Integer[] soundArray = {
        R.raw.wind,
        R.raw.washing,
        R.raw.surely_not_i,
        R.raw.take_eat,
        R.raw.take_drink,
        R.raw.instruction_shush,
        R.raw.come_paraclete,
        R.raw.hymn,
        R.raw.heading_out,
        R.raw.first_watch,
        R.raw.second_watch,
        R.raw.third_watch,
        R.raw.arrest,
        R.raw.abandon,
        R.raw.rooster_x3,
        R.raw.punch,
        R.raw.crowd,
        R.raw.crowd,
        R.raw.many_punches_remix,
        R.raw.crowd,
        R.raw.crusify_him,
        R.raw.whip_x4,
        R.raw.lead_out,
        R.raw.heartbeat,
        R.raw.crusified,
        R.raw.cross_agony,
        R.raw.cross_agony1,
        R.raw.cross_agony2,
        R.raw.bell_tolls,
        R.raw.curtain_tearing,
        0,
        R.raw.wind,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    };

    public static int[] remindersDay = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 };
    public static int[] remindersHour = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 };
    public static int[] remindersHalfHour = { 0, 1, 3, 4, 6, 9, 10, 11, 12, 13, 15, 16, 18, 21, 22, 24, 25, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 };

    public static long MinutesFromStart(int eventIndex) {
        if (eventIndex < 0 || eventIndex > (timeOfDayArray.length - 1)) {
            return 0;
        }
        String time = timeOfDayArray[eventIndex];
        int hour = Integer.parseInt(time.substring(0, 2));
        int minute = Integer.parseInt(time.substring(2, 4));
        if (hour >= 18) {
            hour -= 18;
        } else {
            hour += 6;
        }
        int minuteOffset = (hour * 60) + minute;
        return minuteOffset;
    }

    public static String[] timeOfDayArray = { // CHANGE TO TIME FROM START
        "1800",
        "1830",
        "1900",
        "1930",
        "2000",
        "2030",
        "2100",
        "2130",
        "2200",
        "2300",
        "0000",
        "0030",
        "0100",
        "0400",
        "0500",
        "0600",
        "0630",
        "0700",
        "0730",
        "0800",
        "0830",
        "0900",
        "0930",
        "1000",
        "1030",
        "1100",
        "1130",
        "1200",
        "1230",
        "1300",
        "1330",
        "1400",
        "1500",
        "1530",
        "1600",
        "1700",
        "1730",
        "1759",
        "1759",
        "1759",
        "1759",
        "1759",
        "1759",
        "1759",
        "1759"
    };

    public static Integer[] iconArray = {
        R.drawable.gathering_small_triclinium01,
        R.drawable.washing_feet_icon_plain,
        R.drawable.last_supper_tissot_judas_dipping_his_hand_in_the_dish_740x373,
        R.drawable.last_supper_thid_is_my_blood_shaddows,
        R.drawable.otto_van_veen_the_last_supper,
        R.drawable.last_supper_by_lamp,
        R.drawable.christs_farewell_discourse_small,
        R.drawable.valley_crossing_enrique_simonet_flevit_super_illam_1892,
        R.drawable.holy_spirit_small_icon,
        R.drawable.andrea_mantegna_christ_as_the_suffering_redeemer_google_art_project,
        R.drawable.andrea_mantegna_christ_as_the_suffering_redeemer_google_art_project,
        R.drawable.andrea_mantegna_christ_as_the_suffering_redeemer_google_art_project,
        R.drawable.betrayed,
        R.drawable.dieric_bouts_the_arrest_of_christ_with_kiss_of_judas_and_ear_of_malchus_ca1485,
        R.drawable.denial_small_peter_st_maximos_the_greek,
        R.drawable.sanhedron_small_duccio_di_buoninsegna_christ_accused_by_the_pharisees_wga06801,
        R.drawable.pilate_icon_plain,
        R.drawable.flagellation_of_christ_rubens_small,
        R.drawable.herods_duccio_di_buoninsegna_027a,
        R.drawable.mocking_hendrick_ter_brugghen_die_verspottung_christi_small,
        R.drawable.pillar_stained_glass_gotland_dalhem_kyrka_glasmalerei,
        R.drawable.pilate_icon_plain,
        R.drawable.interior_of_santi_giovanni_e_paolo_venice_jesus_christ_bearing_the_cross,
        R.drawable.carring_cross_icon_plain,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.christ_on_the_cross_1631_by_rembrandt,
        R.drawable.down_from_the_cross_icon_plain,
        R.drawable.holy_face_of_jesus_from_shroud_of_turin_1909
    };
    public static Integer[] pictureArray = {
        R.drawable.gathering,
        R.drawable.washing_feet_icon_plain,
        R.drawable.last_supper_tissot_judas_dipping_his_hand_in_the_dish_740x373,
        R.drawable.last_supper_thid_is_my_blood_shaddows,
        R.drawable.otto_van_veen_the_last_supper,
        R.drawable.last_supper_by_lamp,
        R.drawable.christs_farewell_discourse_small,
        R.drawable.valley_crossing_enrique_simonet_flevit_super_illam_1892,
        R.drawable.holy_spirit_bas_relief_11_04_19_768x211,
        R.drawable.crossing_the_valley_unknown_source,
        R.drawable.garden_william_blake_agony_in_the_garden,
        R.drawable.garden_and_cup_icon_plain,
        R.drawable.dieric_bouts_the_arrest_of_christ_with_kiss_of_judas_and_ear_of_malchus_ca1485,
        R.drawable.judas_receiving_thirty_pieces_of_silver_for_betraying_jesus_by_mattia_preti_c_1640,
        R.drawable.denial_small_peter_st_maximos_the_greek,
        R.drawable.sanhedron_jess_en_casa_de_ans_museo_del_prado_jos_de_madrazo,
        R.drawable.peter_paul_rubens_the_flagellation_of_christ,
        R.drawable.ecce_homo_by_hieronymus_bosch,
        R.drawable.duccio_di_buoninsegna_christ_mocked_wga06798_660x350,
        R.drawable.mocking_mathis_gothart_grnewald_062,
        R.drawable.pilate_man_munkacsy_mihaly_ecce_homo_behold_man_jesus_christ,
        R.drawable.pillar_small_william_adolphe_bouguereau_1825_1905_the_flagellation_of_our_lord_jesus_christ_1880,
        R.drawable.interior_of_santi_giovanni_e_paolo_venice_jesus_christ_bearing_the_cross,
        R.drawable.carring_cross_icon_plain,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.golgotha_bram3,
        R.drawable.christ_on_the_cross_1631_by_rembrandt,
        R.drawable.down_from_the_cross_icon_plain,
        R.drawable.tomb_andrea_mantegna_beweinung_christi
    };

    public static String[] scriptureArray = {
        "<strong><font color=\"red\">Luke 22:7</font></strong><br/>\n" +
        "<p><span class=\"text Luke-22-7\"><sup><font color=\"grey\"><small>7</small></font></sup>Then came the day of Unleavened Bread, on which the Passover lamb had to be sacrificed. </span></p><br/>\n" +
        "<strong><font color=\"red\">Matthew 26:17-19</font></strong><br/>\n" +
        "<p><span class=\"text Matt-26-17\"><sup><font color=\"grey\"><small>17</small></font></sup>On the first day of Unleavened Bread the disciples came to Jesus, saying, “Where do you want us to make the preparations for you to eat the Passover?” </span> <span id=\"en-NRSVCE-28342\" class=\"text Matt-26-18\"><sup><font color=\"grey\"><small>18</small></font></sup>He said, “Go into the city to a certain man, and say to him, ‘The Teacher says, My time is near; I will keep the Passover at your house with my disciples.’” </span> <span id=\"en-NRSVCE-28343\" class=\"text Matt-26-19\"><sup><font color=\"grey\"><small>19</small></font></sup>So the disciples did as Jesus had directed them, and they prepared the Passover meal.</span></p><br/><br/>",
        "<strong><font color=\"red\">John 13:1-17</font></strong><br/>\n" +
        "<div class=\"version-NRSVCE result-text-style-normal text-html \">\n" +
        "<p class=\"chapter-2\"><span id=\"John-13-1\"><sup><font color=\"grey\"><small>1</small></font></sup>Now before the festival of the Passover, Jesus knew that his hour had come to depart from this world and go to the Father. Having loved his own who were in the world, he loved them to the end. </span> <span id=\"en-NRSVCE-30894\" class=\"text John-13-2\"><sup><font color=\"grey\"><small>2</small></font></sup>The devil had already put it into the heart of Judas son of Simon Iscariot to betray him. And during supper </span> <span id=\"en-NRSVCE-30895\" class=\"text John-13-3\"><sup><font color=\"grey\"><small>3</small></font></sup>Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going to God, </span> <span id=\"en-NRSVCE-30896\" class=\"text John-13-4\"><sup><font color=\"grey\"><small>4</small></font></sup>got up from the table,<sup><small><font color=\"grey\">[a]</font></small></sup> took off his outer robe, and tied a towel around himself. </span> <span id=\"en-NRSVCE-30897\" class=\"text John-13-5\"><sup><font color=\"grey\"><small>5</small></font></sup>Then he poured water into a basin and began to wash the disciples’ feet and to wipe them with the towel that was tied around him. </span> <span id=\"en-NRSVCE-30898\" class=\"text John-13-6\"><sup><font color=\"grey\"><small>6</small></font></sup>He came to Simon Peter, who said to him, “Lord, are you going to wash my feet?” </span> <span id=\"en-NRSVCE-30899\" class=\"text John-13-7\"><sup><font color=\"grey\"><small>7</small></font></sup>Jesus answered, “You do not know now what I am doing, but later you will understand.” </span> <span id=\"en-NRSVCE-30900\" class=\"text John-13-8\"><sup><font color=\"grey\"><small>8</small></font></sup>Peter said to him, “You will never wash my feet.” Jesus answered, “Unless I wash you, you have no share with me.” </span> <span id=\"en-NRSVCE-30901\" class=\"text John-13-9\"><sup><font color=\"grey\"><small>9</small></font></sup>Simon Peter said to him, “Lord, not my feet only but also my hands and my head!” </span> <span id=\"en-NRSVCE-30902\" class=\"text John-13-10\"><sup><font color=\"grey\"><small>10</small></font></sup>Jesus said to him, “One who has bathed does not need to wash, except for the feet,<sup><small><font color=\"grey\">[b]</font></small></sup> but is entirely clean. And you<sup><small><font color=\"grey\">[c]</font></small></sup> are clean, though not all of you.” </span> <span id=\"en-NRSVCE-30903\" class=\"text John-13-11\"><sup><font color=\"grey\"><small>11</small></font></sup>For he knew who was to betray him; for this reason he said, “Not all of you are clean.”</span></p> <p><span id=\"en-NRSVCE-30904\" class=\"text John-13-12\"><sup><font color=\"grey\"><small>12</small></font></sup>After he had washed their feet, had put on his robe, and had returned to the table, he said to them, “Do you know what I have done to you? </span> <span id=\"en-NRSVCE-30905\" class=\"text John-13-13\"><sup><font color=\"grey\"><small>13</small></font></sup>You call me Teacher and Lord—and you are right, for that is what I am. </span> <span id=\"en-NRSVCE-30906\" class=\"text John-13-14\"><sup><font color=\"grey\"><small>14</small></font></sup>So if I, your Lord and Teacher, have washed your feet, you also ought to wash one another’s feet. </span> <span id=\"en-NRSVCE-30907\" class=\"text John-13-15\"><sup><font color=\"grey\"><small>15</small></font></sup>For I have set you an example, that you also should do as I have done to you. </span> <span id=\"en-NRSVCE-30908\" class=\"text John-13-16\"><sup><font color=\"grey\"><small>16</small></font></sup>Very truly, I tell you, servants<sup><small><font color=\"grey\">[d]</font></small></sup> are not greater than their master, nor are messengers greater than the one who sent them. </span> <span id=\"en-NRSVCE-30909\" class=\"text John-13-17\"><sup><font color=\"grey\"><small>17</small></font></sup>If you know these things, you are blessed if you do them. </span> </p><div class=\"footnotes\">\n" +
        "<font color=\"grey\"><small><ol><li><a title=\"John 13:4\"> a </a><span>Gk <i>from supper</i></span></li>\n" +
        "\n" +
        "<li><a title=\"John 13:10\"> b </a><span>Other ancient authorities lack <i>except for the feet</i></span></li>\n" +
        "\n" +
        "<li><a title=\"John 13:10\"> c </a><span>The Greek word for <i>you</i> here is plural</span></li>\n" +
        "\n" +
        "<li><a title=\"John 13:16\"> d </a><span>Gk <i>slaves</i></span></li>\n" +
        "\n" +
        "</ol></small></font></div> <!--end of footnotes-->\n" +
        "</div>",
        "<strong><font color=\"red\">Mark 14:14-17</font></strong><br/>\n" +
        "<p><span class=\"text Mark-14-17\" id=\"en-NRSVCE-29037\"><sup><font color=\"grey\"><small>17</small></font></sup>When it was evening, he came with the twelve. </span> <span class=\"text Mark-14-18\" id=\"en-NRSVCE-29038\"><sup><font color=\"grey\"><small>18</small></font></sup>And when they had taken their places and were eating, Jesus said, “Truly I tell you, one of you will betray me, one who is eating with me.” </span> <span class=\"text Mark-14-19\" id=\"en-NRSVCE-29039\"><sup><font color=\"grey\"><small>19</small></font></sup>They began to be distressed and to say to him one after another, “Surely, not I?” </span> <span class=\"text Mark-14-20\" id=\"en-NRSVCE-29040\"><sup><font color=\"grey\"><small>20</small></font></sup>He said to them, “It is one of the twelve, one who is dipping bread into the bowl with me. </span> </p>",
        "<strong><font color=\"red\">Luke 22:19</font></strong><br/>\n" +
        "<p><span><sup><font color=\"grey\"><small>19</small></font></sup>Then he took a loaf of bread, and when he had given thanks, he broke it and gave it to them, saying, “This is my body, which is given for you. Do this in remembrance of me.” </span> <span class=\"text Luke-22-20\" id=\"en-NRSVCE-30148\"><sup><font color=\"grey\"><small>20</small></font></sup>And he did the same with the cup after supper, saying, “This cup that is poured out for you is the new covenant in my blood</span></p><br/>\n" +
        "<strong><font color=\"red\">1 Corinthians 12:27</font></strong><br/>\n" +
        "<p><span class=\"text 1Cor-12-27\" id=\"en-NRSVCE-32918\"><sup><font color=\"grey\"><small>27</small></font></sup>Now you are the body of Christ and individually members of it. </span> </p><br/>\n" +
        "<strong><font color=\"red\">Romans 12:5</font></strong><br/>\n" +
        "<p> <span class=\"text Rom-12-5\" id=\"en-NRSVCE-32508\"><sup><font color=\"grey\"><small>5</small></font></sup>so we, who are many, are one body in Christ, and individually we are members one of another. </span> </p><br/>\n" +
        "<strong><font color=\"red\">1 Corinthians 10:17</font></strong><br/>\n" +
        "<p> <span class=\"text 1Cor-10-17\" id=\"en-NRSVCE-32841\"><sup class=\"versenum\">17&nbsp;</sup>Because there is one bread, we who are many are one body, for we all partake of the one bread. </span> </p> <br/>\n" +
        "<strong><font color=\"red\">John 6:51</font></strong><br/>\n" +
        "I am the living bread that came down from heaven. Whoever eats of this bread will live forever; and the bread that I will give for the life of the world is my flesh.”",
        "<strong><font color=\"red\">Matthew 26:27-29</font></strong><br/>\n" +
        "<p><span class=\"text Matt-26-27\" id=\"en-NRSVCE-28351\"><sup><font color=\"grey\"><small>27</small></font></sup>Then he took a cup, and after giving thanks he gave it to them, saying, “Drink from it, all of you; </span> <span class=\"text Matt-26-28\" id=\"en-NRSVCE-28352\"><sup><font color=\"grey\"><small>28</small></font></sup>for this is my blood of the<sup class=\"footnote\" data-link='[<a href=\"#fen-NRSVCE-28352d\" title=\"See footnote d\">d</a>]' data-fn=\"#fen-NRSVCE-28352d\"><font color=\"grey\">[</font><a title=\"See footnote d\" href=\"#fen-NRSVCE-28352d\">d</a><font color=\"grey\">]</font></sup> covenant, which is poured out for many for the forgiveness of sins. </span> <span class=\"text Matt-26-29\" id=\"en-NRSVCE-28353\"><sup><font color=\"grey\"><small>29</small></font></sup>I tell you, I will never again drink of this fruit of the vine until that day when I drink it new with you in my Father’s kingdom.”</span></p>",
        "<strong><font color=\"red\">John 14:1-14</font></strong><br/>\n" +
        "<p class=\"chapter-2\"><span id=\"John-14-1\"><sup><font color=\"grey\"><small>1</small></font></sup>“Do not let your hearts be troubled. Believe in God, believe also in me. </span> <span id=\"en-NRSVCE-30932\" class=\"text John-14-2\"><sup><font color=\"grey\"><small>2</small></font></sup>In my Father’s house there are many dwelling places. If it were not so, would I have told you that I go to prepare a place for you? </span> <span id=\"en-NRSVCE-30933\" class=\"text John-14-3\"><sup><font color=\"grey\"><small>3</small></font></sup>And if I go and prepare a place for you, I will come again and will take you to myself, so that where I am, there you may be also. </span> <span id=\"en-NRSVCE-30934\" class=\"text John-14-4\"><sup><font color=\"grey\"><small>4</small></font></sup>And you know the way to the place where I am going.” </span> <span id=\"en-NRSVCE-30935\" class=\"text John-14-5\"><sup><font color=\"grey\"><small>5</small></font></sup>Thomas said to him, “Lord, we do not know where you are going. How can we know the way?” </span> <span id=\"en-NRSVCE-30936\" class=\"text John-14-6\"><sup><font color=\"grey\"><small>6</small></font></sup>Jesus said to him, “I am the way, and the truth, and the life. No one comes to the Father except through me. </span> <span id=\"en-NRSVCE-30937\" class=\"text John-14-7\"><sup><font color=\"grey\"><small>7</small></font></sup>If you know me, you will know my Father also. From now on you do know him and have seen him.”</span></p> <p><span id=\"en-NRSVCE-30938\" class=\"text John-14-8\"><sup><font color=\"grey\"><small>8</small></font></sup>Philip said to him, “Lord, show us the Father, and we will be satisfied.” </span> <span id=\"en-NRSVCE-30939\" class=\"text John-14-9\"><sup><font color=\"grey\"><small>9</small></font></sup>Jesus said to him, “Have I been with you all this time, Philip, and you still do not know me? Whoever has seen me has seen the Father. How can you say, ‘Show us the Father’? </span> <span id=\"en-NRSVCE-30940\" class=\"text John-14-10\"><sup><font color=\"grey\"><small>10</small></font></sup>Do you not believe that I am in the Father and the Father is in me? The words that I say to you I do not speak on my own; but the Father who dwells in me does his works. </span> <span id=\"en-NRSVCE-30941\" class=\"text John-14-11\"><sup><font color=\"grey\"><small>11</small></font></sup>Believe me that I am in the Father and the Father is in me; but if you do not, then believe me because of the works themselves. </span> <span id=\"en-NRSVCE-30942\" class=\"text John-14-12\"><sup><font color=\"grey\"><small>12</small></font></sup>Very truly, I tell you, the one who believes in me will also do the works that I do and, in fact, will do greater works than these, because I am going to the Father. </span> <span id=\"en-NRSVCE-30943\" class=\"text John-14-13\"><sup><font color=\"grey\"><small>13</small></font></sup>I will do whatever you ask in my name, so that the Father may be glorified in the Son. </span> <span id=\"en-NRSVCE-30944\" class=\"text John-14-14\"><sup><font color=\"grey\"><small>14</small></font></sup>If in my name you ask me for anything, I will do it.</span></p> <br/>\n",
        "<strong><font color=\"red\">John 14:15-31</font></strong><br/>\n" +
        "<p><span id=\"John-14-15\"><sup><font color=\"grey\"><small>15</small></font></sup>“If you love me, you will keep my commandments. </span> <span id=\"en-NRSVCE-30946\" class=\"text John-14-16\"><sup><font color=\"grey\"><small>16</small></font></sup>And I will ask the Father, and he will give you another Advocate, to be with you forever. </span> <span id=\"en-NRSVCE-30947\" class=\"text John-14-17\"><sup><font color=\"grey\"><small>17</small></font></sup>This is the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. You know him, because he abides with you, and he will be in you.</span></p> <p><span id=\"en-NRSVCE-30948\" class=\"text John-14-18\"><sup><font color=\"grey\"><small>18</small></font></sup>“I will not leave you orphaned; I am coming to you. </span> <span id=\"en-NRSVCE-30949\" class=\"text John-14-19\"><sup><font color=\"grey\"><small>19</small></font></sup>In a little while the world will no longer see me, but you will see me; because I live, you also will live. </span> <span id=\"en-NRSVCE-30950\" class=\"text John-14-20\"><sup><font color=\"grey\"><small>20</small></font></sup>On that day you will know that I am in my Father, and you in me, and I in you. </span> <span id=\"en-NRSVCE-30951\" class=\"text John-14-21\"><sup><font color=\"grey\"><small>21</small></font></sup>They who have my commandments and keep them are those who love me; and those who love me will be loved by my Father, and I will love them and reveal myself to them.” </span> <span id=\"en-NRSVCE-30952\" class=\"text John-14-22\"><sup><font color=\"grey\"><small>22</small></font></sup>Judas (not Iscariot) said to him, “Lord, how is it that you will reveal yourself to us, and not to the world?” </span> <span id=\"en-NRSVCE-30953\" class=\"text John-14-23\"><sup><font color=\"grey\"><small>23</small></font></sup>Jesus answered him, “Those who love me will keep my word, and my Father will love them, and we will come to them and make our home with them. </span> <span id=\"en-NRSVCE-30954\" class=\"text John-14-24\"><sup><font color=\"grey\"><small>24</small></font></sup>Whoever does not love me does not keep my words; and the word that you hear is not mine, but is from the Father who sent me.</span></p> <p><span id=\"en-NRSVCE-30955\" class=\"text John-14-25\"><sup><font color=\"grey\"><small>25</small></font></sup>“I have said these things to you while I am still with you. </span> <span id=\"en-NRSVCE-30956\" class=\"text John-14-26\"><sup><font color=\"grey\"><small>26</small></font></sup>But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you everything, and remind you of all that I have said to you. </span> <span id=\"en-NRSVCE-30957\" class=\"text John-14-27\"><sup><font color=\"grey\"><small>27</small></font></sup>Peace I leave with you; my peace I give to you. I do not give to you as the world gives. Do not let your hearts be troubled, and do not let them be afraid. </span> <span id=\"en-NRSVCE-30958\" class=\"text John-14-28\"><sup><font color=\"grey\"><small>28</small></font></sup>You heard me say to you, ‘I am going away, and I am coming to you.’ If you loved me, you would rejoice that I am going to the Father, because the Father is greater than I. </span> <span id=\"en-NRSVCE-30959\" class=\"text John-14-29\"><sup><font color=\"grey\"><small>29</small></font></sup>And now I have told you this before it occurs, so that when it does occur, you may believe. </span> <span id=\"en-NRSVCE-30960\" class=\"text John-14-30\"><sup><font color=\"grey\"><small>30</small></font></sup>I will no longer talk much with you, for the ruler of this world is coming. He has no power over me; </span> <span id=\"en-NRSVCE-30961\" class=\"text John-14-31\"><sup><font color=\"grey\"><small>31</small></font></sup>but I do as the Father has commanded me, so that the world may know that I love the Father. Rise, let us be on our way.</span></p> <br/>\n",
        "<strong><font color=\"red\">Psalms 118:21-29</font></strong><br/>\n" +
        "<p class=\"line\"><span id=\"Ps-118-21\"><sup><font color=\"grey\"><small>21</small></font></sup>I thank you that you have answered me</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-21\">and have become my salvation.</span></span><br><span id=\"Ps-118-22\"><sup><font color=\"grey\"><small>22</small></font></sup>The stone that the builders rejected</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-22\">has become the chief cornerstone.</span></span><br><span id=\"Ps-118-23\"><sup><font color=\"grey\"><small>23</small></font></sup>This is the <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span>’s doing;</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-23\">it is marvelous in our eyes.</span></span><br><span id=\"Ps-118-24\"><sup><font color=\"grey\"><small>24</small></font></sup>This is the day that the <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span> has made;</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-24\">let us rejoice and be glad in it.</span></span><br><span id=\"Ps-118-25\"><sup><font color=\"grey\"><small>25</small></font></sup>Save us, we beseech you, O <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span>!</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-25\">O <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span>, we beseech you, give us success!</span></span></p>  <p class=\"line\"><span id=\"Ps-118-26\"><sup><font color=\"grey\"><small>26</small></font></sup>Blessed is the one who comes in the name of the <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span>.</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-26\">We bless you from the house of the <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span>.</span></span><br><span id=\"Ps-118-27\"><sup><font color=\"grey\"><small>27</small></font></sup>The <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span> is God,</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-27\">and he has given us light.</span></span><br><span id=\"Ps-118-27\">Bind the festal procession with branches,</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-27\">up to the horns of the altar.</span></span></p></div> <div class=\"poetry top-1\"><p class=\"line\"><span id=\"Ps-118-28\"><sup><font color=\"grey\"><small>28</small></font></sup>You are my God, and I will give thanks to you;</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-28\">you are my God, I will extol you.</span></span></p></div> <div class=\"poetry top-1\"><p class=\"line\"><span id=\"Ps-118-29\"><sup><font color=\"grey\"><small>29</small></font></sup>O give thanks to the <span class=\"small-caps\" style=\"font-variant: small-caps\">Lord</span>, for he is good,</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Ps-118-29\">for his steadfast love endures forever.</span></span></p>",
        "<strong><font color=\"red\">Luke 22:39</font></strong><br/>\n" +
        "<span id=\"Luke-22-39\"><sup><font color=\"grey\"><small>39</small></font></sup>He came out and went, as was his custom, to the Mount of Olives; and the disciples followed him. </span><br/>\n" +
        "<strong><font color=\"red\">John 15-16</font></strong><br/>\n" +
        "<font color=\"grey\"><small>1</small></font></sup>“I am the true vine, and my Father is the vinegrower. </span> <span id=\"John-15-2\"><sup><font color=\"grey\"><small>2</small></font></sup>He removes every branch in me that bears no fruit. Every branch that bears fruit he prunes to make it bear more fruit. </span> <span id=\"John-15-3\"><sup><font color=\"grey\"><small>3</small></font></sup>You have already been cleansed by the word that I have spoken to you. </span> <span id=\"John-15-4\"><sup><font color=\"grey\"><small>4</small></font></sup>Abide in me as I abide in you. Just as the branch cannot bear fruit by itself unless it abides in the vine, neither can you unless you abide in me. </span> <span id=\"John-15-5\"><sup><font color=\"grey\"><small>5</small></font></sup>I am the vine, you are the branches. Those who abide in me and I in them bear much fruit, because apart from me you can do nothing. </span> <span id=\"John-15-6\"><sup><font color=\"grey\"><small>6</small></font></sup>Whoever does not abide in me is thrown away like a branch and withers; such branches are gathered, thrown into the fire, and burned. </span> <span id=\"John-15-7\"><sup><font color=\"grey\"><small>7</small></font></sup>If you abide in me, and my words abide in you, ask for whatever you wish, and it will be done for you. </span> <span id=\"John-15-8\"><sup><font color=\"grey\"><small>8</small></font></sup>My Father is glorified by this, that you bear much fruit and become my disciples. </span> <span id=\"John-15-9\"><sup><font color=\"grey\"><small>9</small></font></sup>As the Father has loved me, so I have loved you; abide in my love. </span> <span id=\"John-15-10\"><sup><font color=\"grey\"><small>10</small></font></sup>If you keep my commandments, you will abide in my love, just as I have kept my Father’s commandments and abide in his love. </span> <span id=\"John-15-11\"><sup><font color=\"grey\"><small>11</small></font></sup>I have said these things to you so that my joy may be in you, and that your joy may be complete.</span></p> <p><span id=\"John-15-12\"><sup><font color=\"grey\"><small>12</small></font></sup>“This is my commandment, that you love one another as I have loved you. </span> <span id=\"John-15-13\"><sup><font color=\"grey\"><small>13</small></font></sup>No one has greater love than this, to lay down one’s life for one’s friends. </span> <span id=\"John-15-14\"><sup><font color=\"grey\"><small>14</small></font></sup>You are my friends if you do what I command you. </span> <span id=\"John-15-15\"><sup><font color=\"grey\"><small>15</small></font></sup>I do not call you servants any longer, because the servant does not know what the master is doing; but I have called you friends, because I have made known to you everything that I have heard from my Father. </span> <span id=\"John-15-16\"><sup><font color=\"grey\"><small>16</small></font></sup>You did not choose me but I chose you. And I appointed you to go and bear fruit, fruit that will last, so that the Father will give you whatever you ask him in my name. </span> <span id=\"John-15-17\"><sup><font color=\"grey\"><small>17</small></font></sup>I am giving you these commands so that you may love one another.</span></p> <h3><span id=\"John-15-18\">The World’s Hatred</span></h3><p><span id=\"John-15-18\"><sup><font color=\"grey\"><small>18</small></font></sup>“If the world hates you, be aware that it hated me before it hated you. </span> <span id=\"John-15-19\"><sup><font color=\"grey\"><small>19</small></font></sup>If you belonged to the world, the world would love you as its own. Because you do not belong to the world, but I have chosen you out of the world—therefore the world hates you. </span> <span id=\"John-15-20\"><sup><font color=\"grey\"><small>20</small></font></sup>Remember the word that I said to you, ‘Servants are not greater than their master.’ If they persecuted me, they will persecute you; if they kept my word, they will keep yours also. </span> <span id=\"John-15-21\"><sup><font color=\"grey\"><small>21</small></font></sup>But they will do all these things to you on account of my name, because they do not know him who sent me. </span> <span id=\"John-15-22\"><sup><font color=\"grey\"><small>22</small></font></sup>If I had not come and spoken to them, they would not have sin; but now they have no excuse for their sin. </span> <span id=\"John-15-23\"><sup><font color=\"grey\"><small>23</small></font></sup>Whoever hates me hates my Father also. </span> <span id=\"John-15-24\"><sup><font color=\"grey\"><small>24</small></font></sup>If I had not done among them the works that no one else did, they would not have sin. But now they have seen and hated both me and my Father. </span> <span id=\"John-15-25\"><sup><font color=\"grey\"><small>25</small></font></sup>It was to fulfill the word that is written in their law, ‘They hated me without a cause.’</span></p> <p><span id=\"John-15-26\"><sup><font color=\"grey\"><small>26</small></font></sup>“When the Advocate comes, whom I will send to you from the Father, the Spirit of truth who comes from the Father, he will testify on my behalf. </span> <span id=\"John-15-27\"><sup><font color=\"grey\"><small>27</small></font></sup>You also are to testify because you have been with me from the beginning.</span></p> <p class=\"chapter-2\"><span id=\"John-16-1\"><sup><font color=\"grey\"><small>1</small></font></sup>“I have said these things to you to keep you from stumbling. </span> <span id=\"John-16-2\"><sup><font color=\"grey\"><small>2</small></font></sup>They will put you out of the synagogues. Indeed, an hour is coming when those who kill you will think that by doing so they are offering worship to God. </span> <span id=\"John-16-3\"><sup><font color=\"grey\"><small>3</small></font></sup>And they will do this because they have not known the Father or me. </span> <span id=\"John-16-4\"><sup><font color=\"grey\"><small>4</small></font></sup>But I have said these things to you so that when their hour comes you may remember that I told you about them.</span></p><h3><span id=\"John-16-4\">The Work of the Spirit</span></h3><p><span id=\"John-16-4\">“I did not say these things to you from the beginning, because I was with you. </span> <span id=\"John-16-5\"><sup><font color=\"grey\"><small>5</small></font></sup>But now I am going to him who sent me; yet none of you asks me, ‘Where are you going?’ </span> <span id=\"John-16-6\"><sup><font color=\"grey\"><small>6</small></font></sup>But because I have said these things to you, sorrow has filled your hearts. </span> <span id=\"John-16-7\"><sup><font color=\"grey\"><small>7</small></font></sup>Nevertheless I tell you the truth: it is to your advantage that I go away, for if I do not go away, the Advocate will not come to you; but if I go, I will send him to you. </span> <span id=\"John-16-8\"><sup><font color=\"grey\"><small>8</small></font></sup>And when he comes, he will prove the world wrong about sin and righteousness and judgment: </span> <span id=\"John-16-9\"><sup><font color=\"grey\"><small>9</small></font></sup>about sin, because they do not believe in me; </span> <span id=\"John-16-10\"><sup><font color=\"grey\"><small>10</small></font></sup>about righteousness, because I am going to the Father and you will see me no longer; </span> <span id=\"John-16-11\"><sup><font color=\"grey\"><small>11</small></font></sup>about judgment, because the ruler of this world has been condemned.</span></p> <p><span id=\"John-16-12\"><sup><font color=\"grey\"><small>12</small></font></sup>“I still have many things to say to you, but you cannot bear them now. </span> <span id=\"John-16-13\"><sup><font color=\"grey\"><small>13</small></font></sup>When the Spirit of truth comes, he will guide you into all the truth; for he will not speak on his own, but will speak whatever he hears, and he will declare to you the things that are to come. </span> <span id=\"John-16-14\"><sup><font color=\"grey\"><small>14</small></font></sup>He will glorify me, because he will take what is mine and declare it to you. </span> <span id=\"John-16-15\"><sup><font color=\"grey\"><small>15</small></font></sup>All that the Father has is mine. For this reason I said that he will take what is mine and declare it to you.</span></p> <h3><span id=\"John-16-16\">Sorrow Will Turn into Joy</span></h3><p><span id=\"John-16-16\"><sup><font color=\"grey\"><small>16</small></font></sup>“A little while, and you will no longer see me, and again a little while, and you will see me.” </span> <span id=\"John-16-17\"><sup><font color=\"grey\"><small>17</small></font></sup>Then some of his disciples said to one another, “What does he mean by saying to us, ‘A little while, and you will no longer see me, and again a little while, and you will see me’; and ‘Because I am going to the Father’?” </span> <span id=\"John-16-18\"><sup><font color=\"grey\"><small>18</small></font></sup>They said, “What does he mean by this ‘a little while’? We do not know what he is talking about.” </span> <span id=\"John-16-19\"><sup><font color=\"grey\"><small>19</small></font></sup>Jesus knew that they wanted to ask him, so he said to them, “Are you discussing among yourselves what I meant when I said, ‘A little while, and you will no longer see me, and again a little while, and you will see me’? </span> <span id=\"John-16-20\"><sup><font color=\"grey\"><small>20</small></font></sup>Very truly, I tell you, you will weep and mourn, but the world will rejoice; you will have pain, but your pain will turn into joy. </span> <span id=\"John-16-21\"><sup><font color=\"grey\"><small>21</small></font></sup>When a woman is in labor, she has pain, because her hour has come. But when her child is born, she no longer remembers the anguish because of the joy of having brought a human being into the world. </span> <span id=\"John-16-22\"><sup><font color=\"grey\"><small>22</small></font></sup>So you have pain now; but I will see you again, and your hearts will rejoice, and no one will take your joy from you. </span> <span id=\"John-16-23\"><sup><font color=\"grey\"><small>23</small></font></sup>On that day you will ask nothing of me. Very truly, I tell you, if you ask anything of the Father in my name, he will give it to you. </span> <span id=\"John-16-24\"><sup><font color=\"grey\"><small>24</small></font></sup>Until now you have not asked for anything in my name. Ask and you will receive, so that your joy may be complete.</span></p> <h3><span id=\"John-16-25\">Peace for the Disciples</span></h3><p><span id=\"John-16-25\"><sup><font color=\"grey\"><small>25</small></font></sup>“I have said these things to you in figures of speech. The hour is coming when I will no longer speak to you in figures, but will tell you plainly of the Father. </span> <span id=\"John-16-26\"><sup><font color=\"grey\"><small>26</small></font></sup>On that day you will ask in my name. I do not say to you that I will ask the Father on your behalf; </span> <span id=\"John-16-27\"><sup><font color=\"grey\"><small>27</small></font></sup>for the Father himself loves you, because you have loved me and have believed that I came from God. </span> <span id=\"John-16-28\"><sup><font color=\"grey\"><small>28</small></font></sup>I came from the Father and have come into the world; again, I am leaving the world and am going to the Father.”</span></p> <p><span id=\"John-16-29\"><sup><font color=\"grey\"><small>29</small></font></sup>His disciples said, “Yes, now you are speaking plainly, not in any figure of speech! </span> <span id=\"John-16-30\"><sup><font color=\"grey\"><small>30</small></font></sup>Now we know that you know all things, and do not need to have anyone question you; by this we believe that you came from God.” </span> <span id=\"John-16-31\"><sup><font color=\"grey\"><small>31</small></font></sup>Jesus answered them, “Do you now believe? </span> <span id=\"John-16-32\"><sup><font color=\"grey\"><small>32</small></font></sup>The hour is coming, indeed it has come, when you will be scattered, each one to his home, and you will leave me alone. Yet I am not alone because the Father is with me. </span> <span id=\"John-16-33\"><sup><font color=\"grey\"><small>33</small></font></sup>I have said this to you, so that in me you may have peace. In the world you face persecution. But take courage; I have conquered the world!”</span></p> <br/>\n",
        "<strong><font color=\"red\">John 17</font></strong><br/>\n" +
        "<p class=\"chapter-2\"><span id=\"John-17-1\"><sup><font color=\"grey\"><small>1</small></font></sup>After Jesus had spoken these words, he looked up to heaven and said, “Father, the hour has come; glorify your Son so that the Son may glorify you, </span> <span id=\"John-17-2\"><sup><font color=\"grey\"><small>2</small></font></sup>since you have given him authority over all people, to give eternal life to all whom you have given him. </span> <span id=\"John-17-3\"><sup><font color=\"grey\"><small>3</small></font></sup>And this is eternal life, that they may know you, the only true God, and Jesus Christ whom you have sent. </span> <span id=\"John-17-4\"><sup><font color=\"grey\"><small>4</small></font></sup>I glorified you on earth by finishing the work that you gave me to do. </span> <span id=\"John-17-5\"><sup><font color=\"grey\"><small>5</small></font></sup>So now, Father, glorify me in your own presence with the glory that I had in your presence before the world existed.</span></p> <p><span id=\"John-17-6\"><sup><font color=\"grey\"><small>6</small></font></sup>“I have made your name known to those whom you gave me from the world. They were yours, and you gave them to me, and they have kept your word. </span> <span id=\"John-17-7\"><sup><font color=\"grey\"><small>7</small></font></sup>Now they know that everything you have given me is from you; </span> <span id=\"John-17-8\"><sup><font color=\"grey\"><small>8</small></font></sup>for the words that you gave to me I have given to them, and they have received them and know in truth that I came from you; and they have believed that you sent me. </span> <span id=\"John-17-9\"><sup><font color=\"grey\"><small>9</small></font></sup>I am asking on their behalf; I am not asking on behalf of the world, but on behalf of those whom you gave me, because they are yours. </span> <span id=\"John-17-10\"><sup><font color=\"grey\"><small>10</small></font></sup>All mine are yours, and yours are mine; and I have been glorified in them. </span> <span id=\"John-17-11\"><sup><font color=\"grey\"><small>11</small></font></sup>And now I am no longer in the world, but they are in the world, and I am coming to you. Holy Father, protect them in your name that you have given me, so that they may be one, as we are one. </span> <span id=\"John-17-12\"><sup><font color=\"grey\"><small>12</small></font></sup>While I was with them, I protected them in your name that you have given me. I guarded them, and not one of them was lost except the one destined to be lost, so that the scripture might be fulfilled. </span> <span id=\"John-17-13\"><sup><font color=\"grey\"><small>13</small></font></sup>But now I am coming to you, and I speak these things in the world so that they may have my joy made complete in themselves. </span> <span id=\"John-17-14\"><sup><font color=\"grey\"><small>14</small></font></sup>I have given them your word, and the world has hated them because they do not belong to the world, just as I do not belong to the world. </span> <span id=\"John-17-15\"><sup><font color=\"grey\"><small>15</small></font></sup>I am not asking you to take them out of the world, but I ask you to protect them from the evil one. </span> <span id=\"John-17-16\"><sup><font color=\"grey\"><small>16</small></font></sup>They do not belong to the world, just as I do not belong to the world. </span> <span id=\"John-17-17\"><sup><font color=\"grey\"><small>17</small></font></sup>Sanctify them in the truth; your word is truth. </span> <span id=\"John-17-18\"><sup><font color=\"grey\"><small>18</small></font></sup>As you have sent me into the world, so I have sent them into the world. </span> <span id=\"John-17-19\"><sup><font color=\"grey\"><small>19</small></font></sup>And for their sakes I sanctify myself, so that they also may be sanctified in truth.</span></p> <p><span id=\"John-17-20\"><sup><font color=\"grey\"><small>20</small></font></sup>“I ask not only on behalf of these, but also on behalf of those who will believe in me through their word, </span> <span id=\"John-17-21\"><sup><font color=\"grey\"><small>21</small></font></sup>that they may all be one. As you, Father, are in me and I am in you, may they also be in us, so that the world may believe that you have sent me. </span> <span id=\"John-17-22\"><sup><font color=\"grey\"><small>22</small></font></sup>The glory that you have given me I have given them, so that they may be one, as we are one, </span> <span id=\"John-17-23\"><sup><font color=\"grey\"><small>23</small></font></sup>I in them and you in me, that they may become completely one, so that the world may know that you have sent me and have loved them even as you have loved me. </span> <span id=\"John-17-24\"><sup><font color=\"grey\"><small>24</small></font></sup>Father, I desire that those also, whom you have given me, may be with me where I am, to see my glory, which you have given me because you loved me before the foundation of the world.</span></p> <p><span id=\"John-17-25\"><sup><font color=\"grey\"><small>25</small></font></sup>“Righteous Father, the world does not know you, but I know you; and these know that you have sent me. </span> <span id=\"John-17-26\"><sup><font color=\"grey\"><small>26</small></font></sup>I made your name known to them, and I will make it known, so that the love with which you have loved me may be in them, and I in them.”</span></p> <br/>\n",
        "<strong><font color=\"red\">Mark 14:32-36</font></strong><br/>\n" +
        "<p><span id=\"Mark-14-32\"><sup><font color=\"grey\"><small>32</small></font></sup>They went to a place called Gethsemane; and he said to his disciples, “Sit here while I pray.” </span> <span id=\"Mark-14-33\"><sup><font color=\"grey\"><small>33</small></font></sup>He took with him Peter and James and John, and began to be distressed and agitated. </span> <span id=\"Mark-14-34\"><sup><font color=\"grey\"><small>34</small></font></sup>And he said to them, “I am deeply grieved, even to death; remain here, and keep awake.” </span> <span id=\"Mark-14-35\"><sup><font color=\"grey\"><small>35</small></font></sup>And going a little farther, he threw himself on the ground and prayed that, if it were possible, the hour might pass from him. </span> <span id=\"Mark-14-36\"><sup><font color=\"grey\"><small>36</small></font></sup>He said, “Abba, Father, for you all things are possible; remove this cup from me; yet, not what I want, but what you want.” </span> " +
        "<br/><strong><font color=\"red\">Luke 22:40</font></strong><br/>\n" +
        "<span id=\"Luke-22-40\"><sup><font color=\"grey\"><small>40</small></font></sup>When he reached the place, he said to them, “Pray that you may not come into the time of trial.” </span>",
        "<strong><font color=\"red\">Mark 14:37-40</font></strong><br/>\n" +
        "<span id=\"Mark-14-37\"><sup><font color=\"grey\"><small>37</small></font></sup>He came and found them sleeping; and he said to Peter, “Simon, are you asleep? Could you not keep awake one hour? </span> <span id=\"Mark-14-38\"><sup><font color=\"grey\"><small>38</small></font></sup>Keep awake and pray that you may not come into the time of trial; the spirit indeed is willing, but the flesh is weak.” </span> <span id=\"Mark-14-39\"><sup><font color=\"grey\"><small>39</small></font></sup>And again he went away and prayed, saying the same words. </span> <span id=\"Mark-14-40\"><sup><font color=\"grey\"><small>40</small></font></sup>And once more he came and found them sleeping, for their eyes were very heavy; and they did not know what to say to him. </span> " +
        "<br/><strong><font color=\"red\">Luke 22:43</font></strong><br/>\n" +
        "<span id=\"Luke-22-43\"><sup><font color=\"grey\"><small>43</small></font></sup>Then an angel from heaven appeared to him and gave him strength. </span>",
        "<strong><font color=\"red\">Mark 14:41-42</font></strong><br/>\n" +
        "<span id=\"Mark-14-41\"><sup><font color=\"grey\"><small>41</small></font></sup>He came a third time and said to them, “Are you still sleeping and taking your rest? Enough! The hour has come; the Son of Man is betrayed into the hands of sinners. </span> <span id=\"Mark-14-42\"><sup><font color=\"grey\"><small>42</small></font></sup>Get up, let us be going. See, my betrayer is at hand.”</span></p><br/>\n" +
        "<strong><font color=\"red\">Luke 22:47-51</font></strong><br/>\n" +
        "<p><span id=\"Luke-22-47\"><sup><font color=\"grey\"><small>47</small></font></sup>While he was still speaking, suddenly a crowd came, and the one called Judas, one of the twelve, was leading them. He approached Jesus to kiss him; </span> <span id=\"Luke-22-48\"><sup><font color=\"grey\"><small>48</small></font></sup>but Jesus said to him, “Judas, is it with a kiss that you are betraying the Son of Man?” </span> <span id=\"Luke-22-49\"><sup><font color=\"grey\"><small>49</small></font></sup>When those who were around him saw what was coming, they asked, “Lord, should we strike with the sword?” </span> <span id=\"Luke-22-50\"><sup><font color=\"grey\"><small>50</small></font></sup>Then one of them struck the slave of the high priest and cut off his right ear. </span> <span id=\"Luke-22-51\"><sup><font color=\"grey\"><small>51</small></font></sup>But Jesus said, “No more of this!” And he touched his ear and healed him. </span> <br/> " +
        "<strong><font color=\"red\">John 18:11</font></strong>" +
        "<span id=\"John-18-12\"><sup><font color=\"grey\"><small>12</small></font></sup>Jesus said to Peter, “Put your sword back into its sheath. Am I not to drink the cup that the Father has given me?”</span></p> <br/>\n" +
        "<strong><font color=\"red\">Luke 22:52-54</font></strong><br/>\n" +
        "<span id=\"Luke-22-52\"><sup><font color=\"grey\"><small>52</small></font></sup>Then Jesus said to the chief priests, the officers of the temple police, and the elders who had come for him, “Have you come out with swords and clubs as if I were a bandit? </span> <span id=\"Luke-22-53\"><sup><font color=\"grey\"><small>53</small></font></sup>When I was with you day after day in the temple, you did not lay hands on me. But this is your hour, and the power of darkness!”</span></p> <p><span id=\"Luke-22-54\"><sup><font color=\"grey\"><small>54</small></font></sup>Then they seized him and led him away, bringing him into the high priest’s house. But Peter was following at a distance. </span> <br/>" +
        "<strong><font color=\"red\">John 18:12-13</font></strong>" +
        "<p><span id=\"John-18-12\"><sup><font color=\"grey\"><small>12</small></font></sup>So the soldiers, their officer, and the Jewish police arrested Jesus and bound him. </span> <span id=\"John-18-13\"><sup><font color=\"grey\"><small>13</small></font></sup>First they took him to Annas, who was the father-in-law of Caiaphas, the high priest that year. </span> </p> <br/>" +
        "<br/><strong><font color=\"red\">Matthew 26:56</font></strong><br/>\n" +
        "<span id=\"Matt-26-56\"><sup><font color=\"grey\"><small>56</small></font></sup>But all this has taken place, so that the scriptures of the prophets may be fulfilled.” Then all the disciples deserted him and fled.</span></p> <br/>\n" +
        "<strong><font color=\"red\">Mark 14:27</font></strong><br/>\n" +
        "<span id=\"Mark-14-27\">And Jesus said to them, “You will all become deserters; for it is written, ‘I will strike the shepherd, and the sheep will be scattered.’</span>",
        "<strong><font color=\"red\">John 18:15-18</font></strong><br/>\n" +
        "<p><span id=\"text John-18-15\"><sup><font color=\"grey\"><small>15</small></font></sup>Simon Peter and another disciple followed Jesus. Since that disciple was known to the high priest, he went with Jesus into the courtyard of the high priest, </span> <span id=\"text John-18-16\"><sup><font color=\"grey\"><small>16</small></font></sup>but Peter was standing outside at the gate. So the other disciple, who was known to the high priest, went out, spoke to the woman who guarded the gate, and brought Peter in. </span> <span id=\"text John-18-17\"><sup><font color=\"grey\"><small>17</small></font></sup>The woman said to Peter, “You are not also one of this man’s disciples, are you?” He said, “I am not.” </span> <span id=\"text John-18-18\"> <sup><font color=\"grey\"><small>18</small></font></sup>Now the slaves and the police had made a charcoal fire because it was cold, and they were standing around it and warming themselves. Peter also was standing with them and warming himself.</span></p>",
        "<strong><font color=\"red\">Luke 22:55-62</font></strong><br/>\n" +
        " <span id=\"Luke-22-55\"><sup><font color=\"grey\"><small>55</small></font></sup>When they had kindled a fire in the middle of the courtyard and sat down together, Peter sat among them. </span> <span id=\"Luke-22-56\"><sup><font color=\"grey\"><small>56</small></font></sup>Then a servant-girl, seeing him in the firelight, stared at him and said, “This man also was with him.” </span> <span id=\"Luke-22-57\"><sup><font color=\"grey\"><small>57</small></font></sup>But he denied it, saying, “Woman, I do not know him.” </span> <span id=\"Luke-22-58\"><sup><font color=\"grey\"><small>58</small></font></sup>A little later someone else, on seeing him, said, “You also are one of them.” But Peter said, “Man, I am not!” </span> <span id=\"Luke-22-59\"><sup><font color=\"grey\"><small>59</small></font></sup>Then about an hour later still another kept insisting, “Surely this man also was with him; for he is a Galilean.” </span> <span id=\"Luke-22-60\"><sup><font color=\"grey\"><small>60</small></font></sup>But Peter said, “Man, I do not know what you are talking about!” At that moment, while he was still speaking, the cock crowed. </span> <span id=\"Luke-22-61\"><sup><font color=\"grey\"><small>61</small></font></sup>The Lord turned and looked at Peter. Then Peter remembered the word of the Lord, how he had said to him, “Before the cock crows today, you will deny me three times.” </span> <span id=\"Luke-22-62\"><sup><font color=\"grey\"><small>62</small></font></sup>And he went out and wept bitterly.</span></p> <br/>\n" +
        "<strong><font color=\"red\">Luke 22:31-32</font></strong><br/>\n" +
        "<p><span class=\"text Luke-22-31\"><sup><font color=\"grey\"><small>31</small></font></sup>“Simon, Simon, listen! Satan has demanded to sift all of you like wheat, </span> <span class=\"text Luke-22-32\" id=\"en-NRSVCE-30160\"><sup><font color=\"grey\"><small>32</small></font></sup>but I have prayed for you that your own faith may not fail; and you, when once you have turned back, strengthen your brothers.” </span</p>",
        "<strong><font color=\"red\">Matthew 26:57-68</font></strong><br/>\n" +
        "<sup><font color=\"grey\"><small>57</small></font></sup>Those who had arrested Jesus took him to Caiaphas the high priest, in whose house the scribes and the elders had gathered. </span> <span id=\"Matt-26-58\"><sup><font color=\"grey\"><small>58</small></font></sup>But Peter was following him at a distance, as far as the courtyard of the high priest; and going inside, he sat with the guards in order to see how this would end. </span> <span id=\"Matt-26-59\"><sup><font color=\"grey\"><small>59</small></font></sup>Now the chief priests and the whole council were looking for false testimony against Jesus so that they might put him to death, </span> <span id=\"Matt-26-60\"><sup><font color=\"grey\"><small>60</small></font></sup>but they found none, though many false witnesses came forward. At last two came forward </span> <span id=\"Matt-26-61\"><sup><font color=\"grey\"><small>61</small></font></sup>and said, “This fellow said, ‘I am able to destroy the temple of God and to build it in three days.’” </span> <span id=\"Matt-26-62\"><sup><font color=\"grey\"><small>62</small></font></sup>The high priest stood up and said, “Have you no answer? What is it that they testify against you?” </span> <span id=\"Matt-26-63\"><sup><font color=\"grey\"><small>63</small></font></sup>But Jesus was silent. Then the high priest said to him, “I put you under oath before the living God, tell us if you are the Messiah, the Son of God.” </span> <span id=\"Matt-26-64\"><sup><font color=\"grey\"><small>64</small></font></sup>Jesus said to him, “You have said so. But I tell you,</span></p><div class=\"poetry\"><p class=\"line\"><span id=\"Matt-26-64\">From now on you will see the Son of Man</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Matt-26-64\">seated at the right hand of Power</span></span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"Matt-26-64\">and coming on the clouds of heaven.”</span></span></p></div> <p class=\"first-line-none\"><span id=\"Matt-26-65\"><sup><font color=\"grey\"><small>65</small></font></sup>Then the high priest tore his clothes and said, “He has blasphemed! Why do we still need witnesses? You have now heard his blasphemy. </span> <span id=\"Matt-26-66\"><sup><font color=\"grey\"><small>66</small></font></sup>What is your verdict?” They answered, “He deserves death.” </span> <span id=\"Matt-26-67\"><sup><font color=\"grey\"><small>67</small></font></sup>Then they spat in his face and struck him; and some slapped him, </span> <span id=\"Matt-26-68\"><sup><font color=\"grey\"><small>68</small></font></sup>saying, “Prophesy to us, you Messiah! Who is it that struck you?”</span></p><br/>\n" +
        "<strong><font color=\"red\">Luke 22:63-64</font></strong><br/>\n" +
        "<p><span id=\"Luke-22-63\"><sup><font color=\"grey\"><small>63</small></font></sup>Now the men who were holding Jesus began to mock him and beat him; </span> <span id=\"Luke-22-64\"><sup><font color=\"grey\"><small>64</small></font></sup>they also blindfolded him and kept asking him, “Prophesy! Who is it that struck you?” </span> <span id=\"Luke-22-65\"><sup><font color=\"grey\"><small>65</small></font></sup>They kept heaping many other insults on him.</span></p>",
        "<strong><font color=\"red\">Luke 22:66-71</font></strong><br/>\n" +
        "<p><span id=\"Luke-22-66\"><sup><font color=\"grey\"><small>66</small></font></sup>When day came, the assembly of the elders of the people, both chief priests and scribes, gathered together, and they brought him to their council. </span> <span id=\"Luke-22-67\"><sup><font color=\"grey\"><small>67</small></font></sup>They said, “If you are the Messiah, tell us.” He replied, “If I tell you, you will not believe; </span> <span id=\"Luke-22-68\"><sup><font color=\"grey\"><small>68</small></font></sup>and if I question you, you will not answer. </span> <span id=\"Luke-22-69\"><sup><font color=\"grey\"><small>69</small></font></sup>But from now on the Son of Man will be seated at the right hand of the power of God.” </span> <span id=\"Luke-22-70\"><sup><font color=\"grey\"><small>70</small></font></sup>All of them asked, “Are you, then, the Son of God?” He said to them, “You say that I am.” </span> <span id=\"Luke-22-71\"><sup><font color=\"grey\"><small>71</small></font></sup>Then they said, “What further testimony do we need? We have heard it ourselves from his own lips!”</span></p>",
        "<strong><font color=\"red\">Matthew 27:1-2</font></strong><br/>\n" +
        "<p class=\"chapter-2\"><span id=\"Matt-27-1\"><sup><font color=\"grey\"><small>1</small></font></sup>When morning came, all the chief priests and the elders of the people conferred together against Jesus in order to bring about his death. </span> <span id=\"Matt-27-2\"><sup><font color=\"grey\"><small>2</small></font></sup>They bound him, led him away, and handed him over to Pilate the governor.</span></p><br/>\n" +
        "<strong><font color=\"red\">Mark 15:1-4</font></strong><br/>\n" +
        "<p class=\"chapter-2\"><span id=\"Mark-15-1\"><sup><font color=\"grey\"><small>1</small></font></sup>As soon as it was morning, the chief priests held a consultation with the elders and scribes and the whole council. They bound Jesus, led him away, and handed him over to Pilate. </span> <span id=\"Mark-15-2\"><sup><font color=\"grey\"><small>2</small></font></sup>Pilate asked him, “Are you the King of the Jews?” He answered him, “You say so.” </span> <span id=\"Mark-15-3\"><sup><font color=\"grey\"><small>3</small></font></sup>Then the chief priests accused him of many things. </span> <span id=\"Mark-15-4\"><sup><font color=\"grey\"><small>4</small></font></sup>Pilate asked him again, “Have you no answer? See how many charges they bring against you.” </span> <span id=\"Mark-15-5\"><sup><font color=\"grey\"><small>5</small></font></sup>But Jesus made no further reply, so that Pilate was amazed.</span></p><br/>\n" +
        "<strong><font color=\"red\">John 18:28</font></strong><br/>\n" +
        "<p><span id=\"John-18-28\"><sup><font color=\"grey\"><small>28</small></font></sup>Then they took Jesus from Caiaphas to Pilate’s headquarters. It was early in the morning. They themselves did not enter the headquarters, so as to avoid ritual defilement and to be able to eat the Passover. </span> <span id=\"John-18-29\"><sup><font color=\"grey\"><small>29</small></font></sup>So Pilate went out to them and said, “What accusation do you bring against this man?” </span> <span id=\"John-18-30\"><sup><font color=\"grey\"><small>30</small></font></sup>They answered, “If this man were not a criminal, we would not have handed him over to you.” </span> <span id=\"John-18-31\"><sup><font color=\"grey\"><small>31</small></font></sup>Pilate said to them, “Take him yourselves and judge him according to your law.” The Jews replied, “We are not permitted to put anyone to death.” </span> <span id=\"John-18-32\"><sup><font color=\"grey\"><small>32</small></font></sup>(This was to fulfill what Jesus had said when he indicated the kind of death he was to die.)</span></p> <span id=\"John-18-29\"><sup><font color=\"grey\"><small>29</small></font></sup>So Pilate went out to them and said, “What accusation do you bring against this man?” </span> <span id=\"John-18-30\"><sup><font color=\"grey\"><small>30</small></font></sup>They answered, “If this man were not a criminal, we would not have handed him over to you.” </span> <span id=\"John-18-31\"><sup><font color=\"grey\"><small>31</small></font></sup>Pilate said to them, “Take him yourselves and judge him according to your law.” The Jews replied, “We are not permitted to put anyone to death.” </span> <span id=\"John-18-32\"><sup><font color=\"grey\"><small>32</small></font></sup>(This was to fulfill what Jesus had said when he indicated the kind of death he was to die.)</span></p> <p><span id=\"John-18-33\"><sup><font color=\"grey\"><small>33</small></font></sup>Then Pilate entered the headquarters again, summoned Jesus, and asked him, “Are you the King of the Jews?” </span> <span id=\"John-18-34\"><sup><font color=\"grey\"><small>34</small></font></sup>Jesus answered, “Do you ask this on your own, or did others tell you about me?” </span> <span id=\"John-18-35\"><sup><font color=\"grey\"><small>35</small></font></sup>Pilate replied, “I am not a Jew, am I? Your own nation and the chief priests have handed you over to me. What have you done?” </span> <span id=\"John-18-36\"><sup><font color=\"grey\"><small>36</small></font></sup>Jesus answered, “My kingdom is not from this world. If my kingdom were from this world, my followers would be fighting to keep me from being handed over to the Jews. But as it is, my kingdom is not from here.” </span> <span id=\"John-18-37\"><sup><font color=\"grey\"><small>37</small></font></sup>Pilate asked him, “So you are a king?” Jesus answered, “You say that I am a king. For this I was born, and for this I came into the world, to testify to the truth. Everyone who belongs to the truth listens to my voice.” </span> <span id=\"John-18-38\"><sup><font color=\"grey\"><small>38</small></font></sup>Pilate asked him, “What is truth?”</span></p><p><span id=\"John-18-38\">After he had said this, he went out to the Jews again and told them, “I find no case against him. </span> " +
        "<br/><strong><font color=\"red\">Luke 23:1-4</font></strong><br/>\n" +
        "<p class=\"chapter-2\"><span id=\"Luke-23-1\"><sup><font color=\"grey\"><small>1</small></font></sup>Then the assembly rose as a body and brought Jesus before Pilate. </span> <span id=\"Luke-23-2\"><sup><font color=\"grey\"><small>2</small></font></sup>They began to accuse him, saying, “We found this man perverting our nation, forbidding us to pay taxes to the emperor, and saying that he himself is the Messiah, a king.”  </span> <span id=\"Luke-23-3\"><sup><font color=\"grey\"><small>3</small></font></sup>Then Pilate asked him, “Are you the king of the Jews?” He answered, “You say so.” </span> <span id=\"Luke-23-4\"><sup><font color=\"grey\"><small>4</small></font></sup>Then Pilate said to the chief priests and the crowds, “I find no basis for an accusation against this man.” </span> ",
        "<strong><font color=\"red\">Luke 23:5-12</font></strong><br/>\n" +
        "<span id=\"Luke-23-5\"><sup><font color=\"grey\"><small>5</small></font></sup>But they were insistent and said, “He stirs up the people by teaching throughout all Judea, from Galilee where he began even to this place.”</span></p> <p><span id=\"Luke-23-6\"><sup><font color=\"grey\"><small>6</small></font></sup>When Pilate heard this, he asked whether the man was a Galilean. </span> <span id=\"Luke-23-7\"><sup><font color=\"grey\"><small>7</small></font></sup>And when he learned that he was under Herod’s jurisdiction, he sent him off to Herod, who was himself in Jerusalem at that time. </span> <span id=\"Luke-23-8\"><sup><font color=\"grey\"><small>8</small></font></sup>When Herod saw Jesus, he was very glad, for he had been wanting to see him for a long time, because he had heard about him and was hoping to see him perform some sign. </span> <span id=\"Luke-23-9\"><sup><font color=\"grey\"><small>9</small></font></sup>He questioned him at some length, but Jesus gave him no answer. </span> <span id=\"Luke-23-10\"><sup><font color=\"grey\"><small>10</small></font></sup>The chief priests and the scribes stood by, vehemently accusing him. </span> <span id=\"Luke-23-11\"><sup><font color=\"grey\"><small>11</small></font></sup>Even Herod with his soldiers treated him with contempt and mocked him; then he put an elegant robe on him, and sent him back to Pilate. </span> <span id=\"Luke-23-12\"><sup><font color=\"grey\"><small>12</small></font></sup>That same day Herod and Pilate became friends with each other; before this they had been enemies.</span></p>",
        "<strong><font color=\"red\">Matthew 27:15-23</font></strong><br/>\n" +
        "<p><span id=\"Matt-27-15\"><sup><font color=\"grey\"><small>15</small></font></sup>Now at the festival the governor was accustomed to release a prisoner for the crowd, anyone whom they wanted. </span> <span id=\"Matt-27-16\"><sup><font color=\"grey\"><small>16</small></font></sup>At that time they had a notorious prisoner, called Jesus Barabbas. </span> <span id=\"Matt-27-17\"><sup><font color=\"grey\"><small>17</small></font></sup>So after they had gathered, Pilate said to them, “Whom do you want me to release for you, Jesus Barabbas or Jesus who is called the Messiah?” </span> <span id=\"Matt-27-18\"><sup><font color=\"grey\"><small>18</small></font></sup>For he realized that it was out of jealousy that they had handed him over. </span> <span id=\"Matt-27-19\"><sup><font color=\"grey\"><small>19</small></font></sup>While he was sitting on the judgment seat, his wife sent word to him, “Have nothing to do with that innocent man, for today I have suffered a great deal because of a dream about him.” </span> <span id=\"Matt-27-20\"><sup><font color=\"grey\"><small>20</small></font></sup>Now the chief priests and the elders persuaded the crowds to ask for Barabbas and to have Jesus killed. </span> <span id=\"Matt-27-21\"><sup><font color=\"grey\"><small>21</small></font></sup>The governor again said to them, “Which of the two do you want me to release for you?” And they said, “Barabbas.” </span> <span id=\"Matt-27-22\"><sup><font color=\"grey\"><small>22</small></font></sup>Pilate said to them, “Then what should I do with Jesus who is called the Messiah?” All of them said, “Let him be crucified!” </span> <span id=\"Matt-27-23\"><sup><font color=\"grey\"><small>23</small></font></sup>Then he asked, “Why, what evil has he done?” But they shouted all the more, “Let him be crucified!”</span></p> " +
        "<strong><font color=\"red\">Mark 15:6-15</font></strong><br/>\n" +
        "<p><span id=\"Mark-15-6\"><sup><font color=\"grey\"><small>6</small></font></sup>Now at the festival he used to release a prisoner for them, anyone for whom they asked. </span> <span id=\"Mark-15-7\"><sup><font color=\"grey\"><small>7</small></font></sup>Now a man called Barabbas was in prison with the rebels who had committed murder during the insurrection. </span> <span id=\"Mark-15-8\"><sup><font color=\"grey\"><small>8</small></font></sup>So the crowd came and began to ask Pilate to do for them according to his custom. </span> <span id=\"Mark-15-9\"><sup><font color=\"grey\"><small>9</small></font></sup>Then he answered them, “Do you want me to release for you the King of the Jews?” </span> <span id=\"Mark-15-10\"><sup><font color=\"grey\"><small>10</small></font></sup>For he realized that it was out of jealousy that the chief priests had handed him over. </span> <span id=\"Mark-15-11\"><sup><font color=\"grey\"><small>11</small></font></sup>But the chief priests stirred up the crowd to have him release Barabbas for them instead. </span> <span id=\"Mark-15-12\"><sup><font color=\"grey\"><small>12</small></font></sup>Pilate spoke to them again, “Then what do you wish me to do with the man you call the King of the Jews?” </span> <span id=\"Mark-15-13\"><sup><font color=\"grey\"><small>13</small></font></sup>They shouted back, “Crucify him!” </span> <span id=\"Mark-15-14\"><sup><font color=\"grey\"><small>14</small></font></sup>Pilate asked them, “Why, what evil has he done?” But they shouted all the more, “Crucify him!” </span> <span id=\"Mark-15-15\"><sup><font color=\"grey\"><small>15</small></font></sup>So Pilate, wishing to satisfy the crowd, released Barabbas for them; and after flogging Jesus, he handed him over to be crucified.</span></p> " +
        "<strong><font color=\"red\">Luke 23:13-25</font></strong><br/>\n" +
        "<p><span id=\"Luke-23-13\"><sup><font color=\"grey\"><small>13</small></font></sup>Pilate then called together the chief priests, the leaders, and the people, </span> <span id=\"Luke-23-14\"><sup><font color=\"grey\"><small>14</small></font></sup>and said to them, “You brought me this man as one who was perverting the people; and here I have examined him in your presence and have not found this man guilty of any of your charges against him. </span> <span id=\"Luke-23-15\"><sup><font color=\"grey\"><small>15</small></font></sup>Neither has Herod, for he sent him back to us. Indeed, he has done nothing to deserve death. </span> <span id=\"Luke-23-16\"><sup><font color=\"grey\"><small>16</small></font></sup>I will therefore have him flogged and release him.”</span></p> <p><span id=\"Luke-23-18\"><sup><font color=\"grey\"><small>18</small></font></sup>Then they all shouted out together, “Away with this fellow! Release Barabbas for us!” </span> <span id=\"Luke-23-19\"><sup><font color=\"grey\"><small>19</small></font></sup>(This was a man who had been put in prison for an insurrection that had taken place in the city, and for murder.) </span> <span id=\"Luke-23-20\"><sup><font color=\"grey\"><small>20</small></font></sup>Pilate, wanting to release Jesus, addressed them again; </span> <span id=\"Luke-23-21\"><sup><font color=\"grey\"><small>21</small></font></sup>but they kept shouting, “Crucify, crucify him!” </span> <span id=\"Luke-23-22\"><sup><font color=\"grey\"><small>22</small></font></sup>A third time he said to them, “Why, what evil has he done? I have found in him no ground for the sentence of death; I will therefore have him flogged and then release him.” </span> <span id=\"Luke-23-23\"><sup><font color=\"grey\"><small>23</small></font></sup>But they kept urgently demanding with loud shouts that he should be crucified; and their voices prevailed. </span> <span id=\"Luke-23-24\"><sup><font color=\"grey\"><small>24</small></font></sup>So Pilate gave his verdict that their demand should be granted. </span> <span id=\"Luke-23-25\"><sup><font color=\"grey\"><small>25</small></font></sup>He released the man they asked for, the one who had been put in prison for insurrection and murder, and he handed Jesus over as they wished.</span></p> " +
        "<strong><font color=\"red\">John 18:39-40</font></strong><br/>\n" +
        "<span id=\"John-18-39\"><sup><font color=\"grey\"><small>39</small></font></sup>But you have a custom that I release someone for you at the Passover. Do you want me to release for you the King of the Jews?” </span> <span id=\"John-18-40\"><sup><font color=\"grey\"><small>40</small></font></sup>They shouted in reply, “Not this man, but Barabbas!” Now Barabbas was a bandit.</span></p>  ",
        "<strong><font color=\"red\">John 19:1-16</font></strong><br/>\n" +
        "<p class=\"chapter-2\"><span id=\"John-19-1\"><sup><font color=\"grey\"><small>1</small></font></sup>Then Pilate took Jesus and had him flogged. </span> <span id=\"John-19-2\"><sup><font color=\"grey\"><small>2</small></font></sup>And the soldiers wove a crown of thorns and put it on his head, and they dressed him in a purple robe. </span> <span id=\"John-19-3\"><sup><font color=\"grey\"><small>3</small></font></sup>They kept coming up to him, saying, “Hail, King of the Jews!” and striking him on the face. </span> <span id=\"John-19-4\"><sup><font color=\"grey\"><small>4</small></font></sup>Pilate went out again and said to them, “Look, I am bringing him out to you to let you know that I find no case against him.” </span> <span id=\"John-19-5\"><sup><font color=\"grey\"><small>5</small></font></sup>So Jesus came out, wearing the crown of thorns and the purple robe. Pilate said to them, “Here is the man!” </span> <span id=\"John-19-6\"><sup><font color=\"grey\"><small>6</small></font></sup>When the chief priests and the police saw him, they shouted, “Crucify him! Crucify him!” Pilate said to them, “Take him yourselves and crucify him; I find no case against him.” </span> <span id=\"John-19-7\"><sup><font color=\"grey\"><small>7</small></font></sup>The Jews answered him, “We have a law, and according to that law he ought to die because he has claimed to be the Son of God.”</span></p> <p><span id=\"John-19-8\"><sup><font color=\"grey\"><small>8</small></font></sup>Now when Pilate heard this, he was more afraid than ever. </span> <span id=\"John-19-9\"><sup><font color=\"grey\"><small>9</small></font></sup>He entered his headquarters again and asked Jesus, “Where are you from?” But Jesus gave him no answer. </span> <span id=\"John-19-10\"><sup><font color=\"grey\"><small>10</small></font></sup>Pilate therefore said to him, “Do you refuse to speak to me? Do you not know that I have power to release you, and power to crucify you?” </span> <span id=\"John-19-11\"><sup><font color=\"grey\"><small>11</small></font></sup>Jesus answered him, “You would have no power over me unless it had been given you from above; therefore the one who handed me over to you is guilty of a greater sin.” </span> <span id=\"John-19-12\"><sup><font color=\"grey\"><small>12</small></font></sup>From then on Pilate tried to release him, but the Jews cried out, “If you release this man, you are no friend of the emperor. Everyone who claims to be a king sets himself against the emperor.”</span></p> <p><span id=\"John-19-13\"><sup><font color=\"grey\"><small>13</small></font></sup>When Pilate heard these words, he brought Jesus outside and sat on the judge’s bench at a place called The Stone Pavement, or in Hebrew Gabbatha. </span> <span id=\"John-19-14\"><sup><font color=\"grey\"><small>14</small></font></sup>Now it was the day of Preparation for the Passover; and it was about noon. He said to the Jews, “Here is your King!” </span> <span id=\"John-19-15\"><sup><font color=\"grey\"><small>15</small></font></sup>They cried out, “Away with him! Away with him! Crucify him!” Pilate asked them, “Shall I crucify your King?” The chief priests answered, “We have no king but the emperor.” </span> <span id=\"John-19-16\"><sup><font color=\"grey\"><small>16</small></font></sup>Then he handed him over to them to be crucified.</span></p><br/>\n" +
        "<strong><font color=\"red\">Matthew 27:24-26</font></strong><br/>\n" +
        "<p><span id=\"Matt-27-24\"><sup><font color=\"grey\"><small>24</small></font></sup>So when Pilate saw that he could do nothing, but rather that a riot was beginning, he took some water and washed his hands before the crowd, saying, “I am innocent of this man’s blood; see to it yourselves.” </span> <span id=\"Matt-27-25\"><sup><font color=\"grey\"><small>25</small></font></sup>Then the people as a whole answered, “His blood be on us and on our children!” </span> <span id=\"Matt-27-26\"><sup><font color=\"grey\"><small>26</small></font></sup>So he released Barabbas for them; and after flogging Jesus, he handed him over to be crucified.</span></p>",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<p><span id=\"Matt-27-27\"><sup><font color=\"grey\"><small>27</small></font></sup>Then the soldiers of the governor took Jesus into the governor’s headquarters, and they gathered the whole cohort around him. </span> <span id=\"Matt-27-28\"><sup><font color=\"grey\"><small>28</small></font></sup>They stripped him and put a scarlet robe on him, </span> <span id=\"Matt-27-29\"><sup><font color=\"grey\"><small>29</small></font></sup>and after twisting some thorns into a crown, they put it on his head. They put a reed in his right hand and knelt before him and mocked him, saying, “Hail, King of the Jews!” </span> <span id=\"Matt-27-30\"><sup><font color=\"grey\"><small>30</small></font></sup>They spat on him, and took the reed and struck him on the head. </span>" +
        "<p><span id=\"Mark-15-16\"><sup><font color=\"grey\"><small>16</small></font></sup>Then the soldiers led him into the courtyard of the palace (that is, the governor’s headquarters); and they called together the whole cohort. </span> <span id=\"Mark-15-17\"><sup><font color=\"grey\"><small>17</small></font></sup>And they clothed him in a purple cloak; and after twisting some thorns into a crown, they put it on him. </span> <span id=\"Mark-15-18\"><sup><font color=\"grey\"><small>18</small></font></sup>And they began saluting him, “Hail, King of the Jews!” </span> <span id=\"Mark-15-19\"><sup><font color=\"grey\"><small>19</small></font></sup>They struck his head with a reed, spat upon him, and knelt down in homage to him. </span>",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        " <span id=\"Matt-27-31\"><sup><font color=\"grey\"><small>31</small></font></sup>After mocking him, they stripped him of the robe and put his own clothes on him. Then they led him away to crucify him.</span></p><br/>\n" +
        " <span id=\"Mark-15-20\"><sup><font color=\"grey\"><small>20</small></font></sup>After mocking him, they stripped him of the purple cloak and put his own clothes on him. Then they led him out to crucify him.</span></p><br/>\n" +
        " <p><span id=\"John-19-16\">So they took Jesus; </span> <span id=\"John-19-17\"><sup><font color=\"grey\"><small>17</small></font></sup>and carrying the cross by himself, he went out to what is called The Place of the Skull, which in Hebrew is called Golgotha. </span><br/>\n",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<p><span id=\"Mark-15-21\"><sup><font color=\"grey\"><small>21</small></font></sup>They compelled a passer-by, who was coming in from the country, to carry his cross; it was Simon of Cyrene, the father of Alexander and Rufus. </span>" +
        "<span id=\"Luke-23-26\"><sup><font color=\"grey\"><small>26</small></font></sup>As they led him away, they seized a man, Simon of Cyrene, who was coming from the country, and they laid the cross on him, and made him carry it behind Jesus. </span>" +
        "<p><span id=\"Luke-23-32\"><sup><font color=\"grey\"><small>32</small></font></sup>Two others also, who were criminals, were led away to be put to death with him. </span> ",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "  <span id=\"Luke-23-27\"><sup><font color=\"grey\"><small>27</small></font></sup>A great number of the people followed him, and among them were women who were beating their breasts and wailing for him. </span> <span id=\"Luke-23-28\"><sup><font color=\"grey\"><small>28</small></font></sup>But Jesus turned to them and said, “Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children. </span> <span id=\"Luke-23-29\"><sup><font color=\"grey\"><small>29</small></font></sup>For the days are surely coming when they will say, ‘Blessed are the barren, and the wombs that never bore, and the breasts that never nursed.’ </span> <span id=\"Luke-23-30\"><sup><font color=\"grey\"><small>30</small></font></sup>Then they will begin to say to the mountains, ‘Fall on us’; and to the hills, ‘Cover us.’ </span> <span id=\"Luke-23-31\"><sup><font color=\"grey\"><small>31</small></font></sup>For if they do this when the wood is green, what will happen when it is dry?”</span></p> ",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<span id=\"Mark-15-22\"><sup><font color=\"grey\"><small>22</small></font></sup>Then they brought Jesus to the place called Golgotha (which means the place of a skull). </span> <span id=\"Mark-15-23\"><sup><font color=\"grey\"><small>23</small></font></sup>And they offered him wine mixed with myrrh; but he did not take it. </span> <br/>\n" +
        "<span id=\"Matt-27-33\"><sup><font color=\"grey\"><small>33</small></font></sup>And when they came to a place called Golgotha (which means Place of a Skull), </span> <span id=\"Matt-27-34\"><sup><font color=\"grey\"><small>34</small></font></sup>they offered him wine to drink, mixed with gall; but when he tasted it, he would not drink it. </span> <br/>\n" +
        "<span id=\"Luke-23-33\"><sup><font color=\"grey\"><small>33</small></font></sup>When they came to the place that is called The Skull, they crucified Jesus there with the criminals, one on his right and one on his left. </span> <br/>\n",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<span id=\"John-19-18\"><sup><font color=\"grey\"><small>18</small></font></sup>There they crucified him, and with him two others, one on either side, with Jesus between them. </span><br/>\n" +
        "<span id=\"Mark-15-24\"><sup><font color=\"grey\"><small>24</small></font></sup>And they crucified him, and divided his clothes among them, casting lots to decide what each should take.</span></p> <p><span id=\"Mark-15-25\"><sup><font color=\"grey\"><small>25</small></font></sup>It was nine o’clock in the morning when they crucified him. </span><br/>\n" +
        "<span id=\"Matt-27-35\"><sup><font color=\"grey\"><small>35</small></font></sup>And when they had crucified him, they divided his clothes among themselves by casting lots; </span> <span id=\"Matt-27-36\"><sup><font color=\"grey\"><small>36</small></font></sup>then they sat down there and kept watch over him. </span> <br/>\n" +
        " <span id=\"John-19-19\"><sup><font color=\"grey\"><small>19</small></font></sup>Pilate also had an inscription written and put on the cross. It read, “Jesus of Nazareth, the King of the Jews.” </span> <span id=\"John-19-20\"><sup><font color=\"grey\"><small>20</small></font></sup>Many of the Jews read this inscription, because the place where Jesus was crucified was near the city; and it was written in Hebrew, in Latin, and in Greek. </span> <span id=\"John-19-21\"><sup><font color=\"grey\"><small>21</small></font></sup>Then the chief priests of the Jews said to Pilate, “Do not write, ‘The King of the Jews,’ but, ‘This man said, I am King of the Jews.’” </span> <span id=\"John-19-22\"><sup><font color=\"grey\"><small>22</small></font></sup>Pilate answered, “What I have written I have written.” </span> <span id=\"John-19-23\"><sup><font color=\"grey\"><small>23</small></font></sup>When the soldiers had crucified Jesus, they took his clothes and divided them into four parts, one for each soldier. They also took his tunic; now the tunic was seamless, woven in one piece from the top. </span> <span id=\"John-19-24\"><sup><font color=\"grey\"><small>24</small></font></sup>So they said to one another, “Let us not tear it, but cast lots for it to see who will get it.” This was to fulfill what the scripture says,</span></p><div class=\"poetry\"><p class=\"line\"><span id=\"John-19-24\">“They divided my clothes among themselves,</span><br><span class=\"indent-1\"><span class=\"indent-1-breaks\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id=\"John-19-24\">and for my clothing they cast lots.”</span></span></p></div> <p class=\"first-line-none\"><span id=\"John-19-25\"><sup><font color=\"grey\"><small>25</small></font></sup>And that is what the soldiers did.</span></p>",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<span id=\"Forgive-them-Luke-23-34\">[[<sup><font color=\"grey\"><small>34</small></font></sup>Then Jesus said, “Father, forgive them; for they do not know what they are doing.”]] And they cast lots to divide his clothing. </span> <span id=\"Luke-23-35\"><sup><font color=\"grey\"><small>35</small></font></sup>And the people stood by, watching; but the leaders scoffed at him, saying, “He saved others; let him save himself if he is the Messiah of God, his chosen one!” </span> <span id=\"Luke-23-36\"><sup><font color=\"grey\"><small>36</small></font></sup>The soldiers also mocked him, coming up and offering him sour wine, </span> <span id=\"Luke-23-37\"><sup><font color=\"grey\"><small>37</small></font></sup>and saying, “If you are the King of the Jews, save yourself!” </span> <span id=\"Luke-23-38\"><sup><font color=\"grey\"><small>38</small></font></sup>There was also an inscription over him, “This is the King of the Jews.”</span></p> <br/>\n" +
        "<span id=\"Matt-27-37\"><sup><font color=\"grey\"><small>37</small></font></sup>Over his head they put the charge against him, which read, “This is Jesus, the King of the Jews.”</span></p> <p><span id=\"Matt-27-38\"><sup><font color=\"grey\"><small>38</small></font></sup>Then two bandits were crucified with him, one on his right and one on his left. </span> <span id=\"Matt-27-39\"><sup><font color=\"grey\"><small>39</small></font></sup>Those who passed by derided him, shaking their heads </span> <span id=\"Matt-27-40\"><sup><font color=\"grey\"><small>40</small></font></sup>and saying, “You who would destroy the temple and build it in three days, save yourself! If you are the Son of God, come down from the cross.” </span> <span id=\"Matt-27-41\"><sup><font color=\"grey\"><small>41</small></font></sup>In the same way the chief priests also, along with the scribes and elders, were mocking him, saying, </span> <span id=\"Matt-27-42\"><sup><font color=\"grey\"><small>42</small></font></sup>“He saved others; he cannot save himself. He is the King of Israel; let him come down from the cross now, and we will believe in him. </span> <span id=\"Matt-27-43\"><sup><font color=\"grey\"><small>43</small></font></sup>He trusts in God; let God deliver him now, if he wants to; for he said, ‘I am God’s Son.’” </span> <span id=\"Matt-27-44\"><sup><font color=\"grey\"><small>44</small></font></sup>The bandits who were crucified with him also taunted him in the same way.</span></p> <br/>\n" +
        "<span id=\"Mark-15-26\"><sup><font color=\"grey\"><small>26</small></font></sup>The inscription of the charge against him read, “The King of the Jews.” </span> <span id=\"Mark-15-27\"><sup><font color=\"grey\"><small>27</small></font></sup>And with him they crucified two bandits, one on his right and one on his left. </span> <span id=\"Mark-15-29\"><sup><font color=\"grey\"><small>29</small></font></sup>Those who passed by derided him, shaking their heads and saying, “Aha! You who would destroy the temple and build it in three days, </span> <span id=\"Mark-15-30\"><sup><font color=\"grey\"><small>30</small></font></sup>save yourself, and come down from the cross!” </span> <span id=\"Mark-15-31\"><sup><font color=\"grey\"><small>31</small></font></sup>In the same way the chief priests, along with the scribes, were also mocking him among themselves and saying, “He saved others; he cannot save himself. </span> <span id=\"Mark-15-32\"><sup><font color=\"grey\"><small>32</small></font></sup>Let the Messiah, the King of Israel, come down from the cross now, so that we may see and believe.” Those who were crucified with him also taunted him.</span></p> ",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<p><span id=\"Into-Your-Kingdom-Luke-23-39\"><sup><font color=\"grey\"><small>39</small></font></sup>One of the criminals who were hanged there kept deriding him and saying, “Are you not the Messiah? Save yourself and us!” </span> <span id=\"Luke-23-40\"><sup><font color=\"grey\"><small>40</small></font></sup>But the other rebuked him, saying, “Do you not fear God, since you are under the same sentence of condemnation? </span> <span id=\"Luke-23-41\"><sup><font color=\"grey\"><small>41</small></font></sup>And we indeed have been condemned justly, for we are getting what we deserve for our deeds, but this man has done nothing wrong.” </span> <span id=\"Luke-23-42\"><sup><font color=\"grey\"><small>42</small></font></sup>Then he said, “Jesus, remember me when you come into your kingdom.” </span> <span id=\"Luke-23-43\"><sup><font color=\"grey\"><small>43</small></font></sup>He replied, “Truly I tell you, today you will be with me in Paradise.”</span></p> ",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<p><span id=\"Mark-15-33\"><sup><font color=\"grey\"><small>33</small></font></sup>When it was noon, darkness came over the whole land until three in the afternoon. </span> ",
        "<span id=\"Matt-27-46\"><sup><font color=\"grey\"><small>46</small></font></sup>And about three o’clock Jesus cried with a loud voice, “Eli, Eli, lema sabachthani?” that is, “My God, my God, why have you forsaken me?” </span> " +
        "<span id=\"Matt-27-47\"><sup><font color=\"grey\"><small>47</small></font></sup>When some of the bystanders heard it, they said, “This man is calling for Elijah.” </span> <span id=\"Matt-27-48\"><sup><font color=\"grey\"><small>48</small></font></sup>At once one of them ran and got a sponge, filled it with sour wine, put it on a stick, and gave it to him to drink. </span> <span id=\"Matt-27-49\"><sup><font color=\"grey\"><small>49</small></font></sup>But the others said, “Wait, let us see whether Elijah will come to save him.” </span>" +
        "<span id=\\\"Mark-15-34\\\"><sup><font color=\\\"grey\\\"><small>34</small></font></sup>At three o’clock Jesus cried out with a loud voice, “Eloi, Eloi, lema sabachthani?” which means, “My God, my God, why have you forsaken me?” </span> <span id=\\\"Mark-15-35\\\"><sup><font color=\\\"grey\\\"><small>35</small></font></sup>When some of the bystanders heard it, they said, “Listen, he is calling for Elijah.” </span> <span id=\\\"Mark-15-36\\\"><sup><font color=\\\"grey\\\"><small>36</small></font></sup>And someone ran, filled a sponge with sour wine, put it on a stick, and gave it to him to drink, saying, “Wait, let us see whether Elijah will come to take him down.” </span><br/>\n" +
        "<span id=\"Matt-27-51\"><sup><font color=\"grey\"><small>51</small></font></sup>At that moment the curtain of the temple was torn in two, from top to bottom. The earth shook, and the rocks were split. </span> <span id=\"Matt-27-52\"><sup><font color=\"grey\"><small>52</small></font></sup>The tombs also were opened, and many bodies of the saints who had fallen asleep were raised. </span> <span id=\"Matt-27-53\"><sup><font color=\"grey\"><small>53</small></font></sup>After his resurrection they came out of the tombs and entered the holy city and appeared to many. </span> " +
        "<span id=\"Matt-27-54\"><sup><font color=\"grey\"><small>54</small></font></sup>Now when the centurion and those with him, who were keeping watch over Jesus, saw the earthquake and what took place, they were terrified and said, “Truly this man was God’s Son!”</span></p> <p><span id=\"Matt-27-55\"><sup><font color=\"grey\"><small>55</small></font></sup>Many women were also there, looking on from a distance; they had followed Jesus from Galilee and had provided for him. </span> <span id=\"Matt-27-56\"><sup><font color=\"grey\"><small>56</small></font></sup>Among them were Mary Magdalene, and Mary the mother of James and Joseph, and the mother of the sons of Zebedee.</span></p> ",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<p><span id=\"John-19-25\">Meanwhile, standing near the cross of Jesus were his mother, and his mother’s sister, Mary the wife of Clopas, and Mary Magdalene. </span> <span id=\"John-19-26\"><sup><font color=\"grey\"><small>26</small></font></sup>When Jesus saw his mother and the disciple whom he loved standing beside her, he said to his mother, “Woman, here is your son.” </span> <span id=\"John-19-27\"><sup><font color=\"grey\"><small>27</small></font></sup>Then he said to the disciple, “Here is your mother.” And from that hour the disciple took her into his own home.</span></p> <br/>\n" +
        "<span id=\"Matt-27-50\"><sup><font color=\"grey\"><small>50</small></font></sup>Then Jesus cried again with a loud voice and breathed his last. </span> " +
        "<p><span id=\"Luke-23-44\"><sup><font color=\"grey\"><small>44</small></font></sup>It was now about noon, and darkness came over the whole land until three in the afternoon, </span> <span id=\"Luke-23-45\"><sup><font color=\"grey\"><small>45</small></font></sup>while the sun’s light failed; and the curtain of the temple was torn in two. </span> <span id=\"Luke-23-46\"><sup><font color=\"grey\"><small>46</small></font></sup>Then Jesus, crying with a loud voice, said, “Father, into your hands I commend my spirit.” Having said this, he breathed his last. </span> " +
        "<p><span id=\"John-19-28\"><sup><font color=\"grey\"><small>28</small></font></sup>After this, when Jesus knew that all was now finished, he said (in order to fulfill the scripture), “I am thirsty.” </span> <span id=\"John-19-29\"><sup><font color=\"grey\"><small>29</small></font></sup>A jar full of sour wine was standing there. So they put a sponge full of the wine on a branch of hyssop and held it to his mouth. </span> <span id=\"John-19-30\"><sup><font color=\"grey\"><small>30</small></font></sup>When Jesus had received the wine, he said, “It is finished.” Then he bowed his head and gave up his spirit.</span></p>",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<span id=\"Mark-15-38\"><sup><font color=\"grey\"><small>38</small></font></sup>And the curtain of the temple was torn in two, from top to bottom. </span> <span id=\"Mark-15-39\"><sup><font color=\"grey\"><small>39</small></font></sup>Now when the centurion, who stood facing him, saw that in this way he breathed his last, he said, “Truly this man was God’s Son!”</span></p> <p><span id=\"Mark-15-40\"><sup><font color=\"grey\"><small>40</small></font></sup>There were also women looking on from a distance; among them were Mary Magdalene, and Mary the mother of James the younger and of Joses, and Salome. </span> <span id=\"Mark-15-41\"><sup><font color=\"grey\"><small>41</small></font></sup>These used to follow him and provided for him when he was in Galilee; and there were many other women who had come up with him to Jerusalem.</span></p> <h3><span id=\"Mark-15-42\">The Burial of Jesus</span></h3><p><span id=\"Mark-15-42\"><sup><font color=\"grey\"><small>42</small></font></sup>When evening had come, and since it was the day of Preparation, that is, the day before the sabbath, </span> <span id=\"Mark-15-43\"><sup><font color=\"grey\"><small>43</small></font></sup>Joseph of Arimathea, a respected member of the council, who was also himself waiting expectantly for the kingdom of God, went boldly to Pilate and asked for the body of Jesus. </span> <span id=\"Mark-15-44\"><sup><font color=\"grey\"><small>44</small></font></sup>Then Pilate wondered if he were already dead; and summoning the centurion, he asked him whether he had been dead for some time. </span> <span id=\"Mark-15-45\"><sup><font color=\"grey\"><small>45</small></font></sup>When he learned from the centurion that he was dead, he granted the body to Joseph. </span> <span id=\"Mark-15-46\"><sup><font color=\"grey\"><small>46</small></font></sup>Then Joseph bought a linen cloth, and taking down the body, wrapped it in the linen cloth, and laid it in a tomb that had been hewn out of the rock. He then rolled a stone against the door of the tomb. </span> <span id=\"Mark-15-47\"><sup><font color=\"grey\"><small>47</small></font></sup>Mary Magdalene and Mary the mother of Joses saw where the body was laid.</span></p>  <!--end of footnotes--><br/>\n" +
        "<span id=\"Luke-23-47\"><sup><font color=\"grey\"><small>47</small></font></sup>When the centurion saw what had taken place, he praised God and said, “Certainly this man was innocent.” </span> <span id=\"Luke-23-48\"><sup><font color=\"grey\"><small>48</small></font></sup>And when all the crowds who had gathered there for this spectacle saw what had taken place, they returned home, beating their breasts. </span> <span id=\"Luke-23-49\"><sup><font color=\"grey\"><small>49</small></font></sup>But all his acquaintances, including the women who had followed him from Galilee, stood at a distance, watching these things.</span></p> <h3><span id=\"Luke-23-50\">The Burial of Jesus</span></h3><p><span id=\"Luke-23-50\"><sup><font color=\"grey\"><small>50</small></font></sup>Now there was a good and righteous man named Joseph, who, though a member of the council, </span> <span id=\"Luke-23-51\"><sup><font color=\"grey\"><small>51</small></font></sup>had not agreed to their plan and action. He came from the Jewish town of Arimathea, and he was waiting expectantly for the kingdom of God. </span> <span id=\"Luke-23-52\"><sup><font color=\"grey\"><small>52</small></font></sup>This man went to Pilate and asked for the body of Jesus. </span> <span id=\"Luke-23-53\"><sup><font color=\"grey\"><small>53</small></font></sup>Then he took it down, wrapped it in a linen cloth, and laid it in a rock-hewn tomb where no one had ever been laid. </span> <span id=\"Luke-23-54\"><sup><font color=\"grey\"><small>54</small></font></sup>It was the day of Preparation, and the sabbath was beginning. </span> <span id=\"Luke-23-55\"><sup><font color=\"grey\"><small>55</small></font></sup>The women who had come with him from Galilee followed, and they saw the tomb and how his body was laid. </span> <span id=\"Luke-23-56\"><sup><font color=\"grey\"><small>56</small></font></sup>Then they returned, and prepared spices and ointments.</span></p><p><span id=\"Luke-23-56\">On the sabbath they rested according to the commandment.</span></p>  <!--end of footnotes--><br/>\n" +
        "<p><span id=\"John-19-31\"><sup><font color=\"grey\"><small>31</small></font></sup>Since it was the day of Preparation, the Jews did not want the bodies left on the cross during the sabbath, especially because that sabbath was a day of great solemnity. So they asked Pilate to have the legs of the crucified men broken and the bodies removed. </span> <span id=\"John-19-32\"><sup><font color=\"grey\"><small>32</small></font></sup>Then the soldiers came and broke the legs of the first and of the other who had been crucified with him. </span> <span id=\"John-19-33\"><sup><font color=\"grey\"><small>33</small></font></sup>But when they came to Jesus and saw that he was already dead, they did not break his legs. </span> <span id=\"John-19-34\"><sup><font color=\"grey\"><small>34</small></font></sup>Instead, one of the soldiers pierced his side with a spear, and at once blood and water came out. </span> <span id=\"John-19-35\"><sup><font color=\"grey\"><small>35</small></font></sup>(He who saw this has testified so that you also may believe. His testimony is true, and he knows that he tells the truth.) </span> <span id=\"John-19-36\"><sup><font color=\"grey\"><small>36</small></font></sup>These things occurred so that the scripture might be fulfilled, “None of his bones shall be broken.” </span> <span id=\"John-19-37\"><sup><font color=\"grey\"><small>37</small></font></sup>And again another passage of scripture says, “They will look on the one whom they have pierced.”</span></p> ",
        "<strong><font color=\"red\"></font></strong><br/>\n" +
        "<p><span id=\"John-19-38\"><sup><font color=\"grey\"><small>38</small></font></sup>After these things, Joseph of Arimathea, who was a disciple of Jesus, though a secret one because of his fear of the Jews, asked Pilate to let him take away the body of Jesus. Pilate gave him permission; so he came and removed his body. </span> <span id=\"John-19-39\"><sup><font color=\"grey\"><small>39</small></font></sup>Nicodemus, who had at first come to Jesus by night, also came, bringing a mixture of myrrh and aloes, weighing about a hundred pounds. </span> <span id=\"John-19-40\"><sup><font color=\"grey\"><small>40</small></font></sup>They took the body of Jesus and wrapped it with the spices in linen cloths, according to the burial custom of the Jews. </span> <span id=\"John-19-41\"><sup><font color=\"grey\"><small>41</small></font></sup>Now there was a garden in the place where he was crucified, and in the garden there was a new tomb in which no one had ever been laid. </span> <span id=\"John-19-42\"><sup><font color=\"grey\"><small>42</small></font></sup>And so, because it was the Jewish day of Preparation, and the tomb was nearby, they laid Jesus there.</span></p>  <!--end of footnotes--><br/>\n" +
        "<p><span id=\"Matt-27-57\"><sup><font color=\"grey\"><small>57</small></font></sup>When it was evening, there came a rich man from Arimathea, named Joseph, who was also a disciple of Jesus. </span> <span id=\"Matt-27-58\"><sup><font color=\"grey\"><small>58</small></font></sup>He went to Pilate and asked for the body of Jesus; then Pilate ordered it to be given to him. </span> <span id=\"Matt-27-59\"><sup><font color=\"grey\"><small>59</small></font></sup>So Joseph took the body and wrapped it in a clean linen cloth </span> <span id=\"Matt-27-60\"><sup><font color=\"grey\"><small>60</small></font></sup>and laid it in his own new tomb, which he had hewn in the rock. He then rolled a great stone to the door of the tomb and went away. </span> <span id=\"Matt-27-61\"><sup><font color=\"grey\"><small>61</small></font></sup>Mary Magdalene and the other Mary were there, sitting opposite the tomb.</span></p>",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        " <h3><span id=\"Matt-27-62\">The Guard at the Tomb</span></h3><p><span id=\"Matt-27-62\"><sup><font color=\"grey\"><small>62</small></font></sup>The next day, that is, after the day of Preparation, the chief priests and the Pharisees gathered before Pilate </span> <span id=\"Matt-27-63\"><sup><font color=\"grey\"><small>63</small></font></sup>and said, “Sir, we remember what that impostor said while he was still alive, ‘After three days I will rise again.’ </span> <span id=\"Matt-27-64\"><sup><font color=\"grey\"><small>64</small></font></sup>Therefore command the tomb to be made secure until the third day; otherwise his disciples may go and steal him away, and tell the people, ‘He has been raised from the dead,’ and the last deception would be worse than the first.” </span> <span id=\"Matt-27-65\"><sup><font color=\"grey\"><small>65</small></font></sup>Pilate said to them, “You have a guard of soldiers; go, make it as secure as you can.” </span> <span id=\"Matt-27-66\"><sup><font color=\"grey\"><small>66</small></font></sup>So they went with the guard and made the tomb secure by sealing the stone.</span></p>  <!--end of footnotes-->\n" +
        ""
    };

    public static String scriptureCopyrights =
        "<div class=\"publisher-info-bottom with-single\">\n" +
        "<strong><a href=\"/versions/New-Revised-Standard-Version-Catholic-Edition-NRSVCE-Bible/\">New Revised Standard Version Catholic Edition</a> (NRSVCE)</strong> <p>New Revised Standard Version Bible: Catholic Edition, copyright © 1989, 1993 the Division of Christian Education of the National Council of the Churches of Christ in the United States of America. Used by permission. All rights reserved.</p></div></div>\n" +
        "</div>\n";


    public static String[] prayerArray = {
        "Jesus, <br><tab>" +
        "        Graciously grant that we may accompany you on this <br><tab><tab><tab>" +
        "        prayer walk through your last 24 hours and passion. <br><tab><tab><tab>" +
        "        Please allow us to join with the communion of saints <br><tab><tab><tab>" +
        "        as we experience your agony for our redemption <br><tab><tab><tab>" +
        "        as witnessed by your disciples and mother <br><tab><tab><tab>" +
        "        over this {duration}. <br><tab><tab><tab>" +
        "        Allow your Holy Spirit to lead us and keep us <br><tab><tab><tab>" +
        "        and trandform us through this sorrow so we may be <br><tab><tab><tab>" +
        "        fit to rejoice at your resurection and to <br><tab><tab><tab><tab>" +
        "        participate in your kingdom <br><tab><tab><tab><tab>" +
        "        here in our unique time on earth <br><tab><tab><tab><tab><tab>" +
        "        and in eternity<br><tab><tab><tab><tab><tab><tab>" +
        "        where you live and reign for ever and ever.<br>" +
        "        – Amen.",
        "Jesus, <br><tab>" +
        "        with your Father and Holy Spirit <br><tab><tab>" +
        "        You presided over all creation, <br><tab><tab>" +
        "        You buried all the earth with water <br><tab><tab><tab>" +
        "        in your righteous judgement, and <br><tab><tab>" +
        "        You rain water on the earth <br><tab><tab><tab>" +
        "        to bless your people with life, <br><tab>" +
        "        yet you chose to be baptized <br><tab><tab>" +
        "        by John in the Jordan river <br><tab><tab><tab>" +
        "        with the very water you created, <br><tab>" +
        "        you bring new human life through water, <br><tab>" +
        "        and even gushed water and blood <br><tab><tab>" +
        "        from your side when you had died <br><tab><tab><tab>" +
        "        paying the full price <br><tab><tab><tab><tab>" +
        "        for our redemption <br><tab><tab><tab>" +
        "        to wash us pure <br><tab><tab><tab><tab>" +
        "        once for all. <br><tab>" +
        "        Please wash my feet <br><tab><tab>" +
        "        by way of my confession and contrition<br><tab><tab><tab>" +
        "        so that I may keep being <br><tab><tab><tab><tab>" +
        "        fully free again of that <br><tab><tab><tab><tab><tab>" +
        "        grimy sin accumulation<br><tab><tab><tab><tab>" +
        "        that still sticks to me <br><tab><tab><tab>" +
        "        as we walk through this dusty world.<br><tab><tab>" +
        "        And may I also be a foot washer<br><tab><tab><tab>" +
        "        in your kingdom <br><tab><tab><tab><tab>" +
        "        here in our unique time on earth <br><tab><tab><tab><tab><tab>" +
        "        and in eternity<br><tab><tab><tab><tab><tab><tab>" +
        "        where you live and reign for ever and ever.<br>" +
        "        – Amen.",
        "Jesus, <br><tab>" +
        "        Surely it is not I who will betray you: <br><tab><tab>" +
        "        - by clinging to simple material gains <br><tab><tab><tab>" +
        "        instead of your narrow way, <br><tab><tab>" +
        "        - by trying to force your hand according to the <br><tab><tab><tab>" +
        "        agenda and timeline that I envision for God's kingdom, <br><tab><tab>" +
        "        - by attempting to salvage at least something <br><tab><tab><tab>" +
        "        for myself before this ship sinks, <br><tab><tab>" +
        "        - by seeking to win approval from the right people, <br><tab><tab>" +
        "        - by hedging my bets, playing all the angles, or <br><tab><tab><tab>" +
        "        seeing my self as the wiser, than the others, or you. <br><tab><tab>" +
        "        I need your rebuke and conditioning on the way, Master, <br><tab><tab><tab>" +
        "        so I will not wander at the appointed hour <br><tab><tab><tab>" +
        "        and miss the sharing in your body and blood. <br><tab><tab>" +
        "        in your kingdom <br><tab><tab><tab><tab>" +
        "        here in our unique time on earth <br><tab><tab><tab><tab><tab>" +
        "        and in eternity<br><tab><tab><tab><tab><tab><tab>" +
        "        where you live and reign for ever and ever.<br>" +
        "        – Amen.",
        "",
        "",
        "",
        "",
        "",
        "",
        "Jesus, <br><tab>" +
        "        <unity prayer> Protect us LORD as we stay awake, <br><tab><tab><tab>" +
        "        Watch over us as we sleep; <br><tab><tab>" +
        "        That awake we may keep watch with you, <br><tab><tab><tab>" +
        "        And asleep, rest in your peace. <br><tab><tab>" +
        "",
        "Jesus, <br><tab>" +
        "        <agony> Protect us LORD as we stay awake, <br><tab><tab><tab>" +
        "        Watch over us as we sleep; <br><tab><tab>" +
        "        That awake we may keep watch with you, <br><tab><tab><tab>" +
        "        And asleep, rest in your peace. <br><tab><tab>" +
        "",
        "Jesus, <br><tab>" +
        "        <alone> Protect us LORD as we stay awake, <br><tab><tab><tab>" +
        "        Watch over us as we sleep; <br><tab><tab>" +
        "        That awake we may keep watch with you, <br><tab><tab><tab>" +
        "        And asleep, rest in your peace. <br><tab><tab>" +
        "",
        "Jesus, <br><tab>" +
        "         <br><tab><tab><tab>" +
        "         <br><tab><tab>" +
        "         <br><tab><tab><tab>" +
        "         <br><tab><tab>" +
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Lord Jesus Christ,\n" +
        "at this hour you were led out\n" +
        "to die on the cross\n" +
        "for the salvation of the world.\n" +
        "We ask your forgiveness for the sins of our past\n" +
        "and your protection from all future evil.\n" +
        "Bring us to the peace and joy of that kingdom\n" +
        "where you live and reign for ever and ever.\n" +
        "– Amen.\n",
        "",
        "Lord Jesus Christ,\n\t" +
        "at noon, when darkness covered all the earth,\n" +
        "you mounted the wood of the cross\n" +
        "as the innocent victim for our redemption.\n" +
        "May your light be always with us\n" +
        "to guide us to eternal life in that kingdom\n" +
        "where you live and reign for ever and ever.\n" +
        "– Amen.\n",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    };

    public static String[] snackbarArray = {
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    };

    public static String[] extraImagesArray = {
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    };

    public static Integer[] _id = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 };

}
*/