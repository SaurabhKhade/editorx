obj = {
  language: 'xyz',
  logo: 'static/xyz.png',
  placeholder: 'blah blah',
  code: 'xyz.print("hello")',
}

delete obj['code'];

console.log(obj);