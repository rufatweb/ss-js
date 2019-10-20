

var pageList = [];
var currentPage = 1;
var numberPerPage = 4;
var numberOfPages = 1;

window.addEventListener('load', load);

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function load(){
    numberOfPages = getNumberOfPages();
    loadList()
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}


function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}
function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
}

function drawList() {
    document.getElementById("list").innerHTML = "";

    for (r = 0; r < pageList.length; r++) {
        document.getElementById("list").innerHTML += `<li>${pageList[r].first_name} ${pageList[r].last_name} </br> ${pageList[r].email}</li> </br></br>`;

    }
}

var list = [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@smoothstack.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@smoothstack.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@smoothstack.com"
    },
    {
      "id": 4,
      "first_name": "James",
      "last_name": "Thomas",
      "email": "james@smoothstack.com"
    },
    {
      "id": 5,
      "first_name": "Steve",
      "last_name": "Tyler",
      "email": "tyler@smoothstack.com"
    },
    {
      "id": 6,
      "first_name": "Kevin",
      "last_name": "Sims",
      "email": "sims@smoothstack.com"
    },
    {
      "id": 7,
      "first_name": "Daniel",
      "last_name": "James",
      "email": "james@smoothstack.com"
    },
    {
      "id": 8,
      "first_name": "Karen",
      "last_name": "Stevens",
      "email": "stevens@smoothstack.com"
    },
    {
      "id": 9,
      "first_name": "John",
      "last_name": "Thomas",
      "email": "thomas@smoothstack.com"
    },
    {
      "id": 10,
      "first_name": "Meredith",
      "last_name": "Adams",
      "email": "adams@smoothstack.com"
    }
  ];
