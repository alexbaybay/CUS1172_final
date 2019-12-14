var express = require('express');
var app = express();

var data = {
  Courses: [
    {
      course: "CUS 1102",
      title: "Software Application",
      cr: "3",
      crn: "12943",
      seats: "0",
      type: "lecture",
      days: "tuesday , friday",
      instructor: "Felicetti, Robert Alvaro"
    },
    {
      course: "CUS 1102",
      title: "Software Application",
      cr: "3",
      crn: "10246",
      seats: "5",
      type: "lecture",
      days: "Tuesday , Friday",
      instructor: "Lieberman, Barry"
    },
    {
      course: "CUS 1102",
      title: "Software Application",
      cr: "3",
      crn: "10257",
      seats: "17",
      type: "lecture",
      days: "Tuesday , Friday",
      instructor: "Lieberman, Barry"
    },
    {
      course: "CUS 1115",
      title: "Computer Programming Fundamentals I",
      cr: "3",
      crn: "11501",
      seats: "0",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "DeBello, Joan"
    },
    {
      course: "CUS 1115",
      title: "Computer Programming Fundamentals I",
      cr: "3",
      crn: "12558",
      seats: "5",
      type: "Lecture, Lab",
      days: "Wednesday",
      instructor: "Fluture, Simina"
    },
    {
      course: "CUS 1116",
      title: "Computer Programming Fundamentals II",
      cr: "3",
      crn: "12329",
      seats: "9",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "MacKeller, Bonnie"
    },
    {
      course: "CUS 1116",
      title: "Computer Programming Fundamentals II",
      cr: "3",
      crn: "11505",
      seats: "0",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "DeBello, Joan"
    },
    {
      course: "CUS 1116",
      title: "Computer Programming Fundamentals II",
      cr: "3",
      crn: "11514",
      seats: "13",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "Tsai, Roger"
    },
    {
      course: "CUS 1126",
      title: "Introduction to Data Structures",
      cr: "3",
      crn: "11737",
      seats: "8",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "Yadav, Nikhil"
    },
    {
      course: "CUS 1126",
      title: "Introduction to Data Structures",
      cr: "3",
      crn: "12946",
      seats: "17",
      type: "Lecture, Lab",
      days: "Tuesday , Friday",
      instructor: "To Be Announced"
    },
    {
      course: "CUS 1150",
      title: "Systems Programming in Linux",
      cr: "3",
      crn: "15476",
      seats: "7",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "MacKeller, Bonnie"
    },
    {
      course: "CUS 1151",
      title: "Advance Data Structures",
      cr: "3",
      crn: "11208",
      seats: "0",
      type: "Hybrid",
      days: "Tuesday",
      instructor: "Keshtkar, Fazel"
    },
    {
      course: "CUS 1156",
      title: "Software Design Methods",
      cr: "3",
      crn: "12560",
      seats: "0",
      type: "Hybrid",
      days: "Thursday",
      instructor: "Yadav, Nikhil"
    },
    {
      course: "CUS 1156",
      title: "Software Design Methods",
      cr: "3",
      crn: "15475",
      seats: "19",
      type: "Lecture",
      days: "Wednesday",
      instructor: "MacKeller, Bonnie"
    },
    {
      course: "CUS 1163",
      title: "Operating Systems",
      cr: "3",
      crn: "12561",
      seats: "9",
      type: "Lecture",
      days: "Monday , Thursday",
      instructor: "Smith-Thompson, Anne"
    },
    {
      course: "CUS 1163",
      title: "Operating Systems",
      cr: "3",
      crn: "12139",
      seats: "4",
      type: "Lecture",
      days: "Wednesday",
      instructor: "To Be Announced"
    },
    {
      course: "CUS 1165",
      title: "Database Management Systems",
      cr: "3",
      crn: "11738",
      seats: "0",
      type: "Lecture",
      days: "Monday , Thursday",
      instructor: "Scorce, Richard"
    },
    {
      course: "CUS 1165",
      title: "Database Management Systems",
      cr: "3",
      crn: "15468",
      seats: "0",
      type: "Hybrid",
      days: "Thursday",
      instructor: "Scorce, Richard"
    },
    {
      course: "CUS 1165",
      title: "Database Management Systems",
      cr: "3",
      crn: "12328",
      seats: "13",
      type: "Lecture",
      days: "Wednesday",
      instructor: "Bukhari, Syed Ahmad Chan"
    },
    {
      course: "CUS 1166",
      title: "Software Engineering",
      cr: "3",
      crn: "11516",
      seats: "1",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "To Be Announced"
    },
    {
      course: "CUS 1166",
      title: "Software Engineering",
      cr: "3",
      crn: "12948",
      seats: "17",
      type: "Lecture, Lab",
      days: "Wednesday",
      instructor: "To Be Announced"
    },
    {
      course: "CUS 1167",
      title: "System Analysis",
      cr: "3",
      crn: "12056",
      seats: "0",
      type: "Hybrid",
      days: "Monday",
      instructor: "Scorce, Richard"
    },
    {
      course: "CUS 1172",
      title: "Web Page Graphics",
      cr: "3",
      crn: "15412",
      seats: "0",
      type: "Hybrid",
      days: "Thursday",
      instructor: "Christoforou, Christoforos"
    },
    {
      course: "CUS 1174",
      title: "Artificial Intelligence",
      cr: "3",
      crn: "12324",
      seats: "16",
      type: "Hybrid",
      days: "Tuesday",
      instructor: "Sklar, Ronald"
    },
    {
      course: "CUS 1185",
      title: "Data Security & Cryptography",
      cr: "3",
      crn: "11502",
      seats: "0",
      type: "Lecture",
      days: "Monday , Thursday",
      instructor: "Troja, Erald"
    },
    {
      course: "CUS 1186",
      title: "Theory of Computation",
      cr: "3",
      crn: "13802",
      seats: "12",
      type: "Lecture",
      days: "Tuesday",
      instructor: "Fechter, Ronald"
    },
    {
      course: "CUS 1188",
      title: "Analysis of Algorithms",
      cr: "3",
      crn: "12562",
      seats: "18",
      type: "Lecture",
      days: "Tuesday",
      instructor: "Christoforou, Christoforos"
    },
    {
      course: "CSS 1005",
      title: "Fundamentals of Cyber Security",
      cr: "3",
      crn: "11635",
      seats: "6",
      type: "Lecture, Lab",
      days: "Wednesday",
      instructor: "Otero, Juan"
    },
    {
      course: "CSS 1005",
      title: "Fundamentals of Cyber Security",
      cr: "3",
      crn: "13323",
      seats: "0",
      type: "Hybrid",
      days: "Friday",
      instructor: "Troja, Erald"
    },
    {
      course: "CSS 1006",
      title: "Management of Information Security",
      cr: "3",
      crn: "13913",
      seats: "0",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "Dick, Geoffrey"
    },
    {
      course: "CSS 1008",
      title: "Healthcare Information Security",
      cr: "3",
      crn: "13858",
      seats: "15",
      type: "Hybrid",
      days: "Wednesday",
      instructor: "Naseem, Sajed"
    },
    {
      course: "CSS 1011",
      title: "Network Security",
      cr: "3",
      crn: "13856",
      seats: "0",
      type: "Hybrid",
      days: "Tuesday",
      instructor: "Schmeelk, Suzanna"
    },
    {
      course: "CSS 1012",
      title: "Network Perimeter Security",
      cr: "3",
      crn: "11500",
      seats: "16",
      type: "Hybrid",
      days: "Monday",
      instructor: "Otero, Juan"
    },
    {
      course: "CSS 1015",
      title: "Wireless Security",
      cr: "3",
      crn: "14986",
      seats: "11",
      type: "Hybrid",
      days: "Monday",
      instructor: "Schmeelk, Suzanna"
    },
    {
      course: "CSS 1018",
      title: "SQL & Cloud Database Security",
      cr: "3",
      crn: "15411",
      seats: "2",
      type: "Lecture, Lab",
      days: "Monday",
      instructor: "Chacko, Anil"
    },
    {
      course: "CSS 1032",
      title: "Cyber Threats and Detection",
      cr: "3",
      crn: "10959",
      seats: "0",
      type: "Lecture, Lab",
      days: "Monday",
      instructor: "Otero, Juan"
    },
    {
      course: "CSS 1035",
      title: "Secure Software Development",
      cr: "3",
      crn: "14985",
      seats: "0",
      type: "Hybrid",
      days: "Tuesday",
      instructor: "Schmeelk, Suzanna"
    },
    {
      course: "HCI 1002",
      title: "Healthcare Informatics & Data Management",
      cr: "3",
      crn: "15413",
      seats: "14",
      type: "Lecture, Lab",
      days: "Tuesday , Friday",
      instructor: "Bukhari, Syed Ahmad Chan"
    },
    {
      course: "HCI 1015",
      title: "Data Standards and Vocabulary in Healthcare",
      cr: "3",
      crn: "15630",
      seats: "23",
      type: "Lecture",
      days: "Tuesday",
      instructor: "Bukhari, Syed Ahmad Chan"
    },
    {
      course: "HCI 1021",
      title: "Healthcare Database Management Systems",
      cr: "3",
      crn: "11881",
      seats: "4",
      type: "Lecture",
      days: "Wednesday",
      instructor: "Bukhari, Syed Ahmad Chan"
    },
    {
      course: "IT 1011",
      title: "Information Technology for Business",
      cr: "3",
      crn: "13136",
      seats: "19",
      type: "Lecture, Lab",
      days: "Monday , Thursday",
      instructor: "Dick, Geoffrey"
    },
    {
      course: "MTH 1003",
      title: "Intro to College Math I",
      cr: "3",
      crn: "12497",
      seats: "2",
      type: "Lecture",
      days: "Wednesday",
      instructor: "Henry, Maureen"
    },
    {
      course: "MTH 1003",
      title: "Intro to College Math I",
      cr: "3",
      crn: "10037",
      seats: "16",
      type: "Lecture",
      days: "Saturday",
      instructor: "Achtziger, Joseph"
    },
    {
      course: "MTH 1004",
      title: "Intro to College Math II",
      cr: "3",
      crn: "12619",
      seats: "0",
      type: "Lecture",
      days: "Tuesday , Friday",
      instructor: "Mollo-Holmes, Linda"
    },
    {
      course: "MTH 1004",
      title: "Intro to College Math II",
      cr: "3",
      crn: "10901",
      seats: "0",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "Laneri, Peter"
    },
    {
      course: "MTH 1007",
      title: "College Algebra and Trigonometry",
      cr: "3",
      crn: "10033",
      seats: "4",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "Manley, Michael"
    },
    {
      course: "MTH 1007",
      title: "College Algebra and Trigonometry",
      cr: "3",
      crn: "10547",
      seats: "15",
      type: "Lecture",
      days: "Wednesday",
      instructor: "To Be Announced"
    },
    {
      course: "MTH 1008",
      title: "Matrix Methods",
      cr: "3",
      crn: "11517",
      seats: "5",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "Laneri, Peter"
    },
    {
      course: "MTH 1009",
      title: "Calculus I",
      cr: "3",
      crn: "10747",
      seats: "22",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "Vaisfeld, Michael"
    },
    {
      course: "MTH 1009",
      title: "Calculus I",
      cr: "3",
      crn: "14054",
      seats: "1",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "Elmrini, Abdel Aziz"
    },
    {
      course: "MTH 1009",
      title: "Calculus II",
      cr: "3",
      crn: "10031",
      seats: "15",
      type: "Lecture",
      days: "Wednesday",
      instructor: "Servas, Frank"
    },
    {
      course: "MTH 1009",
      title: "Calculus II",
      cr: "3",
      crn: "12950",
      seats: "0",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "Latzman, Gerald"
    },
    {
      course: "MTH 1013",
      title: "Probability And Statistics I",
      cr: "3",
      crn: "15415",
      seats: "22",
      type: "Lecture",
      days: "Tuesday, Friday",
      instructor: "To Be Announced"
    },
    {
      course: "MTH 1013",
      title: "Probability And Statistics I",
      cr: "3",
      crn: "11661",
      seats: "10",
      type: "Hybrid",
      days: "Tuesday",
      instructor: "Servas, Frank"
    },
    {
      course: "MTH 1014",
      title: "Probability And Statistics II",
      cr: "3",
      crn: "11518",
      seats: "0",
      type: "Lecture",
      days: "Monday, Thursday",
      instructor: "Singh, Satyanand"
    },
    {
      course: "MTH 1014",
      title: "Probability And Statistics II",
      cr: "3",
      crn: "11662",
      seats: "0",
      type: "Hybrid",
      days: "Tuesday",
      instructor: "Servas, Frank"
    },
    {
      course: "MTH 1018",
      title: "Differential Equations",
      cr: "3",
      crn: "14987",
      seats: "0",
      type: "Hybrid",
      days: "Wednesday",
      instructor: "Fetcher, Ronald"
    },
    {
      course: "MTH 1021",
      title: "Introduction to Statistics",
      cr: "3",
      crn: "11519",
      seats: "0",
      type: "Lecture",
      days: "Wednesday",
      instructor: "Parmar, Davanjit"
    },
    {
      course: "MTH 1021",
      title: "Introduction to Statistics",
      cr: "3",
      crn: "11711",
      seats: "4",
      type: "Lecture",
      days: "Monday, Thursday",
      instructor: "McCauley, Marist Brothers, R."
    },
    {
      course: "MTH 1022",
      title: "Discrete Mathematics",
      cr: "3",
      crn: "12571",
      seats: "0",
      type: "Lecture",
      days: "Monday, Thursday",
      instructor: "Singh, Satyanand"
    },
    {
      course: "MTH 1031",
      title: "Math for Elementary Teacher II",
      cr: "3",
      crn: "13859",
      seats: "11",
      type: "Lecture",
      days: "Monday, Thursday",
      instructor: "Cerulli, Janet"
    },
    {
      course: "NET 1011",
      title: "Introduction to Networks",
      cr: "3",
      crn: "11882",
      seats: "0",
      type: "Lecture, Lab",
      days: "Wednesday",
      instructor: "Greenidge, Maxine"
    },
    {
      course: "NET 1015",
      title: "Routing & Switching Essentials",
      cr: "3",
      crn: "11711",
      seats: "0",
      type: "Lecture, Lab",
      days: "Monday, Thursday",
      instructor: "McCauley, Marist Brothers, R."
    },
    {
      course: "NET 1061",
      title: "Advanced Network Routing",
      cr: "3",
      crn: "12768",
      seats: "25",
      type: "Lecture, Lab",
      days: "Saturday",
      instructor: "To Be Announced"
    },
  ]
}

//queries the whole api file
app.get('/courses', function(req, res) {
  res.json(data["Courses"])
})

//query by course
app.get('/courses/qcourse/:course', function(req,res) {
  qcourse = req.params['course']
  var filtered_data = data["Courses"].filter(d => d.course.toLowerCase().includes(qcourse))

  res.json(filtered_data)
})

//query by Course title
app.get('/courses/qtitle/:title', function(req,res) {
  qtitle = req.params['title']
  var filtered_data =  data["Courses"].filter(d => d.title.toLowerCase().includes(qtitle))

  res.json(filtered_data)
})

//query by instructor
app.get('/courses/qinstructor/:instructor', function(req, res) {
  qinstructor = req.params['instructor']
  var filtered_data = data["Courses"].filter(d => d.instructor.toLowerCase().includes(qinstructor))

  res.json(filtered_data)
})

//query by class days
app.get('/courses/qdays/:days', function(req, res) {
  qdays = req.params['days']
  var filtered_data = data["Courses"].filter(d => d.days.toLowerCase().includes(qdays))

  res.json(filtered_data)
})

//query by seat availability
app.get('/courses/qseat/:seats', function(req,res) {
  qseat = req.params['seats']
  var filtered_data = data["Courses"].filter(d => d.seats.toLowerCase().includes(qseat))

  res.json(filtered_data)
})

//query by class type
app.get('/courses/qtype/:type', function(req, res) {
  qtype = req.params['type']
  var filtered_data = data["Courses"].filter(d => d.type.toLowerCase().includes(qtype))

  res.json(filtered_data)
})

app.get('/courses/qinstructor/:instructor/qcourse/:course', function(req, res) {
  qinstructor = req.params['instructor']
  qcourse = req.params['course']
  var filtered_data = data["Courses"].filter(d =>
    d.instructor.toLowerCase().includes(qinstructor) &&
    d.course.toLowerCase().includes(qcourse))

  res.json(filtered_data)
})

app.get('/courses/qinstructor/:instructor/qtitle/:title', function(req, res) {
  qinstructor = req.params['instructor']
  qtitle= req.params['title']
  var filtered_data = data["Courses"].filter(d =>
    d.instructor.toLowerCase().includes(qinstructor) &&
    d.title.toLowerCase().includes(qtitle))

  res.json(filtered_data)
})

app.get('/courses/qcourse/:course/qtitle/:title', function(req, res) {
  qcourse = req.params['course']
  qtitle= req.params['title']
  var filtered_data = data["Courses"].filter(d =>
    d.course.toLowerCase().includes(qcourse) &&
    d.title.toLowerCase().includes(qtitle))

  res.json(filtered_data)
})

//starts server
app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})

// var request = new XMLHttpRequest();
// var url = 'http://127.0.0.1:3000/courses'
// request.open('GET', url, true);
//
// request.onload = function() {
//   const data = JSON.parse(request.responseText).Courses;
//   console.log(data);
//
//   document.getElementById("load").innerHTML = table;
//
// }
//
// request.send();
