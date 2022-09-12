const objUsers = [
  {
    id: '1',
    username: 'user1',
    password: 'apple',
    email: 'user1@gnail.com',
  },
  {
    id: '2',
    username: 'markus200',
    password: 'easygoing',
    email: 'markus200@gnail.com',
  },
  {
    id: '3',
    username: 'cloudkicker',
    password: 'password',
    email: 'cloudkicker@gnail.com',
  },
  {
    id: '4',
    username: 'max',
    password: 'espresso24',
    email: 'espresso24@gnail.com',
  },
];

function validateUser() {
  const userinput = document.getElementById('username-input').value;
  const passwordinput = document.getElementById('password-input').value;

  for (let i = 0; i < objUsers.length; i++) {
    if (
      userinput == objUsers[i].username &&
      passwordinput == objUsers[i].password
    ) {
      window.open('userpage.html');
      return;
    } else {
      alert('Wrong username and password combination...');
      end;
    }
  }
}

function sendPassword() {
  const emailInput = document.getElementById('email-input').value;
  for (let i = 0; i < objUsers.length; i++) {
    if (emailInput == objUsers[i].email) {
      alert('We have successfully sent you the password to your email!');
      return;
    } else {
      alert('The email does not exist in our database!');
      end;
    }
  }
}

function LogOut() {
  window.location.href = 'index.html';
}
