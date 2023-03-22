// import { pathCase } from "path-case";
// console.log(pathCase);
// textarea the input and output
const input = document.getElementById("hexinput");
const output = document.getElementById("hexoutput");
// the first buttons section
const camelCaseBtn = document.querySelector(`.camelCase`);
const pascalCaseBtn = document.querySelector(`.PascalCase`);
const snake_caseBtn = document.querySelector(`.snake_case`);
const kebab_caseBtn = document.querySelector(`.kebab-case`);
const cONSTANT_CASEBtn = document.querySelector(`.CONSTANT_CASE`);
const dot_caseBtn = document.querySelector(`.dot-case`);
const path_caseBtn = document.querySelector(`.path_case`);
const lower_caseBtn = document.querySelector(`.lower_case`);
const sentence_caseBtn = document.querySelector(`.sentence_case`);
const title_CaseBtn = document.querySelector(`.title_Case`);

//////////////////////////////////////////////////////////////

console.log(_.camelCase(``));

camelCaseBtn.onclick = () => {
  output.value = _.camelCase(noCase(input.value)) ;
};
pascalCaseBtn.onclick = () => {
  output.value = _.camelCase(noCase(input.value))
    .split(``)
    .map((e, i) => (i == 0 ? e.toUpperCase() : e))
    .join(``);
};

snake_caseBtn.onclick = () => {
  output.value = _.snakeCase(noCase(input.value));
};

kebab_caseBtn.onclick = () => {
  output.value = _.kebabCase(noCase(input.value));
};
cONSTANT_CASEBtn.onclick = () => {
  output.value = noCase(input.value).split(` `).join(`_`).toUpperCase();
};
dot_caseBtn.onclick = () => {
  output.value = noCase(input.value).split(` `).join(`.`);
};

path_caseBtn.onclick = () => {
  output.value = noCase(input.value).split(` `).join(`/`);
};

lower_caseBtn.onclick = () => {
  output.value = noCase(input.value);
};

sentence_caseBtn.onclick = () => {
  output.value = noCase(input.value)
    .split(``)
    .map((e, i) => (i == 0 ? e.toUpperCase() : e))
    .join(``);
};

title_CaseBtn.onclick = () => {
  output.value = _.startCase(_.toLower(noCase(input.value)));
};

/////////////////////////////////////////////////////////////////

const punkUpperBtn = document.querySelector(`.punkUpper`);
const punkLowerBtn = document.querySelector(`.punkLower`);
const punkSentenceBtn = document.querySelector(`.punkSentence`);
const punkTitleBtn = document.querySelector(`.punkTitle`);
punkUpperBtn.onclick = () => {
  output.value = input.value.toUpperCase();
};
punkLowerBtn.onclick = () => {
  output.value = input.value.toLowerCase();
};
punkSentenceBtn.onclick = () => {
  output.value = input.value
    .split(``)
    .map((e, i, arr) => (i == 0 || arr[i - 1] == `.` ? e.toUpperCase() : e)).join(``);
};
punkTitleBtn.onclick = () => {
    output.value = input.value
      .split(``)
      .map((e, i, arr) => (i == 0  ? e.toUpperCase() : e)).join(``);
  };
