// eslint-disable-next-line import/no-anonymous-default-export
module.exports = function (plop) {
  plop.setGenerator("controller", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}.tsx",
        templateFile: "../templates/index.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/stories/{{pascalCase name}}.stories.tsx",
        templateFile: "../templates/stories.tsx.hbs"
      },
      {
        type: "add",
        path: "../__test__/{{pascalCase name}}.test.tsx",
        templateFile: "../templates/test.tsx.hbs"
      }
    ]
  });
};
