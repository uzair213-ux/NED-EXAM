
export type Question = {
  id: number;
  subject: 'Math' | 'Physics' | 'English' | 'Computer';
  question: string;
  options: { [key: string]: string };
  answer: string;
  explanation?: string;
};

export const questions: Question[] = [
  // English
  {
    id: 26,
    subject: 'English',
    question: '<strong>Complete the sentence:</strong><br/>Medieval kingdoms did not become constitutional republics overnight; on the contrary, the change was _____.',
    options: { A: 'Unpopular', B: 'Gradual', C: 'Advantageous', D: 'Sufficient' },
    answer: 'B',
    explanation: '"On the contrary" ka jumla ek tazaad (contrast) zahir karta hai. "Overnight" ka matlab hai achanak tabdeeli, is liye iska mukhalif lafz "gradual" hoga, jiska matlab hai waqt ke sath ahista ahista hona.',
  },
  {
    id: 27,
    subject: 'English',
    question: 'What is the plural form of "crisis"?',
    options: { A: 'Crisises', B: 'Crises', C: 'Crisi', D: 'Crisum' },
    answer: 'B',
    explanation: 'Yunani (Greek) zaban se liye gaye alfaz jo -is par khatam hote hain, unki jama (plural) "crises" hoti hai.',
  },
  {
    id: 28,
    subject: 'English',
    question: 'The discovery of penicillin was a major breakthrough in medicine. Choose the synonym for "breakthrough".',
    options: { A: 'Failure', B: 'Hindrance', C: 'Advancement', D: 'Stagnation' },
    answer: 'C',
    explanation: '"Breakthrough" ka matlab hai ek ahem aur achanak daryaft ya taraqqi, jo lafz "advancement" ka hum-maani (synonym) hai.',
  },
  {
    id: 29,
    subject: 'English',
    question: '<strong>Choose the best replacement for the underlined phrase:</strong><br/>A nerve cell is <u>composed of</u> a nucleus and cytoplasm.',
    options: { A: 'Made up', B: 'Surrounded', C: 'Found', D: 'Located' },
    answer: 'A',
    explanation: '"Composed of" ka matlab hai "bana hua hona" ya "mushtamil hona".',
  },
  {
    id: 30,
    subject: 'English',
    question: 'Which word means the same as "premature"?',
    options: { A: 'Late', B: 'Timely', C: 'Early', D: 'Delayed' },
    answer: 'C',
    explanation: '"Premature" ka matlab hai waqt se pehle hona, jo ke "early" ki tareef hai.',
  },
  {
    id: 31,
    subject: 'English',
    question: 'He was very cautious in his approach to the problem. Choose the antonym for "cautious".',
    options: { A: 'Careful', B: 'Reckless', C: 'Prudent', D: 'Vigilant' },
    answer: 'B',
    explanation: '"Cautious" ka matlab hai muhtat rehna taake masail se bacha ja sake, jabke "reckless" ka matlab hai khatre ya nataij se beparwah hona.',
  },
  {
    id: 32,
    subject: 'English',
    question: '<strong>Choose the best replacement for the underlined word:</strong><br/>People fishing on a lake must wait <u>calmly</u> so as not to scare the fish away.',
    options: { A: 'Considerately', B: 'Hungrily', C: 'Alertly', D: 'Quietly' },
    answer: 'D',
    explanation: '"Calmly" ka matlab hai kisi kaam ko pur-sukoon aur khamoshi se karna. "Quietly" iska behtareen mutradif (synonym) hai.',
  },
  {
    id: 33,
    subject: 'English',
    question: '<strong>Complete the sentence:</strong><br/>The committee decided to ______ the meeting until next week.',
    options: { A: 'Adjourn', B: 'Convene', C: 'Hasten', D: 'Conclude' },
    answer: 'A',
    explanation: '"Adjourn" ka matlab hai kisi meeting ya karwai ko baad ke waqt tak multawi karna.',
  },
  {
    id: 34,
    subject: 'English',
    question: '<strong>Choose the best replacement for the underlined word:</strong><br/>As a nerve cell is depolarized, it <u>releases</u> nerve impulses.',
    options: { A: 'Coincides', B: 'Emits', C: 'Pushes', D: 'Shields' },
    answer: 'B',
    explanation: '"Releases" ka matlab hai kisi cheez ko harkat karne ya behne dena, jo ke "emits" ka hum-maani hai.',
  },
  {
    id: 35,
    subject: 'English',
    question: '<strong>Choose the best replacement for the underlined phrase:</strong><br/>When department stores have an oversupply of goods, they frequently <u>cut prices</u> to encourage sales.',
    options: { A: 'Conceal', B: 'Review', C: 'Damage', D: 'Reduce' },
    answer: 'D',
    explanation: 'Is jumle mein "cut" ka matlab hai qeematon ko "kam karna" ya "reduce" karna.',
  },
  {
    id: 36,
    subject: 'English',
    question: 'Complete the sentence: "She is afraid ______ spiders."',
    options: { A: 'from', B: 'of', C: 'with', D: 'by' },
    answer: 'B',
    explanation: 'Kisi cheez se khauf ko zahir karne ke liye preposition "of" ka istemal hota hai.',
  },
  {
    id: 37,
    subject: 'English',
    question: 'Choose the correct spelling:',
    options: { A: 'Occasion', B: 'Occassion', C: 'Ocassion', D: 'Occasionn' },
    answer: 'A',
    explanation: '"Occasion" sahi spelling hai, jismein do "c" aur ek "s" hota hai.',
  },
  {
    id: 38,
    subject: 'English',
    question: 'What is the part of speech for the word "fluently" in the sentence: "She speaks fluently in several languages."?',
    options: { A: 'Noun', B: 'Verb', C: 'Adjective', D: 'Adverb' },
    answer: 'D',
    explanation: '"Fluently" ek adverb hai kyunke yeh verb "speaks" ko modify kar raha hai, yaani batata hai ke woh kaise bolti hai.',
  },
  {
    id: 39,
    subject: 'English',
    question: 'Choose the word closest in meaning to "benevolent".',
    options: { A: 'Mean', B: 'Cruel', C: 'Kind', D: 'Selfish' },
    answer: 'C',
    explanation: '"Benevolent" ka matlab hai naik niyat aur meherban.',
  },
  {
    id: 40,
    subject: 'English',
    question: 'Complete the sentence: "Neither John nor his friends ______ at the party."',
    options: { A: 'was', B: 'is', C: 'were', D: 'am' },
    answer: 'C',
    explanation: 'Jab "neither...nor" do subjects ko jodta hai, to verb us subject ke mutabiq hota hai jo uske qareeb ho. Yahan "friends" (plural) qareeb hai, isliye "were" sahi hai.',
  },
  {
    id: 41,
    subject: 'English',
    question: 'Which of the following is a sentence fragment?',
    options: { A: 'The dog barked loudly.', B: 'Running in the park.', C: 'She loves to read books.', D: 'He ate dinner quickly.' },
    answer: 'B',
    explanation: '"Running in the park" ek fragment hai kyunke ismein subject aur mukammal verb nahi hai.',
  },
  {
    id: 42,
    subject: 'English',
    question: 'Identify the prepositional phrase in the sentence: "The cat slept under the table."',
    options: { A: 'The cat', B: 'Slept', C: 'Under the table', D: 'The table' },
    answer: 'C',
    explanation: '"Under the table" ek prepositional phrase hai kyunke yeh preposition ("under") se shuru hota hai aur ismein iska object ("the table") shamil hai.',
  },
  {
    id: 43,
    subject: 'English',
    question: 'What is the past participle of the verb "break"?',
    options: { A: 'Broke', B: 'Breaking', C: 'Broken', D: 'Breaks' },
    answer: 'C',
    explanation: '"Break" ka past participle "broken" hota hai.',
  },
  {
    id: 44,
    subject: 'English',
    question: 'Select the sentence with the correct subject-verb agreement.',
    options: { A: 'Each of the students have their books.', B: 'Each of the students has their books.', C: 'Each of the students were their books.', D: 'Each of the students are their books.' },
    answer: 'B',
    explanation: '"Each" ek wahid (singular) pronoun hai, isliye iske saath wahid verb "has" istemal hota hai.',
  },
  {
    id: 45,
    subject: 'English',
    question: 'Which of these is an example of an oxymoron?',
    options: { A: 'Jumbo shrimp', B: 'Bright star', C: 'Blue sky', D: 'Fast car' },
    answer: 'A',
    explanation: 'Oxymoron ek aisi figure of speech hai jismein do mutazad (contradictory) alfaz ek sath aate hain, jaise "jumbo shrimp" (shrimp chote hote hain).',
  },
  {
    id: 46,
    subject: 'English',
    question: 'Identify the conjunction in the sentence: "I wanted to go, but I was too tired."',
    options: { A: 'I', B: 'Wanted', C: 'But', D: 'Tired' },
    answer: 'C',
    explanation: '"But" ek coordinating conjunction hai jo do azaad jumlon (independent clauses) ko milata hai.',
  },
  {
    id: 47,
    subject: 'English',
    question: 'Choose the word that means "to make less severe or serious".',
    options: { A: 'Exacerbate', B: 'Aggravate', C: 'Mitigate', D: 'Intensify' },
    answer: 'C',
    explanation: '"Mitigate" ka matlab hai kisi buri cheez ki shiddat ko kam karna.',
  },
  {
    id: 48,
    subject: 'English',
    question: '<strong>Complete the sentence with the correct relative pronoun:</strong><br/>This is the book ______ I was looking for.',
    options: { A: 'who', B: 'whom', C: 'which', D: 'whose' },
    answer: 'C',
    explanation: 'Cheezon ke liye relative pronoun "which" istemal hota hai, aur "the book" ek cheez hai.',
  },
  {
    id: 49,
    subject: 'English',
    question: 'The word "affect" is typically a:',
    options: { A: 'Noun', B: 'Verb', C: 'Adjective', D: 'Adverb' },
    answer: 'B',
    explanation: '"Affect" aam tor par ek verb ke tor par istemal hota hai, jiska matlab hai kisi cheez par asar daalna.',
  },
  {
    id: 50,
    subject: 'English',
    question: '<strong>Complete the sentence:</strong><br/>The principal\'s speech had a profound ______ on the students.',
    options: { A: 'affect', B: 'effect', C: 'effecting', D: 'affected' },
    answer: 'B',
    explanation: '"Effect" ek noun hai jiska matlab hai nateeja ya anjam.',
  },
  // Math
  {
    id: 1,
    subject: 'Math',
    question: 'What is the product of the roots of the quadratic equation 2x<sup>2</sup> &minus; 5x + 3 = 0?',
    options: { A: '&minus;5/2', B: '5/2', C: '3/2', D: '&minus;3/2' },
    answer: 'C',
    explanation: 'Ek quadratic equation ax<sup>2</sup> + bx + c = 0 ke liye, roots ka hasil-e-zarb (product) c/a formula se milta hai. Is equation mein a=2 aur c=3 hai, is liye product 3/2 hai.',
  },
  {
    id: 2,
    subject: 'Math',
    question: 'If A is a square matrix and A<sup>t</sup>=A then A is',
    options: { A: 'Involutory matrix', B: 'Idempotent matrix', C: 'Symmetric matrix', D: 'Hermitian matrix' },
    answer: 'C',
    explanation: 'Ek square matrix A ko symmetric tab kehte hain jab uska transpose uske barabar ho, yaani A<sup>t</sup> = A.',
  },
  {
    id: 3,
    subject: 'Math',
    question: 'The domain of &radic;<span class="overline">x &minus; 2</span> is:',
    options: { A: 'x > 2', B: 'x < 2', C: 'x &ge; 2', D: 'x &le; 2' },
    answer: 'C',
    explanation: 'Square root ke andar ka expression hamesha non-negative (sifar ya sifar se bara) hona chahiye, is liye x - 2 ko 0 se bara ya barabar hona chahiye.',
  },
  {
    id: 4,
    subject: 'Math',
    question: 'If x=sin&theta; and y=cos&theta;, then what is x<sup>2</sup>+y<sup>2</sup>?',
    options: { A: '0', B: '1', C: '&minus;1', D: '2' },
    answer: 'B',
    explanation: 'Yeh trigonometry ki bunyadi identity hai: sin²θ + cos²θ = 1.',
  },
  {
    id: 5,
    subject: 'Math',
    question: 'If A={1,2,3} and B={3,4,5}, then A&cap;B is:',
    options: { A: '{1,2,3,4,5}', B: '{3}', C: '{1,2,4,5}', D: '&empty;' },
    answer: 'B',
    explanation: 'Do sets ka intersection (taqatu) un elements par mushtamil hota hai jo dono sets mein mojood hon, jo yahan sirf {3} hai.',
  },
  {
    id: 6,
    subject: 'Math',
    question: 'i<sup>16</sup> + i<sup>32</sup> &minus; i<sup>67</sup> =',
    options: { A: '&minus;1+i', B: '2+i', C: '1&minus;i', D: 'i' },
    answer: 'B',
    explanation: 'i^16 = (i^4)^4 = 1. i^32 = (i^4)^8 = 1. i^67 = i^64 * i^3 = -i. Is liye, 1 + 1 - (-i) = 2 + i.',
  },
  {
    id: 7,
    subject: 'Math',
    question: 'The solution of e<sup>x</sup>=1 is:',
    options: { A: '0', B: '1', C: 'e', D: 'ln1' },
    answer: 'A',
    explanation: '1 ka natural logarithm 0 hota hai, is liye e^x = 1 hone ke liye x ka 0 hona zaroori hai.',
  },
  {
    id: 8,
    subject: 'Math',
    question: 'In the matrix <table class="matrix"><tbody><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td></tr></tbody></table>, what is the element a<sub>23</sub>?',
    options: { A: '3', B: '6', C: '7', D: '8' },
    answer: 'B',
    explanation: 'Element a_ij, i-th row aur j-th column mein hota hai. Is liye, a_23 doosri row aur teesre column mein hai, jo ke 6 hai.',
  },
  {
    id: 9,
    subject: 'Math',
    question: 'If the average of 8 students on a test is 77, if 4 of them got 73 marks, then what will be the sum of scores of other 4?',
    options: { A: '324', B: '211', C: '127', D: '623' },
    answer: 'A',
    explanation: 'Kul score = 8 * 77 = 616. 4 students ka score = 4 * 73 = 292. Baqi 4 ka score = 616 - 292 = 324.',
  },
  {
    id: 10,
    subject: 'Math',
    question: 'The value of 0! and 1! respectively are:',
    options: { A: '0 and 1', B: '1 and 1', C: '0 and -1', D: '1 and -1' },
    answer: 'B',
    explanation: 'Taareef ke mutabiq, 0! (sifar factorial) ki qeemat 1 hoti hai, aur 1! ki qeemat bhi 1 hoti hai.',
  },
  {
    id: 11,
    subject: 'Math',
    question: 'The set of all real numbers is denoted by:',
    options: { A: 'N', B: 'Z', C: 'Q', D: 'R' },
    answer: 'D',
    explanation: 'Symbol "R" tamam real numbers ke set ko zahir karta hai, "N" natural numbers ke liye, "Z" integers ke liye, aur "Q" rational numbers ke liye.',
  },
  {
    id: 12,
    subject: 'Math',
    question: 'The matrix <table class="matrix"><tbody><tr><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td></tr></tbody></table> is a:',
    options: { A: 'Identity matrix', B: 'Scalar matrix', C: 'Zero matrix', D: 'Unit matrix' },
    answer: 'C',
    explanation: 'Zero matrix ya null matrix woh matrix hota hai jiske tamam entries sifar (zero) hon.',
  },
  {
    id: 13,
    subject: 'Math',
    question: 'The value of the determinant of a matrix with two identical rows is:',
    options: { A: '0', B: '1', C: '7', D: '&minus;1' },
    answer: 'A',
    explanation: 'Determinants ki ek khasiyat yeh hai ke agar kisi matrix mein do rows ya columns ek jaise hon, to uska determinant sifar (zero) hota hai.',
  },
  {
    id: 14,
    subject: 'Math',
    question: 'The discriminant of a quadratic equation ax<sup>2</sup>+bx+c=0 is:',
    options: { A: 'b<sup>2</sup>&minus;4ac', B: '&radic;<span class="overline">b<sup>2</sup>&minus;4ac</span>', C: '&minus;b&plusmn;&radic;<span class="overline">b<sup>2</sup>&minus;4ac</span>', D: '(&minus;b&plusmn;&radic;<span class="overline">b<sup>2</sup>&minus;4ac</span>)/2a' },
    answer: 'A',
    explanation: 'Ek quadratic equation ax² + bx + c = 0 ka discriminant b² - 4ac hota hai. Yeh roots ki noiyat (nature) batata hai.',
  },
  {
    id: 15,
    subject: 'Math',
    question: 'If A=<table class="matrix"><tbody><tr><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td></tr></tbody></table>, then A is an:',
    options: { A: 'Zero Matrix', B: 'Scalar Matrix', C: 'Identity Matrix', D: 'Diagonal Matrix' },
    answer: 'C',
    explanation: 'Identity matrix ek square matrix hota hai jiske principal diagonal ke tamam elements 1 hon aur baqi sab 0 hon.',
  },
  {
    id: 16,
    subject: 'Math',
    question: 'Solution of the equation 12<sup>x</sup> + 18<sup>y</sup> = 468 is',
    options: { A: 'x=2, y=2', B: 'x=1, y=2', C: 'x=2/3, y=1/3', D: 'x=4/3, y=1/5' },
    answer: 'A',
    explanation: 'Tajruba ya substitution se, 12^2 + 18^2 = 144 + 324 = 468. Is liye x=2, y=2 ek sahi hal hai.',
  },
  {
    id: 17,
    subject: 'Math',
    question: 'If A is a square matrix and A<sup>2</sup>=A then A is',
    options: { A: 'Involutory matrix', B: 'Idempotent matrix', C: 'Symmetric matrix', D: 'Hermitian matrix' },
    answer: 'B',
    explanation: 'Ek square matrix A ko idempotent tab kehte hain jab A² = A ho.',
  },
  {
    id: 18,
    subject: 'Math',
    question: 'If x<sup>2</sup>=49, then x=',
    options: { A: '7', B: '&plusmn;7', C: '&minus;7', D: '1/7' },
    answer: 'B',
    explanation: 'Dono taraf square root lene se do jawab aate hain, x = 7 aur x = -7.',
  },
  {
    id: 19,
    subject: 'Math',
    question: 'The degree of the polynomial 3x<sup>4</sup>&minus;2x<sup>2</sup>+5 is:',
    options: { A: '1', B: '2', C: '3', D: '4' },
    answer: 'D',
    explanation: 'Kisi polynomial ki degree usmein variable ki sab se bari power hoti hai, jo is case mein 4 hai.',
  },
  {
    id: 20,
    subject: 'Math',
    question: 'What is the value of log<sub>10</sub>(100)?',
    options: { A: '1', B: '2', C: '10', D: '100' },
    answer: 'B',
    explanation: 'Logarithm yeh poochta hai: "10 ki kaun si power 100 ke barabar hai?". Chunke 10² = 100, is liye jawab 2 hai.',
  },
  {
    id: 21,
    subject: 'Math',
    question: 'If two matrices A and B are multiplied, the number of columns in A must be equal to the number of ______ in B.',
    options: { A: 'rows', B: 'columns', C: 'elements', D: 'non-zero elements' },
    answer: 'A',
    explanation: 'Matrix multiplication AB ke liye zaroori hai ke matrix A ke columns ki tadaad matrix B ke rows ki tadaad ke barabar ho.',
  },
  {
    id: 22,
    subject: 'Math',
    question: 'If z = x + iy then |<span class="overline">z</span>| =',
    options: { A: '&radic;<span class="overline">x<sup>2</sup> &minus; y<sup>2</sup></span>', B: '&radic;<span class="overline">x<sup>2</sup> + y<sup>2</sup></span>', C: '&minus;&radic;<span class="overline">x<sup>2</sup> + y<sup>2</sup></span>', D: '&minus;&radic;<span class="overline">x<sup>2</sup> &minus; y<sup>2</sup></span>' },
    answer: 'B',
    explanation: 'Ek complex number z = x + iy ka modulus |z| = sqrt(x² + y²). Uske conjugate z-bar = x - iy ka modulus bhi sqrt(x² + (-y)²) = sqrt(x² + y²) hota hai.',
  },
  {
    id: 23,
    subject: 'Math',
    question: 'The number of terms in the expansion of (a+b)<sup>n</sup> is:',
    options: { A: 'n', B: 'n-1', C: 'n+1', D: '2n' },
    answer: 'C',
    explanation: 'Binomial theorem ke mutabiq, (a+b)^n ke expansion mein n+1 terms hoti hain.',
  },
  {
    id: 24,
    subject: 'Math',
    question: 'The solution set of x<sup>2</sup>&minus;9=0 is:',
    options: { A: '{3}', B: '{-3}', C: '{3, -3}', D: '{9}' },
    answer: 'C',
    explanation: 'Equation x² - 9 = 0 ko (x-3)(x+3) = 0 ki tarah factor kiya ja sakta hai, jis se solutions x=3 aur x=-3 milte hain.',
  },
  {
    id: 25,
    subject: 'Math',
    question: 'If A=<table class="matrix"><tbody><tr><td>2</td><td>0</td></tr><tr><td>0</td><td>2</td></tr></tbody></table>, then A is a:',
    options: { A: 'Zero Matrix', B: 'Scalar Matrix', C: 'Identity Matrix', D: 'Diagonal Matrix' },
    answer: 'B',
    explanation: 'Scalar matrix woh diagonal matrix hota hai jiske tamam diagonal elements ek jaise hon.',
  },
  // Physics
  {
    id: 51,
    subject: 'Physics',
    question: 'The sum of kinetic and potential energy is called:',
    options: { A: 'Electrical energy', B: 'Thermal energy', C: 'Mechanical energy', D: 'Chemical energy' },
    answer: 'C',
    explanation: 'Mechanical energy kisi jism ki harkat ya uski position ki wajah se jama shuda energy hoti hai. Yeh kinetic energy aur potential energy ka majmua hai.',
  },
  {
    id: 52,
    subject: 'Physics',
    question: 'Which device converts mechanical energy into electrical energy?',
    options: { A: 'Motor', B: 'Generator', C: 'Transformer', D: 'Resistor' },
    answer: 'B',
    explanation: 'Generator electromagnetic induction ka istemal karke mechanical energy (ghoomna) ko electrical energy mein tabdeel karta hai.',
  },
  {
    id: 53,
    subject: 'Physics',
    question: 'What is the SI unit of pressure?',
    options: { A: 'Newton', B: 'Joule', C: 'Pascal', D: 'Watt' },
    answer: 'C',
    explanation: 'Pressure force per unit area hota hai, aur iska SI unit Pascal (Pa) hai, jo ek Newton per square meter ke barabar hota hai.',
  },
  {
    id: 54,
    subject: 'Physics',
    question: 'Which of these waves does NOT require a medium for propagation?',
    options: { A: 'Sound waves', B: 'Water waves', C: 'Light waves', D: 'Seismic waves' },
    answer: 'C',
    explanation: 'Electromagnetic waves, jaise roshni, ko safar ke liye kisi medium ki zaroorat nahi hoti aur woh khala (vacuum) mein bhi safar kar sakti hain.',
  },
  {
    id: 55,
    subject: 'Physics',
    question: 'What is the wavelength of a sound wave with a frequency of 200 Hz and a speed of 340 m/s?',
    options: { A: '0.588 m', B: '1.7 m', C: '68 m', D: '68000 m' },
    answer: 'B',
    explanation: 'Formula hai wavelength (λ) = speed (v) / frequency (f). Is liye, λ = 340 m/s / 200 Hz = 1.7 m.',
  },
  {
    id: 56,
    subject: 'Physics',
    question: 'Angular momentum is defined as:',
    options: { A: 'r&#x20D7; + p&#x20D7;', B: 'p&#x20D7; &times; r&#x20D7;', C: 'r&middot;p', D: 'r&#x20D7; &times; p&#x20D7;' },
    answer: 'D',
    explanation: 'Angular momentum (L) position vector (r) aur linear momentum vector (p) ka cross product hota hai.',
  },
  {
    id: 57,
    subject: 'Physics',
    question: 'The phenomenon responsible for the twinkling of stars is:',
    options: { A: 'Reflection', B: 'Dispersion', C: 'Atmospheric refraction', D: 'Total internal reflection' },
    answer: 'C',
    explanation: 'Sitaron se aane wali roshni zameen ki fiza ki mukhtalif tehoun (layers) se guzar kar murti (refract) hai, jis se roshni ka raasta badalta rehta hai aur sitare timtimate hue nazar aate hain.',
  },
  {
    id: 58,
    subject: 'Physics',
    question: 'What is the total resistance of two resistors, 10 &Omega; and 20 &Omega;, connected in series?',
    options: { A: '5 &Omega;', B: '10 &Omega;', C: '20 &Omega;', D: '30 &Omega;' },
    answer: 'D',
    explanation: 'Series mein lage resistors ke liye, kul resistance unki infiradi resistances ka majmua hota hai: R_total = R1 + R2 = 10 Ω + 20 Ω = 30 Ω.',
  },
  {
    id: 59,
    subject: 'Physics',
    question: 'If focal length is increased two times, what happens to the power of the lens?',
    options: { A: 'Power becomes 4 times', B: 'Power becomes half', C: 'Power becomes double', D: 'Power remains unchanged' },
    answer: 'B',
    explanation: 'Power (P) focal length (f) ka reciprocal hota hai, yaani P = 1/f. Agar focal length double (2f) ho jaye, to nai power P\' = 1/(2f) = P/2 hogi, yaani power aadhi ho jayegi.',
  },
  {
    id: 60,
    subject: 'Physics',
    question: 'What is the SI unit of electric charge?',
    options: { A: 'Volt', B: 'Ampere', C: 'Coulomb', D: 'Ohm' },
    answer: 'C',
    explanation: 'Electric charge ka SI unit Coulomb (C) hai.',
  },
  {
    id: 61,
    subject: 'Physics',
    question: 'What is the SI unit of frequency?',
    options: { A: 'Second', B: 'Meter', C: 'Hertz', D: 'Joule' },
    answer: 'C',
    explanation: 'Frequency ka SI unit Hertz (Hz) hai, jo cycles per second ko zahir karta hai.',
  },
  {
    id: 62,
    subject: 'Physics',
    question: 'The acceleration of a body moving with uniform velocity is:',
    options: { A: 'Positive', B: 'Negative', C: 'Zero', D: 'Constant' },
    answer: 'C',
    explanation: 'Uniform velocity ka matlab hai ke velocity mustaqil (constant) hai. Acceleration velocity ki tabdeeli ki sharah (rate of change) hai, is liye agar velocity constant ho to acceleration sifar (zero) hogi.',
  },
  {
    id: 63,
    subject: 'Physics',
    question: 'What is the SI unit of temperature?',
    options: { A: 'Celsius', B: 'Fahrenheit', C: 'Kelvin', D: 'Rankine' },
    answer: 'C',
    explanation: 'Kelvin (K) thermodynamic temperature ka SI base unit hai.',
  },
  {
    id: 64,
    subject: 'Physics',
    question: 'The unit of work is:',
    options: { A: 'Watt', B: 'Newton', C: 'Joule', D: 'Second' },
    answer: 'C',
    explanation: 'Work energy ka ek roop hai, aur iska SI unit Joule (J) hai.',
  },
  {
    id: 65,
    subject: 'Physics',
    question: 'What happens to the potential energy of an object as it falls?',
    options: { A: 'Increases', B: 'Decreases', C: 'Remains constant', D: 'Converts to thermal energy only' },
    answer: 'B',
    explanation: 'Jab koi cheez girti hai, to uski bulandi (height) kam hoti hai, is liye uski gravitational potential energy (mgh) bhi kam ho kar kinetic energy mein tabdeel ho jati hai.',
  },
  {
    id: 66,
    subject: 'Physics',
    question: 'The property of a material to resist the flow of electric current is called:',
    options: { A: 'Conductance', B: 'Capacitance', C: 'Resistance', D: 'Inductance' },
    answer: 'C',
    explanation: 'Resistance kisi material ki woh khasiyat hai jo electric current ke bahao mein rukawat daalti hai.',
  },
  {
    id: 67,
    subject: 'Physics',
    question: 'Which of the following equations represents Power?',
    options: { A: 'F*V', B: 'F/V', C: 'F+V', D: 'F-A' },
    answer: 'A',
    explanation: 'Power ko force (F) aur velocity (V) ke hasil-e-zarb (product) ke tor par bhi calculate kiya ja sakta hai, jab force velocity ki simt mein lage.',
  },
  {
    id: 68,
    subject: 'Physics',
    question: 'According to Ohm\'s Law, if voltage increases and resistance remains constant, current will:',
    options: { A: 'Increase', B: 'Decrease', C: 'Remain the same', D: 'Be zero' },
    answer: 'A',
    explanation: 'Ohm\'s Law (V = IR) ke mutabiq, current (I) voltage (V) ke barah-e-raast mutanasib (directly proportional) hota hai. Is liye agar V barhega to I bhi barhega.',
  },
  {
    id: 69,
    subject: 'Physics',
    question: 'A magnifying glass is a type of which lens?',
    options: { A: 'Concave lens', B: 'Convex lens', C: 'Plano-concave lens', D: 'Cylindrical lens' },
    answer: 'B',
    explanation: 'Magnifying glass ek convex lens ka istemal karta hai taake kisi cheez ka bara aur virtual image banaya ja sake.',
  },
  {
    id: 70,
    subject: 'Physics',
    question: 'Which of the following is a fundamental quantity?',
    options: { A: 'Force', B: 'Work', C: 'Time', D: 'Power' },
    answer: 'C',
    explanation: 'Time International System of Units (SI) ke saat bunyadi miqdaron (base quantities) mein se ek hai. Force, work, aur power derived quantities hain.',
  },
  {
    id: 71,
    subject: 'Physics',
    question: 'The term "inertia" is directly related to an object\'s:',
    options: { A: 'Velocity', B: 'Acceleration', C: 'Mass', D: 'Force' },
    answer: 'C',
    explanation: 'Inertia kisi jism ki harkat ki halat mein kisi bhi tabdeeli ke khilaf muzahimat (resistance) hai. Yeh jism ke mass ke barah-e-raast mutanasib (directly proportional) hota hai.',
  },
  {
    id: 72,
    subject: 'Physics',
    question: 'The phenomenon of light bouncing back from a surface is called:',
    options: { A: 'Refraction', B: 'Reflection', C: 'Diffraction', D: 'Dispersion' },
    answer: 'B',
    explanation: 'Reflection roshni ka kisi satah se takra kar wapis palatne ka amal hai.',
  },
  {
    id: 73,
    subject: 'Physics',
    question: 'The bending of light as it passes from one medium to another is called:',
    options: { A: 'Reflection', B: 'Refraction', C: 'Dispersion', D: 'Absorption' },
    answer: 'B',
    explanation: 'Refraction roshni ka ek shaffaf medium se doosre mein dakhil hote waqt murnay ka amal hai.',
  },
  {
    id: 74,
    subject: 'Physics',
    question: 'If a force of 10 N is applied to an object with a mass of 2 kg, what is the acceleration produced?',
    options: { A: '0.2 m/s&sup2;', B: '2 m/s&sup2;', C: '5 m/s&sup2;', D: '20 m/s&sup2;' },
    answer: 'C',
    explanation: 'Newton ke doosre qanoon (F=ma) ke mutabiq, acceleration a = F/m = 10 N / 2 kg = 5 m/s².',
  },
  {
    id: 75,
    subject: 'Physics',
    question: 'The speed of sound in air at 0&deg;C is approximately:',
    options: { A: '331 m/s', B: '343 m/s', C: '1500 m/s', D: '5000 m/s' },
    answer: 'A',
    explanation: '0 °C par khushk hawa mein awaaz ki raftaar taqreeban 331 meter per second hoti hai.',
  },
  // Computer
  {
    id: 76,
    subject: 'Computer',
    question: 'What is the primary function of a firewall?',
    options: { A: 'To increase internet speed', B: 'To block unauthorized access to a network', C: 'To store data', D: 'To process graphics' },
    answer: 'B',
    explanation: 'Firewall ek network security device hai jo anay aur janay wale network traffic ki nigrani karta hai aur security rules ki bunyad par traffic ko block ya ijazat deta hai.',
  },
  {
    id: 77,
    subject: 'Computer',
    question: 'What does "GUI" stand for?',
    options: { A: 'General User Interface', B: 'Graphical User Interface', C: 'Grand Unified Interface', D: 'Graphic Utility Index' },
    answer: 'B',
    explanation: 'GUI ka matlab Graphical User Interface hai, jo users ko graphical icons aur visual indicators ke zariye electronic devices se interact karne ki ijazat deta hai.',
  },
  {
    id: 78,
    subject: 'Computer',
    question: 'What does "URL" stand for?',
    options: { A: 'Uniform Resource Locator', B: 'Universal Remote Link', C: 'User Resource Language', D: 'United Resource Locator' },
    answer: 'A',
    explanation: 'URL ka matlab Uniform Resource Locator hai, jo kisi web resource ka hawala hota hai jo computer network par uske maqam ki nishandahi karta hai.',
  },
  {
    id: 79,
    subject: 'Computer',
    question: 'Which of these is a volatile memory?',
    options: { A: 'ROM', B: 'Hard Drive', C: 'RAM', D: 'SSD' },
    answer: 'C',
    explanation: 'Volatile memory, jaise RAM (Random Access Memory), ko data mehfooz rakhne ke liye power ki zaroorat hoti hai; power band hone par iska data zaya ho jata hai.',
  },
  {
    id: 80,
    subject: 'Computer',
    question: 'What is the purpose of a router in a network?',
    options: { A: 'To store data', B: 'To print documents', C: 'To connect different networks and direct data traffic', D: 'To display images' },
    answer: 'C',
    explanation: 'Router ek networking device hai jo mukhtalif computer networks ke darmiyan data packets ko aage bhejta hai.',
  },
  {
    id: 81,
    subject: 'Computer',
    question: '"RAM" stands for:',
    options: { A: 'Read Access Memory', B: 'Random Access Memory', C: 'Read-Only Access Memory', D: 'Random Application Memory' },
    answer: 'B',
    explanation: 'RAM ka matlab Random Access Memory hai, jo computer ki ek qism ki volatile memory hai.',
  },
  {
    id: 82,
    subject: 'Computer',
    question: 'What is the full form of "WWW"?',
    options: { A: 'World Wide Web', B: 'World Web Wide', C: 'Web World Wide', D: 'Wide World Web' },
    answer: 'A',
    explanation: 'WWW ka matlab World Wide Web hai, jo ek aalmi (global) information space hai jise log internet se munsalik computers ke zariye access kar sakte hain.',
  },
  {
    id: 83,
    subject: 'Computer',
    question: 'What is a "pixel"?',
    options: { A: 'A unit of sound', B: 'A tiny dot on a display screen', C: 'A type of computer virus', D: 'A network cable' },
    answer: 'B',
    explanation: 'Pixel (picture element ka makhffaf) ek raster image ya display device ka sab se chota addressable hissa hota hai.',
  },
  {
    id: 84,
    subject: 'Computer',
    question: 'Which port is commonly used to connect a monitor to a computer?',
    options: { A: 'USB', B: 'Ethernet', C: 'HDMI', D: 'PS/2' },
    answer: 'C',
    explanation: 'HDMI (High-Definition Multimedia Interface) monitor samait high-definition video devices ko jorne ka ek jadeed mayar (standard) hai.',
  },
  {
    id: 85,
    subject: 'Computer',
    question: 'What is the complement of the XOR operation?',
    options: { A: 'XNOR', B: 'AND', C: 'OR', D: 'NOT' },
    answer: 'A',
    explanation: 'XNOR (exclusive-NOR) gate XOR gate ka logical complement hai, jo inputs barabar hone par true output deta hai.',
  },
  {
    id: 86,
    subject: 'Computer',
    question: 'Which of the following is a programming language?',
    options: { A: 'HTML', B: 'CSS', C: 'Python', D: 'JPEG' },
    answer: 'C',
    explanation: 'Python ek high-level, general-purpose programming language hai. HTML aur CSS markup aur styling languages hain.',
  },
  {
    id: 87,
    subject: 'Computer',
    question: 'The smallest unit of data in a computer is:',
    options: { A: 'Byte', B: 'Kilobyte', C: 'Bit', D: 'Megabyte' },
    answer: 'C',
    explanation: 'Bit (binary digit) computing mein data ki sab se bunyadi ikai hai aur iski qeemat 0 ya 1 ho sakti hai.',
  },
  {
    id: 88,
    subject: 'Computer',
    question: 'What is software that allows a user to access, retrieve, and view information on the World Wide Web?',
    options: { A: 'Operating system', B: 'Web browser', C: 'Word processor', D: 'Spreadsheet' },
    answer: 'B',
    explanation: 'Web browser ek application software hai jo World Wide Web tak rasai ke liye istemal hota hai.',
  },
  {
    id: 89,
    subject: 'Computer',
    question: 'What does "IBM" stand for?',
    options: { A: 'International Business Machines', B: 'Integrated Business Management', C: 'Internet-Based Management', D: 'Informational Business Model' },
    answer: 'A',
    explanation: 'IBM ka matlab International Business Machines Corporation hai.',
  },
  {
    id: 90,
    subject: 'Computer',
    question: 'What is the process of finding and fixing errors in a program?',
    options: { A: 'Compiling', B: 'Debugging', C: 'Executing', D: 'Testing' },
    answer: 'B',
    explanation: 'Debugging ek computer program ke andar kharabiyon (errors) ko dhoondne aur theek karne ka amal hai.',
  },
  {
    id: 91,
    subject: 'Computer',
    question: 'Which of the following is an input device?',
    options: { A: 'Printer', B: 'Monitor', C: 'Keyboard', D: 'Speaker' },
    answer: 'C',
    explanation: 'Keyboard ek input device hai jo computer system mein characters aur functions dakhil karne ke liye istemal hota hai.',
  },
  {
    id: 92,
    subject: 'Computer',
    question: 'A network that connects computers within a limited area such as a home or office is called a:',
    options: { A: 'WAN', B: 'MAN', C: 'LAN', D: 'PAN' },
    answer: 'C',
    explanation: 'LAN (Local Area Network) ek computer network hai jo ghar ya daftar jaise mehdood ilaqay ke andar computers ko apas mein jodta hai.',
  },
  {
    id: 93,
    subject: 'Computer',
    question: 'Which component of a computer stores long-term data even when the computer is turned off?',
    options: { A: 'RAM', B: 'CPU', C: 'Hard Drive', D: 'Cache Memory' },
    answer: 'C',
    explanation: 'Hard drive ek non-volatile storage device hai jo computer band hone par bhi data ko lambay arsay tak mehfooz rakhta hai.',
  },
  {
    id: 94,
    subject: 'Computer',
    question: 'The term "CPU" stands for:',
    options: { A: 'Central Power Unit', B: 'Computer Processing Unit', C: 'Central Processing Unit', D: 'Control Panel Unit' },
    answer: 'C',
    explanation: 'CPU ka matlab Central Processing Unit hai, jo computer ka dimaagh hai aur aksar processing anjam deta hai.',
  },
  {
    id: 95,
    subject: 'Computer',
    question: 'A collection of related information stored and organized for easy access and retrieval is called a:',
    options: { A: 'Spreadsheet', B: 'Database', C: 'Presentation', D: 'Document' },
    answer: 'B',
    explanation: 'Database maloomat ka ek munazzam majmua hota hai jise asaan rasai ke liye store kiya jata hai.',
  },
  {
    id: 96,
    subject: 'Computer',
    question: 'What is a "byte" composed of?',
    options: { A: '4 bits', B: '8 bits', C: '16 bits', D: '32 bits' },
    answer: 'B',
    explanation: 'Ek byte aam tor par 8 bits par mushtamil hota hai.',
  },
  {
    id: 97,
    subject: 'Computer',
    question: 'What is the main purpose of an antivirus software?',
    options: { A: 'To speed up the computer', B: 'To protect against malware and viruses', C: 'To create documents', D: 'To play games' },
    answer: 'B',
    explanation: 'Antivirus software computer viruses aur doosre nuqsandeh software ka pata lagane aur unhein hatane ke liye banaya gaya hai.',
  },
  {
    id: 98,
    subject: 'Computer',
    question: 'Which of the following is an operating system?',
    options: { A: 'Microsoft Word', B: 'Google Chrome', C: 'Windows', D: 'Adobe Photoshop' },
    answer: 'C',
    explanation: 'Windows Microsoft ka banaya hua ek operating system hai. Baqi sab application software hain.',
  },
  {
    id: 99,
    subject: 'Computer',
    question: 'What does "IP" stand for in the context of computer networks?',
    options: { A: 'Internet Protocol', B: 'Internal Process', C: 'Information Packet', D: 'Integrated Program' },
    answer: 'A',
    explanation: 'IP ka matlab Internet Protocol hai, jo data packets ko networks ke darmiyan route karne aur address karne ke qawaneen ka set hai.',
  },
  {
    id: 100,
    subject: 'Computer',
    question: 'Which type of software is used to create and edit text documents?',
    options: { A: 'Spreadsheet software', B: 'Presentation software', C: 'Word processing software', D: 'Database software' },
    answer: 'C',
    explanation: 'Word processing software, jaise Microsoft Word, text par mabni dastawizaat (documents) banane aur unhein edit karne ke liye istemal hota hai.',
  },
];

    
