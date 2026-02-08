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
        "OEIBBBK KGC",
        "EEHHAAALGCC",
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
