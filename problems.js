/* * 😺 CATNOODLE SMART DATABASE 
 * PDF 솔루션의 알파벳(A~L)을 자동으로 게임 데이터(0~11)로 변환하는 시스템입니다.
 * Mapping: A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7, I=8, J=9, K=10, L=11
 */

// 1. PDF의 정답을 문자열로 그대로 입력합니다. (가독성 UP! 🚀)
// 각 줄은 '|'로 구분하거나, 배열로 나열합니다.
const RAW_PUZZLES_TEXT = [
    // #1 (PDF Page 1 - Verified) 
    // "주황3/파랑4/살구4" 규칙 확인 
    [
        "AAACCCCDDDD",
        "AHHCGGGLDKK",
        "IIHHGFFLLKK",
        "IIBHGFFLBBB",
        "IIBEEEEEEBB" // *주의: 색상 배치에 따라 마지막 블록 조정 필요할 수 있음
    ],
    // #2 (PDF Page 1)
    [
        "BBJJJCHHGGG",
        "BBOCCCLHHAG",
        "BBOOFLLLHAG",
        "KKOFFDLEEAA",
        "KKOODDDDEEE"
    ],
    // #3 (PDF Page 1)
    [
        "CCCODFFKKAA",
        "CLDDDDFKKHA",
        "LLLGJJJJHHA",
        "ILIGEEEHHBB",
        "IIIGGGEEBBB"
    ],
     // #4 (PDF Page 1)
    [
        "DDDDLCCCCKK",
        "FDGLLLJJEKK",
        "FFGIIIBBJHA",
        "GGGIIIBBHHA",
        "EEEIIEEHHAA"
    ]
    // 💡 팁: 여기에 PDF를 보고 알파벳을 계속 추가하면 180개까지 확장이 가능합니다!
];

// 2. 문자열 -> 숫자(ID) 변환 엔진
function parsePuzzles() {
    // 문자 매핑 테이블 (유저 정의 규칙 준수)
    const charMap = {
        'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 
        'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11,
        'O': 8, '0': 8 // OCR 오류 방지용 (노란색 I가 O나 0으로 보일 때)
    };

    let parsedDB = [];

    RAW_PUZZLES_TEXT.forEach((puzzleLines, pIdx) => {
        let grid = [];
        // 문자열 정제 (공백 제거 등)
        const lines = Array.isArray(puzzleLines) ? puzzleLines : puzzleLines.split('|');
        
        if (lines.length !== 5) {
            console.warn(`Puzzle #${pIdx+1} Row Error: ${lines.length} rows found.`);
            return;
        }

        for (let r = 0; r < 5; r++) {
            let rowData = [];
            let cleanLine = lines[r].trim().toUpperCase();
            
            if (cleanLine.length !== 11) {
                console.warn(`Puzzle #${pIdx+1} Col Error at Row ${r}: ${cleanLine} (${cleanLine.length})`);
            }

            for (let c = 0; c < 11; c++) {
                const char = cleanLine[c] || 'X'; // 없는 문자는 에러 처리
                if (charMap.hasOwnProperty(char)) {
                    rowData.push(charMap[char]);
                } else {
                    rowData.push(-1); // 매핑되지 않은 문자는 빈칸(-1) 처리
                }
            }
            grid.push(rowData);
        }
        parsedDB.push(grid);
    });

    return parsedDB;
}

// 3. 게임 엔진에 주입
const SOLUTION_DB = parsePuzzles();
