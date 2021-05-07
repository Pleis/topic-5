function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function formatName2(user2) {
  return user2.firstName + ' ' + user2.lastName;
}

const user2 = {
  firstName: 'juan',
  lastName: 'Place'
};

const element2 = (
  <h1>
    Hello, {formatName2(user2)}!
  </h1>
);

const go = document.getElementById("go");
go.addEventListener("click", function() {
     
  var selection = document.getElementById("mov").value;

if (selection === 'ADD') {
  ReactDOM.render(
  element,
  document.getElementById('root')
);
  } else {
    ReactDOM.render(
      element2,
      document.getElementById('root')
    );
  }

  }
)
