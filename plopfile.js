module.exports = plop => {
  plop.setGenerator("component", {
    description: "Create a component",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your component name?"
      }
    ],
    actions: [
      //structure component
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        // Handlebars template used to generate content of new file
        templateFile: "plop-templates/component/Component.js.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}Styled.js",
        templateFile: "plop-templates/component/ComponentStyle.js.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/component/indexOfComponent.js.hbs"
      },
      // end structure component

      // import and export component in index folder
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/components/index.js",
        templateFile: "plop-templates/component/injectable-index.js.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
      // end import and export component in index folder
    ]
  });

  plop.setGenerator("container", {
    description: "Create a container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name?"
      }
    ],
    actions: [
      //structure component
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/container/Container.js.hbs"
      },
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/{{pascalCase name}}Styled.js",
        templateFile: "plop-templates/container/ContainerStyle.js.hbs"
      },
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/component/indexOfComponent.js.hbs"
      },
      // end structure component

      // import and export component in index folder
      {
        type: "add",
        path: "src/containers/index.js",
        templateFile: "plop-templates/component/injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/containers/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`
      },
      {
        type: "append",
        path: "src/containers/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      },
      // end import and export component in index folder

      {
        type: "add",
        path: "src/routes.js",
        templateFile: "plop-templates/routes.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/routes.js",
        pattern: `/* PLOP_ROUTE_IMPORT */`,
        template: `\t{{pascalCase name}},`
      },
      {
        type: "append",
        path: "src/routes.js",
        pattern: `/* PLOP_INJECT_ROUTE */`,
        template: `\t\t\t\t\t<Route exact path="/{{name}}" component={ {{pascalCase name}} } />`
      }
    ]
  });

  plop.setGenerator("redux", {
    description: "Create a redux",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your redux name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/store/ducks/{{pascalCase name}}.js",
        templateFile: "plop-templates/ducks/Duck.js.hbs"
      },
      {
        type: "append",
        path: "src/store/index.js",
        pattern: `/* PLOP_DUCKS_IMPORT */`,
        template: `import {{pascalCase name}} from "./ducks/{{pascalCase name}}";`
      },
      {
        type: "append",
        path: "src/store/index.js",
        pattern: `/* PLOP_COMBINE_IMPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  });
};
