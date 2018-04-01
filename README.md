# Whats this about?

`/api` -> nestjs-starter
`/core` -> some shared models
`/client` -> angular cli project


# How do you turn this on?

`cd api && npm install && npm run test`


# What changes haven been made?

I've added the paths property to the compilerOptions in order for tsc to understand the path mapping.

```
{
  "compilerOptions": {
    ...
    "baseUrl": "./src",
    "paths": {
      "@core/*": [
        "../../core/*"
      ]
    }

  },
  ...
}

```


After that I've added an import from the core project to the apis source code:

```
// ./api/src/app.controller.ts

import {Controller, Get} from '@nestjs/common';
import {SomeModel} from '@core/some-model';

console.log(SomeModel);

@Controller()
export class AppController {
    @Get()
    root(): string {
        return 'Hello World!';
    }
}

```



My IDE and the build support this without issues. Quite different: Jest. As i learned from an issue in ts-jest - jest is ignoring the paths property since it gets the files fed otherwise.
> ts-jest doesn't pick up or resolve any files. All files are resolved by jest and then passed in to ts-jest for processing. That's why jest needs to know how to resolve modules - the above code does that

via https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-369909761



Therefore i extended the jest configuration in `./api/package.json`. This error occurs on running `npm run test` in `.api/`.

```
    moduleNameMapper: {
        //  -->   Could not locate module @core/some-model (mapped as /home/.../path-issue/core)
        '@core': '<rootDir>/../core/',
        //  -->   ReferenceError: Unknown plugin "transform-es2015-modules-commonjs" specified in "base" at 0, attempted to resolve relative to "/home/..../path-issue/core"
        // '@core\/(.*)': '<rootDir>/../core/$1',
    },
};

```

There is also an angular client in this project - its not required - just another example with working import from core via `paths`.



