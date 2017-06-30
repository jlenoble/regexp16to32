grammar U16To32;

data
: representation* EOF
;

representation
: reps
| repPair
| Rep
| anything
| bracketedAnything
;

anything
: DISCARD+
;

bracketedAnything
: OpenBracket representation* CloseBracket
;

Rep
: EscapeU CodePointAsCodeUnit
;

repPair
: RepHigh RepLow
;

reps
: classHigh classLow
;

classHigh
: OpenBracket patternHigh+ CloseBracket
;

classLow
: OpenBracket patternLow+ CloseBracket
;

patternHigh
: RangeHigh
| RepHigh
;

patternLow
: RangeLow
| RepLow
;

RangeHigh
: RepHigh Dash RepHigh
;

RangeLow
: RepLow Dash RepLow
;

RepHigh
: EscapeU HighSurrogate
;

RepLow
: EscapeU LowSurrogate
;

fragment
CodePointAsCodeUnit
: ~[dD] HexDigit HexDigit HexDigit
| [dD] [0-7] HexDigit HexDigit
;

fragment
HighSurrogate
: [dD] [89abAB] HexDigit HexDigit
;

fragment
LowSurrogate
: [dD] [c-fC-F] HexDigit HexDigit
;

fragment
EscapeU
: '\\u'
;

fragment
Dash
: '-'
;

OpenBracket
: '['
;

CloseBracket
: ']'
;

fragment
HexDigit
: [0-9a-fA-F]
;

DISCARD
: .
;
