(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return O})),r.d(t,"default",(function(){return o}));var n=r(3),l=r(7),b=(r(0),r(187)),c=r(188),a={id:"formula-list",title:"List of Formulas and Functions"},u={unversionedId:"references/formula-list",id:"references/formula-list",isDocsHomePage:!1,title:"List of Formulas and Functions",description:"ValQ supports many traditional user-friendly functions that allow you",source:"@site/docs/references/formula-list.mdx",slug:"/references/formula-list",permalink:"/references/formula-list",version:"current",sidebar:"functionSideBar",next:{title:"IF",permalink:"/references/formulas/if"}},O=[{value:"Logical Functions",id:"logical-functions",children:[]},{value:"Logical Operators",id:"logical-operators",children:[]},{value:"Math Functions",id:"math-functions",children:[]},{value:"Finance Functions",id:"finance-functions",children:[]},{value:"Range Functions",id:"range-functions",children:[]},{value:"Static Identifiers And Other Formats",id:"static-identifiers-and-other-formats",children:[]},{value:"Other Operators",id:"other-operators",children:[]}],s={rightToc:O};function o(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"ValQ supports many traditional user-friendly functions that allow you\nto create complex models. You may recognize many of these from your\nexperience with Microsoft Excel."),Object(b.b)("h2",{id:"logical-functions"},"Logical Functions"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,Object(b.b)("strong",null,"NAME")),Object(b.b)("th",null,Object(b.b)("strong",null,"SYNTAX")),Object(b.b)("th",null,Object(b.b)("strong",null,"DESCRIPTION")))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/if")},"IF")),Object(b.b)("td",null,"If( logical_test, value_if_true, value_if_false )"),Object(b.b)("td",null,"Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/switch")},"SWITCH")),Object(b.b)("td",null,"SWITCH ( expression, value1, result1, value2, result2, ... value_n, result_n [, default] )"),Object(b.b)("td",null,"Evaluates an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an optional default value is returned.")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/and")},"AND")),Object(b.b)("td",null,"AND( logical_test1, [logical_test2], ... )"),Object(b.b)("td",null,"Checks whether all the arguments are TRUE, and returns TRUE if all arguments are TRUE")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/or")},"OR")),Object(b.b)("td",null,"OR( logical_test1, [logical_test2], ... )"),Object(b.b)("td",null,"Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/not")},"NOT")),Object(b.b)("td",null,"NOT( logical_test )"),Object(b.b)("td",null,"Changes FALSE to TRUE, or TRUE to FALSE")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/xor")},"XOR")),Object(b.b)("td",null,"XOR( logical_test1, [logical_test2], ... )"),Object(b.b)("td",null,"Returns a logical 'Exclusive Or' of all arguments")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/isnan")},"ISNAN")),Object(b.b)("td",null,"ISNAN (value1,value2)"),Object(b.b)("td",null," Returns a default value if the value in the node is an error.")))),Object(b.b)("h2",{id:"logical-operators"},"Logical Operators"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,Object(b.b)("strong",null,"OPERATORS")),Object(b.b)("th",null,Object(b.b)("strong",null,"DESCRIPTION")))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"&&"),Object(b.b)("td",null,"Logical ",Object(b.b)("a",{href:Object(c.a)("references/formulas/and")},"AND"))),Object(b.b)("tr",null,Object(b.b)("td",null,"||"),Object(b.b)("td",null,"Logical ",Object(b.b)("a",{href:Object(c.a)("references/formulas/or")},"OR"))))),Object(b.b)("h2",{id:"math-functions"},"Math Functions"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,Object(b.b)("strong",null,"NAME")),Object(b.b)("th",null,Object(b.b)("strong",null,"SYNTAX")),Object(b.b)("th",null,Object(b.b)("strong",null,"DESCRIPTION")))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/sum")},"SUM")),Object(b.b)("td",null,"Sum(value1,[value2]....)"),Object(b.b)("td",null,"Add all numbers in the arguments, which can be numbers or node references")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/average")},"AVERAGE")),Object(b.b)("td",null,"Average(value1,[value2]....)"),Object(b.b)("td",null,"Returns the average (arithmetic mean) of its arguments, which can be numbers or node references")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/averageexzero")},"AVERAGEEXZERO")),Object(b.b)("td",null,"AverageExZero(value1,[value2]....)"),Object(b.b)("td",null,"Returns the average (arithmetic mean) of its arguments excluding zeros, which can be numbers or node references")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/averageexneg")},"AVERAGEEXNEG")),Object(b.b)("td",null,"AverageExNeg(value1,[value2]....)"),Object(b.b)("td",null,"Returns the average (arithmetic mean) of its arguments excluding negatives, which can be numbers or node references")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/averageexzeroneg")},"AVERAGEEXZERONEG")),Object(b.b)("td",null,"AverageExZeroNeg(value1,[value2]....)"),Object(b.b)("td",null,"Returns the average (arithmetic mean) of its arguments excluding zeros and negatives, which can be numbers or node references")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/count")},"COUNT")),Object(b.b)("td",null,"Count(value1,[value2]....)"),Object(b.b)("td",null,"Counts the number of items in a range")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/abs")},"ABS")),Object(b.b)("td",null,"ABS(value)"),Object(b.b)("td",null,"Returns the absolute value of a number, a number without its sign")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/min")},"MIN")),Object(b.b)("td",null,"Min(value1,[value2]....)"),Object(b.b)("td",null,"Returns the smallest number in a set of values. Node references also accepted as arguments")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/max")},"MAX")),Object(b.b)("td",null,"Max(value1,[value2]....)"),Object(b.b)("td",null,"Returns the largest number in a set of values. Node references also accepted as arguments")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/power")},"POWER")),Object(b.b)("td",null,"POW(value,power)"),Object(b.b)("td",null,"Returns the result of a number raised to a power")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/sqrt")},"SQRT")),Object(b.b)("td",null,"SQRT(value)"),Object(b.b)("td",null,"Returns the square root of a number")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/exp")},"EXP")),Object(b.b)("td",null,"EXP(value)"),Object(b.b)("td",null,"Returns e raised to the power of a given number")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/log")},"LOG")),Object(b.b)("td",null,"LOG(value,base)"),Object(b.b)("td",null,"Returns the logarithm of a number to the base you specify")))),Object(b.b)("h2",{id:"finance-functions"},"Finance Functions"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,Object(b.b)("strong",null,"NAME")),Object(b.b)("th",null,Object(b.b)("strong",null,"SYNTAX")),Object(b.b)("th",null,Object(b.b)("strong",null,"DESCRIPTION")))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/irr")},"IRR")),Object(b.b)("td",null,"IRR (Values, [Guess])"),Object(b.b)("td",null,"Returns the internal rate of return for a series of cash flows. Node references also accepted as arguments")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/npv")},"NPV")),Object(b.b)("td",null,"NPV (Rate, value1, [value2], ...)"),Object(b.b)("td",null,"Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values)")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/pmt")},"PMT")),Object(b.b)("td",null,"PMT(Rate, Nper, PV, [FV], [Type])"),Object(b.b)("td",null,"Calculates the payment for a loan based on constant payments and a constant interest rate")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/ipmt")},"IPMT")),Object(b.b)("td",null,"IPMT (Rate, Per, Nper, PV, [FV], [Type])"),Object(b.b)("td",null,"Returns the interest payment for a given period for an investment,based on periodic, constant payments and a constant interest rate")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/fv")},"FV")),Object(b.b)("td",null,"FV (Rate, Nper, [Pmt], PV, [Type])"),Object(b.b)("td",null,"Returns the future value of an investment based on periodic, constant payments and a constant interest rate")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/pv")},"PV")),Object(b.b)("td",null,"PV(Rate, Nper, [Pmt], FV, [Type])"),Object(b.b)("td",null,"Returns the present value of an investment")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/cumipmt")},"CUMIPMT")),Object(b.b)("td",null,"CUMIPMT (Rate, Nper, PV, start_period, end_period, Type)"),Object(b.b)("td",null,"Returns the cumulative interest paid between two periods")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/cumprinc")},"CUMPRINC")),Object(b.b)("td",null,"CUMPRINC (Rate, Nper, PV, start_period, end_period, Type)"),Object(b.b)("td",null,"Returns the cumulative principal paid on a loan between two periods")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/rate")},"RATE")),Object(b.b)("td",null,"RATE(Nper, PMT, PV, [FV], [Type], [Guess])"),Object(b.b)("td",null,"Returns the interest rate per period of a loan or an investment."))))," ",Object(b.b)("h2",{id:"range-functions"},"Range Functions"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,Object(b.b)("strong",null,"NAME")),Object(b.b)("th",null,Object(b.b)("strong",null,"SYNTAX")),Object(b.b)("th",null,Object(b.b)("strong",null,"DESCRIPTION")))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/range")},"Range")),Object(b.b)("td",null,".Range(start_index,end_index)"),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/lastnperiods")},"LastNPeriods")),Object(b.b)("td",null,".LastNPeriods(n)"),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/get")},"Get")),Object(b.b)("td",null,".Get(period_index)"),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/foreach")},"ForEach")),Object(b.b)("td",null,"ForEach(Array,Iterator)"),Object(b.b)("td",null,"Iterator function")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/findbyid")},"findByID")),Object(b.b)("td",null,'findByID("ID match string")'),Object(b.b)("td",null,"Tagging/Grouping function")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/findbytitle")},"findByTitle")),Object(b.b)("td",null,'findByTitle("Title match string")'),Object(b.b)("td",null,"Tagging/Grouping function")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/getcurrentrange")},"GETCURRENTRANGE")),Object(b.b)("td",null,"DS.(SERIES).GETCURRENTRANGE()"),Object(b.b)("td",null,"Current range based on period selection")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/getrowvalue")},"GETROWVALUE")),Object(b.b)("td",null,"DS.(SERIES).GETROWVALUE(source_key)"),Object(b.b)("td",null,"Value of source key row")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/thisid")},"THIS_ID")),Object(b.b)("td",null,"DS.(SERIES).THIS_ID"),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/thissourcekey")},"THIS_SOURCE_KEY")),Object(b.b)("td",null,"DS.(SERIES).THIS_SOURCE_KEY"),Object(b.b)("td",null,"Returns the value of the row with node id as source key")))),Object(b.b)("h2",{id:"static-identifiers-and-other-formats"},"Static Identifiers And Other Formats"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,Object(b.b)("strong",null,"CONSTANTS")),Object(b.b)("th",null,Object(b.b)("strong",null,"EXPLANATION")))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/this")},"THIS")),Object(b.b)("td",null,"Current Node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/me")},"ME")),Object(b.b)("td",null,"Current Node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/current_series")},"CURRENT_SERIES")),Object(b.b)("td",null,"Current series label")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/current_series_id")},"CURRENT_SERIES_ID"," ")),Object(b.b)("td",null,"Current series id")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/current_period_index")},"CURRENT_PERIOD_INDEX")),Object(b.b)("td",null,"Current period index")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/current_node_value")},"CURRENT_NODE_VALUE"," ")),Object(b.b)("td",null,"Current node previous period values")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/sim_from_to_index")},"SIM_FROM_INDEX")),Object(b.b)("td",null,"Sim From period index")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/sim_from_to_index")},"SIM_TO_INDEX")),Object(b.b)("td",null,"Sim To period index")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].PARENT")),Object(b.b)("td",null,"Parent Node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].CHILDREN")),Object(b.b)("td",null,"Node children")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].act")),Object(b.b)("td",null,"Simulated Series of the node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].tgt"," ")),Object(b.b)("td",null,"Comparison Series of the node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].base"," ")),Object(b.b)("td",null,"Baseline Series of the node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].ALL_PERIODS")),Object(b.b)("td",null,"Returns all Period values")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].SIM_PERIODS")),Object(b.b)("td",null,"Returns simulation period values")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].act.ALL_PERIODS")),Object(b.b)("td",null,"Returns all period values of Simulated Series,")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].tgt.ALL_PERIODS"," ")),Object(b.b)("td",null,"Returns all period values of Comparison Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].base.ALL_PERIODS")),Object(b.b)("td",null,"Returns all period values of Baseline Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].act.SIM_PERIODS"," ")),Object(b.b)("td",null,"Returns simulation period values of Simulated Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].tgt.SIM_PERIODS"," ")),Object(b.b)("td",null,"Returns simulation period values of Comparison Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].base.SIM_PERIODS")),Object(b.b)("td",null,"Returns simulation period values of Baseline Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].Range(start_index,end_index)")),Object(b.b)("td",null,"Returns selected range values")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].act.Range(start_index,end_index)")),Object(b.b)("td",null,"Returns selected range values of Simulated Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].base.Range(start_index,end_index)")),Object(b.b)("td",null,"Returns selected range values of Baseline Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].tgt.Range(start_index,end_index)")),Object(b.b)("td",null,"Returns selected range values of Comparison Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].Get(period_index)"," ")),Object(b.b)("td",null,"Returns selected period value")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].act.Get(period_index)")),Object(b.b)("td",null,"Returns selected period value of Simulated Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].base.Get(period_index)"," ")),Object(b.b)("td",null,"Returns selected period value of Baseline Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].tgt.Get(period_index)")),Object(b.b)("td",null,"Returns selected period value of Comparison Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].LastNPeriods(n)"," ")),Object(b.b)("td",null,"Returns selected range values")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].act.LastNPeriods(n)"," ")),Object(b.b)("td",null,"Returns selected range values of Simulated Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].base.LastNPeriods(n)"," ")),Object(b.b)("td",null,"Returns selected range values of Baseline Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].tgt.LastNPeriods(n)"," ")),Object(b.b)("td",null,"Returns selected range values of Comparison Series")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].TOTAL"," ")),Object(b.b)("td",null,"Returns the all period aggregated value of node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].PTD"," ")),Object(b.b)("td",null,"Returns the period to date aggregated value of node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].SEL"," ")),Object(b.b)("td",null,"Returns the simulation periods aggregated value of node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].ID"," ")),Object(b.b)("td",null,"Returns node id")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].VISIBLE_CHILDREN"," ")),Object(b.b)("td",null,"Returns all visible children of a node")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("a",{href:Object(c.a)("references/formulas/node-properties")},"[NODE].HIDDEN_CHILDREN"," ")),Object(b.b)("td",null,"Returns all hidden children of a node")))),Object(b.b)("h2",{id:"other-operators"},"Other Operators"),Object(b.b)("div",{style:{textAlign:"justify"},className:"table"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"OPERATORS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"()"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Parenthesis")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+, -"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plus,minus(-1) sign")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",", /"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multiplication, Division")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+, -"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Addition, Subtraction")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"==, !="),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Equal to, Not equal to")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),">, >="),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Greater than, Greater than or equal to")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"<, <="),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Less than, Less than or equal to"))))))}o.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}));var n=r(0),l=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var O=l.a.createContext({}),s=function(e){var t=l.a.useContext(O),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=s(e.components);return l.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,O=u(e,["components","mdxType","originalType","parentName"]),o=s(r),d=n,i=o["".concat(c,".").concat(d)]||o[d]||j[d]||b;return r?l.a.createElement(i,a(a({ref:t},O),{},{components:r})):l.a.createElement(i,a({ref:t},O))}));function i(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,c=new Array(b);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var O=2;O<b;O++)c[O]=r[O];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},188:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return c}));var n=r(22),l=r(189);function b(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var b=void 0===n?{}:n,c=b.forcePrependBaseUrl,a=void 0!==c&&c,u=b.absolute,O=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(l.b)(r))return r;if(a)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return O?e+s:s}(b,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},189:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return l}))}}]);