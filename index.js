let LowerCase = document.querySelector(".Lower");
let UpperCase = document.querySelector(".Upper");
let PascalCase = document.querySelector(".Pascal");
let CamelCase = document.querySelector(".Camel");
let SnakeCase = document.querySelector(".Snake");
let KebabCase = document.querySelector(".Kebab");
let TrimCase = document.querySelector(".Trim");

let input = document.querySelector(".input");
let logo = document.querySelector(".logo");

const Camel = () => {
  let value = input.value;
  let splited = value.split(" ");

  let camelCaseString =
    splited[0].charAt(0).toLowerCase() + splited[0].slice(1);

  for (let i = 1; i < splited.length; i++) {
    let modifiedString =
      splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
    camelCaseString += modifiedString;
  }
  return camelCaseString;
};

const Pascal = () => {
  let value = input.value;
  let splited = value.split(" ");

  let pascalCaseString = "";

  for (let i = 0; i < splited.length; i++) {
    let modifiedString =
      splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
    pascalCaseString += modifiedString;
  }
  return pascalCaseString;
};

const updateTextTransformations = () => {
  let value = input.value.trim();

  UpperCase.textContent = value.toUpperCase();
  LowerCase.textContent = value.toLowerCase();
  SnakeCase.textContent = value.replaceAll(/\s+/g, "_");
  KebabCase.textContent = value.replaceAll(/\s+/g, "-");
  TrimCase.textContent = value.replaceAll(" ", "");
  CamelCase.textContent = Camel();
  PascalCase.textContent = Pascal();
};

window.addEventListener("DOMContentLoaded", updateTextTransformations);
input.addEventListener("input", updateTextTransformations);

logo.addEventListener("click", () => {
  document.location.href =
    "https://github.com/unknown-dev2397/String-Transformer";
});
