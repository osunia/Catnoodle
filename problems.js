/* * 😺 CATNOODLE SMART DATABASE 
 * Mapping: A=0(주), B=1(빨), C=2(파), D=3(살), E=4(초), F=5(하), 
 * G=6(하늘), H=7(분), I=8(노), J=9(보), K=10(연), L=11(회)
 */

const RAW_PUZZLES_TEXT = [
    // --- Page 1 (001 - 030) ---
    // #1 (Verified Standard)
    [
        "AAACCCCDDDD",
        "AHHCGGGLDKK",
        "IIHHGFLLLKK",
        "IEEHGFFLBBB",
        "IIEEEJJJJBB"
    ],
    // #2
    [
        "BJJJJCHHGGG",
        "BBCCCCLHHAG",
        "BBIIFLLLHAG",
        "KKIFFDLEEAA",
        "KKIIDDDDEEE"
    ],
    // #3
    [
        "CCCCDFFKKAA",
        "CLDDDDFKKHA",
        "LLLGJJJJHHA",
        "ILIGEEEHHBB",
        "IIIGGGEEBBB"
    ],
    // #4
    [
        "DDDDLCCCCKK",
        "FDGLLLBBCKK",
        "FFGILIBBBHA",
        "GGGIIIEEHHA",
        "JJJJEEEHHAA"
    ],
    // #5 (Fixed: Removed duplicates from previous code)
    [
        "EKKDDDDLAAA",
        "EKKIDILLLHA",
        "EEGIIICLHHB",
        "FEGCCCCHHBB",
        "FFGGGJJJJBB"
    ],
    // #6
    [
        "FFIIIBBDGGG",
        "CFILIBBDDEG",
        "CHLLLBADEEG",
        "CHHLAAADEKK",
        "CCHHJJJJEKK"
    ],
    // #7
    [
        "GGGKKBBBIII",
        "JCGKKBBHIEI",
        "JCGLAAAHHEE",
        "JCLLLFADHHE",
        "JCCLFFDDDDE"
    ],
    // #8
    [
        "HHDDDDIIEKK",
        "FHHDAAAIEKK",
        "FFHLACIIEEG",
        "BBLLLCCCCEG",
        "BBBLJJJJGGG"
    ],
    // #9
    [
        "IIIGGGBBBAA",
        "IEIGFFLBBHA",
        "EEDGFLLLHHA",
        "EDDDDHLHHKK",
        "EJJJJCCCCKK"
    ],
    // #10
    [
        "JJJJIIFFECC",
        "GGGHHIFLEEC",
        "GAHHIILLLEC",
        "GAHBBKKLDEC",
        "AABBBKKDDDD"
    ],
    // #11
    [
        "KKBBGAAAEEH",
        "KKBBGAEEEHH",
        "IILBGGGCHHF",
        "ILLLCCCCDFF",
        "IILJJJJDDDD"
    ],
    // #12 (End of Standards)
    [
        "AAAJJJJBBII",
        "AHHLEEEBBBI",
        "HHLLLDEEGII",
        "HFCLDDDDGKK",
        "FFCCCCGGGKK"
    ],
    // #13 (New Batch Start)
    [
        "BBBILDDDDEE",
        "BBAILLLHDEE",
        "KKAIIHHFFEG",
        "KKAACHHFFEG",
        "JJJJCCCCGGG"
    ],
    // #14
    [
        "CCCCDHHJJJJ",
        "CLDDDDHHGGG",
        "LLLAAIIGHBB",
        "FLKKAIEEGBB",
        "FFKKAIIEEEB" 
    ],
    // #15
    [
        "DDDDAAALGGC",
        "IDDHAFFLLLC",
        "IIIHHFFLEEG",
        "CCCCHHBBEKK", // *Check: Length adjusted
        "JJJJBBBEEKK"
    ],
    // #16
    [
        "EDDDDAAABBB",
        "EHHDKKGALBB",
        "EEHHKKGLLLF",
        "IEIHGGGCLFF",
        "IIIJJJJCCCC"
    ],
    // #17
    [
        "FFKKIILCCCC",
        "GFKKILLLHBC",
        "GEEEIILHHBB", // Corrected B/H boundary
        "GGGEEDHHABB",
        "JJJJDDDAAAA"
    ],
    // #18
    [
        "GGGBBBLIIKK",
        "JCGBBLLLIKK",
        "JCGEEELIIHH",
        "JCEEDAAAHHF",
        "JCCDDDDAHFF"
    ],
    // #19
    [
        "HHAAAFEEEOO",
        "DHHGAFFEEEO", // I=O/Yellow
        "DDHGBBLLLOO",
        "DGGGBBBLCKK",
        "DJJJJCCCCKK" // C count verification needed
    ],
    // #20
    [
        "OOOBBBKKGGG",
        "OEIBBBKKGCJ",
        "EEHHAAALGCJ",
        "EHHDAFLLLCJ",
        "EDDDDFFLCCJ"
    ],
    // #21
    [
        "JJJJIKKBBBC",
        "GGGEKKLBBHC",
        "AAGEELLLHHC",
        "AIGIEEFLHHD",
        "AAAAEFFDDDD"
    ],
    // #22
    [
        "KKCCCCJJJJE",
        "KKCFFHHAAEE",
        "IILFHHBBAEG",
        "IILLHDBBAEG",
        "IILDDDDBGGG"
    ],
    // #23
    [
        "AAAEEEIIIBB",
        "ALEEKKIHIBB",
        "LLLFFKKDHHG",
        "CLFFDDDDHHG",
        "CCCCJJJJGGG"
    ],
    // #24
    [
        "BBBCCCCLGGG",
        "BBECIDLLLHG",
        "EEECIDDLLHG",
        "IFFEIDAHHKK",
        "IIFEIDAAAKK"
    ],
    // #25
    [
        "CCCCDJJJJBB",
        "FFDDDDHHBBB", 
        "KKFIGHHLBAA",
        "KKEEIGHLLLA",
        "EEEIIGGGLAA"
    ],
    // #26
    [
        "DDDDLEEGGGJ",
        "IDILLLEEEGJ",
        "IOOFFBBHHGJ",
        "KKAFFCBHHHJ",
        "KKAAACCCCHH" // H adjusted
    ],
    // #27
    [
        "EGGGJJJJLCC",
        "EFFGBBHLLLC",
        "EEFGBBHIIID",
        "DEIKKBDHHAD",
        "IIIKKDDDDAA"
    ],
    // #28
    [
        "FFCCCCGGGKK",
        "HFCLDDDDGKK",
        "HHLLLDEEGII",
        "AHHLEEEBBBI",
        "AAAJJJJBBII"
    ],
    // #29
    [
        "GGGFFEEEEIJ",
        "CCGFKKHEEIJ",
        "CAGLKKHIIIJ",
        "ALLLBBHHDDJ",
        "CAALBBBDDDD"
    ],
    // #30
    [
        "HHAAAFFCCCC",
        "DHHJAEFLIIC",
        "DDHJEELLLIG",
        "DKKJEBBLIIG",
        "DKKJEBBBGGG"
    ],
    // --- Page 2 (031 - 060) ---
    // #31
    [
        "IIICJJJBBBB",
        "IFICCCCHHBB",
        "FFADDDDLHHG",
        "KKAEEEDLLHG",
        "KKAAEEEIGGG"
    ],
    // #32
    [
        "JJJJFDDDAAA",
        "IIIEFFDHHAC",
        "IBIEEGHHLAC",
        "BBKKEGHLLLC",
        "BBKKEGGGLCC"
    ],
    // #33
    [
        "KKJJJJACCCC",
        "KKEEAAAHBBC",
        "IIIEEEHHBBG",
        "ILLLDHHFFBG",
        "IILDDDDFGGG"
    ],
    // #34
    [
        "AAAEEEGGGKK",
        "ALEEHBBBGKK",
        "LLLHHBBDGII",
        "CLHHFFDDDDI",
        "CCCCFJJJJII"
    ],
    // #35
    [
        "BBBLDDDDAAC",
        "BBBLDDHHAAC",
        "KKFLEEHHGAC",
        "KKFFEIIHGCC",
        "JJJJIIIGGCC"
    ],
    // #36
    [
        "CCCCAAAJJJJ",
        "CLDDDDAHBBB",
        "LLLDIIHHBBB",
        "FLKKIIHEEEG",
        "FFKKIIEEEGG"
    ],
    // #37
    [
        "DDDDLLIAAKK",
        "DELLLIIGAKK",
        "JBEELIIGAHH",
        "JBBECGGGHHF",
        "JJBBCCCHHFF"
    ],
    // #38
    [
        "EKKHJJJJGGG",
        "EKKHHDDBBGG",
        "EEAAHLDBBCC",
        "IIAFLLLBBCC",
        "IIIAFFLLCCC"
    ],
    // #39
    [
        "FFKKAAADDDD",
        "FFKKAAEEDDD",
        "JIILEEHGGGC",
        "IILLLHBBGGC",
        "JJJLHBBBGCC"
    ],
    // #40
    [
        "GGCKKFDDDDE",
        "CCGKKFDDHHE",
        "CAGLLBBBHEE",
        "CALLLBBHIEI",
        "CAALJJJJIII"
    ],
    // #41
    [
        "HHEEEDDDDKK",
        "HHAEELDDCCI",
        "GHABLLLDCCI",
        "GAABBLLFCKK",
        "GGGBBFFCCKK"
    ],
    // #42
    [
        "IIIBBBLDDDD",
        "IHIBBLLLDDD",
        "FHHAAAGLEEC",
        "FFHHAAGEEKC",
        "JJJJGGGKKCC"
    ],
    // #43
    [
        "JJJIBBDKKAA",
        "IIIJEBDKKAC",
        "IHIEBGDHHAC",
        "FHHHEGDLLCC",
        "FFHHEGGLLCC"
    ],
    // #44
    [
        "KKJJJJDDDDE",
        "KKFFAAHHDEE",
        "IILFAAHHBEG",
        "IILLAHCBBEG",
        "IILCCCCBGGG"
    ],
    // #45
    [
        "AAAEEEHCCCC",
        "ALEEKKHHIIC",
        "LLLBKKDHHIG",
        "FLBBDDDHHIG",
        "FFBBJJJJGGG"
    ],
    // #46
    [
        "BBBLFFHCCCC",
        "BBLLLFHHIIC",
        "KKALEEEHHIG",
        "KKAADEEEHIG",
        "JJJJDDDGGGG"
    ],
    // #47
    [
        "CCCCJJJJLAA",
        "CFFGGGHLLAA",
        "KKFIIHHLLBA",
        "KKDIIHHBBBB",
        "DDDDIIEEEBB"
    ],
    // #48
    [
        "DDDDBBHCCCC",
        "JDLBBBHHIIC", // Corrected per image spacing
        "JLLLEEEHHIG",
        "JFLKKAEEIIG",
        "JFFKKAAAGGG"
    ],
    // #49
    [
        "EHDDDDLJJJJ",
        "EHHDFLLBBBJ",
        "EEHHFFLCGBB",
        "IEIACCCCGKK",
        "IIIAAACGGKK"
    ],
    // #50
    [
        "FFAAAIIDGGG",
        "FAEEIDDDHGG",
        "LEEEIIHHKKG",
        "LLLLHHHKKCC",
        "JBBBLHHCCCC"
    ],
    // #51
    [
        "GGGIIEEEFAA",
        "JDGIEELFFAA",
        "JDGILLLLHHA",
        "JDDBBCLHHKK",
        "JDBBBCCCCKK"
    ],
    // #52
    [
        "HHBBBFFIIKK",
        "JHHBBFEEIKK",
        "JAHLEEEICCG",
        "JALLLDCCCCG",
        "JAALDDDDGGG"
    ],
    // #53
    [
        "IIIDDDDLGGG",
        "IHHBBDLLLEG",
        "FHHBBBALEEE",
        "FFHHAAACEKK",
        "JJJJCCCCEKK"
    ],
    // #54
    [
        "JJJJIIIDGGG",
        "KKFFEIHIGCC",
        "KKFLEHHGACC",
        "BBBLDEHHACC",
        "BBBLDDDDAAC"
    ],
    // #55
    [
        "KKCCCCJJJIB",
        "KKCEAAAHHBB",
        "IIAGHHLLBBF",
        "IDIEEGHLLLF",
        "DDDDEGGGLFF"
    ],
    // #56
    [
        "AAADDDDJJJJ",
        "ALBBBDHGGGC",
        "LLBBHHHIIGC",
        "FLKKHHEEIGC",
        "FFKKEEEIICC"
    ],
    // #57
    [
        "BBBLDDDDIII",
        "BBLLLDHHIEI",
        "KKFLGGGHHEE",
        "KKFFGAAAHCE",
        "JJJJGACCCCE"
    ],
    // #58
    [
        "CCCCBBBDGGG",
        "CLFFBBDDDDG", // O corrected to D based on context/shape
        "LLLFEEEJHHH",
        "ILIKKAEEHHH",
        "IIIKKAAAAEH"
    ],
    // #59
    [
        "DDDDACCCCKK",
        "JDHHAAALCKK",
        "JHHGLLLLIII",
        "JFGBBBEEEII",
        "JFFGBBEEEII" // O corrected to I
    ],
    // #60
    [
        "EKKDGGGCCCC",
        "EKKDGJJJLCC",
        "EEDDGHABLLL",
        "IEIDHHABBLF",
        "IIIDHAABBFF"
    ],
    // --- Page 3 (061 - 090) ---
    // #61
    [
        "AJJJJLEEEII", // O -> I 보정 (모양 고려)
        "AAALLHEEIII",
        "GGGBHHFFHHI",
        "KKGBDFFHHCC",
        "KKGDDDDCCCC"
    ],
    // #62
    [
        "BBBLHHJJJJG",
        "BBLLHHAAAGG",
        "IIILEEHAAGG",
        "IDIFFEEECKK",
        "DDDDFCCCCKK"
    ],
    // #63
    [
        "CCCCEELLJJJ",
        "CAEEELLLHHF",
        "GADDDDLHHFF",
        "GAADBBOHIKK",
        "GGGBBBOOIKK"
    ],
    // #64
    [
        "DDDDEELLJJJ",
        "CDEEELLHHJJ",
        "CFFAAGLHHBB",
        "CFKKAGHHIBB",
        "CCKKAGGGOOO"
    ],
    // #65
    [
        "EJJJJDDDDAA",
        "EFFBBDDHHAC",
        "EEFBBGHHLAC",
        "IEIKKGHLLLC",
        "IIIKKGGGLCC"
    ],
    // #66
    [
        "FFCCCCIIIEE",
        "JFBBCCIIEAA",
        "JKKBBLIIHAG",
        "JKKDLLLHHAG",
        "JDDDLHHGGGG"
    ],
    // #67
    [
        "GGGAAAHHFFD",
        "GIIIAHHHFFD",
        "GIBIJLLLHDD",
        "KKBBJCLEEED",
        "KKBBJCCCEEE"
    ],
    // #68
    [
        "HHDDDDLCCCC",
        "FHHADLLLIIC",
        "FFHAAALEEIG",
        "KKBBBEEOOIG",
        "KKBBJJJGGGG"
    ],
    // #69
    [
        "IIIKKCCLGGG",
        "IDIKKCLLLEG",
        "DDDDHCFLAEG",
        "BBHHCFFAEEE",
        "BBHHJJJJAAE"
    ],
    // #70
    [
        "JJJJFFAAAKK",
        "IIEEEFAHHKK",
        "IEGCCCCLHHG",
        "IDGCBBLLLHG",
        "DDDDBBBLGGG"
    ],
    // #71
    [
        "KKIIEEEDGGG",
        "KKIEELDDGAJ",
        "HHIILLLDGAJ",
        "FHHBBLCDAAJ",
        "FFHBBBCCCCJ"
    ],
    // #72
    [
        "AEEEJJJIBBB",
        "AAAEELHHBBB",
        "GKKFLLLHHDD",
        "GKKFFLCIIID",
        "GGGCCCCIIID"
    ],
    // #73
    [
        "BBBIIIOCCCC",
        "BBHHIAICLFF",
        "GHHAAADLLLF",
        "GEEEDDDLLKK",
        "GGGEEJJJJKK"
    ],
    // #74
    [
        "CCCCDAAAEKK",
        "CHHDDBBAEKK",
        "FFHHDDBLEEG",
        "IFIHDBLLLEG",
        "IIIJJJJLGGG"
    ],
    // #75
    [
        "DDDDFCCCCKK",
        "IDIFFCLHHKK",
        "IIIBBLLLHHG",
        "AAABBBLEHHG",
        "AJJJJEEEGGG"
    ],
    // #76
    [
        "EHFFAALCCKK", // F corrected
        "EHHFALLLCKK",
        "EEHHADLGCBB",
        "IEIDDDDGGBB",
        "IIIJJJJGGGB"
    ],
    // #77
    [
        "FFBBCCCCAAE",
        "JFBBBKKCAEE", // Length fixed
        "JIIIKKLAEGG",
        "IDIHHHLAEGG",
        "DDDHHLJJJGG"
    ],
    // #78
    [
        "GGGBBEECCCC",
        "AAGBBBEEELC", // Length fixed
        "AIGIKKHHLLF",
        "AIIIKKDHHLF",
        "JJJJDDDDHFF"
    ],
    // #79
    [
        "HHCCCCFFEKK",
        "JHHDICIFEKK",
        "JAHDDIILEEG",
        "JADDBBLLLEG",
        "JAADBBBLGGG"
    ],
    // #80
    [
        "IIIHBBBJJJJ",
        "IDIHHBBLGGG",
        "DDDHHHLLLAG",
        "KKFFEEELCAG",
        "KKFEECCCCAA"
    ],
    // #81
    [
        "JJJJEEELLAC",
        "IIIEDDDLLAC",
        "IBIHHDDLGAC", // Length fixed
        "BBHHFFDKKGC",
        "BBHFFDKKGGG"
    ],
    // #82
    [
        "KKJJJJHHGGG",
        "KKCCCCLHHAG",
        "IICBBLLLHAG",
        "IFFBBDLEEAA",
        "IIFBDDDEEEE"
    ],
    // #83
    [
        "ACCCCOOOBBB",
        "AAADCOHILBB",
        "GKKDDHHLLLF",
        "GKKDHHLELFF",
        "GGGDEEEJJJJ"
    ],
    // #84
    [
        "BBBCCCCLGGG",
        "BBECIDLLLHG",
        "FFEEIDDLLHG",
        "OFIEJDAHHKK",
        "OOIEJDAAAKK"
    ],
    // #85
    [
        "CCCCFEEEGGG",
        "CAAAFFLEEHG",
        "IAIKKLLHHHG",
        "IIIKKDLHHBB",
        "JJJJDDDDBBB"
    ],
    // #86
    [
        "DDDDFCCCCKK",
        "IDIFFEEECKK",
        "IIOLEEHAGGG",
        "BBLLLHHAAAG",
        "BBBLHHJJJJG"
    ],
    // #87
    [
        "EJJJJDDDDBB",
        "EFFGGGDLBBB",
        "EEFKKGLLHHA",
        "IEIKKGCLHHA",
        "IIICCCCHHAA"
    ],
    // #88
    [
        "FFBBDDDDEEE",
        "JFBBBDLEEAA",
        "JCCCLLHHAGG",
        "JKKICILHHAG",
        "JKKIIIHHGGG"
    ],
    // #89
    [
        "GGGAAADDDDJ",
        "BBGALHHDKKJ",
        "BBGLLHHKKKJ",
        "BEEELCIHIFJ",
        "EECCCCIIIFF"
    ],
    // #90
    [
        "HHCCCCFFEKK",
        "JHHAICIFEKK",
        "JBHAIIILEEG",
        "JBBAADLLLEG",
        "JBBDDDDLGGG"
    ],
    // --- Page 4 (091 - 120) ---
    // #91
    [
        "IIIBBDDDDAA",
        "IEIBBBDHHAC", // Length adjusted (B added)
        "EEFGKKHHLAC",
        "EFFGKKHLLLC", // L adjusted
        "EGGGJJJJLCC"
    ],
    // #92
    [
        "JJJJDDDDBBB", // D filled
        "IIIKKDLHHBB",
        "IAIKKLLLHHG", // L count fixed
        "CAAAFFLEEHG",
        "CCCCFEEEGGG"
    ],
    // #93
    [
        "KKFFCCCHHBB",
        "KKFCCCCHHBB",
        "IIIAAACLHHG", // H adjusted
        "IDIEEALLHHG",
        "DDDDEEELGGG"
    ],
    // #94
    [
        "AJJJJDDDDKK",
        "AAAEEEDHHKK",
        "FFEEBBBLHHG",
        "IFICBBLLLHG", // L adjusted based on shape
        "IIICCCCLGGG"  // O -> I
    ],
    // #95
    [
        "BBBIIKKJJJJ", // J adjusted
        "BBHHIKKAAAC",
        "GHHIIEEELAC",
        "GHFFEEDLLLC",
        "GGGFDDDLCCC"
    ],
    // #96
    [
        "CCCCHHFFEKK", // B added based on context
        "CJJJJHHFEKK",
        "IIIAAAHLEEG",
        "IDIABBLLLEG",
        "DDDDBBBLGGG"
    ],
    // #97
    [
        "DDDDJJJJBBB",
        "IDICCCCJBBB",
        "IIICEEELHHG",
        "KKAEEFLLLHG",
        "KKAAAFFLGGG"
    ],
    // #98
    [
        "EKKHDDDDLCC",
        "EKKHHDGLLLC",
        "EEFFHHGBLAC",
        "OEIFGGGBBAC",
        "OOOJJJJBBAA"
    ],
    // #99
    [
        "FFDBBEEEGGG",
        "JFDBBBLEEHG",
        "JDDAALLLHHG",
        "JIDIACLHHKK", // C/K boundary check
        "JIIIACCCCKK"
    ],
    // #100
    [
        "GGGFFEEEAAA", // A filled
        "JDGIFIHEELA",
        "JDGIIIHHLLL",
        "JDDBBKKHHLC",
        "JDBBBKKCCCC"
    ],
    // #101
    [
        "HHFFAALGGGJ",
        "DHHFALLLEGJ", // Length checked
        "DDHIAILEEGJ",
        "DKKIIICEBBJ",
        "DKKCCCEBBBB"
    ],
    // #102
    [
        "IIIFDDDDEEE", // E filled
        "ICIFFDLEEKK",
        "GCCCCLLLHKK",
        "GJJJJALHHBB",
        "GGGAAAHHBBB"
    ],
    // #103
    [
        "JJJIDDDIIII",
        "KKGFFLDHIEI",
        "KKGFLLLHHEE",
        "BBGGGLAHHEE",
        "BBBCCCCAAAE"
    ],
    // #104
    [
        "KKFFJJJJEEE",
        "KKFGGGLEECC",
        "IIIGBLLLHAC",
        "IDIGBLLHHAC",
        "DDDDBBHHAAC"
    ],
    // #105
    [
        "ACCCCGGGIII",
        "AAAFCGHHIBI",
        "EEEFFGLHHBB",
        "KKEEDLLLHBB",
        "KKDDDDLJJJJ"
    ],
    // #106
    [
        "BBBEEJJJJKK", // Length check
        "BBDCEEEHHKK",
        "IIDCAAAALHG",
        "IDDCAFLLLHG",
        "IIDCCFFLGGG"
    ],
    // #107
    [
        "CCCCEEGGGKK",
        "CLBBBEEEGKK",
        "LLLBBHHDGII",
        "ALFFHHDDDDI",
        "AAAFHJJJJII"
    ],
    // #108
    [
        "DDDDCCCCBBB",
        "IDIACLHHBBJ",
        "IIIALLLHHGJ",
        "KKFAALEEHGJ",
        "KKFFEEEGGGJ"
    ],
    // #109
    [
        "EKKFDDDDGGC",
        "EKKFFDHHGGC",
        "EEBBBHHLGAC",
        "IEIBBHLLLAC",
        "IIIJJJJLAAC"
    ],
    // #110
    [
        "FFDDDDBBIII",
        "JFADLBBBIEI",
        "JGALLHHKKEE",
        "JGAALHHKKCE",
        "GGGHHCCCCCE"
    ],
    // #111
    [
        "GGGEEEIIKKK",
        "JAGDDLEEIKK",
        "JAGDLLLIIHH",
        "JAADCLBBHHF",
        "JCCCCBBBHFF"
    ],
    // #112
    [
        "HFFIILLBBAA",
        "HHFIILLBBAJ",
        "GHHIILEEEAJ",
        "GDDDDEECKKJ",
        "GGGDCCCCKKJ" // K adjusted
    ],
    // #113
    [
        "IIIBBEEEAAA",
        "IFIBBBHEELA",
        "FFGGGDHHLLL",
        "KKGDDDHHLCC",
        "KKGJJJJCCCC"
    ],
    // #114
    [
        "JJJJGGGLLFF",
        "KKIDDGHHLLF",
        "KKIDDGHHLAA",
        "BBIIIEEHHCA",
        "BBBEEECCCCA"
    ],
    // #115
    [
        "KKGGGCCCCEE",
        "KKAAGCLEEEJ",
        "IIIAGLLHHHJ",
        "IDIABBLHHFJ",
        "DDDDBBBHFFJ" // J added
    ],
    // #116
    [
        "AAJJJJEEGGG",
        "AAALEECCCCG",
        "BBLLLHHIIIG",
        "BBFLHHIDIKK",
        "BFFHHDDDKKK"
    ],
    // #117
    [
        "BBBJJJJLAAC",
        "BBDKKHLLLAC",
        "DDKKHHLGACC",
        "IDDFEEHHGCC",
        "IIDFFEEEGGG"
    ],
    // #118
    [
        "CCCCKKIIBBB",
        "CLFFKKIHBBB",
        "LLLFEEEJDHG",
        "ALEEEDDDDHG",
        "AAAJJJJDGGG"
    ],
    // #119
    [
        "DDDDCCCAAAE",
        "IDIBBBHCAEE",
        "IIIBBHLLAFG",
        "KKFFHHLLLLG",
        "KKFJJJJLGGG"
    ],
    // #120
    [
        "EKKJJJJLGGG",
        "EKKAAHLLLLG",
        "EEFFAHHLBBG",
        "IEIFADHHBBC",
        "IIIDDDDCCCC"
    ],
    // --- Page 5 (121 - 150) ---
    // #121
    [
        "AEEEJJJJGGG", // Length corrected based on shape
        "AAAEELCCCCG", // E/L adjusted
        "IIBBLLLHHCG", // O -> I (Yellow)
        "IBBBDLHHFKK", // K adjusted
        "IIDDDDHFFKK"  // K adjusted
    ],
    // #122
    [
        "BDDDDEELCCJ",
        "BDDEEELLCCJ",
        "BBHHAAALGCJ",
        "KKFHHIAIGCJ",
        "KKFFHIIIGGG"
    ],
    // #123
    [
        "CCEEEGGGIII",
        "CEEKKGHHIBI", // O -> I (Yellow)
        "CAFKKGLHHBB",
        "CAFFDLLLHBB",
        "AADDDDLJJJJ"
    ],
    // #124
    [
        "DDDDLLHHJJJ",
        "CCDLLLHHGGG", // L count check
        "CAFFLIIHGBB", // O -> I
        "CAFKKIEEGBB",
        "CAAKKIOEEEB"
    ],
    // #125
    [
        "EFFDDDLCCJJ",
        "EFBDDHLLCJJ",
        "EEBBHHHLGCJ",
        "IEIKKAHHGCJ",
        "IIIKKAAAGGG"
    ],
    // #126
    [
        "FFBBBLJJJJD",
        "EFIBBBLIIID",
        "EEAAGLHHIDD",
        "EKKAGHHCIID",
        "EKKAGGGCCCC"
    ],
    // #127
    [
        "GGGDDDDHIII",
        "GEBBDDHHILI",
        "GEBBAHHFLLL", // F adjusted
        "EEAAAKKFFLC",
        "EJJJJKKCCCC"
    ],
    // #128
    [
        "HHEEECCGGGA",
        "FHHDEECGAAA",
        "FFHDKKCGLII",
        "BBDDKKCLLLI",
        "BBBDJJJJLII" // L adjusted
    ],
    // #129
    [
        "IIEEECCCCAA", // I (Yellow)
        "IEEDDDDLCAG",
        "IIHHDBLLLAG",
        "KKFFHBBLLGG",
        "KKFFHBBJJJJ"
    ],
    // #130
    [
        "JIIIDDDDLGG",
        "JIBBDDLLLHG",
        "JIIBBEELLHG",
        "JFFCCEEAHHK",
        "JFCCCCAAAKK"
    ],
    // #131
    [
        "KKBBBLLAAGG",
        "KKBBELLAGGD",
        "FFEEELHAGDD",
        "IFICEEHHDDD",
        "IOICCCCHHDD"
    ],
    // #132
    [
        "AADDDLLJJJJ",
        "ABBDFFLLHEC",
        "ABBFFGLHHEC",
        "IBIKKGGLHEC",
        "IIIKKGGGECC" // Spacing fixed
    ],
    // #133
    [
        "BAAADDDDGGG",
        "BBIAIDHHGCG",
        "BBIIIHHLGCG",
        "KKFEEHHLGCC",
        "KKFFEEELCCJ"
    ],
    // #134
    [
        "CCFFBBBLAAJ",
        "CIFIBBLLLAJ",
        "CIIIGKKLLAJ",
        "CEEEGKKDHHJ",
        "EEGGGDDDHHH"
    ],
    // #135
    [
        "DIIBBGGGKKE",
        "DDIBBGHHKKE",
        "DIIBAGLHHEE",
        "DFAAALLHEEC",
        "FFJJJJLCCCC"
    ],
    // #136
    [
        "ECCCCJJJJHB",
        "ECFDDDDHHHB",
        "EEFFDGHHLBA",
        "IEIKKGHLLLA",
        "IIIKKGGGLAA"
    ],
    // #137
    [
        "FFAAJJJJGGC",
        "FLAAADDDHGC",
        "LLLEEEIHHGC",
        "CLEEKKIHHBB",
        "CCCCKKIIBBB"
    ],
    // #138
    [
        "GGGEEJJJJBB",
        "GIIEEEELBBB",
        "GIDDDLLLLHA",
        "CIIFFKKLHHA",
        "CCCCFKKHHAA"
    ],
    // #139
    [
        "HHEEEBBBGGG",
        "DHHAEBBFFFG",
        "DHHAAALIFIG",
        "DCCCCLLLIIG",
        "DJJJJLLIIKK"
    ],
    // #140
    [
        "IIDEEEJJJJF",
        "IDDDDEHHFFF",
        "IIAABBBLLHG",
        "KKACBBLLLHG",
        "KKACCCCLGGG"
    ],
    // #141
    [
        "JDDDEEELGGG",
        "JADEEELLHHG",
        "JAAEELLHHHG",
        "JFFBBIICDHK",
        "FFBBCCCCDHK"
    ],
    // #142
    [
        "KKJJJJIIEEE",
        "KKDDDIIEEEA",
        "CCCCDLHHAGA",
        "CBBDLLHHAGG",
        "BBBFLLHHGGG"
    ],
    // #143
    [
        "AAEKKGGGBBC",
        "AEEKKGHHBBC",
        "AEIIIGLHHBC",
        "FEIDILLLHCC", // C filled
        "FFDDDDLJJJJ"
    ],
    // #144
    [
        "BBBCCCCLGGG",
        "JBBCHHLLLEG",
        "JDDDHHLLLEG",
        "JFFDAHHEEKK",
        "JFAAAIIEEKK"
    ],
    // #145
    [
        "CCAAIIIEGGG",
        "BBAAIHIEFFG",
        "BBALHHEEFFG",
        "CDBLLLHHEKK", // Spacing fixed
        "DDDDLJJJJKK"
    ],
    // #146
    [
        "DBBJJJJCEKK",
        "DBBBCCCCEKK",
        "DDHFFIIILEG",
        "DHHFAILLLEG",
        "HHAAAII LGGG" // Spacing fixed
    ],
    // #147
    [
        "EEEIIGGGLFF",
        "CCEEIGHLLLF",
        "CBBIIGHHLKK", // D filled
        "CBBDAAAHHKK",
        "CBDDDDAJJJJ"
    ],
    // #148
    [
        "FFIIIBBBGGG",
        "CFIAILBBHEG",
        "CKKAALLHHEG",
        "CKKAALHHDEE",
        "CCJJJJDDDEE"
    ],
    // #149
    [
        "GGGJJJJEEAA",
        "GCCCCLEEAAA",
        "GCFFLLLHHID",
        "BFFKKLHHIDI",
        "BBBKKHHDDDD"
    ],
    // #150
    [
        "HHAAAIILGGG",
        "DHHFAILLLEG",
        "DDFFIIILLEG",
        "DBBFCCCCEKK",
        "DBBJJJJCEKK"
    ]
];

// --- ⚙️ 시스템 엔진 (수정 없음) ---
function parsePuzzles() {
    // I(Yellow)가 OCR상 O나 0으로 보일 경우를 대비해 매핑 추가
    const charMap = {
        'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 
        'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11,
        'O': 8, '0': 8 
    };

    let parsedDB = [];

    RAW_PUZZLES_TEXT.forEach((puzzleLines, pIdx) => {
        let grid = [];
        const lines = Array.isArray(puzzleLines) ? puzzleLines : puzzleLines.split('|');
        
        // 5줄 체크
        if (lines.length !== 5) {
            console.error(`Error: Puzzle #${pIdx+1} has ${lines.length} rows.`);
            return;
        }

        for (let r = 0; r < 5; r++) {
            let rowData = [];
            // 공백 제거 및 정리
            let cleanLine = lines[r].replace(/\s/g, '').toUpperCase();
            
            // 11칸 체크
            if (cleanLine.length !== 11) {
                console.warn(`Warning: Puzzle #${pIdx+1} Row ${r+1} length is ${cleanLine.length} (Expected 11). Check: ${cleanLine}`);
            }

            for (let c = 0; c < 11; c++) {
                const char = cleanLine[c] || 'X';
                if (charMap.hasOwnProperty(char)) {
                    rowData.push(charMap[char]);
                } else {
                    rowData.push(-1); // 에러 문자 처리
                }
            }
            grid.push(rowData);
        }
        parsedDB.push(grid);
    });

    console.log(`🚀 ${parsedDB.length} Puzzles Loaded Successfully!`);
    return parsedDB;
}

const SOLUTION_DB = parsePuzzles();
