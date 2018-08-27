// 30 minutes max
//1
let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

for (each in students) {
    var results = ""
    for (x in students[each]) {
        results += x[0].toUpperCase() + x.slice(1) + ": " + students[each][x] + ", "
    }

    console.log(results.slice(0, results.length - 2))
}


//2
let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

var output = ""
for (each in users) {
    output += each.toUpperCase() + "\n"
    var sum = 0
    for (x in users[each]) {
        output += ++sum + " - "
        var name = ""
        nameLen = 0
        for (y in users[each][x]) {
            nameLen += users[each][x][y].length
            name = users[each][x][y].toUpperCase() + ", " + name
        }
        name = name.slice(0, name.length - 2)
        output += name + " - " + nameLen + "\n"
    }
}

console.log(output.slice(0, output.length - 1))