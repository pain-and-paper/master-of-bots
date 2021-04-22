const handleSuccess = (result) => {
  const compiled = `jump 2 lessThan a b
jump 3 always true true
print 'a is lower than b'
print 'or not'`;
  document.querySelector("#to-source").innerHTML = compiled;
};

const handleError = (error) => {
  console.log(`An error occured : ${error.message}`);
};

const requestApi = (source) => {
  console.log(source);
  return fetch("myMindustryCompilerApi", { method: "POST", body: source });
};

const runHandler = () => {
  const sourceCode = document.querySelector("#from-source").value.trim();
  requestApi(sourceCode).then(handleSuccess).catch(handleError);
};

const loadExample = () => {
  const example = `if a < b
  print 'a is lower than b'

print 'or not'`;

  document.querySelector("#from-source").innerHTML = example;
};
